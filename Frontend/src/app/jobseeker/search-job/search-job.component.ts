import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  jsName:string ='';
  allJobs:any=[];
  jobsData:any;
  cmpId:number = 0;
  Exp:string = '';
  jType:string = '';

  ngOnInit(): void {
    const sessionMail = localStorage.getItem("emailjs");
    const role = localStorage.getItem("roleTypeJ");
    const name = localStorage.getItem("userIdJ");
    if(name != null){
      this.jsName=name;
    }
    if(sessionMail == null ){
      this.go();
    }else if(role == null){
      alert("You are not Authorized Person for this Site");
      this.go();
    }

    this.getAllJobs();
    this.getAllCmps();
    this.getAllEx();
  }

  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("emailjs");
    localStorage.removeItem("roleTypeJ");
    localStorage.removeItem("userIdJ");
    localStorage.removeItem("jsName");
    this.go();
  }

  getAllJobs(){
    this.service.getAllJobs().subscribe(res =>{
      this.allJobs=res;
    });
  }

  getFilterJobs(){
    var val = {
      Cmp_id:this.cmpId,
      Experience:this.Exp,
      Job_type:this.jType
    }
    this.service.getAllJobJSSideFilter(val).subscribe(res =>{
      this.allJobs = res;
    })
  }

  addApplicationApply(data:any){
    this.jobsData=data;
    var val={
      Job_id:this.jobsData.job_id,
      Applicant_id:localStorage.getItem("userIdJ"),
      cmp_id:this.jobsData.Cmp_id
    }

    this.service.addApplicationApply(val).subscribe(res =>{
      
      alert(res);
    });
  }

  allCmps:any =[];
  getAllCmps(){
    this.service.getAllCmpsNameForDrop().subscribe(res =>{
      this.allCmps = res;
    });
  }

  allJobEx:any =[];
  getAllEx(){
    this.service.getAllJobEx().subscribe(res =>{
      this.allJobEx = res;
    });
  }
}
