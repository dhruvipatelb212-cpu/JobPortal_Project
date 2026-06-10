using JobApplicationPortalMainProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;

namespace JobApplicationPortalMainProject.Controllers
{
    
    public class FeedbackController : ApiController
    {
        String jod = DateTime.Now.ToString("MM-dd-yyyy");
        // GET: api/Feedback
        [Route("api/Feedback/Get")]
        [HttpPost]
        public HttpResponseMessage Get(FeedbackMod mod)
        {
            try
            {
                string query = @"select * from Tbl_feedback join Tbl_user on Tbl_feedback.user_id=Tbl_user.user_id where role_type='"+mod.role_type+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // GET: api/Feedback/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Feedback
        public string Post(FeedbackMod mod)
        {
            try
            {
                string query = "insert into Tbl_feedback (date_of_feedback,comment,user_id) values ('" + jod + "','" + mod.comment + "','" + mod.user_id + "')";

                DataTable table = Connection.myConnection(query);
                return "Done..!";
            }
            catch(Exception e)
            {
                return e.ToString();
            }
        }

        // PUT: api/Feedback/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Feedback/5
        public void Delete(int id)
        {
        }
    }
}
