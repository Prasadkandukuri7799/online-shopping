import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
{
  path :'login'
  Component:LoginComponent

}
{
  path : 'register'
  Component: RegisterComponent
}
{
  path : 'dashboard'
  component: DashboardComponent
  canActivate : [AuthGuard]

}
