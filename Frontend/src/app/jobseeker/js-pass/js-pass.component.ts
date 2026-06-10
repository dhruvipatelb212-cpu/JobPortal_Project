import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
@Component({
  selector: 'app-js-pass',
  templateUrl: './js-pass.component.html',
  styleUrls: ['./js-pass.component.css']
})
export class JsPassComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }
  id:string = '';
  oldPass:string = '';
  newPass:string = '';
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

  changePass(){
    var val={
      password:this.oldPass,
      newPass:this.newPass
    }

    this.service.changePass(val,this.id).subscribe(res =>{
      alert(res);

      this.oldPass = '';
      this.newPass = '';
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
