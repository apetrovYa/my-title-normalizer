SHELL := /bin/bash

dependencies:
	npm install

testing:
	npm test

install-locally:
	npm install -g