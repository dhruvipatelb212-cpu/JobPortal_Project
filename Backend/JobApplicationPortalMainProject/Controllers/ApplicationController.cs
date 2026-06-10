using JobApplicationPortalMainProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JobApplicationPortalMainProject.Controllers
{
    public class ApplicationController : ApiController
    {
        String jod = DateTime.Now.ToString("MM-dd-yyyy");

        //// GET: api/Application
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/Application/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        [Route("api/Application/ShowAppliedJobJobScikerSide")]
        [HttpPost]
        public HttpResponseMessage ShowAppliedJobJobScikerSide(ApplicationMod apply)
        {
            try
            {
                string query = @"select Tbl_Application.application_id,Tbl_job.Title,Job_type,Field_type,Location,Desc_job,Experience,
                Salary_range,Vacancy,Job_status,Tbl_job.Cmp_id,
                Tbl_user.full_name,Tbl_user.email,Tbl_user.contact_no,Tbl_user.resume from Tbl_Application 
                join Tbl_user on Tbl_Application.cmp_id=Tbl_user.user_id
                join Tbl_job on Tbl_Application.Job_id=Tbl_job.job_id where 
                Tbl_Application.Applicant_id='" + apply.Applicant_id+"' and " +
                "Job_status = '"+apply.Job_status+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }


        [Route("api/Application/ShowAppliedJobCompanySide")]
        [HttpPost]
        public HttpResponseMessage ShowAppliedJobCompanySide(ApplicationMod apply)
        {
            try
            {
                string query = @"select Tbl_Application.application_id,
                Tbl_user.full_name,contact_no,email,education,resume,address,
                Tbl_job.Title,Tbl_Application.Job_id,Job_type,Field_type,Location,Desc_job,Experience,
                Salary_range,Vacancy,Job_status
                from Tbl_Application 
                join Tbl_user on Tbl_Application.Applicant_id=Tbl_user.user_id
                join Tbl_job on Tbl_Application.Job_id=Tbl_job.job_id where  
                Tbl_job.Cmp_id='" + apply.cmp_id+"' and " +
                "Job_status = '" + apply.Job_status + "'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Application/ShowApprovedJobsCompanySide")]
        [HttpPost]
        public HttpResponseMessage ShowApprovedJobsCompanySide(ApplicationMod apply)
        {
            try
            {
                string query = @"select DISTINCT Applicant_id from 

                    Tbl_Application join Tbl_user on Tbl_user.user_id = Tbl_Application.Applicant_id where 

                    cmp_id = '"+apply.cmp_id+"' and Job_status = 'A'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Application/todaysAppCmpWise")]
        [HttpPost]
        public HttpResponseMessage todaysAppCmpWise(ApplicationMod apply)
        {
            try
            {
                string query = @"select * from Tbl_Application where date_of_app = '"+jod+"' and cmp_id = '"+apply.cmp_id+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST: api/Application
        public string Post(ApplicationMod apply)
        {
            try
            {
                string query1 = @"select * from Tbl_Application where Job_id='" + apply.Job_id + "' and " +
                    "Applicant_id='" + apply.Applicant_id + "'";

                DataTable data = Connection.myConnection(query1);

                if(data.Rows.Count > 0)
                {
                    return "Already Applied";
                }
                else
                {
                    string query = @"insert into Tbl_Application (Job_id,Applicant_id,Job_status,cmp_id,date_of_app) 
                    values ('" + apply.Job_id + "','" + apply.Applicant_id + "','P','" + apply.cmp_id + "','"+ jod + "')";

                    DataTable table = Connection.myConnection(query);
                    return "Done.....!";
                }

                
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }
        
        [Route("api/Application/ApproveApplication")]
        [HttpPut]
        // PUT: api/Application/5
        public string ApproveApplication(ApplicationMod apply)
        {
            try
            {
                string query = @"update Tbl_Application set Job_status='A' where application_id = '"+apply.application_id+"'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        [Route("api/Application/RejectApplication")]
        [HttpPut]
        // PUT: api/Application/5
        public string RejectApplication(ApplicationMod apply)
        {
            try
            {
                string query = @"update Tbl_Application set Job_status='R' where application_id = '" + apply.application_id + "'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        // DELETE: api/Application/5
        public string Delete(int id)
        {
            try
            {
                string query = @"delete from Tbl_Application where job_id = '" + id + "'";

                DataTable table = Connection.myConnection(query);

                return "Done..!";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

    }
}
