import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './dept/deployment/deployment.component';
import { DeptComponent } from './dept/dept.component';
import { DevComponent } from './dept/dev/dev.component';
import { TestingComponent } from './dept/testing/testing.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
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
