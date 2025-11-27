.PHONY: setup start stop restart logs shell test

setup:
	@if [ ! -f .env ]; then cp .env.example .env; echo "Created .env file"; fi
	docker-compose build

start:
	docker-compose up -d
	@echo "Server running at http://localhost:8080"

stop:
	docker-compose down

restart: stop start

logs:
	docker-compose logs -f

shell:
	docker-compose exec app bash

test:
	docker-compose exec app php artisan test
