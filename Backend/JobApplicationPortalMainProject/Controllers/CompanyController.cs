using JobApplicationPortalMainProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace JobApplicationPortalMainProject.Controllers
{
    public class CompanyController : ApiController
    {
        String jod = DateTime.Now.ToString("MM-dd-yyyy");
        // GET: api/Company
        public HttpResponseMessage Get()
        {
            try
            {
                string query = @"select user_id,full_name,contact_no,email,state_id,city_id,education,
                resume,role_type,StateName,tblcity.CityName,address,date_of_regi from Tbl_user join statetbl on 
                Tbl_user.state_id = statetbl.StateId join tblcity on Tbl_user.city_id=tblcity.CitytId where role_type='C'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }
        // GET: api/Company/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                string query = @"select user_id,full_name,contact_no,email,state_id,city_id,education,
                resume,StateName,tblcity.CityName,address,date_of_regi from Tbl_user join statetbl on 
                Tbl_user.state_id = statetbl.StateId join tblcity on Tbl_user.city_id=tblcity.CitytId where user_id = '" + id + "'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST: api/Company
        public string Post(UserMod user)
        {
            try
            {
                string getu = @"select email from Tbl_user where email = '" + user.email + "'";
                DataTable tbluser = Connection.myConnection(getu);
                if (tbluser.Rows.Count == 0)
                {
                    string pass = EncryptionDecryption.Encrypt(user.password);

                    string query = @"insert into Tbl_user(full_name,contact_no,email,
                                state_id,city_id,password,role_type,resume,address,date_of_regi) values 
                                ('" + user.full_name + "','" + user.contact_no + "','" + user.email + "'," +
                                    "'" + user.state_id + "','" + user.city_id + "'," +
                                    "'" + pass + "','C','" + user.resume + "','" + user.address + "','"+ jod + "')";

                    DataTable table = Connection.myConnection(query);
                    return "Done.....!";
                }
                else
                {
                    return "Username already taken please try something else..!";
                }

                
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        // PUT: api/Company/5
        public string Put(UserMod user, int id)
        {
            try
            {
                string query = @"update Tbl_user set full_name='" + user.full_name + "',contact_no='" + user.contact_no + "'," +
                    "state_id = '" + user.state_id + "',city_id='" + user.city_id + "',resume='"+user.resume+"',address='"+user.address+"' where user_id = '" + id + "'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        // DELETE: api/Company/5
        public string Delete(int id)
        {
            try
            {
                string query = @"delete from Tbl_user where user_id = '" + id + "'";

                DataTable table = Connection.myConnection(query);

                return "Done..!";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        [Route("api/Company/SaveLogo")]
        public string SaveLogo()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/CmpLogo/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                return "anonymous.png";
            }
        }

        [Route("api/Company/GetAllCmpName")]
        [HttpGet]
        public HttpResponseMessage GetAllCmpName()
        {
            try
            {
                string query = @"select user_id,full_name from Tbl_user where role_type='C'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Company/countCmpsForDashBord")]
        [HttpGet]
        public HttpResponseMessage countCmpsForDashBord()
        {
            try
            {
                string query = @"select count(*) from Tbl_user where role_type='C'";

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
