#!/bin/bash

set -o errexit # Exit on error
green=`tput setaf 2`
yellow=`tput setaf 3`
reset=`tput sgr0`

printf "${green}Performing cleanup\n\n${reset}"
rm -rf .tests-build/*
rm -rf .ts-build/*
printf "${yellow}Cleanup commpleted\n\n${reset}"

printf "${green}Transpiling typescript to ES6\n\n${reset}"
tsc
printf "${yellow}Transpile to ES6 completed\n\n${reset}"

printf "${green}Transpiling ES6 to ES5 using babel es2015 and react preset\n\n${reset}"
babel .ts-build/ --out-dir .tests-build/
printf "\n${yellow}Transpile to ES5 completed\n\n${reset}"

printf "\n${green}Running test\n${reset}\n"
mocha .tests-build/tests