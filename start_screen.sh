#!/bin/bash

# if node modules have not been installed
# install node module dependencies
if [ ! -d node_modules/ ]; then
  npm install;
fi

npm start;
