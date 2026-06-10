import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-co-profile',
  templateUrl: './co-profile.component.html',
  styleUrls: ['./co-profile.component.css']
})
export class CoProfileComponent implements OnInit {

  constructor(private router: Router, private service: CompnaySharedService) { }

  cmpId: string | undefined;
  stateList: any = [];
  cityList: any = [];
  user: any = [];
  stateID: number | undefined;
  cityId: number | undefined;

  name: string = '';
  contact: string = '';
  address: string = '';
  email: string = '';
  logo: string = '';
  logoUrl: string = '';

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

    this.getstateList();
    this.getAllCity();
    this.getCmpForProfile();

  }

  updateProfile(){
    var val={
      full_name:this.name,
      contact_no:this.contact,
      state_id:this.stateID,
      city_id:this.cityId,
      resume:this.logo,
      address:this.address
    }

    this.service.updateCmp(this.cmpId,val).subscribe(res =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
       
        confirmButtonText: 'Yes, Update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Updated!',
            'Your data has been updated.',
            'success'
          )
        }
      })
     
      this.getCmpForProfile();
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.logo=data.toString();
      
    })
  }
  

  getCmpForProfile() {

    this.service.getcompaniesForProfile(this.cmpId).subscribe(res => {
      this.user = res;
      for (let data of this.user) {
        this.name = data.full_name;
        this.email = data.email;
        this.contact = data.contact_no;
        this.address = data.address;
        this.stateID = data.state_id;
        this.cityId = data.city_id;
        this.logo = data.resume;
        this.logoUrl = this.service.LogoUrl + this.logo;
      }
    });
  }

  getstateList() {
    this.service.getState().subscribe(res => {
      this.stateList = res;
    });
  }

  getAllCity() {
    this.service.getcity().subscribe(res => {
      this.cityList = res;
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

  changePass(){
    this.router.navigate(['/company/ChangePassword']);
  }

}
