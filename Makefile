.DEFAULT_GOAL := run-all
## GENERAL ##

install:
	npm ci

build:
	npx nx run-many --targets=build --all

lint:
	npx nx run-many --targets=lint --all

lint-fix:
	npx nx run-many --targets=lint --all --fix

format:
	npm run format

format-fix:
	npm run format-fix

test-unit-coverage:
	npx nx run-many -t test

run-all:
	@make format-fix
	@make lint-fix
	@make format
	@make lint
	@make test-unit-coverage
	@make build

help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.## .$$' $(MAKEFILE_LIST) | sed -e 's/:.##\s/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'