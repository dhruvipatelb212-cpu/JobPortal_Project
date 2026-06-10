import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }

  cmpId:string = '';
  jobs : any = [];

  jobData:any;

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

    this.jobListbyCmp();
  }

  jobListbyCmp(){
    var val={
      Cmp_id:this.cmpId
    };  

    this.service.viewJobsBycmp(val).subscribe(res =>{
      this.jobs=res;
    });
  }

  jType:string = '';
  jobListFilter(){
    var val={
      cmp_id:this.cmpId,
      Job_type:this.jType
    }

    this.service.getJobsCmpSideFilter(val).subscribe(res =>{
      this.jobs=res;
    });
  }

  getJobDetail(data:any){
    localStorage.setItem("tempJobId",data.job_id);
    this.router.navigate(['company/EditJob']);
  }

  hideJob(iteam:any){
    this.jobData=iteam;
    var val = {
      job_id:this.jobData.job_id
    };

    this.service.hideJob(val).subscribe(res =>{
      //alert(res.toString())
      this.jobListbyCmp();
    });

    
  }

  showJob(iteam:any){
    this.jobData=iteam;
    var val = {
      job_id:this.jobData.job_id
    };

    this.service.showJob(val).subscribe(res =>{
      //alert(res.toString())
      this.jobListbyCmp();
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
