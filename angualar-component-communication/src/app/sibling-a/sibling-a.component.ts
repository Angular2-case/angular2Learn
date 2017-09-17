import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {AlertService} from "../services/alert.service";

@Component({
  selector: 'app-sibling-a',
  templateUrl: './sibling-a.component.html',
  styleUrls: ['./sibling-a.component.css']
})
export class SiblingAComponent implements OnInit {

  userName: string;
  constructor(private userService: UserService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.userName = this.userService.userName;
    this.alertService.success("初始化成功");
  }

}
