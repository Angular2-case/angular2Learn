import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-child',
  templateUrl: './view-child-child.component.html',
  styleUrls: ['./view-child-child.component.css']
})
export class ViewChildChildComponent implements OnInit {

  constructor() { }
  name: string;
  myName(name: string) {
      console.log(name);
      this.name = name ;
  }
  ngOnInit() {
  }

}
