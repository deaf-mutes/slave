#!/usr/bin/env bash

CONF="$1"

sed -i "s/__MANAGER_PASSWORD__/$MANAGER_PASSWORD/" "$CONF"
sed -i "s/__MYSQL_PASSWORD__/$MYSQL_PASSWORD/" "$CONF"
