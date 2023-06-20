#!/bin/bash

echo "Commit message: $arg1"
echo "Skip deploy:(y/n) $arg2"
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
