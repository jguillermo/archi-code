.DEFAULT_GOAL := test
## GENERAL ##

install:
	npm ci

build:
	npx nx run base-ddd:build
	npx nx run repository:build

lint:
	npx nx run base-ddd:lint
	npx nx run repository:lint

lint-fix:
	npx nx run base-ddd:lint --fix
	npx nx run repository:lint --fix

format:
	npm run format

format-fix:
	npm run format-fix

test-unit-coverage:
	npx nx run base-ddd:test
	npx nx run repository:test

test:
	@make format-fix
	@make lint-fix
	@make format
	@make lint
	@make test-unit-coverage

help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.## .$$' $(MAKEFILE_LIST) | sed -e 's/:.##\s/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'