#!/bin/bash

if [ "$arg1" == "" ]; then
    echo "Enter the commit message: "
    read commit_message
fi
if [ "$arg2" == "n" ]; then
    npm run deploy
fi

git add .
git commit -m "$commit_message"
git push
echo "Done"
