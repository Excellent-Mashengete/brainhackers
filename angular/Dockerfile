### STAGE 1: Build ###
FROM node:16.3.0-alpine AS builder
WORKDIR /Angular
COPY package.json package-lock.json ./
RUN npm i
COPY . .
CMD ["npm","run","start:prod"]

### STAGE 2: Run ###
FROM nginx:1.0.8-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/angular /usr/share/nginx/html




# ### STAGE 1: Build ###
# FROM node:16.3.1-alpine AS builder
# WORKDIR /Angular
# COPY . . 
# RUN npm i -g @angular/cli@12.2.0
# RUN npm install
# RUN npm run builder

# RUN rm -rf /user/src/app/src
# RUN rm -rf /user/src/app/node_modules

# EXPOSE 4200

# CMD ["npm","run","start:prod"]


# Version:"3"
# Services:
# frontend: 
#     build: ./frontend
#     Container_name: fronend_docker
#     image: registery.thedigitalacademy.co.za/fs/raindrops:0.0.1
#     ports: - '4200:4200'



# ### STAGE 2: Run ###
# FROM nginx:1.0.8-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /usr/src/app/dist/angular /usr/share/nginx/html



