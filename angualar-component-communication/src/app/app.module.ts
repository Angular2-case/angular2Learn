import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent-to-child/parent/parent.component';
import { ChildComponent } from './parent-to-child/child/child.component';
import { OnChangeChildComponent } from './parent-to-child/on-change-child/on-change-child.component';
import { ViewChildChildComponent } from './parent-to-child/view-child-child/view-child-child.component';
import { OutputChildComponent } from './child-to-parent/output-child/output-child.component';
import {ChildToParentComponent } from './child-to-parent/parent/parent.component';
import {UserService} from './services/user.service';
import { SiblingAComponent } from './sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-b/sibling-b.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    OnChangeChildComponent,
    ViewChildChildComponent,
    OutputChildComponent,
    ChildToParentComponent,
    SiblingAComponent,
    SiblingBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
