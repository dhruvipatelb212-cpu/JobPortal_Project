import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }

  cmpId:string = '';
  candidateList : any = [];
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

    this.shownewAppPending();
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

  shownewAppPending(){
    var val={
      cmp_id:this.cmpId,
      Job_status:'P'
    }

    this.service.showApplicationCmpSide(val).subscribe(res =>{
      this.candidateList = res
    });
  }

  shownewAppAcc(){
    var val={
      cmp_id:this.cmpId,
      Job_status:'A'
    }

    this.service.showApplicationCmpSide(val).subscribe(res =>{
      this.candidateList = res
    });
  }

  shownewAppRej(){
    var val={
      cmp_id:this.cmpId,
      Job_status:'R'
    }

    this.service.showApplicationCmpSide(val).subscribe(res =>{
      this.candidateList = res
    });
  }

  resumeUrl:any;
  showResume(data:any):any{
    this.resumeUrl = this.service.ResumeUrl + data.resume;
    return this.resumeUrl;
  }

  approveApplication(data:any){
    var val={
      application_id:data.application_id
    }
    this.service.ApproeveApplication(val).subscribe(res =>{
      Swal.fire('Thank you...', 'Application Approved !', 'success');
    });
    
  }

  rejectApplication(data:any){
    var val={
      application_id:data.application_id
    }
    this.service.RejectApplication(val).subscribe(res=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Better Luck Next Time!',
        footer: '<a href="">Rejected</a>'
      })
      
    })


  }
}
