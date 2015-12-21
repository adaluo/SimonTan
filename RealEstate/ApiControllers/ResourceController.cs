using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Realestate.Models;
using Realestate.Repository;

namespace Realestate.ApiControllers
{
   // [Authorize]
    public class ResourceController : ApiController
    {
        // GET: api/Resource
        public IEnumerable<Resource> Get()
        {
            var repo = new ResourceRepository();
            return repo.GetAllResources();
        }

        // GET: api/Resource/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Resource
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Resource/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Resource/5
        public void Delete(int id)
        {
        }
    }
}
