import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbo-component',
  templateUrl: './jumbo-component.component.html',
  styleUrls: ['./jumbo-component.component.css']
})
export class JumboComponentComponent implements OnInit {

  isMobile = false;
  plural = "despesas registradas"
  constructor() { }

  ngOnInit() {
    if(window.screen.width < 768) {
      this.isMobile = true;
    }
  }

}
