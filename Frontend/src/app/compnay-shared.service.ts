import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompnaySharedService {

  readonly APIUrl="http://localhost:2624/api";
  readonly LogoUrl="http://localhost:2624/CmpLogo/"
  readonly ResumeUrl="http://localhost:2624/Resume/";

  constructor(private http:HttpClient) { }

  getState():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/state');
  }

  getcity():Observable<any[]>{
    return this.http.get<any>('http://localhost:2624/api/state/GetCity');    
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Company/SaveLogo',val);
  }

  addCompany(val:any){
    return this.http.post(this.APIUrl+'/Company',val);
  }

  login(val:any){
    return this.http.post(this.APIUrl+'/Login/JobSickerLogin',val);
  }

  addJobSicker(val:any){
    return this.http.post(this.APIUrl+'/User',val);
  }  

  uploadResume(val:any){
    return this.http.post(this.APIUrl+'/User/SaveFile',val);
  }

  addJobs(val:any){
    return this.http.post(this.APIUrl+'/Job',val);
  }

  viewJobsBycmp(val:any){
    return this.http.post(this.APIUrl+'/Job/SearchByCmpId',val);
  }

  hideJob(val:any){
    return this.http.put(this.APIUrl+'/Job/UpdateStatusHide',val);
  }

  showJob(val:any){
    return this.http.put(this.APIUrl+'/Job/UpdateStatusShow',val);
  }

  getcompaniesForProfile(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Company/'+val);
  }

  updateCmp(id:any,val:any){
    return this.http.put(this.APIUrl+'/Company/'+id,val);
  }

  getAllJobs():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Job/ShowJobStatus');
  }

  getjsForProfile(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User/'+val);
  }

  updateJs(id:any,val:any){
    return this.http.put(this.APIUrl+'/User/'+id,val);
  }

  addApplicationApply(val:any){
    return this.http.post(this.APIUrl+'/Application',val);
  }

  showApplicationCmpSide(val:any){
    return this.http.post(this.APIUrl+'/Application/ShowAppliedJobCompanySide',val);
  }

  ApproeveApplication(val:any){
    return this.http.put(this.APIUrl+'/Application/ApproveApplication',val);
  }

  RejectApplication(val:any){
    return this.http.put(this.APIUrl+'/Application/RejectApplication',val);
  }

  applicantShow(val:any){
    return this.http.post(this.APIUrl+'/Application/ShowApprovedJobsCompanySide',val);
  }

  showAppliedJobJS(val:any){
    return this.http.post(this.APIUrl+'/Application/ShowAppliedJobJobScikerSide',val);
  }

  getAllCmpsNameForDrop(){
    return this.http.get(this.APIUrl+'/Company/GetAllCmpName');
  }

  getAllJobEx(){
    return this.http.get(this.APIUrl+'/Job/getAllJobEx');
  }

  getAllJobJSSideFilter(val:any){
    return this.http.post(this.APIUrl+'/Job/SearchByFilter',val);
  }

  getJobsCmpSideFilter(val:any){
    return this.http.post(this.APIUrl+'/Job/GetJobCmpSideFilter',val);
  }

  getAllCPmsAdmin(){
    return this.http.get(this.APIUrl+'/Company');
  }

  getAllJSAdmin(){
    return this.http.get(this.APIUrl+'/User');
  }

  getAllCpmsCount(){
    return this.http.get(this.APIUrl+"/Company/countCmpsForDashBord");
  }

  todaysJob(){
    return this.http.get(this.APIUrl+"/Job/todaysJob");
  }

  todaysAppCmpWise(val:any){
    return this.http.post(this.APIUrl+'/Application/todaysAppCmpWise',val);
  }

  changePass(val:any,id:any){
    return this.http.put(this.APIUrl+'/Login/'+id,val);
  }

  getSingleJob(id:any){
    return this.http.get(this.APIUrl+'/Job/'+id);
  }

  updateJob(val:any,id:any){
    return this.http.put(this.APIUrl+'/Job/'+id,val);
  }

  addFedback(val:any){
    return this.http.post(this.APIUrl+'/Feedback',val);
  }

  viewFeedback(val:any){
    return this.http.post(this.APIUrl+'/Feedback/Get',val);
  }
}


