start:
	docker-compose up
prod:
	docker-compose -f docker-compose-prod.yml up -d

server:
	docker-compose up server

client:
	docker-compose up client

local-client:
	cd client && npm run dev

local-server:
	cd server && lein run


