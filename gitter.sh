#!/bin/bash
echo "Enter the commit message: "
read commit_message
git add .
git commit -m "$commit_message"
git push https://github.com/Abhinay-Katta/Learning-React.git HEAD
