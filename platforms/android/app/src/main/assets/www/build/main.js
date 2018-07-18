webpackJsonp([0],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_expense__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BillsPage = /** @class */ (function () {
    function BillsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BillsPage.prototype.goToExpense = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__expense_expense__["a" /* ExpensePage */]);
    };
    BillsPage.prototype.goToBudget = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__budget_budget__["a" /* BudgetPage */]);
    };
    BillsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bills',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/bills/bills.html"*/'<ion-header>\n  <ion-grid style="background-color: #488aff;">\n    <ion-row>\n      <ion-col col-2>\n        <ion-buttons start>\n          <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-9>\n        <ion-navbar color="primary" hideBackButton>\n          <ion-title style="text-align: center">\n          Bills\n          </ion-title>\n        </ion-navbar>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="Manager">\n      <ion-segment-button value="ExpenseMonitor" (click)="goToExpense();">\n        <ion-icon name="calculator"></ion-icon>\n        Expense\n      </ion-segment-button>\n      <ion-segment-button value="FinancialHealth" (click)="goToBudget();">\n        <ion-icon name="filing"></ion-icon>\n        FinHealth\n      </ion-segment-button>\n      <ion-segment-button value="BillTracker">\n        <ion-icon name="calendar"></ion-icon>\n        Bills\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page4">\n  <div id="bills-container2"></div>\n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/bills/bills.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BillsPage);
    return BillsPage;
}());

//# sourceMappingURL=bills.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BudgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bills_bills__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expense_expense__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BudgetPage = /** @class */ (function () {
    function BudgetPage(navCtrl, platform, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.url = "http://35.200.185.110";
        platform.ready().then(function () {
            _this.http.get(_this.url + "/fhm", {}, {}).then(function (response) {
                _this.loadChart(JSON.parse(response.data));
            });
        });
    }
    BudgetPage.prototype.goToExpense = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__expense_expense__["a" /* ExpensePage */]);
    };
    BudgetPage.prototype.goToBills = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__bills_bills__["a" /* BillsPage */]);
    };
    BudgetPage.prototype.loadChart = function (chartData) {
        this.radarChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.radarCanvas.nativeElement, {
            type: 'radar',
            data: {
                labels: chartData['label'],
                datasets: [{
                        label: 'Total Score: ' + chartData['score'],
                        data: chartData['datapoints'],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    display: false
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('radarCanvas'),
        __metadata("design:type", Object)
    ], BudgetPage.prototype, "radarCanvas", void 0);
    BudgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-budget',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/budget/budget.html"*/'<ion-header>\n  <ion-grid style="background-color: #488aff;">\n    <ion-row>\n      <ion-col col-2>\n        <ion-buttons start>\n          <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-9>\n        <ion-navbar color="primary" hideBackButton>\n          <ion-title style="text-align: center">\n          Financial Health  \n          </ion-title>\n        </ion-navbar>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="Manager">\n      <ion-segment-button value="ExpenseMonitor" (click)="goToExpense();">\n        <ion-icon name="calculator"></ion-icon>\n        Expense\n      </ion-segment-button>\n      <ion-segment-button value="FinancialHealth">\n        <ion-icon name="filing"></ion-icon>\n        FinHealth\n      </ion-segment-button>\n      <ion-segment-button value="BillTracker" (click)="goToBills();">\n        <ion-icon name="calendar"></ion-icon>\n        Bills\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page-3">\n  <div id="budget-container1">\n    <canvas #radarCanvas></canvas>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/budget/budget.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], BudgetPage);
    return BudgetPage;
}());

//# sourceMappingURL=budget.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InvestmentsPage = /** @class */ (function () {
    function InvestmentsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InvestmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-investments',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/investments/investments.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Investments\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8"></ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/investments/investments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], InvestmentsPage);
    return InvestmentsPage;
}());

//# sourceMappingURL=investments.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsurancePage = /** @class */ (function () {
    function InsurancePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InsurancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-insurance',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/insurance/insurance.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Insurance\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9"></ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/insurance/insurance.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], InsurancePage);
    return InsurancePage;
}());

//# sourceMappingURL=insurance.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        platform.ready().then(function () {
        });
    }
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/wallet/wallet.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Wallet\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/wallet/wallet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepositsPage = /** @class */ (function () {
    function DepositsPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        platform.ready().then(function () {
        });
    }
    DepositsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deposits',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/deposits/deposits.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Deposits\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  \n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/deposits/deposits.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], DepositsPage);
    return DepositsPage;
}());

//# sourceMappingURL=deposits.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_expense__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, platform, loadingCtrl, toastCtrl, androidPermissions, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.androidPermissions = androidPermissions;
        this.http = http;
        this.url = "http://35.200.185.110";
        this.messages = {};
        platform.ready().then(function () {
            _this.getPerms();
        });
    }
    LoginPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 100
        });
        loader.present();
    };
    LoginPage.prototype.getPerms = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(function (success) { return console.log('Checking SMS Perms'); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_SMS); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
        this.readSMS();
    };
    LoginPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Error : Check your Email/Password !!',
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.readSMS = function () {
        var _this = this;
        this.http.setDataSerializer('json');
        var filter = {
            box: 'inbox',
            indexFrom: 0,
            maxCount: 1000,
        };
        if (SMS)
            SMS.listSMS(filter, function (ListSms) {
                for (var i = 0; i < ListSms.length; i++) {
                    _this.messages[i] = { "address": ListSms[i]['address'], "timestamp": ListSms[i]['date'], "body": ListSms[i]['body'] };
                }
                _this.http.post(_this.url + "/fetchSMS", _this.messages, { 'Content-type': 'application/json' }).then(function (response) {
                    console.log(response);
                });
            }, function (Error) {
                console.log('error list sms: ' + Error);
            });
    };
    LoginPage.prototype.load = function () {
        var login = new Map();
        login.set('vikasjohri', 'vikas');
        login.set('anshumandani', 'anshuman');
        login.set('', '');
        if (login.has(this.mail.value) && login.get(this.mail.value) == this.pass.value) {
            this.presentLoading();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__expense_expense__["a" /* ExpensePage */], { messages: this.messages });
        }
        else {
            this.presentToast();
        }
    };
    LoginPage.prototype.signup = function () {
        this.presentLoading();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "mail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pass'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "pass", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="login-form1">\n    <ion-list id="login-list3">\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input #email type="email"></ion-input>  \n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input #pass type="password"></ion-input>  \n      </ion-item>  \n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="positive" block icon-left on-click="load()">\n      <ion-icon name="key"></ion-icon>\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block on-click="signup()">\n      Or create an account\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expense_expense__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.goToExpense = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__expense_expense__["a" /* ExpensePage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <form id="signup-form2">\n    <ion-list id="signup-list4">\n      <ion-item id="signup-input3">\n        <ion-label>\n          Name\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input6">\n        <ion-label>\n          Phone Number\n        </ion-label>\n        <ion-input type="tel" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="positive" block on-click="goToExpense()">\n      Sign up\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_expense_expense__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_budget_budget__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bills_bills__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_deposits_deposits__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_investments_investments__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_insurance_insurance__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_expense_expense__["a" /* ExpensePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bills_bills__["a" /* BillsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_deposits_deposits__["a" /* DepositsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_investments_investments__["a" /* InvestmentsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_insurance_insurance__["a" /* InsurancePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_expense_expense__["a" /* ExpensePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_budget_budget__["a" /* BudgetPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_bills_bills__["a" /* BillsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_deposits_deposits__["a" /* DepositsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_investments_investments__["a" /* InvestmentsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_insurance_insurance__["a" /* InsurancePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpensePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bills_bills__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__budget_budget__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExpensePage = /** @class */ (function () {
    function ExpensePage(navCtrl, platform, navparams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.http = http;
        this.url = "http://35.200.185.110";
        this.messages = [];
        platform.ready().then(function () {
            _this.http.get(_this.url + "/expense", {}, {}).then(function (response) {
                _this.loadChart(JSON.parse(response.data));
            });
        });
    }
    ExpensePage.prototype.goToBills = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__bills_bills__["a" /* BillsPage */]);
    };
    ExpensePage.prototype.goToBudget = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__budget_budget__["a" /* BudgetPage */]);
    };
    ExpensePage.prototype.loadChart = function (chartData) {
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "Jun"],
                datasets: [{
                        label: 'Expense Heat',
                        data: [10000, 12000, 9000, 15000, 13000, 8500],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    display: false
                }
            }
        });
        this.pieChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.pieCanvas.nativeElement, {
            type: 'polarArea',
            data: {
                labels: chartData['plabel'],
                datasets: [{
                        label: 'Breakup',
                        data: chartData['pdatapoints'],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    display: false
                }
            }
        });
        this.barChart = new __WEBPACK_IMPORTED_MODULE_4_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                datasets: [{
                        labels: chartData['blabel'],
                        data: chartData['bdatapoints'],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    display: false
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], ExpensePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pieCanvas'),
        __metadata("design:type", Object)
    ], ExpensePage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], ExpensePage.prototype, "lineCanvas", void 0);
    ExpensePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expense',template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/pages/expense/expense.html"*/'<ion-header>\n  <ion-grid style="background-color: #488aff;">\n    <ion-row>\n      <ion-col col-2>\n        <ion-buttons start>\n          <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-col>\n      <ion-col col-9>\n        <ion-navbar color="primary" hideBackButton>\n          <ion-title style="text-align: center">\n          Expense\n          </ion-title>\n        </ion-navbar>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="Manager">\n      <ion-segment-button value="ExpenseMonitor">\n        <ion-icon name="calculator"></ion-icon>\n        Expense\n      </ion-segment-button>\n      <ion-segment-button value="FinancialHealth" (click)="goToBudget();">\n        <ion-icon name="filing"></ion-icon>\n        FinHealth\n      </ion-segment-button>\n      <ion-segment-button value="BillTracker" (click)="goToBills();">\n        <ion-icon name="calendar"></ion-icon>\n        Bills\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding id="page2">\n  \n  <div id="expense-container1">\n    <ion-card>\n    <ion-card-header>Total Debit-Credit</ion-card-header>\n    <ion-card-content>\n      <canvas #pieCanvas></canvas>\n    </ion-card-content>\n    </ion-card>\n  </div>\n  <div id="expense-container2">\n    <ion-card>\n    <ion-card-header>Expenditure Breakup</ion-card-header>\n    <ion-card-content>\n      <canvas #barCanvas></canvas>\n    </ion-card-content>\n    </ion-card>\n  </div>\n  <div id="expense-container3">\n    <ion-card>\n    <ion-card-header>Monthly Expense Trend</ion-card-header>\n    <ion-card-content>\n      <canvas #lineCanvas></canvas>\n    </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-card id="expense-card22">\n    <ion-list>\n      <ion-item color="positive" id="expense-list-item11">\n        <ion-icon name="ionic" item-left></ion-icon>\n        Recent Transactions\n      </ion-item>\n      <ion-item color="balanced" id="expense-list-item12">\n        <ion-icon name="add" item-left></ion-icon>\n        5000 Credited\n      </ion-item>\n      <ion-item color="assertive" id="expense-list-item13">\n        <ion-icon name="cart" item-left></ion-icon>\n        874 Debited\n      </ion-item>\n      <ion-item color="assertive" id="expense-list-item14">\n        <ion-icon name="cart" item-left></ion-icon>\n        1500 Debited\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/pages/expense/expense.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], ExpensePage);
    return ExpensePage;
}());

//# sourceMappingURL=expense.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_expense_expense__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_investments_investments__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_insurance_insurance__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_wallet_wallet__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_deposits_deposits__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToExpense = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_expense_expense__["a" /* ExpensePage */]);
    };
    MyApp.prototype.goToInvestments = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_investments_investments__["a" /* InvestmentsPage */]);
    };
    MyApp.prototype.goToInsurance = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_insurance_insurance__["a" /* InsurancePage */]);
    };
    MyApp.prototype.goToWallet = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_wallet_wallet__["a" /* WalletPage */]);
    };
    MyApp.prototype.goToDeposits = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_deposits_deposits__["a" /* DepositsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/manishsrivastava/Pixie/src/app/app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list2">\n      <ion-item menuClose="" on-click="goToExpense()" id="menu-list-item2">\n        <ion-avatar item-left>\n          <img src="assets/img/o4pKGYKAQvKjqG5FkDK0_Home.png" />\n        </ion-avatar>\n        <h2>\n          Home\n        </h2>\n      </ion-item>\n      <ion-item menuClose="" on-click="goToDeposits()" id="menu-list-item15">\n        <ion-avatar item-left>\n          <img src="assets/img/Bru6xif8SaaeXVeyWswK_Deposits.png" />\n        </ion-avatar>\n        <h2>\n          Deposits\n        </h2>\n      </ion-item>\n      <ion-item menuClose="" on-click="goToInvestments()" id="menu-list-item3">\n        <ion-avatar item-left>\n          <img src="assets/img/ZbIJOFMTRpWdFeEhezdd_Invest.jpeg" />\n        </ion-avatar>\n        <h2>\n          Investments\n        </h2>\n      </ion-item>\n      <ion-item menuClose="" on-click="goToInsurance()" id="menu-list-item4">\n        <ion-avatar item-left>\n          <img src="assets/img/4QPEEvtyRbWF96xW51YN_Life-Insurance.png" />\n        </ion-avatar>\n        <h2>\n          Insurance\n        </h2>\n      </ion-item>\n      <ion-item menuClose="" on-click="goToWallet()" id="menu-list-item5">\n        <ion-avatar item-left>\n          <img src="assets/img/4R71eF0GSFyZcpJLDgJR_Wallet.jpg" />\n        </ion-avatar>\n        <h2>\n          Wallet\n        </h2>\n      </ion-item>\n      <ion-item menuClose="" on-click="goToLogin()" id="menu-list-item6">\n        <ion-avatar item-left>\n          <img src="assets/img/Saz6MQUiSrmwGUbPyTcs_logout.png" />\n        </ion-avatar>\n        <h2>\n          Logout\n        </h2>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/manishsrivastava/Pixie/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bm": 223,
	"./bm.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-il": 242,
	"./en-il.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./gu": 260,
	"./gu.js": 260,
	"./he": 261,
	"./he.js": 261,
	"./hi": 262,
	"./hi.js": 262,
	"./hr": 263,
	"./hr.js": 263,
	"./hu": 264,
	"./hu.js": 264,
	"./hy-am": 265,
	"./hy-am.js": 265,
	"./id": 266,
	"./id.js": 266,
	"./is": 267,
	"./is.js": 267,
	"./it": 268,
	"./it.js": 268,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mn": 285,
	"./mn.js": 285,
	"./mr": 286,
	"./mr.js": 286,
	"./ms": 287,
	"./ms-my": 288,
	"./ms-my.js": 288,
	"./ms.js": 287,
	"./mt": 289,
	"./mt.js": 289,
	"./my": 290,
	"./my.js": 290,
	"./nb": 291,
	"./nb.js": 291,
	"./ne": 292,
	"./ne.js": 292,
	"./nl": 293,
	"./nl-be": 294,
	"./nl-be.js": 294,
	"./nl.js": 293,
	"./nn": 295,
	"./nn.js": 295,
	"./pa-in": 296,
	"./pa-in.js": 296,
	"./pl": 297,
	"./pl.js": 297,
	"./pt": 298,
	"./pt-br": 299,
	"./pt-br.js": 299,
	"./pt.js": 298,
	"./ro": 300,
	"./ro.js": 300,
	"./ru": 301,
	"./ru.js": 301,
	"./sd": 302,
	"./sd.js": 302,
	"./se": 303,
	"./se.js": 303,
	"./si": 304,
	"./si.js": 304,
	"./sk": 305,
	"./sk.js": 305,
	"./sl": 306,
	"./sl.js": 306,
	"./sq": 307,
	"./sq.js": 307,
	"./sr": 308,
	"./sr-cyrl": 309,
	"./sr-cyrl.js": 309,
	"./sr.js": 308,
	"./ss": 310,
	"./ss.js": 310,
	"./sv": 311,
	"./sv.js": 311,
	"./sw": 312,
	"./sw.js": 312,
	"./ta": 313,
	"./ta.js": 313,
	"./te": 314,
	"./te.js": 314,
	"./tet": 315,
	"./tet.js": 315,
	"./tg": 316,
	"./tg.js": 316,
	"./th": 317,
	"./th.js": 317,
	"./tl-ph": 318,
	"./tl-ph.js": 318,
	"./tlh": 319,
	"./tlh.js": 319,
	"./tr": 320,
	"./tr.js": 320,
	"./tzl": 321,
	"./tzl.js": 321,
	"./tzm": 322,
	"./tzm-latn": 323,
	"./tzm-latn.js": 323,
	"./tzm.js": 322,
	"./ug-cn": 324,
	"./ug-cn.js": 324,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 444;

/***/ })

},[342]);
//# sourceMappingURL=main.js.map