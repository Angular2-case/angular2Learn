/**
 * Created by sihi46 on 2017/7/28.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
@Injectable()
export class AlertService {
  private messageSu = new Subject<string>();  //
  messageObserve = this.messageSu.asObservable();

  private  setMessage(message: string) {
    this.messageSu.next(message);
  }
  public success(message: string, callback?: Function) {
    this.setMessage(message);
    callback();
  }

}
