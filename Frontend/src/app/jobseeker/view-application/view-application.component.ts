import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }

  jsId:string='';
  logoPath:string='';
  logoArray:any = [];
  search:string='';
  ngOnInit(): void {
    const userId = localStorage.getItem("userIdJ");
    if(userId != null){
      this.jsId=userId;
      
    }else{
      this.go();
    }

    const sessionMail = localStorage.getItem("emailjs");
    const role = localStorage.getItem("roleTypeJ");
    if(sessionMail == null){
      this.go();
    }else if(role == null){
      alert("You are not Authorized Person for this Site");
      this.go();
    }
    this.viewAllCmp();
  }

  allCmpsJsSide:any =[];  
  photoPath:any;
  viewAllCmp(){

    if(this.search == 'A'){
      var val={
        Applicant_id:this.jsId,
        Job_status:'A'
      }
      this.service.showAppliedJobJS(val).subscribe(res=>{
        this.allCmpsJsSide=res;
      });  
    }

    else if(this.search == 'P'){
      var val={
        Applicant_id:this.jsId,
        Job_status:'P'
      }
      this.service.showAppliedJobJS(val).subscribe(res=>{
        this.allCmpsJsSide=res;
      });
    }

    else if(this.search == "R"){
      var val={
        Applicant_id:this.jsId,
        Job_status:'R'
      }
      this.service.showAppliedJobJS(val).subscribe(res=>{
        this.allCmpsJsSide=res;
      });
    }

    else{
      var val={
        Applicant_id:this.jsId,
        Job_status:'P'
      }
      this.service.showAppliedJobJS(val).subscribe(res=>{
        this.allCmpsJsSide=res;
      });
    }
    
  }

  viewLogo(data:any){
    this.photoPath = this.service.LogoUrl + data.resume;
    return this.photoPath;
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
