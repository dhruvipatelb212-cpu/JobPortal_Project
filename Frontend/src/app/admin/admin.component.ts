import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService } from '../compnay-shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private service:CompnaySharedService) { }

  JOD = new Date();
  ngOnInit(): void {
    const uid = localStorage.getItem("userIdA");
    if(uid == null){
      this.go();
    }

    this.getCountCmps();
    this.getCountJS();
    this.getAllJobs();
    this.toDaysJob();
  }

  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("userIdA");  
    this.go();
  }

  allCmpsCount:any = []
  cmps:number = 0;
  
  allJsCount:any=[];
  js:number =0;

  getCountCmps(){
    this.service.getAllCPmsAdmin().subscribe(res =>{
      this.allCmpsCount=res;
      
      for(let data of this.allCmpsCount){
        this.cmps = this.cmps + 1;  
      }
    });  
  }

  getCountJS(){
    this.service.getAllJSAdmin().subscribe(res =>{
      this.allJsCount = res;

      for(let data of this.allJsCount){
        this.js = this.js + 1;
      }
    });
  }

  allJobs:any=[];
  Jobs:number = 0;
  getAllJobs(){
    this.service.getAllJobs().subscribe(res =>{
      this.allJobs=res;

      for(let data of this.allJobs){
        this.Jobs++;
      }
    });
  }

  todayJob:any=[];
  todayJobs:number = 0 ;
  toDaysJob(){
    this.service.todaysJob().subscribe(res =>{
      this.todayJob = res;

      for(let data of this.todayJob){
        this.todayJobs = this.todayJobs + 1;
      }
    });
  }

}
