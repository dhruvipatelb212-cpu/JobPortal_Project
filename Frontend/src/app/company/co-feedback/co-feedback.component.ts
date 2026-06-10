import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-co-feedback',
  templateUrl: './co-feedback.component.html',
  styleUrls: ['./co-feedback.component.css']
})
export class CoFeedbackComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  cmpId:string = '';
  s1:number = 0;
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

    
  }

  rate(star:number){
    this.s1 = star
  }
  
  onSubmit(){
    var val={
      comment:this.s1,
      user_id:this.cmpId
    }

    this.service.addFedback(val).subscribe(res =>{
      Swal.fire('Thank you...', 'Your Feedback submitted succesfully!', 'success');
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
