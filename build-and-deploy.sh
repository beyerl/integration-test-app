#!/bin/bash

ng build --base-href='https://beyerl.github.io/integration-test-app/' &&
git add -A &&
git commit -m "build and deploy" &&
git push &&
git subtree push --prefix dist origin gh-pages