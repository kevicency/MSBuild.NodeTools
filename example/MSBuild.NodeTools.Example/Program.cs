using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSBuild.NodeTools.Example
{
    class Program
    {
        static void Main(string[] args)
        {
            var npmInstall = Directory.Exists("../../node_modules");
            var bowerInstall = Directory.Exists("../../bower_components");
            var gruntBuild = File.Exists("./Gruntfile.js");
            var gulpBuild = File.Exists("./gulpfile.js");

            Console.WriteLine("Npm Install:\t{0}", npmInstall);
            Console.WriteLine("Bower Install:\t{0}", bowerInstall);
            Console.WriteLine("Grunt Build:\t{0}", gruntBuild);
            Console.WriteLine("Gulp Build:\t{0}", gulpBuild);

            Console.ReadLine();
        }
    }
}
