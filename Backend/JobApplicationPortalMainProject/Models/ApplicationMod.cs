using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobApplicationPortalMainProject.Models
{
    public class ApplicationMod
    {
        public int application_id { get; set; }
        public int Job_id { get; set; }
        public int Applicant_id { get; set; }
        public string Job_status { get; set; }
        public string Remark { get; set; }
        public string cmp_id { get; set; }

        public string full_name { get; set; }
        public string cmp_name { get; set; }
        public string Title { get; set; }

    }
}