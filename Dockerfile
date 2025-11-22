ARG node_version=node:25-alpine

#Stage 1
FROM ${node_version} AS builder

WORKDIR /app

COPY ./package*.json .

RUN npm install

COPY . .

RUN npm run build

#Final stage
FROM ${node_version} AS runner

WORKDIR /app

COPY ./package*.json .

RUN npm install --only=production

COPY --from=builder /app/build ./build

EXPOSE 5000

ENTRYPOINT [ "node" ]

CMD [ "build/src/server.js"]