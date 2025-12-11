FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

FROM base AS builder
COPY package.json pnpm-lock.yaml* bun.lockb* package-lock.json* ./
RUN pnpm install
COPY . .

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}

ARG NEXT_PUBLIC_SSO_URL
ENV NEXT_PUBLIC_SSO_URL=${NEXT_PUBLIC_SSO_URL}

ARG NEXT_PUBLIC_MY_URL
ENV NEXT_PUBLIC_MY_URL=${NEXT_PUBLIC_MY_URL}

ARG NEXT_PUBLIC_CLIENT_ID
ENV NEXT_PUBLIC_CLIENT_ID=${NEXT_PUBLIC_CLIENT_ID}

RUN pnpm build

FROM base AS runner
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]


