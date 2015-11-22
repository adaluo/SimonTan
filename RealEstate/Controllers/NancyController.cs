
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Realestate.Controllers
{
    using Realestate.Models;
    using Nancy;

    public class NancyController : NancyModule
    {
        public NancyController()
        {
            Get["/"] = p => View["Views/Test/Home.cshtml", new TestModel() { Name = "hola" }]; //{ return "hi!"; };   
            Get["/home"] = p => View["Views/Home/Home.cshtml", new TestModel() { Name = "hola" }]; //{ return "hi!"; }; 
            Get["/testrunner"] = p => View["Views/Jasmine/SpecRunner.cshtml"]; 

        }
    }
}