#!/bin/bash
SELECTOR=$1
: ${SELECTOR:=*}
PACKS=./nuget/$SELECTOR.nupkg

for file in $PACKS
do
  mono nuget/nuget.exe push $file
done
