build:
	docker-compose -f .docker/docker-compose.yml build
start:
	docker-compose -f .docker/docker-compose.yml up
stop:
	docker-compose -f .docker/docker-compose.yml stop