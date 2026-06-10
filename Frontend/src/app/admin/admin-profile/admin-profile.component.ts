import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  oldPass:string='';
  newPass:string = '';
  UID:string = '';
  ngOnInit(): void {
    const uid = localStorage.getItem("userIdA");
    if(uid == null){
      this.go();
    }else{
      this.UID = uid
    }
  }

  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("userIdA");  
    this.go();
  }

  changePAss(){
    var val={
      password:this.oldPass,
      newPass:this.newPass
    }
    this.service.changePass(val,this.UID).subscribe(res =>{
      alert(res);
    });    

    this.oldPass = '';
    this.newPass = '';
  }
}
