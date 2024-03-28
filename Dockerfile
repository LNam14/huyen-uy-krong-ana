FROM node:lts-alpine AS builder

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
