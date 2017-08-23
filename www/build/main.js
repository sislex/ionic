webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EmployeeDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EmployeeDetailsPage = (function () {
    function EmployeeDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emploee = null;
        this.emploee = navParams.data;
    }
    EmployeeDetailsPage.prototype.ionViewDidLoad = function (office) {
        console.log('ionViewDidLoad EmployeeDetailsPage');
    };
    EmployeeDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return EmployeeDetailsPage;
}());
EmployeeDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-employee-details',template:/*ion-inline-start:"/home/alex/projects/ionic/src/pages/employee-details/employee-details.html"*/'<!--\n  Generated template for the EmployeeDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{emploee.firstName}} {{emploee.lastName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n\n    <img src="assets/avatars/{{emploee.image}}"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Position: {{emploee.position}}\n      </ion-card-title>\n      <p>\n        {{emploee.firstName}} first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...\n      </p>\n    </ion-card-content>\n\n    <ion-item *ngFor="let technology of emploee.technologies">\n      <ion-icon name=\'{{technology.ico}}\' item-start [ngStyle]="{\'color\': technology.color}"></ion-icon>\n      {{technology.name}}\n      <div item-end>\n        {{technology.experience}}\n      </div>\n    </ion-item>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/ionic/src/pages/employee-details/employee-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], EmployeeDetailsPage);

//# sourceMappingURL=employee-details.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProjectsPage = (function () {
    function ProjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.openPage = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__employee_list_employee_list__["a" /* EmployeeListPage */]);
    };
    return ProjectsPage;
}());
ProjectsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projects',template:/*ion-inline-start:"/home/alex/projects/ionic/src/pages/projects/projects.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Projects</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="card-background-page">\n\n    <ion-card>\n\n      <ion-item>\n        <h1>Our test project</h1>\n      </ion-item>\n\n      <img src="assets/cards/1.png">\n\n      <ion-card-content>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n      </ion-card-content>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button color="primary" clear small icon-start (click)="openPage()">\n            <ion-icon name=\'ios-body\'></ion-icon>\n            2 Participates\n          </button>\n        </ion-col>\n        <ion-col align-self-center text-center>\n          <button ion-button color="primary" clear small icon-start>\n            <ion-icon name=\'ios-time-outline\'></ion-icon>\n            3 month\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n\n\n  </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/home/alex/projects/ionic/src/pages/projects/projects.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ProjectsPage);

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_scope_scope__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, scopeProvider, formBuilder) {
        this.navCtrl = navCtrl;
        this.scopeProvider = scopeProvider;
        this.formBuilder = formBuilder;
        this.slides = scopeProvider.slides;
        this.specializations = scopeProvider.specializations;
        this.todo = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            email: [''],
            description: [''],
        });
    }
    AboutPage.prototype.logForm = function () {
        console.log(this.todo.value);
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log(this.mapElement);
        this.initMap();
    };
    AboutPage.prototype.initMap = function () {
        var myLatLng = { lat: 40.6777494, lng: -73.9534896 };
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
    };
    return AboutPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], AboutPage.prototype, "mapElement", void 0);
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/alex/projects/ionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="card-wrapper">\n    <ion-card>\n\n      <ion-card-content>\n        <form [formGroup]="todo" (ngSubmit)="logForm()">\n          <ion-item>\n            <ion-input type="text" formControlName="title" placeholder="Name"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type="text" formControlName="email" placeholder="Email"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-textarea formControlName="description" placeholder="Message"></ion-textarea>\n          </ion-item>\n\n          <button ion-button type="submit" [disabled]="!todo.valid">Submit</button>\n        </form>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n      <ion-item>\n        <h2>Our Location</h2>\n        <p>Adress: New York 23066 / Pacific Street / Brooklyn </p>\n\n      </ion-item>\n\n      <div #map id="map"></div>\n\n      <ion-card-content>\n        <p>Email: email@yourwebsite.com </p>\n        <p>Mobile: +900 456 567 77 </p>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/ionic/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_scope_scope__["a" /* ScopeProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		271,
		3
	],
	"../pages/employee-details/employee-details.module": [
		268,
		2
	],
	"../pages/employee-list/employee-list.module": [
		269,
		1
	],
	"../pages/projects/projects.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_scope_scope__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, scopeProvider) {
        this.navCtrl = navCtrl;
        this.scopeProvider = scopeProvider;
        this.slides = scopeProvider.slides;
        this.specializations = scopeProvider.specializations;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/alex/projects/ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-slides pager>\n\n    <ion-slide *ngFor="let slide of slides">\n      <div class="card" [ngStyle]="{\'background-image\': \'url(assets/cards/\' + slide.image + \')\'}"></div>\n      <div class="message">\n        <h2 class="slide-title">{{slide.title}}</h2>\n        <p>{{slide.text}}</p>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="card-wrapper">\n    <ion-card *ngFor="let specialization of specializations">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-2 class="image-wrapper">\n            <ion-icon name="{{specialization.ico}}" [ngStyle]="{color: specialization.color}"></ion-icon>\n          </ion-col>\n          <ion-col col-10>\n            <ion-card-header>\n              <b>\n                {{specialization.name}}\n              </b>\n            </ion-card-header>\n            <ion-card-content>\n              {{specialization.text}}\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n\n\n\n<!--<h3>Ionic Menu Starter</h3>-->\n\n<!--<p>-->\n<!--If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.-->\n<!--</p>-->\n\n<!--<button ion-button secondary menuToggle>Toggle Menu</button>-->'/*ion-inline-end:"/home/alex/projects/ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_scope_scope__["a" /* ScopeProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_employee_list_employee_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_employee_details_employee_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_scope_scope__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__["a" /* ProjectsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_employee_list_employee_list__["a" /* EmployeeListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_employee_details_employee_details__["a" /* EmployeeDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/employee-details/employee-details.module#EmployeeDetailsPageModule', name: 'EmployeeDetailsPage', segment: 'employee-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/employee-list/employee-list.module#EmployeeListPageModule', name: 'EmployeeListPage', segment: 'employee-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__["a" /* ProjectsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_employee_list_employee_list__["a" /* EmployeeListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_employee_details_employee_details__["a" /* EmployeeDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_scope_scope__["a" /* ScopeProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_projects_projects__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_employee_list_employee_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Projects', component: __WEBPACK_IMPORTED_MODULE_5__pages_projects_projects__["a" /* ProjectsPage */] },
            { title: 'Our team', component: __WEBPACK_IMPORTED_MODULE_6__pages_employee_list_employee_list__["a" /* EmployeeListPage */] },
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alex/projects/ionic/src/app/app.html"*/'<div class="wrapper">\n  <ion-menu [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n  <!--<ion-fab right top>-->\n    <!--<button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>-->\n    <!--<ion-fab-list side="left">-->\n      <!--<button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>-->\n      <!--<button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>-->\n    <!--</ion-fab-list>-->\n  <!--</ion-fab>-->\n\n  <ion-fab top right edge>\n    <button ion-fab mini><ion-icon name="ios-arrow-down"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n</div>'/*ion-inline-end:"/home/alex/projects/ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScopeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ScopeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ScopeProvider = (function () {
    function ScopeProvider(http) {
        this.http = http;
        this.slides = [
            { title: 'Welcome to Sunreseds', text: 'Find talented workers here', image: '2.jpg' },
            { title: 'Best choice for your business', text: '', image: '3.jpg' },
        ];
        this.specializations = [
            { name: 'JavaScript', text: 'Angular, Aurelia, React', ico: 'logo-angular', color: "red" },
            { name: 'HTML5', text: 'Bootstrap 4, Materialize, SCSS, SASS, LESS', ico: 'logo-html5', color: "orange" },
            { name: 'Data & Analytics', text: 'AWS, Google Cloud Platform, Hadoop', ico: 'md-analytics', color: "#32db64" },
            { name: 'eCommerce Dev', text: 'Magento, WordPress, Marketing', ico: 'md-card', color: "burlywood" },
            { name: 'Mobile App Dev', text: 'iOS, Android', ico: 'md-phone-portrait', color: "#555" },
        ];
        this.offices = [
            {
                city: 'Sun Francisco',
                employees: [
                    {
                        firstName: 'Vitaly',
                        lastName: 'Kovalevski',
                        image: '3.png',
                        position: 'Tech Lead',
                        technologies: [
                            {
                                name: 'PHP',
                                experience: '9 years',
                                ico: 'ios-nuclear',
                                color: 'blue',
                            },
                            {
                                name: 'JavaScript',
                                experience: '7 years',
                                ico: 'ios-pulse',
                                color: 'orange',
                            },
                            {
                                name: 'Angular 4',
                                experience: '1 year',
                                ico: 'logo-angular',
                                color: 'red',
                            },
                            {
                                name: 'HTML 5',
                                experience: '7 years',
                                ico: 'logo-html5',
                                color: 'orange',
                            },
                        ]
                    },
                ]
            },
            {
                city: 'Minsk',
                employees: [
                    {
                        firstName: 'Alex',
                        lastName: 'Rozhnov',
                        image: '1.png',
                        position: 'Full stack web-developer',
                        technologies: [
                            {
                                name: 'JavaScript',
                                experience: '6 years',
                                ico: 'ios-pulse',
                                color: 'orange',
                            },
                            {
                                name: 'Angular 4',
                                experience: '1 year',
                                ico: 'logo-angular',
                                color: 'red',
                            },
                            {
                                name: 'Aurelia',
                                experience: '3 years',
                                ico: 'logo-angular',
                                color: 'red',
                            },
                            {
                                name: 'PHP',
                                experience: '8 years',
                                ico: 'ios-nuclear',
                                color: 'blue',
                            },
                            {
                                name: 'HTML 5',
                                experience: '7 years',
                                ico: 'logo-html5',
                                color: 'orange',
                            },
                        ]
                    },
                    {
                        firstName: 'Vitaly',
                        lastName: 'Losev',
                        image: '2.jpeg',
                        position: 'Front-end developer, dev-ops',
                        technologies: [
                            {
                                name: 'PHP',
                                experience: '5 years',
                                ico: 'ios-nuclear',
                                color: 'blue',
                            },
                            {
                                name: 'JavaScript',
                                experience: '2 years',
                                ico: 'ios-pulse',
                                color: 'orange',
                            },
                            {
                                name: 'Angular 4',
                                experience: '1 year',
                                ico: 'logo-angular',
                                color: 'red',
                            },
                            {
                                name: 'HTML 5',
                                experience: '4 years',
                                ico: 'logo-html5',
                                color: 'orange',
                            },
                        ]
                    },
                    {
                        firstName: 'Sergey',
                        lastName: 'Dmitrienko',
                        image: '3.png',
                        position: 'Front-end developer',
                        technologies: [
                            {
                                name: 'PHP',
                                experience: '1 year',
                                ico: 'ios-nuclear',
                                color: 'blue',
                            },
                            {
                                name: 'Angular 4',
                                experience: '1 year',
                                ico: 'logo-angular',
                                color: 'red',
                            },
                            {
                                name: 'HTML 5',
                                experience: '1 year',
                                ico: 'logo-html5',
                                color: 'orange',
                            },
                        ]
                    },
                ]
            },
        ];
        console.log('Hello ScopeProvider Provider');
    }
    return ScopeProvider;
}());
ScopeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ScopeProvider);

//# sourceMappingURL=scope.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_details_employee_details__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_scope_scope__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EmployeeListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EmployeeListPage = (function () {
    function EmployeeListPage(navCtrl, navParams, scopeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scopeProvider = scopeProvider;
        this.offices = scopeProvider.offices;
    }
    EmployeeListPage.prototype.goToOtherPage = function (office) {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__employee_details_employee_details__["a" /* EmployeeDetailsPage */], office);
    };
    return EmployeeListPage;
}());
EmployeeListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-employee-list',template:/*ion-inline-start:"/home/alex/projects/ionic/src/pages/employee-list/employee-list.html"*/'<!--\n  Generated template for the EmployeeListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Employee-list</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list *ngFor="let office of offices">\n    <ion-list-header>\n      {{office.city}}\n    </ion-list-header>\n\n    <ion-item (click)="goToOtherPage(employee)" menuToggle="right" inset="" *ngFor="let employee of office.employees">\n      <ion-avatar item-start>\n        <img src="assets/avatars/{{employee.image}}">\n      </ion-avatar>\n      <h2>{{employee.firstName}} {{employee.lastName}}</h2>\n      <h3>I\'m a big deal</h3>\n      <p>Listen, I\'ve had a pretty messed up day...</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/alex/projects/ionic/src/pages/employee-list/employee-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_scope_scope__["a" /* ScopeProvider */]])
], EmployeeListPage);

//# sourceMappingURL=employee-list.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map