import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService} from 'src/app/compnay-shared.service';
@Component({
  selector: 'app-view-companies',
  templateUrl: './view-companies.component.html',
  styleUrls: ['./view-companies.component.css']
})
export class ViewCompaniesComponent implements OnInit {

  constructor(private router:Router, private service:CompnaySharedService) { }

  allCmps:any = [];
  fallCmps:any=[];
  photoPath:any;
  cmpId:number = 0;
  ngOnInit(): void {
    const uid = localStorage.getItem("userIdA");
    if(uid == null){
      this.go();
    }
    this.getAllCmps();
    
  }

  getAllCmps(){
    this.service.getAllCPmsAdmin().subscribe(res =>{
      this.allCmps = res;
      this.fallCmps = res;
    });
  }

  filterCmp(){
    
    this.service.getcompaniesForProfile(this.cmpId).subscribe(res =>{
      this.allCmps = res;
    });
  }

  viewLogo(data:any){
    this.photoPath = this.service.LogoUrl + data.resume;
    return this.photoPath;
  }

  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("userIdA");  
    this.go();
  }
}
