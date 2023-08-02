#!/bin/sh
# wait-for.sh

set -e

host="$1"
shift
cmd="$@"

# Esperar hasta que el puerto 3306 esté disponible
until nc -z -v -w30 "$host" 3306; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "MySQL is up - executing command"
exec $cmd
