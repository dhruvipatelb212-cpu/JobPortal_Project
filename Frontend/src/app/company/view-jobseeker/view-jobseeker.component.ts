import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-jobseeker',
  templateUrl: './view-jobseeker.component.html',
  styleUrls: ['./view-jobseeker.component.css']
})
export class ViewJobseekerComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }

  cmpId:string = '';
  
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

    this.applicantCmp();
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

  applicants:any = [];
  applicantData:any=[];
  uid:any;
  applicantCmp(){
    var val = {
      cmp_id:this.cmpId
    }
    this.service.applicantShow(val).subscribe(res=>{
      this.applicants = res
      
      for(let data of this.applicants){
        this.uid=data.Applicant_id
        
        this.service.getjsForProfile(this.uid).subscribe(res=>{
          
          for(let item of res){
            this.applicantData.push(item);
          }
          
        });
      }
  
    });
  }

  resumeurl:any;
  
  resumeDetail(val:any){
    this.resumeurl = this.service.ResumeUrl+val.resume;
    return this.resumeurl;
  }

}
