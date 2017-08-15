import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmployeeDetailsPage} from "../employee-details/employee-details";

/**
 * Generated class for the EmployeeListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-list',
  templateUrl: 'employee-list.html',
})
export class EmployeeListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToOtherPage() {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.navCtrl.push(EmployeeDetailsPage);
  }

}
