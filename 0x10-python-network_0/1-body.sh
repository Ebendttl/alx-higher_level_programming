#!/bin/bash
# This script sends a GET request to a URL and displays the response body if the status code is 200
curl -sL "$1" -w "%{http_code}" -o /dev/null | awk -v url="$1" '$NF == "200" {system("curl -sL " url)}'
