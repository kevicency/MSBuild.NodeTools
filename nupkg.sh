#!/bin/bash
SPECS=./nuget/*.nuspec

for file in $SPECS
do
  mono nuget/nuget.exe pack $file -OutputDirectory nuget -BasePath .
done
