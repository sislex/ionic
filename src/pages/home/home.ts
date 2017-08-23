import { Component } from '@angular/core';
import {ScopeProvider} from "../../providers/scope/scope";

import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public slides: [{}];
  public specializations: [{}];

  constructor(public navCtrl: NavController, public scopeProvider: ScopeProvider) {
    this.slides = scopeProvider.slides;
    this.specializations = scopeProvider.specializations;
  }



}
