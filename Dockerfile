FROM node:18-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN NODE_TLS_REJECT_UNAUTHORIZED=0 npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]
