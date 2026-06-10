import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  search:string='';
  ngOnInit(): void {
    const uid = localStorage.getItem("userIdA");
    if(uid == null){
      this.go();
    }

    this.feedbackData();
  }

  allFeedBack:any=[];
  feedbackData(){
    var val={
      role_type:"C"
    }

    this.service.viewFeedback(val).subscribe(res=>{
      this.allFeedBack=res;
    });
  }

  filter(){
    var val={
      role_type:this.search
    }

    this.service.viewFeedback(val).subscribe(res=>{
      this.allFeedBack=res;
    });
  }
  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("userIdA");  
    this.go();
  }
}
