using JobApplicationPortalMainProject.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace JobApplicationPortalMainProject.Controllers
{
    public class UserController : ApiController
    {

        // GET: api/User
        String jod = DateTime.Now.ToString("MM-dd-yyyy");

        public HttpResponseMessage Get()
        {
            try
            {
                string query = @"select user_id,full_name,contact_no,email,state_id,city_id,education,
                resume,role_type,StateName,tblcity.CityName,date_of_regi from Tbl_user join statetbl on 
                Tbl_user.state_id = statetbl.StateId join tblcity on Tbl_user.city_id=tblcity.CitytId where role_type='J'";

                DataTable table = Connection.myConnection(query);
                
                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // GET: api/User/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                string query = @"select user_id,full_name,contact_no,email,state_id,city_id,education,
                resume,StateName,tblcity.CityName,date_of_regi from Tbl_user join statetbl on 
                Tbl_user.state_id = statetbl.StateId join tblcity on Tbl_user.city_id=tblcity.CitytId where user_id = '" + id+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST: api/User
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
                                state_id,city_id,education,resume,password,role_type,address,date_of_regi) values 
                                ('" + user.full_name + "','" + user.contact_no + "','" + user.email + "'," +
                                    "'" + user.state_id + "','" + user.city_id + "','" + user.education + "'," +
                                    "'" + user.resume + "','" + pass + "','J','"+user.address+"','"+jod+"')";

                    DataTable table = Connection.myConnection(query);
                    return "Done.....!";
                }
                else
                {
                    return "Username already taken please try something else..!";
                }

            }
            catch(Exception e)
            {
                return e.ToString();
            }
        }

        // PUT: api/User/5
        
        public string Put(UserMod user,int id)
        {
            try
            {
                string query = @"update Tbl_user set full_name='" + user.full_name + "',contact_no='" + user.contact_no + "'," +
                    "state_id = '"+user.state_id+"',city_id='"+user.city_id+"',education = '"+user.education+"'," +
                    "resume='"+user.resume+"' where user_id = '"+id+"'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }catch(Exception e)
            {
                return e.ToString();
            }
        }

        // DELETE: api/User/5
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

        [Route("api/User/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Resume/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;
            }
            catch (Exception)
            {

                return "anonymous.pdf";
            }
        }

    }
}
