#!/bin/bash

openapi-generator generate -i spec.yaml -g go-server -o ./server
