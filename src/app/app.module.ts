import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { TodayViewComponent } from './components/today-view/today-view.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatExpansionModule} from "@angular/material/expansion";
import {RouterModule} from "@angular/router";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";

import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { TaskListPopUpComponent } from './components/task-list-pop-up/task-list-pop-up.component';
import {TaskPopUpComponent} from "./components/task-pop-up/task-pop-up.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { UserPupUpComponent } from './components/user-pup-up/user-pup-up.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { FilesComponent } from './components/file/files.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    TaskListComponent,
    TaskComponent,
    TodayViewComponent,
    SignInComponent,
    SignUpComponent,
    TaskListPopUpComponent,
    TaskPopUpComponent,
    UserPupUpComponent,
    FilesComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatTreeModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatFormFieldModule,
        MatExpansionModule,
        RouterModule.forRoot([
          {path: 'tasks', component: TaskViewComponent},
          {path: 'today', component: TodayViewComponent},
          {path: 'files', component: FilesComponent},
          {path: 'sign-in', component: SignInComponent},
          {path: 'sign-up', component: SignUpComponent},
        ]),
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSlideToggleModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
