FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src
RUN npm install && npm run build
EXPOSE 3000
CMD ["npx", "react-scripts", "start"]
