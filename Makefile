SHELL := /bin/bash

dependencies:
	npm install

testing:
	npm test

install-locally:
	npm install -g

node-features:
	node --v8-options

node-features-inprogress:
	node --v8-options | grep "in progress"