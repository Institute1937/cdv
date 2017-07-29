FROM clojure:lein-2.7.1-alpine

EXPOSE 3000
EXPOSE 7000
ADD . /src
WORKDIR /src
RUN /usr/local/bin/lein deps
