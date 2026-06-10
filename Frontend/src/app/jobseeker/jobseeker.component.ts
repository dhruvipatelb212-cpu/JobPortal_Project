import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from '../compnay-shared.service';

@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.css']
})
export class JobseekerComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  jsName:string ='';
  jsId:string='';
  search:string='';
  allCmpsJsSide:any =[];  
  cName:string='';
  myDate = new Date();
   
  ngOnInit(): void {
    
    const sessionMail = localStorage.getItem("emailjs");
    const role = localStorage.getItem("roleTypeJ");
    const name = localStorage.getItem("userIdJ");
    const id = localStorage.getItem("jsName");

    if(id != null){
      this.cName = id
    }

    if(name != null){
      this.jsName=name;
    }
    if(sessionMail == null ){
      this.go();
    }else if(role == null){
      alert("You are not Authorized Person for this Site");
      this.go();
    }
    const userId = localStorage.getItem("userIdJ");
    if(userId != null){
      this.jsId=userId;
      
    }else{
      this.go();
    }

    this.getAllJobs();
    this.viewAllCmp();
  }

  appCmps:any=[];
  noOfApp:number = 0;

  regCmps:any=[];
  noOfReg:number = 0;

  noOfPend:number = 0;
  viewAllCmp(){

    var val={
      Applicant_id:this.jsId,
      Job_status:'A'
    }
    this.service.showAppliedJobJS(val).subscribe(res=>{
      this.appCmps=res;
      for(let data of this.appCmps){
        this.noOfApp = this.noOfApp +1;
      }
    });
    
    var val={
      Applicant_id:this.jsId,
      Job_status:'R'
    }
    this.service.showAppliedJobJS(val).subscribe(res=>{
      this.regCmps=res;

      for(let data of this.regCmps){
        this.noOfReg = this.noOfReg + 1;
      }
    });


    var val={
      Applicant_id:this.jsId,
      Job_status:'P'
    }
    this.service.showAppliedJobJS(val).subscribe(res=>{
      this.allCmpsJsSide=res;

      for(let data of this.allCmpsJsSide){
        this.noOfPend = this.noOfPend + 1;
      }
    });
    
  }


  allJobs:any=[];
  Jobs:number = 0;
  getAllJobs(){
    this.service.getAllJobs().subscribe(res =>{
      this.allJobs=res;

      for(let data of this.allJobs){
        this.Jobs++;
      }
    });
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

}
