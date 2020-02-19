import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewExpenseComponent } from './pages/new-expense/new-expense/new-expense.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'add', component: NewExpenseComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
