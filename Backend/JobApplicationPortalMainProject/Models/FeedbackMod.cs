using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobApplicationPortalMainProject.Models
{
    public class FeedbackMod
    {
        public int feedback_id { get; set; }
        public string comment { get; set; }
        public int user_id { get; set; }
        public string role_type { get; set; }
    }
}