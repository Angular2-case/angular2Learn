import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ChildToParentComponent implements OnInit {

  childName: string;
  childNameForInject: string;
  constructor( ) { }

  ngOnInit() {
  }

  showChildName(name: string) {
    this.childName = name;
  }
}
