FROM node:14-alpine 
WORKDIR /app
COPY ./angular /app/
RUN npm install
RUN node_modules/.bin/ng build --configuration production

# build back end
FROM node:14-alpine
WORKDIR /app 
COPY ./node /app/
COPY  /app/dist/angular  /app/dist/angular
RUN npm install --production

# build docker
FROM alpine
WORKDIR /app
RUN apk add --no-cache nodejs
COPY --from=server_build /app ./
EXPOSE 3006
CMD ["node" , "server"]