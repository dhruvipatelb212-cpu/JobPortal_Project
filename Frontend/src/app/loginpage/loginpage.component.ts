import { Component, Input, OnInit } from '@angular/core';
import { CompnaySharedService } from '../compnay-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }

  @Input() userData:any; 
  email:string ='';
  roleType:string ='';
  pass:string | undefined;
  user:any = [];
  role:string | undefined;
  userId:number = 0;
  cmpName:string ='';
  ngOnInit(): void {

  }

  login(){
    var val={
      email:this.email,
      password:this.pass
    };

    this.service.login(val).subscribe(data=>{
      this.user=data;
      
      for(let item of this.user){
        this.roleType=item.role_type;
        this.userId=item.user_id;
        this.cmpName=item.full_name;
        if(this.roleType == "C"){
          localStorage.setItem("userIdC",this.userId.toString());
          localStorage.setItem("cmpname",this.cmpName.toString());
        }else if(this.roleType == "J"){
          localStorage.setItem("userIdJ",this.userId.toString());
          localStorage.setItem("jsName",this.cmpName.toString()); 
        }else if(this.roleType == "A"){
          localStorage.setItem("userIdA",this.userId.toString());
        }
        
      }

      if(this.roleType == "C"){
        localStorage.setItem("emailcmp",val.email);
        localStorage.setItem("roleTypeC","Comp");
                
        this.gocmp();
      }else if(this.roleType == "J"){
        localStorage.setItem("emailjs",val.email);
        localStorage.setItem("roleTypeJ","J");
        this.goJobseeker();
      }else if(this.roleType == "A"){
        this.goAdmin();
      }else if(data == "BadRequest"){
        alert("Incorrect Username or Password");
      }
    });
  }

  gocmp(){
    this.router.navigate(['/company']);
  }

  goJobseeker(){
    this.router.navigate(['/jobseeker']);
  }

  goAdmin(){
    this.router.navigate(['/admin']);
  }
}
