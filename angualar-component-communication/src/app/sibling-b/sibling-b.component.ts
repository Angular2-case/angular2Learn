import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-sibling-b',
  templateUrl: './sibling-b.component.html',
  styleUrls: ['./sibling-b.component.css']
})
export class SiblingBComponent implements OnInit {

  constructor(private userService: UserService) {
    this.userService.userName = "王二";
  }

  ngOnInit() {
  }

}
