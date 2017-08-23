import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeeDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html',
})
export class EmployeeDetailsPage {
  public emploee:{} = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.emploee = navParams.data;
  }

  ionViewDidLoad(office) {
    console.log('ionViewDidLoad EmployeeDetailsPage');
  }

    goBack() {
        this.navCtrl.pop();
    }

}
