import { Component, OnInit } from '@angular/core';
import { CompnaySharedService } from '../compnay-shared.service';
@Component({
  selector: 'app-browse-jobs',
  templateUrl: './browse-jobs.component.html',
  styleUrls: ['./browse-jobs.component.css']
})
export class BrowseJobsComponent implements OnInit {

  constructor(private service : CompnaySharedService) { }

  allJobs:any =[];
  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(){
    this.service.getAllJobs().subscribe(res =>{
      this.allJobs=res;
    });
  }


}
