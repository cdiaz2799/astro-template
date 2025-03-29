FROM node:lts-alpine AS base
WORKDIR /app

COPY package.json yarn.lock ./

FROM base AS prod-deps
RUN yarn install --frozen-lockfile


FROM base AS build-deps
RUN yarn install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN yarn run build

FROM base AS runner

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321
CMD node ./dist/server/entry.mjs
