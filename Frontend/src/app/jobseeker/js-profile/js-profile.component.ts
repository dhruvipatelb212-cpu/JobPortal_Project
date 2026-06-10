import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from 'src/app/compnay-shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-js-profile',
  templateUrl: './js-profile.component.html',
  styleUrls: ['./js-profile.component.css']
})
export class JsProfileComponent implements OnInit {

  constructor(private router: Router, private service: CompnaySharedService) { }

  id: string = '';
  cityList: any = [];
  stateList: any = [];
  stateID: number = 0;
  cityId: number = 0;
  UserList: any = [];

  name: string | undefined;
  contact: string | undefined;
  education: string | undefined;
  resume: string = '';
  mail: string = '';
  resumeUrl:string = '';

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

    this.getstateList();
    this.getAllCity();
    this.getUserForProfile();
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

  getUserForProfile() {
    this.service.getjsForProfile(this.id).subscribe(res => {
      this.UserList = res;
      for (let data of this.UserList) {
        this.name = data.full_name,
          this.contact = data.contact_no,
          this.resume = data.resume,
          this.education = data.education,
          this.stateID = data.state_id,
          this.cityId = data.city_id,
          this.mail = data.email,
          this.resumeUrl = this.service.ResumeUrl + this.resume;
      }
    });
  }

  updateUser() {
    var val = {
      full_name: this.name,
      contact_no: this.contact,
      state_id: this.stateID,
      city_id: this.cityId,
      education: this.education,
      resume:this.resume
    }
    this.service.updateJs(this.id,val).subscribe(res=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Updated!',
            'Your data has been updated!!.',
            'success'
          )
        }
      })//alert(res.toString());
      this.getUserForProfile();
    });

    
  }

  uploadResume(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadResume(formData).subscribe((data: any) => {
      this.resume = data.toString();
      this.resumeUrl=this.service.ResumeUrl+this.resume;
    });
    
  }

  changePass(){
    this.router.navigate(['/jobseeker/JSPassword']);
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
