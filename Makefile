start:
	docker-compose up

server:
	docker-compose up server

client:
	docker-compose up client

local-client:
	cd client && npm run dev

local-server:
	cd server && lein run

deploy:
	eval "$(docker-machine env marsden)"
	docker-compose -f docker-compose.prod.yml build
	docker-compose -f docker-compose.prod.yml up
	
