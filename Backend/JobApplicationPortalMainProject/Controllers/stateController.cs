using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JobApplicationPortalMainProject.Controllers
{
    public class stateController : ApiController
    {
        // GET: api/state
        public HttpResponseMessage Get()
        {
            try
            {
                string query = @"select * from statetbl";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }
        [Route("api/state/GetCity")]
        [HttpGet]
        public HttpResponseMessage GetCity()
        {
            try
            {
                string query = @"select * from tblcity";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        public HttpResponseMessage Get(int id)
        {
            try
            {
                string query = @"select CitytId,CityName from tblcity where StateId='"+id+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
