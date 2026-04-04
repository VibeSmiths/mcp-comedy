// src/tools/comedians.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { COMEDIANS } from "../data/comedians.js";

export function registerComedianTools(server: McpServer): void {

  server.registerTool(
    "comedy_list_comedians",
    {
      title: "List Notable Comedians",
      description: `List notable comedians in the knowledge base with style and era summaries.

Returns: Array of comedian summaries with id, name, nationality, era, and style tags.
Use comedy_get_comedian for full psychological and craft analysis.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const list = COMEDIANS.map(c => ({
        id: c.id,
        name: c.name,
        born: c.born,
        died: c.died ?? "living",
        nationality: c.nationality,
        era: c.era,
        style: c.style
      }));
      return { content: [{ type: "text", text: JSON.stringify(list, null, 2) }] };
    }
  );

  server.registerTool(
    "comedy_get_comedian",
    {
      title: "Get Comedian Profile",
      description: `Retrieve full profile of a notable comedian including psychological analysis, signature techniques, themes, and key works.

Args:
  - id (string): Comedian ID from comedy_list_comedians (e.g. "pryor", "carlin", "chaplin", "burnham", "gadsby", "lee", "chappelle", "rivers", "hicks")

Returns: Full comedian entry including psychological profile, techniques, influence, and key works.`,
      inputSchema: z.object({
        id: z.string().describe("Comedian ID (from comedy_list_comedians)")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ id }) => {
      const comedian = COMEDIANS.find(c => c.id === id);
      if (!comedian) {
        const ids = COMEDIANS.map(c => c.id).join(", ");
        return {
          content: [{ type: "text", text: `Comedian "${id}" not found. Available IDs: ${ids}` }],
          isError: true
        };
      }
      return { content: [{ type: "text", text: JSON.stringify(comedian, null, 2) }] };
    }
  );

  server.registerTool(
    "comedy_search_comedians",
    {
      title: "Search Comedians by Style or Theme",
      description: `Find comedians matching a style tag or thematic keyword.

Args:
  - query (string): Style keyword (e.g. "absurdist", "political", "confessional", "physical", "dark", "meta") or theme keyword (e.g. "race", "death", "anxiety", "language")

Returns: Matching comedians with style, themes, and a brief profile excerpt.`,
      inputSchema: z.object({
        query: z.string().min(2).describe("Style or theme keyword to search")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const matches = COMEDIANS.filter(c =>
        c.style.some(s => s.toLowerCase().includes(q)) ||
        c.signature_themes.some(t => t.toLowerCase().includes(q)) ||
        c.psychological_profile.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        return {
          content: [{ type: "text", text: `No comedians found matching "${query}". Try: absurdist, political, confessional, physical, dark, race, death, language, meta, character.` }]
        };
      }

      const results = matches.map(c => ({
        id: c.id,
        name: c.name,
        era: c.era,
        style: c.style,
        signature_themes: c.signature_themes,
        influence_excerpt: c.influence.slice(0, 200)
      }));

      return { content: [{ type: "text", text: JSON.stringify(results, null, 2) }] };
    }
  );
}
