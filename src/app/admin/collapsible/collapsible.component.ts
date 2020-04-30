import { Component, OnInit, Input } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  @Input() panelTitle = '';
  showPanel = false;

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  constructor() { }

  ngOnInit(): void {
  }

  togglePanel(): void {
    console.log('-togglePanel-');
    this.showPanel = !this.showPanel;
  }

}
