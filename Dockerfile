FROM node:18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

RUN apk add --no-cache gcc g++ make

COPY --from=builder /app/ ./

EXPOSE 3000

CMD ["npm", "start"]