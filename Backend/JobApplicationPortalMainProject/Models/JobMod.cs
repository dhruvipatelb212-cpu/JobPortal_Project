using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobApplicationPortalMainProject.Models
{
    public class JobMod
    {
        public int job_id { get; set; }
        public string Title { get; set; }
        public string Job_type { get; set; }
        public string Field_type { get; set; }
        public string Location { get; set; }
        public string Cmp_id { get; set; }
        public string Desc_job { get; set; }
        public string Experience { get; set; }
        public string Salary_range { get; set; }
        public int Vacancy { get; set; }
        public string show_status { get; set; }

        public string full_name { get; set; }
    }
}