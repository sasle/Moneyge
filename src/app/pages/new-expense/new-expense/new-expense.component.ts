import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  name;
  date;
  value;
  amount = 0;
  constructor() { }
  
  ngOnInit() {
  }

  clique(searchValue) {
    localStorage.setItem("Name", this.name);
      localStorage.setItem("Date", this.date);
      localStorage.setItem("Value", this.value);
      this.amount++;
      localStorage.setItem("Amount", this.amount.toString());
      alert("Registrado com sucesso!")
  }
}
