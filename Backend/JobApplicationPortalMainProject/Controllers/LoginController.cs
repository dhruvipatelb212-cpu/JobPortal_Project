using JobApplicationPortalMainProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.SessionState;

namespace JobApplicationPortalMainProject.Controllers
{

    public class LoginController : ApiController
    {
        
        [HttpPost]
        public Boolean Get(UserMod user)
        {
            try
            {
                string pass = EncryptionDecryption.Encrypt(user.password);
                string dPass = EncryptionDecryption.Decrypt(pass);

                string query = @"select user_id,full_name,email,role_type from Tbl_user where email='"+user.email+"' and password='"+pass+ "' and role_type ='C'";

                DataTable table = Connection.myConnection(query);

                if(table.Rows.Count == 1)
                {
                    return true;
                }
                else
                {
                    return false;
                }
                                    
            }catch(Exception e)
            {
                return true;
            }
        }

        [Route("api/Login/JobSickerLogin")]
        [HttpPost]
        public HttpResponseMessage JobSickerLogin(UserMod user)
        {
            try
            {
                string pass = EncryptionDecryption.Encrypt(user.password);
                string dPass = EncryptionDecryption.Decrypt(pass);

                string query = @"select user_id,full_name,email,role_type from Tbl_user where email='" + user.email + "' and " +
                    "password='" + pass + "'";

                DataTable table = Connection.myConnection(query);

                if (table.Rows.Count == 1)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, table);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest.ToString());
                }

            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        //Change Password
        [HttpPut]
        public string Put(UserMod user,int id)
        {
            try
            {
                
                string pass = EncryptionDecryption.Encrypt(user.password);

                string query = @"select user_id,email,full_name from Tbl_user where user_id = '" + id + "' and password='"+pass+"'";

                DataTable table = Connection.myConnection(query);

                string NewPassword = EncryptionDecryption.Encrypt(user.newPass);

                if(table.Rows.Count == 1)
                {
                    string changePass = @"update Tbl_user set password='"+NewPassword+"' where user_id = '" + id + "'";

                    DataTable changePassTable = Connection.myConnection(changePass);

                    return "PassWord Updated..!";
                }
                else
                {
                    return "Re-enter old password";
                }

            }
            catch(Exception e)
            {
                return e.ToString();
            }

        }
    }
}
