#!/bin/bash
source scripts/.init.sh

pnpm i --frozen-lockfile --ignore-scripts

pnpm exec husky install

[ ! -d '.git' ] || git config --unset-all include.path || true
[ ! -d '.git' ] || git config --local include.path $PWD/.gitconfig

# Linking lib system-wide for contrib
pnpm link --global
