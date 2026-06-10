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
    public class JobController : ApiController
    {
        //Show All jobs ADMIN
        // GET: api/Job

        String jod = DateTime.Now.ToString("MM-dd-yyyy");

        public HttpResponseMessage Get()
        {
            try
            {
                string query = @"select job_id,Cmp_id,Title,Job_type,Field_type,Location,Desc_job,Experience,Salary_range,
                                Vacancy,show_status,Tbl_user.full_name,date_of_add from Tbl_job join Tbl_user on 
                                Tbl_job.Cmp_id=Tbl_user.user_id";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Job/GetJobCmpSideFilter")]
        [HttpPost]
        public HttpResponseMessage GetJobCmpSideFilter(JobMod job)
        {
            try
            {
                string query = @"select job_id,Cmp_id,Title,Job_type,Field_type,Location,Desc_job,Experience,Salary_range,
                                Vacancy,show_status,Tbl_user.full_name,date_of_add from Tbl_job join Tbl_user on 
                                Tbl_job.Cmp_id=Tbl_user.user_id where Job_type = '"+job.Job_type+ "' and Cmp_id='"+job.Cmp_id+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        //get Jobs by JOB ID
        // GET: api/Job/5
        public HttpResponseMessage Get(int id)
        {
            try
            {
                string query = @"select job_id,Title,Job_type,Field_type,Location,Desc_job,Experience,Salary_range,
                                Vacancy,show_status,Tbl_user.full_name,Cmp_id,date_of_add from Tbl_job join Tbl_user on 
                                Tbl_job.Cmp_id=Tbl_user.user_id where job_id = '" + id+"'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        //Get jobs ny Cmp id
        [Route("api/Job/SearchByCmpId")]
        [HttpPost]
        public HttpResponseMessage SearchByCmpId(JobMod job)
        {
            try
            {
                string query = @"select job_id,Title,Job_type,Field_type,Location,Desc_job,Experience,Salary_range,
                                Vacancy,show_status,Tbl_user.full_name,Cmp_id from Tbl_job join Tbl_user on 
                                Tbl_job.Cmp_id=Tbl_user.user_id where Cmp_id = '" + job.Cmp_id + "'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Job/SearchByFilter")]
        [HttpPost]
        public HttpResponseMessage SearchByFilter(JobMod job)
        {
            try
            {
                string query = @"select job_id,Title,Job_type,Field_type,Location,Desc_job,Experience,Salary_range,
                                Vacancy,show_status,Tbl_user.full_name,Cmp_id from Tbl_job join Tbl_user on 
                                Tbl_job.Cmp_id=Tbl_user.user_id where Cmp_id = '" + job.Cmp_id + "' and show_status = 'S' " +
                                "and Experience= '" + job.Experience + "' and job_type='" + job.Job_type + "'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Job/ShowJobStatus")]
        [HttpGet]
        public HttpResponseMessage ShowJobStatus()
        {
            try
            {
                string query = @"select job_id,Title,Job_type,Field_type,Location,Desc_job,Experience,Salary_range,
                                Vacancy,show_status,Tbl_user.full_name,Cmp_id from Tbl_job join Tbl_user on 
                                Tbl_job.Cmp_id=Tbl_user.user_id where show_status = 'S'";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [Route("api/Job/getAllJobIdNameForDrop")]
        [HttpGet]
        public HttpResponseMessage getAllJobIdNameForDrop()
        {
            try
            {
                string query = @"select job_id,Title from Tbl_job";

                DataTable table = Connection.myConnection(query);

                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }
        [Route("api/Job/getAllJobEx")]
        [HttpGet]
        public HttpResponseMessage getAllJobEx()
        {
            try
            {
                string query = @"select distinct Experience from Tbl_job";
                DataTable table = Connection.myConnection(query);
                return Request.CreateResponse(HttpStatusCode.OK, table);
            }catch(Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
        }

        [Route("api/Job/todaysJob")]
        [HttpGet]
        public HttpResponseMessage todaysJob()
        {
            try
            {
                string query = @"select *   from Tbl_job where date_of_add = '"+jod+"'";
                DataTable table = Connection.myConnection(query);
                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
        }
        // POST: api/Job
        public string Post(JobMod job)
        {
            try
            {
                string query = @"insert into Tbl_job (Title,Job_type,Field_type,Location,Cmp_id,Desc_job,
                                    Experience,Salary_range,Vacancy,show_status,date_of_add) values ('"+job.Title+"'," +
                                    "'"+job.Job_type+"','"+job.Field_type+"','"+job.Location+"'," +
                                    "'"+job.Cmp_id+"','"+job.Desc_job+"','"+job.Experience+"','"+job.Salary_range+"'," +
                                    "'"+job.Vacancy+"','S','"+jod+ "')";

                DataTable table = Connection.myConnection(query);
                return "Done.....!";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
            
        }

        // PUT: api/Job/5
        public string Put(int id, JobMod job)
        {
            try
            {
                string query = @"update Tbl_job set Title='"+job.Title+"',Job_type='"+job.Job_type+"'," +
                    "Field_type='"+job.Field_type+"',Location='"+job.Location+"',Desc_job='"+job.Desc_job+"'," +
                    "Experience = '"+job.Experience+"'," +
                    "Salary_range='"+job.Salary_range+"',Vacancy='"+job.Vacancy+"' where job_id='"+id+"'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        [Route("api/Job/UpdateStatusShow")]
        [HttpPut]
        public string UpdateStatusShow(JobMod job)
        {
            try
            {
                string query = @"update Tbl_job set show_status='S' where job_id = '"+job.job_id+"'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        [Route("api/Job/UpdateStatusHide")]
        [HttpPut]
        public string UpdateStatusHide(JobMod job)
        {
            try
            {
                string query = @"update Tbl_job set show_status='H' where job_id = '" + job.job_id + "'";

                DataTable table = Connection.myConnection(query);
                return "Done .. !";
            }
            catch (Exception e)
            {
                return e.ToString();
            }
        }

        // DELETE: api/Job/5
        public string Delete(int id)
        {
            try
            {
                string query = @"delete from Tbl_job where job_id = '" + id + "'";

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
