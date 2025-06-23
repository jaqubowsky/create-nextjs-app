# Base image with Node.js
FROM alpine:3.22 AS base

# Install Node.js and essential dependencies
RUN apk add --no-cache nodejs npm libc6-compat

# Install dependencies
FROM base AS deps
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./
RUN npm ci

# Build stage
FROM base AS builder
WORKDIR /app

# Copy deps and app source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy client-side env config
COPY env.production.client .env.production

# Set build environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js app
RUN npm run build

# Final stage: minimal runner
FROM alpine:3.22 AS runner

# Install only Node.js
RUN apk add --no-cache nodejs

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

# Set environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy built app and static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Use non-root user
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
