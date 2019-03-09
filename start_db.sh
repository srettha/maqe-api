#!/usr/bin/env bash

set -e

docker run --name postgres --rm -p 5432:5432 -d postgres
