import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';
import { DeploymentComponent } from './dept/deployment/deployment.component';
import { DeptComponent } from './dept/dept.component';
import { DevComponent } from './dept/dev/dev.component';
import { TestingComponent } from './dept/testing/testing.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyservedemoComponent } from './myservedemo/myservedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'serv',component:MyservedemoComponent
  },
  {
    path:'pipe',component:PipedemoComponent
  },
  {
    path:'data',component:DatabindComponent
  },
  {
    path:'directive',component:DirectivedemoComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
{
  path:'home',component:HomeComponent
}
  ,{
     path: 'dept', component: DeptComponent,
     children: [
          { path: 'dept/test', component:TestingComponent },
          { path: 'dept/dev', component: DevComponent },
         { path: 'dept/deployment', component: DeploymentComponent }
      ]
},
{
  path:'**',component:ErrorpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
