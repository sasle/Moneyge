import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo-component',
  templateUrl: './jumbo-component.component.html',
  styleUrls: ['./jumbo-component.component.css']
})
export class JumboComponentComponent implements OnInit {

  plural = 'despesas registradas';
  length = 0;
  constructor() { }

  ngOnInit() {
    if (this.length === 1) {
      this.plural = 'despesa registrada';
    }
  }
}
