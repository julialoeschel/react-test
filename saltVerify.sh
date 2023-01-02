#!/usr/bin/env zsh

# cd to the location of the script
SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
cd $SCRIPTPATH

installresult=$(cd server && npm i --silent)
if [[ "$installresult" == *"high"* ]]
then
  echo "Installation verified - NOT OK"
  echo $installresult
  exit 1
fi

testresult=$(cd e2e && npm i --silent)
if [[ "$installresult" == *"high"* ]]
then
  echo "Installation verified - NOT OK"
  echo $installresult
  exit 1
fi

# cd back to where we came from
cd - > /dev/null

echo "Installation verified - OK"
exit 0