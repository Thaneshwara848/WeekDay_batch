import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DemoComponent } from './demo/demo.component';
import { LoanComponent } from './loan/loan.component';
import { EduComponent } from './loan/edu/edu.component';
import { PersonalComponent } from './loan/personal/personal.component';
import { HomeComponent } from './loan/home/home.component';
import { DeptComponent } from './dept/dept.component';
import { TestingComponent } from './dept/testing/testing.component';
import { DevComponent } from './dept/dev/dev.component';
import { DeploymentComponent } from './dept/deployment/deployment.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { DatabindComponent } from './databind/databind.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubePipe } from './cube.pipe';
import { MyservedemoComponent } from './myservedemo/myservedemo.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A3Component } from './a3/a3.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { FormsModule }   from '@angular/forms';
import { ReactivedrivenfomrComponent } from './reactivedrivenfomr/reactivedrivenfomr.component';

import {ReactiveFormsModule} from '@angular/forms';
import { GetprodComponent } from './getprod/getprod.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DemoComponent,
    LoanComponent,
    EduComponent,
    PersonalComponent,
    HomeComponent,
    DeptComponent,
    TestingComponent,
    DevComponent,
    DeploymentComponent,
    ErrorpageComponent,
    DirectivedemoComponent,
    DatabindComponent,
    PipedemoComponent,
    SqrPipe,
    CubePipe,
    MyservedemoComponent,
    A1Component,
    A2Component,
    A3Component,
    FormdemoComponent,
    ReactivedrivenfomrComponent,
    GetprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
