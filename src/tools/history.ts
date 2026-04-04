// src/tools/history.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { COMEDY_HISTORY } from "../data/history.js";

export function registerHistoryTools(server: McpServer): void {

  server.registerTool(
    "comedy_list_eras",
    {
      title: "List Comedy History Eras",
      description: `List all historical periods of comedy in the knowledge base, from Ancient Greece to the present.

Returns: Array of era summaries with id, period, name, geography, and comedy forms.
Use comedy_get_era for full detail.`,
      inputSchema: z.object({}),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async () => {
      const list = COMEDY_HISTORY.map(e => ({
        id: e.id,
        period: e.period,
        name: e.name,
        geography: e.geography,
        comedy_forms: e.comedy_forms
      }));
      return { content: [{ type: "text", text: JSON.stringify(list, null, 2) }] };
    }
  );

  server.registerTool(
    "comedy_get_era",
    {
      title: "Get Comedy Era Detail",
      description: `Retrieve full detail on a historical period of comedy.

Args:
  - id (string): Era ID from comedy_list_eras (e.g. "ancient_greece", "vaudeville_music_hall", "stand_up_golden_age", "alternative_comedy")

Returns: Full era entry including key developments, notable figures, social context, and legacy.`,
      inputSchema: z.object({
        id: z.string().describe("Era ID (from comedy_list_eras)")
      }),
      annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
    },
    async ({ id }) => {
      const era = COMEDY_HISTORY.find(e => e.id === id);
      if (!era) {
        const ids = COMEDY_HISTORY.map(e => e.id).join(", ");
        return {
          content: [{ type: "text", text: `Era "${id}" not found. Available IDs: ${ids}` }],
          isError: true
        };
      }
      return { content: [{ type: "text", text: JSON.stringify(era, null, 2) }] };
    }
  );
}
