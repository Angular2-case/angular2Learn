import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChildToParentComponent} from "../parent/parent.component";

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
  // 传入的回调事件
  @Output() public childNameEventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(private childToParentComponent: ChildToParentComponent) { }
  ngOnInit() {
  }

  showMyName(value) {
    this.childNameEventEmitter.emit(value);
    this.childToParentComponent.childNameForInject = value;
  }
}
