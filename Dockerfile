FROM node:22-alpine AS builder
LABEL org.opencontainers.image.source="https://github.com/VibeSmiths/mcp-comedy" \
      org.opencontainers.image.description="MCP server: comedy" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install
COPY src/ ./src/
RUN npm run build

# ─── Runtime image ────────────────────────────────────────────────────────────
FROM node:22-alpine AS runtime

LABEL org.opencontainers.image.source="https://github.com/VibeSmiths/mcp-comedy"
LABEL org.opencontainers.image.description="MCP server for comedy writing tools"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

ENV TRANSPORT=stdio

CMD ["node", "dist/index.js"]
