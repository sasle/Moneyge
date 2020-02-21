import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header/header-component/header-component.component';
import { JumboComponentComponent } from './components/jumbo-component/jumbo-component.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NewExpenseComponent } from './pages/new-expense/new-expense/new-expense.component';
import { ListExpenseComponent } from './pages/list-expense/list-expense/list-expense.component';
import { CardComponent } from './components/cards/card/card.component';
import { HeaderNewComponent } from './components/header-new/header-new/header-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    JumboComponentComponent,
    MainPageComponent,
    NewExpenseComponent,
    ListExpenseComponent,
    CardComponent,
    HeaderNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
