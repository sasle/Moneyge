import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo-component',
  templateUrl: './jumbo-component.component.html',
  styleUrls: ['./jumbo-component.component.css']
})
export class JumboComponentComponent implements OnInit {

  amt = localStorage.getItem("Amount");
  plural = "despesas registradas"
  constructor() { }

  ngOnInit() {
    if(parseInt(this.amt)==1){
      this.plural = "despesa registrada"
    }
  }

}
