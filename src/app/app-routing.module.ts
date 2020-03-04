import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewExpenseComponent } from './pages/new-expense/new-expense/new-expense.component';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page/signup-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'add', component: NewExpenseComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
