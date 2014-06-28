#!/bin/bash
PACKS=./nuget/*.nupkg

for file in $PACKS
do
  mono nuget/nuget.exe push $file
done
