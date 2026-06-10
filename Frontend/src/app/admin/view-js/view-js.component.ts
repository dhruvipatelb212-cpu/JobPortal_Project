import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompnaySharedService} from 'src/app/compnay-shared.service';

@Component({
  selector: 'app-view-js',
  templateUrl: './view-js.component.html',
  styleUrls: ['./view-js.component.css']
})
export class ViewJSComponent implements OnInit {

  constructor(private router:Router,private service:CompnaySharedService) { }

  allJS:any=[];
  ngOnInit(): void {
    const uid = localStorage.getItem("userIdA");
    if(uid == null){
      this.go();
    }
    this.getAllJs();
  }

  getAllJs(){
    this.service.getAllJSAdmin().subscribe(res =>{
      this.allJS = res; 
    });
  }

  go(){
    this.router.navigate(['/login']);
  }

  remove(){
    localStorage.removeItem("userIdA");  
    this.go();
  }

}
