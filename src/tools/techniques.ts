// src/tools/techniques.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { COMEDY_TECHNIQUES } from "../data/techniques.js";

export function registerTechniqueTools(server: McpServer): void {

  server.registerTool(
    "comedy_list_techniques",
    {
      title: "List Comedy Techniques",
      description: `List all comedy writing and performance techniques in the knowledge base.

Returns: Array of technique summaries with id, name, category, and brief description.
Categories: Structure, Delivery, Content, Identity.
Use comedy_get_technique for full detail including psychological mechanics.`,
      inputSchema: z.object({
        category: z.enum(["Structure", "Delivery", "Content", "Identity", "all"]).default("all")
          .describe("Filter by category (default: all)")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ category }) => {
      const filtered = category === "all"
        ? COMEDY_TECHNIQUES
        : COMEDY_TECHNIQUES.filter(t => t.category === category);

      const list = filtered.map(t => ({
        id: t.id,
        name: t.name,
        category: t.category,
        description: t.description.slice(0, 150) + "..."
      }));

      return { content: [{ type: "text", text: JSON.stringify(list, null, 2) }] };
    }
  );

  server.registerTool(
    "comedy_get_technique",
    {
      title: "Get Comedy Technique Detail",
      description: `Retrieve full detail on a comedy writing or performance technique.

Args:
  - id (string): Technique ID from comedy_list_techniques (e.g. "rule_of_three", "callbacks", "misdirection", "escalation", "deadpan", "act_out", "timing", "self_deprecation", "absurdism", "persona", "taboo_violation")

Returns: Full technique entry including psychological mechanics, examples, common mistakes, and best use cases.`,
      inputSchema: z.object({
        id: z.string().describe("Technique ID (from comedy_list_techniques)")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ id }) => {
      const technique = COMEDY_TECHNIQUES.find(t => t.id === id);
      if (!technique) {
        const ids = COMEDY_TECHNIQUES.map(t => t.id).join(", ");
        return {
          content: [{ type: "text", text: `Technique "${id}" not found. Available IDs: ${ids}` }],
          isError: true
        };
      }
      return { content: [{ type: "text", text: JSON.stringify(technique, null, 2) }] };
    }
  );
}
