import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-js-feedback',
  templateUrl: './js-feedback.component.html',
  styleUrls: ['./js-feedback.component.css']
})
export class JsFeedbackComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  id:string='';
  s1:number=0;
  ngOnInit(): void {
    const sessionMail = localStorage.getItem("emailjs");
    const role = localStorage.getItem("roleTypeJ");
    const Uid = localStorage.getItem("userIdJ");
    if (Uid != null) {
      this.id = Uid;
    }
    if (sessionMail == null) {
      this.go();
    } else if (role == null) {
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
      user_id:this.id
    }

    this.service.addFedback(val).subscribe(res =>{
      Swal.fire('Thank you...', 'You submitted succesfully!', 'success',);
    });

  }

  go() {
    this.router.navigate(['/login']);
  }

  remove() {
    localStorage.removeItem("emailjs");
    localStorage.removeItem("roleTypeJ");
    localStorage.removeItem("userIdJ");
    localStorage.removeItem("jsName");
    this.go();
  }
}
