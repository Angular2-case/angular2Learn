import { Component } from '@angular/core';
import {AlertService} from "./services/alert.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message: string;
  constructor(private alertService: AlertService) {
     this.alertService.messageObserve.subscribe((res: any) => {
      this.message = res;
    });
  }
}
