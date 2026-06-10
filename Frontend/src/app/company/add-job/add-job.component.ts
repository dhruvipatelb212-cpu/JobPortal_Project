import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) {   }

  cmpId:string = '';
  allCity:any =[];
  ngOnInit(): void {
    const userId = localStorage.getItem("userIdC");
    if(userId != null){
      this.cmpId=userId;
    }else{
      this.go();
    }

    const sessionMail = localStorage.getItem("emailcmp");
    const role = localStorage.getItem("roleTypeC");
    if(sessionMail == null){
      this.go();
    }else if(role == null){
      alert("You are not Authorized Person for this Site");
      this.go();
    }
    this.getAllCity();
  }

  jtitle:string | undefined;
  jobType:string | undefined;
  fieldType:string | undefined;
  location:string | undefined;
  
  descJob:string | undefined;
  experience:string | undefined;
  salaryRange:string | undefined;
  vacancy:number | undefined;

  getAllCity(){
    this.service.getcity().subscribe(res => {
      this.allCity=res;
    });
  }

  addjob(){
    var val={
      Title:this.jtitle,
      Job_type:this.jobType,
      Field_type:this.fieldType,
      Location:this.location,
      Cmp_id:this.cmpId,
      Desc_job:this.descJob,
      Experience:this.experience,
      Salary_range:this.salaryRange,
      Vacancy:this.vacancy
    };

    this.service.addJobs(val).subscribe(res =>{
      Swal.fire('Thank you...', 'Job Added succesfully!', 'success');
    });

    this.jtitle = '';
    this.fieldType = '';
    this.location = '';
    this.descJob = '';
    this.experience = '';
    this.salaryRange = '';
    this.vacancy = 0;
  }

  
  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("emailcmp");
    localStorage.removeItem("roleTypeC");
    localStorage.removeItem("userIdC");
    localStorage.removeItem("cmpname");
    this.go();
  }
}
