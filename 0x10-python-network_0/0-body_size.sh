#!/bin/bash
# This script sends a request to a URL and displays the size of the response body in bytes
curl -sL "$1" -w "%{size_download}" -o /dev/null
