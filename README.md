MSBuild.Gulp
============
> Run a [gulp](http://gulpjs.com) task as build dependency

Installation
------------

### NuGet

MSBuild.Gulp is available as a NuGet Package with the same name.

```
Install-Package MSBuild.Gulp
```

NuGet will automatically add the MSBuild targets to the `.csproj` file.

### Manually

Download the files in the `build/` folder and put them in your project folder.
Then open the `.csproj` file in an editor and do the following changes

```xml
<Project ToolsVersion="12.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <!-- Put this at the top of the Project node -->
    <Import Project="..\path\to\MSBuild.Gulp.props" Condition="Exists('..\path\to\MSBuild.Gulp.props')" />

    <!--
      other stuff goes here...
    -->

    <!-- Put this at the bottom of the Project node -->
    <Import Project="..\path\to\MSBuild.Gulp.targets" Condition="Exists('..\path\to\MSBuild.Gulp.targets')" />
</Project>
```

Configuration
-------------

There are three configuration properties you can overwrite in the `.csproj` file 
**after** importing `MSBuild.Gulp.props` but **before** importing `MSBuild.Gulp.targets`.

  * `NpmExecutable`: Path to the npm executable. Defaults to `npm` (globally installed)
  * `GulpExecutable`: Path to the gulp executable. Defaults to `gulp` (globally installed)
  * `GulpTaskName`: Name of the gulp task that should be run. Defaults to `build-$(Configuration)`,
                    i.e. `build-Debug` for a Debug build.

