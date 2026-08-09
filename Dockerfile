# Building the app
FROM ghcr.io/pnpm/pnpm:11 as builder

RUN pnpm runtime set node 22 -g
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# Serving the app
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]