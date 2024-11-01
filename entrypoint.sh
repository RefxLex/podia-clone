#!/bin/bash

set -ex

jsentryfile=$(find /var/www/html -type f -name '*.js')

# replacing placeholders with appropriate variables
sed -i "s~BASE_URL~$BASE_URL~g" $jsentryfile

set +ex
exec nginx -g 'daemon off;'