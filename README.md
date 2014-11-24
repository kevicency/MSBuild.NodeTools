MSBuild.NodeTools
============
> Run various Node tools as a MSBuild task.

:warning: This is still a WIP, please report any issues. Thanks ! :warning:

Installation
------------

### NuGet

MSBuild.NodeTools is available as a NuGet Package with the same name. This
package contains all the available tools.

```
Install-Package MSBuild.NodeTools
```

It is also possible to install each tool seperately.

```
Install-Package MSBuild.Npm
Install-Package MSBuild.Bower
Install-Package MSBuild.Gulp
Install-Package MSBuild.Grunt
```

NuGet will automatically add the MSBuild targets to the `.csproj` file.

### Manually

Download the files in the `build/` folder and put them in your project folder.
Then open the `.csproj` file in an editor and do the following changes.

```xml
<Project ToolsVersion="12.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <!-- Put this at the top of the Project node -->
    <Import Project="..\path\to\MSBuild.Node.props" Condition="Exists('..\path\to\MSBuild.Node.props')" />
    <!-- Import *.props file for the tool(s) that you need -->

    <!--
      other stuff goes here...
    -->

    <!-- Put this at the bottom of the Project node -->
    <Import Project="..\path\to\MSBuild.Node.targets" Condition="Exists('..\path\to\MSBuild.Node.targets')" />
    <!-- Import *.targets file for the tool(s) that you need -->
</Project>
```

Note that the `MSBuild.Node.props` and `MSBuild.Node.targets` is required by
all the tools and must always be included.

Configuration
-------------

There are three configuration properties you can overwrite in the `.csproj` file 
**after** importing `MSBuild.*.props` but **before** importing `MSBuild.*.targets`.

### MSBuild.Npm

  * `NpmFile`: Path to the npm file. Defaults to `$(MSBuildProjectDirectory)\package.json`.
  * `NpmCommand`: Npm command that should be run. Defaults to `install --loglevel error`.

### MSBuild.Bower

  * `BowerFile`: Path to the bower file. Defaults to `$(MSBuildProjectDirectory)\bower.json`.
  * `BowerCommand`: Bower command that should be run. Defaults to `install`.

### MSBuild.Gulp

  * `GulpFile`: Path to gulpfile. Defaults to `$(MSBuildProjectDirectory)\gulpfile.[js|coffee]`.
  * `GulpWorkingDirectory`: Directory in which context the gulp task gets executed. Defaults to `$(MSBuildProjectDirectory)`.
  * `GulpTask`: Gulp task that gets executed. Defaults to `build-$(Configuration)`.

### MSBuild.Grunt

  * `GruntFile`: Path to gruntfile. Defaults to `$(MSBuildProjectDirectory)\gruntfile.[js|coffee]`.
  * `GruntWorkingDirectory`: Directory in which context the grunt task gets executed. Defaults to `$(MSBuildProjectDirectory)`.
  * `GruntTask`: Grunt task that gets executed. Defaults to `build-$(Configuration)`.
