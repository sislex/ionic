import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ScopeProvider} from "../../providers/scope/scope";
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

declare var google;

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
    public slides: [{}];
    public specializations: [{}];

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    private todo : FormGroup;

    constructor(public navCtrl: NavController, public scopeProvider: ScopeProvider, private formBuilder: FormBuilder) {
        this.slides = scopeProvider.slides;
        this.specializations = scopeProvider.specializations;

        this.todo = this.formBuilder.group({
            title: ['', Validators.required],
            email: [''],
            description: [''],
        });
    }

    logForm(){
        console.log(this.todo.value)
    }

    ionViewDidLoad(){
        console.log(this.mapElement);
        this.initMap();
    }

    initMap() {
        const myLatLng = {lat: 40.6777494, lng: -73.9534896};

        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 12,
            center: myLatLng,
            title: 'Hello World!'
        });

        new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Right here!'
        });


    }
}
