init:
	docker-compose -p "graphy" -f .docker/docker-compose.yml build
start:
	docker-compose -p "graphy" -f .docker/docker-compose.yml up
stop:
	docker-compose -p "graphy" -f .docker/docker-compose.yml stop
