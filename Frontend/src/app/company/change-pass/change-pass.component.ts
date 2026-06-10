import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  cmpId: string | undefined;
  oldPass:string | undefined;
  newPass:string | undefined;

  ngOnInit(): void {
    const sessionMail = localStorage.getItem("emailcmp");
    const role = localStorage.getItem("roleTypeC");
    if (sessionMail == null) {
      this.go();
    } else if (role == null) {
      alert("You are not Authorized Person for this Site");
      this.go();
    }

    const userId = localStorage.getItem("userIdC");
    if (userId != null) {
      this.cmpId = userId;
    } else {
      this.go();
    }
    
  }

  changePass(){
    var val={
      password:this.oldPass,
      newPass:this.newPass
    }

    this.service.changePass(val,this.cmpId).subscribe(res =>{
      alert(res);

      this.oldPass = '';
      this.newPass = '';
    });
  }

  go() {
    this.router.navigate(['/login']);
  }

  remove() {
    localStorage.removeItem("emailcmp");
    localStorage.removeItem("roleTypeC");
    localStorage.removeItem("userIdC");
    localStorage.removeItem("cmpname");
    this.go();
  }

}
