import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProjectsPage} from "../pages/projects/projects";
import {EmployeeListPage} from "../pages/employee-list/employee-list";
import {EmployeeDetailsPage} from "../pages/employee-details/employee-details";
import { ScopeProvider } from '../providers/scope/scope';
import { HttpModule } from '@angular/http';
import {AboutPage} from "../pages/about/about";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProjectsPage,
    EmployeeListPage,
    EmployeeDetailsPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProjectsPage,
    EmployeeListPage,
    EmployeeDetailsPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScopeProvider
  ]
})
export class AppModule {}
