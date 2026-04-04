// src/tools/theories.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { HUMOR_THEORIES } from "../data/theories.js";

export function registerTheoryTools(server: McpServer): void {

  server.registerTool(
    "comedy_list_theories",
    {
      title: "List Humor Theories",
      description: `List all psychological and philosophical theories of humor in the knowledge base.

Returns: Array of theory summaries with id, name, era, originators, and core claim.
Use comedy_get_theory to retrieve full detail on any entry.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const list = HUMOR_THEORIES.map(t => ({
        id: t.id,
        name: t.name,
        era: t.era,
        originators: t.originators,
        core_claim: t.core_claim
      }));
      return { content: [{ type: "text", text: JSON.stringify(list, null, 2) }] };
    }
  );

  server.registerTool(
    "comedy_get_theory",
    {
      title: "Get Humor Theory Detail",
      description: `Retrieve full detail on a specific theory of humor.

Args:
  - id (string): Theory ID from comedy_list_theories (e.g. "incongruity", "benign_violation", "superiority", "relief", "incongruity_resolution", "play_frame", "gelotology")

Returns: Full theory entry including explanation, strengths, weaknesses, modern relevance, and examples.`,
      inputSchema: z.object({
        id: z.string().describe("Theory ID (from comedy_list_theories)")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ id }) => {
      const theory = HUMOR_THEORIES.find(t => t.id === id);
      if (!theory) {
        const ids = HUMOR_THEORIES.map(t => t.id).join(", ");
        return {
          content: [{ type: "text", text: `Theory "${id}" not found. Available IDs: ${ids}` }],
          isError: true
        };
      }
      return { content: [{ type: "text", text: JSON.stringify(theory, null, 2) }] };
    }
  );
}
