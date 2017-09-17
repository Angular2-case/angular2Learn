import {Component, OnInit, ViewChild} from '@angular/core';
import {ViewChildChildComponent} from "../view-child-child/view-child-child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  varString: string;
  @ViewChild(ViewChildChildComponent)
  viewChildChildComponent: ViewChildChildComponent;

  constructor() { }

  ngOnInit() {
    this.varString = '从父组件传过来的' ;
  }
  clickEvent(clickEvent: any) {
    console.log(clickEvent.value);
    this.viewChildChildComponent.myName(clickEvent.value);
  }

}
