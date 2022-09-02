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
    CubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
