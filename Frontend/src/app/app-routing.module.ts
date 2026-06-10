import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminComponent } from './admin/admin.component';
import { ViewCompaniesComponent } from './admin/view-companies/view-companies.component';
import { ViewFeedbackComponent } from './admin/view-feedback/view-feedback.component';
import { ViewJSComponent } from './admin/view-js/view-js.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { CoRegistrationpageComponent } from './co-registrationpage/co-registrationpage.component';
import { AddJobComponent } from './company/add-job/add-job.component';
import { ApplicationComponent } from './company/application/application.component';
import { ChangePassComponent } from './company/change-pass/change-pass.component';
import { CoFeedbackComponent } from './company/co-feedback/co-feedback.component';
import { CoProfileComponent } from './company/co-profile/co-profile.component';
import { CompanyComponent } from './company/company.component';
import { EditJobComponent } from './company/edit-job/edit-job.component';
import { ViewJobComponent } from './company/view-job/view-job.component';
import { ViewJobseekerComponent } from './company/view-jobseeker/view-jobseeker.component';
import { HompageComponent } from './hompage/hompage.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { JsFeedbackComponent } from './jobseeker/js-feedback/js-feedback.component';
import { JsPassComponent } from './jobseeker/js-pass/js-pass.component';
import { JsProfileComponent } from './jobseeker/js-profile/js-profile.component';
import { SearchJobComponent } from './jobseeker/search-job/search-job.component';
import { ViewApplicationComponent } from './jobseeker/view-application/view-application.component';
import { JsRegistrationpageComponent } from './js-registrationpage/js-registrationpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {
    path:'',component:HompageComponent
  },
  {
    path:'BrowseJobs',component:BrowseJobsComponent
  },
  {
    path:'login',component:LoginpageComponent
  },
  {
    path:'coReg',component:CoRegistrationpageComponent
  },
  {
    path:'jsReg',component:JsRegistrationpageComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'admin/ViewCompanies',component:ViewCompaniesComponent
  },
  {
    path:'admin/ViewJS',component:ViewJSComponent
  },
  {
    path:'admin/Profile',component:AdminProfileComponent
  },
  {
    path:'admin/ViewFeedback',component:ViewFeedbackComponent
  },
  {
    path:'company',component:CompanyComponent
  },
  {
    path:'company/AddJob',component:AddJobComponent
  },
  {
    path:'company/ViewJob',component:ViewJobComponent
  },
  {
    path:'company/EditJob',component:EditJobComponent
  },
  {
    path:'company/CoProfile',component:CoProfileComponent
  },
  {
    path:'company/Application',component:ApplicationComponent
  },
  {
    path:'company/ViewJobseeker',component:ViewJobseekerComponent
  },
  {
    path:'company/ChangePassword',component:ChangePassComponent
  },
  {
    path:'company/CoFeedback',component:CoFeedbackComponent
  },
  {
    path:'jobseeker',component:JobseekerComponent
  },
  {
    path:'jobseeker/SearchJob',component:SearchJobComponent
  },
  {
    path:'jobseeker/JsProfile',component:JsProfileComponent
  },
  {
    path:'jobseeker/ViewApplication',component:ViewApplicationComponent
  },
  {
    path:'jobseeker/JSPassword',component:JsPassComponent
  },
  {
    path:'jobseeker/JsFeedback',component:JsFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
