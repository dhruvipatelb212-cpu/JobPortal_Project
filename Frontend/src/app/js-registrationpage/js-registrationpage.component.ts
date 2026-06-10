import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from '../compnay-shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-js-registrationpage',
  templateUrl: './js-registrationpage.component.html',
  styleUrls: ['./js-registrationpage.component.css']
})
export class JsRegistrationpageComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }


  fullName:string|undefined;
  contact:string|undefined;
  email:string|undefined;
  stateId:number|undefined;
  cityId:number|undefined;
  education:string|undefined;
  resume:string|undefined;
  password:string|undefined;
  address:string | undefined;

  StateList:any=[];
  CityList:any=[];

  FileName:string | undefined;
  FilePath:string | undefined;

  ngOnInit(): void {
    this.getAllState();
    this.getAllCity();
  }

  getAllState(){
    this.service.getState().subscribe(data =>{
      this.StateList=data;
    });
  }

  getAllCity(){
    this.service.getcity().subscribe(data =>{
      this.CityList=data;
    });
  }

  uploadResume(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.uploadResume(formData).subscribe((data:any)=>{
      this.FileName=data.toString();
      this.FilePath=this.service.ResumeUrl+this.FileName;
    })
  }

  registerJobSicker(){
    var val={
      full_name:this.fullName,
      contact_no:this.contact,
      email:this.email,
      resume:this.FileName,
      password:this.password,
      education:this.education,
      state_id:this.stateId,
      city_id:this.cityId,
      address:this.address  
    }

    this.service.addJobSicker(val).subscribe(iteam =>{
      alert(iteam.toString());
    });

    this.fullName='';
    this.contact='';
    this.email='';
    this.FileName='';
    this.password='';
    this.education='';
    this.address='';
  }
}
