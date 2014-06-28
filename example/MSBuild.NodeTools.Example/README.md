MSBuild.NodeTools.Example
=========================

This example demonstrates the following MSBuild Tasks:

  * **RunNpm** (MSBuild.Npm): Run `npm install` before `PrepareForBuild`.
  * **RunBower** (MSBuild.Bower): Run `bower install` before `PrepareForBuild`.
  * **RunGulp** (MSBuild.Gulp): Run `gulp build-Debug` after `PrepareForBuild`.
  * **RunGrunt** (MSBuild.Grunt): Run `grunt build-Debug` after `PrepareForBuild`.

You can modify the `MSBuild.NodeTools.Example.csproj` file to customize the MSBuild
properties used by those task. See the repositories [README.md]('../../README.md') 
for more details.

Log Output
----------

To enable verbose MSBuild log output, go to

```
Tools -> Options -> Projects and Solutions -> Build and Run -> MSBuild project output verbosity
```

and set it to at least `Detailed`.
