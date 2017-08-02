Makefile
------------------
* Contains scripts to run docker-compose

Dockerfiles
------------------
* Clients base image is node-alpine
* Servers base image is clojure-alpine 
* NGINX base image is full fat ubuntu - TODO change this to alpine

docker-compose.yml
------------------
* contains three services, client js, server clojure and nginx for reverse proxy which means no CORS issues
