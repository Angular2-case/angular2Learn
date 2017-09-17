import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<h1>{{textContent}}</h1>',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public textContent: string ;
  constructor() { }

  ngOnInit() {
  }

}
