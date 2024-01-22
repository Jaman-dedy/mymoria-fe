FROM node:alpine

WORKDIR /app

COPY yarn*.json ./
COPY . .

RUN yarn install --frozen-lockfile

EXPOSE 3001

ENV NODE_ENV production

RUN yarn run build

CMD ["yarn", "start"]
