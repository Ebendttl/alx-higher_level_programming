#!/bin/bash
# All in one line
curl -s -I "$1" | grep -iE '^Allow: .*$' && echo