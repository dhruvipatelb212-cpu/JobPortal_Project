import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from '../compnay-shared.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private router:Router, private service:CompnaySharedService) { }

  cmpId:string = '';
  jobs : any = [];
  JOD = new Date();
  cmpName:string = '';
  ngOnInit(): void {
    const sessionMail = localStorage.getItem("emailcmp");
    const role = localStorage.getItem("roleTypeC");
    const name = localStorage.getItem("cmpname");
    if(name != null){
      this.cmpName=name;
    }
    if(sessionMail == null ){
      this.go();
    }else if(role == null){
      alert("You are not Authorized Person for this Site");
      this.go();
    }

    const userId = localStorage.getItem("userIdC");
    if(userId != null){
      this.cmpId=userId;
      //alert(this.cmpId);
    }else{
      this.go();
    }

    this.jobListbyCmp();
    this.applicantCmp();
    this.todaysAppCmpWise();
  }

  jobsCount:number = 0;
  jobListbyCmp(){
    var val={
      Cmp_id:this.cmpId
    };  

    this.service.viewJobsBycmp(val).subscribe(res =>{
      this.jobs=res;

      for(let data of this.jobs){
        this.jobsCount = this.jobsCount + 1;
      }
    });
  
  }
  
  applicants:any=[];
  noOfAppl:number=0;
  applicantCmp(){
    var val = {
      cmp_id:this.cmpId
    }
    this.service.applicantShow(val).subscribe(res=>{
      this.applicants = res
      
      for(let data of this.applicants){
        this.noOfAppl = this.noOfAppl + 1;
      }
  
    });
  }

  todayapplication:any=[];
  apps:number = 0;
  todaysAppCmpWise(){
    var val ={
      cmp_id:this.cmpId,
    }
    this.service.todaysAppCmpWise(val).subscribe(res =>{
      this.todayapplication = res;

      for(let data of this.todayapplication){
        this.apps = this.apps + 1;
        
      }
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
