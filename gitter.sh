#!/bin/bash

echo "Enter commit message: "
read arg1

echo "Push to prod? (y/n): "
read arg2

while [ -z "$arg1" ] || [ -z "$arg2" ]; do
    echo "Enter commit message: "
    read arg1

    echo "Push to prod? (y/n): "
    read arg2
done

if [ "$arg2" = "n" ]; then
    git add .
    git commit -m "$arg1"
    git push
else
    git add .
    git commit -m "$arg1"
    git push
    npm run deploy
fi
