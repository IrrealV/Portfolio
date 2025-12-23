# ETAPA 1: Build con Bun
FROM oven/bun:1 AS builder
WORKDIR /app
# Usamos el wildcard * para que trague bun.lockb O bun.lock
COPY package.json bun.lock* ./
# Instalamos dependencias (fallback a install normal si falla el frozen)
RUN bun install --frozen-lockfile || bun install

COPY . .
RUN bun run build

# ETAPA 2: Servidor Nginx (Producción)
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]