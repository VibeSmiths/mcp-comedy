// src/index.ts — Comedy MCP Server
// History and psychology of humor

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import express from "express";

import { registerTheoryTools } from "./tools/theories.js";
import { registerHistoryTools } from "./tools/history.js";
import { registerComedianTools } from "./tools/comedians.js";
import { registerTechniqueTools } from "./tools/techniques.js";

const server = new McpServer({
  name: "comedy-mcp",
  version: "1.0.0"
});

registerTheoryTools(server);
registerHistoryTools(server);
registerComedianTools(server);
registerTechniqueTools(server);

// ─── Transport: stdio ─────────────────────────────────────────────────────────
async function runStdio(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Comedy MCP Server running on stdio");
}

// ─── Transport: HTTP ──────────────────────────────────────────────────────────
async function runHTTP(): Promise<void> {
  const app = express();
  app.use(express.json());

  app.post("/mcp", async (req, res) => {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true
    });
    res.on("close", () => transport.close());
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  });

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", server: "comedy-mcp", version: "1.0.0" });
  });

  const port = parseInt(process.env.PORT ?? "3000");
  app.listen(port, () => {
    console.error(`Comedy MCP Server running on http://localhost:${port}/mcp`);
  });
}

const transport = process.env.TRANSPORT ?? "stdio";
if (transport === "http") {
  runHTTP().catch(error => { console.error("Server error:", error); process.exit(1); });
} else {
  runStdio().catch(error => { console.error("Server error:", error); process.exit(1); });
}
