FROM ghcr.io/pnpm/pnpm:11 AS builder

RUN pnpm runtime set node 22 -g
ENV CI=true

# Copying the project into the dockerfile
WORKDIR /app
COPY . .

# Removing extra dirs
RUN rm -rf .next/ .source/ node_modules/ out/

# Building the app
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM nginx:alpine

# Copying the build to the html path
COPY --from=builder /app/out /usr/share/nginx/html

# Serving the app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
