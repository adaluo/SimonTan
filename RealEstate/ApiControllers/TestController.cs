﻿
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace Realestate.ApiControllers
{
    using Realestate.Models;
    using System.Web.Http;
   
    public class TestController : ApiController
    {

        public TestModel Get()
        {
            return new TestModel { Name = "Hello 123" };
        }
    }
}