import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HompageComponent } from './hompage/hompage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CoRegistrationpageComponent } from './co-registrationpage/co-registrationpage.component';
import { JsRegistrationpageComponent } from './js-registrationpage/js-registrationpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { AddJobComponent } from './company/add-job/add-job.component';
import { ViewJobComponent } from './company/view-job/view-job.component';
import { CoProfileComponent } from './company/co-profile/co-profile.component';

import { CompnaySharedService } from './compnay-shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApplicationComponent } from './company/application/application.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { SearchJobComponent } from './jobseeker/search-job/search-job.component';
import { JsProfileComponent } from './jobseeker/js-profile/js-profile.component';
import { ViewJobseekerComponent } from './company/view-jobseeker/view-jobseeker.component';
import { ViewApplicationComponent } from './jobseeker/view-application/view-application.component';
import { ViewCompaniesComponent } from './admin/view-companies/view-companies.component';
import { ViewJSComponent } from './admin/view-js/view-js.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { EditJobComponent } from './company/edit-job/edit-job.component';
import { ChangePassComponent } from './company/change-pass/change-pass.component';
import { JsPassComponent } from './jobseeker/js-pass/js-pass.component';
import { BrowseJobsComponent } from './browse-jobs/browse-jobs.component';
import { CoFeedbackComponent } from './company/co-feedback/co-feedback.component';
import { JsFeedbackComponent } from './jobseeker/js-feedback/js-feedback.component';
import { ViewFeedbackComponent } from './admin/view-feedback/view-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    HompageComponent,
    LoginpageComponent,
    CoRegistrationpageComponent,
    JsRegistrationpageComponent,
    AdminComponent,
    CompanyComponent,
    AddJobComponent,
    ViewJobComponent,
    CoProfileComponent,
    ApplicationComponent,
    JobseekerComponent,
    SearchJobComponent,
    JsProfileComponent,
    ViewJobseekerComponent,
    ViewApplicationComponent,
    ViewCompaniesComponent,
    ViewJSComponent,
    AdminProfileComponent,
    EditJobComponent,
    ChangePassComponent,
    JsPassComponent,
    BrowseJobsComponent,
    CoFeedbackComponent,
    JsFeedbackComponent,
    ViewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    FormsModule,
  ],
  providers: [CompnaySharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
