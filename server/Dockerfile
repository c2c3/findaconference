FROM node:21-alpine
# FROM oven/bun

WORKDIR /usr/src/app

ARG GITHUB_CLIENT_ID
ARG GITHUB_CLIENT_SECRET
ARG AUTH_SECRET
ARG NEXTAUTH_URL
ARG MONGO_URL

COPY package*.json bun.lockb ./
RUN npm ci
# RUN bun install
COPY . .

ENV NODE_ENV production
# These are needed because of an issue in SvelteKit bun adapter
# https://github.com/gornostay25/svelte-adapter-bun/issues/39
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host

ENV GITHUB_CLIENT_ID $GITHUB_CLIENT_ID
ENV GITHUB_CLIENT_SECRET $GITHUB_CLIENT_SECRET
ENV AUTH_SECRET $AUTH_SECRET
ENV NEXTAUTH_URL $NEXTAUTH_URL
ENV ORIGIN https://${NEXTAUTH_URL}
ENV XFF_DEPTH 2
ENV PROTOCOL_HEADER "X-Forwarded-Proto"
ENV HOST_HEADER "X-Forwarded-Host"
ENV SERVERDEV false
ENV MONGO_URL $MONGO_URL

RUN npm run build

CMD [ "node", "./build/index.js" ]