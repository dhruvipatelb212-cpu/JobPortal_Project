import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from '../compnay-shared.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-co-registrationpage',
  templateUrl: './co-registrationpage.component.html',
  styleUrls: ['./co-registrationpage.component.css']
})
export class CoRegistrationpageComponent implements OnInit {

  constructor(private service:CompnaySharedService,private router:Router) { }

  CmpName:string | undefined;
  contact:string | undefined;
  email:string | undefined;
  address:string | undefined;
  password:string | undefined;
  ans:string | undefined;
  StateList:any=[];
  CityList:any=[];
  stateId:number | undefined;
  cityId:number | undefined;
  PhotoFileName:string | undefined;
  PhotoFilePath:string | undefined;

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

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.LogoUrl+this.PhotoFileName;
    })
  }
  

  registerCmp(){
    var val={
      full_name:this.CmpName,
      contact_no:this.contact,
      email:this.email,
      resume:this.PhotoFileName,
      password:this.password,
      address:this.address,
      state_id:this.stateId,
      city_id:this.cityId  
    }

     
     this.service.addCompany(val).subscribe((res:any)=>{
       alert(res.toString());
       this.ans=res;
       if(this.ans == "Done.....!"){
        this.go();
       }
       });

    this.CmpName = '';
    this.contact='';
    this.email='';
    this.password='';
    this.address='';

    
  }

  go(){
    this.router.navigate(['/login']); // navigate to other page
  }
}
