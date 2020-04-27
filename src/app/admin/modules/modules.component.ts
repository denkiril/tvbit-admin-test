import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  view = 'monitoring';

  constructor() { }

  ngOnInit(): void {
  }

  changeView(view: string) {
    this.view = view;
  }

}
