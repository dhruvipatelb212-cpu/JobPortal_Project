import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { CompnaySharedService } from 'src/app/compnay-shared.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  cmpId:string = '';
  title:string = '';
  jobType:string = '';
  fieldType:string = '';
  location:string = '';
  jobDesc:string = '';
  exp:string = '';
  salary:string = '';
  vacancy:string = '';

  ngOnInit(): void {
    const userId = localStorage.getItem("userIdC");
    if(userId != null){
      this.cmpId=userId;
      //alert(this.cmpId);
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

    this.getJobData();

  }

  jobData:any =[];
  getJobData(){
    const jID=localStorage.getItem("tempJobId");

    this.service.getSingleJob(jID).subscribe(res =>{
      this.jobData = res;

      for(let data of this.jobData){
        this.title = data.Title;
        this.jobType = data.Job_type;
        
        this.fieldType = data.Field_type;
        this.location = data.Location;
        this.jobDesc = data.Desc_job;
        this.exp = data.Experience;
        this.salary = data.Salary_range;
        this.vacancy = data.Vacancy;
      }
    });
  }

  updateJob(){
    const jID=localStorage.getItem("tempJobId");

    var val={
      Title:this.title,
      Job_type:this.jobType,
      Field_type:this.fieldType,
      Location:this.location,
      Desc_job:this.jobDesc,
      Experience:this.exp,
      Salary_range:this.salary,
      Vacancy:this.vacancy
    }
    this.service.updateJob(val,jID).subscribe(res =>{
      alert(res);
      this.router.navigate(['/company/ViewJob']);
    });
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
