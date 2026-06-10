using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace JobApplicationPortalMainProject.Models
{
    public class UserMod
    {
        
        public int user_id { get; set; }
        [Required]
        public string full_name { get; set; }
        [Required(ErrorMessage = "Mobile Number is required.")]
        [RegularExpression(@"^([0-9]{10})$", ErrorMessage = "Invalid Mobile Number.")]
        public string contact_no { get; set; }
        [Required]
        public string email { get; set; }
        public string education { get; set; }
        [Required]
        public string resume { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string address { get; set; }
        public string newPass { get; set; }
        public string role_type { get; set; }

        public int state_id { get; set; }
        public int city_id { get; set; }

        public string state_name { get; set; }
        public string city_name { get; set; }
    }
}