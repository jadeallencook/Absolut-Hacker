webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__presentation_screen_presentation_screen_presentation_component__ = __webpack_require__("./src/app/presentation/screen-presentation/screen-presentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__presentation_screen_presentation_screen_presentation_component__["a" /* ScreenPresentationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__presentation_screen_presentation_screen_presentation_component__["a" /* ScreenPresentationComponent */] }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<span>\n    Developed by @jadeallencook using\n    <br />\n    <i class=\"fab fa-angular\"></i>\n</span>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/presentation/screen-presentation/screen-presentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"screen\">\n  <h1>\n    <span>ABSOLUT</span>\n    HACKER\n  </h1>\n  <span>\n    <i class=\"fas fa-bug\" data-num=\"1\"></i>\n    <i class=\"fas fa-brain\" data-num=\"2\"></i>\n    <i class=\"fas fa-database\" data-num=\"3\"></i>\n    <i class=\"fas fa-envelope\" data-num=\"4\"></i>\n  </span>\n  <ul id=\"logs\">\n  </ul>\n  <span class=\"footer\">\n      Developed by @jadeallencook <br>\n      <i class=\"fab fa-angular\" data-num=\"5\"></i>\n      <i class=\"fab fa-html5\" data-num=\"6\"></i>\n      <i class=\"fab fa-css3-alt\" data-num=\"7\"></i>\n      <i class=\"fab fa-node-js\" data-num=\"8\"></i>\n    </span>\n    <span id=\"password\">{{ password }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/presentation/screen-presentation/screen-presentation.component.scss":
/***/ (function(module, exports) {

module.exports = "div#screen {\n  text-align: center;\n  background-color: #000;\n  background-size: cover;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  font-family: 'Source Code Pro', monospace;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  div#screen span#password {\n    color: #fff;\n    position: fixed;\n    bottom: 0px;\n    right: 35px;\n    font-size: 0.75em;\n    font-weight: 100;\n    color: #2b53aa; }\n  div#screen i:hover {\n    opacity: 0.75; }\n  div#screen h1 {\n    color: #fff;\n    margin-bottom: -25px;\n    font-family: 'Anton';\n    font-size: 8em; }\n  div#screen h1 span {\n      display: block;\n      margin-bottom: -25px;\n      font-size: 0.87em; }\n  div#screen > span {\n    display: block;\n    margin: 25px 0px; }\n  div#screen > span i {\n      color: #fff;\n      font-size: 2em;\n      margin: 0px 25px;\n      display: inline-block;\n      -webkit-box-flex: .25fr;\n          -ms-flex-positive: .25fr;\n              flex-grow: .25fr; }\n  div#screen span.footer {\n    color: #fff;\n    font-size: 0.75em;\n    display: block;\n    margin-top: 25px; }\n  div#screen span.footer i {\n      font-size: 2em;\n      margin: 25px 10px; }\n  div#screen ul {\n    margin: 0px auto;\n    padding: 0px; }\n  div#screen ul li {\n      padding: 0px;\n      font-size: 0.75em;\n      line-height: 0.65em;\n      color: #fff;\n      text-align: left;\n      margin-top: 10px;\n      list-style: none; }\n  div#screen ul li span {\n        color: #419241;\n        margin-right: 5px; }\n  @media only screen and (max-device-width: 480px) {\n  div#screen > * {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); } }\n"

/***/ }),

/***/ "./src/app/presentation/screen-presentation/screen-presentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenPresentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenPresentationComponent = /** @class */ (function () {
    function ScreenPresentationComponent() {
        this.max = 8;
        this.password = '';
        this.answer = '1337';
    }
    ScreenPresentationComponent.prototype.readwrite = function () {
        var available = 'rwx-';
        var string = '';
        for (var x = 0, max = 10; x < max; x++) {
            string += available[Math.round(Math.random() * (available.length - 1))];
        }
        return string;
    };
    ScreenPresentationComponent.prototype.log = function () {
        if (document.getElementById('logs').children.length === this.max) {
            document.querySelector('ul#logs li:first-child').remove();
        }
        var screen = document.getElementById('screen');
        var log = "\n      <li " + screen.attributes[0].name + ">\n        <span " + screen.attributes[0].name + ">" + this.readwrite() + "</span>\n        TROJANHORSE#" + this.number(100, 400) + " - " + this.number(100, 400) + " " + this.date() + " " + this.time() + "\n      </li>\n    ";
        if (document.getElementById('logs').children.length < this.max) {
            document.getElementById('logs').innerHTML += log;
        }
        if (Math.round(Math.random() - 0.25)) {
            screen.style.backgroundImage = 'url("./assets/static.gif")';
        }
        else {
            screen.style.backgroundImage = 'none';
        }
    };
    ScreenPresentationComponent.prototype.print = function () {
        var _this = this;
        setInterval(function () {
            _this.log();
        }, Math.floor(this.number(200, 500)));
    };
    ScreenPresentationComponent.prototype.time = function () {
        var num1 = this.number(1, 24).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        var num2 = this.number(0, 59).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        return num1 + ':' + num2;
    };
    ScreenPresentationComponent.prototype.number = function (min, max) {
        return Math.floor(Math.random() * max) + min;
    };
    ScreenPresentationComponent.prototype.date = function () {
        var string = '';
        return string;
    };
    ScreenPresentationComponent.prototype.ngOnInit = function () {
        var _this = this;
        for (var x = 0; x < this.max; x++) {
            this.log();
        }
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.fas, .fab').click(function (event) {
            if (_this.password.length < 4) {
                _this.password += event.target.getAttribute('data-num');
            }
            else {
                _this.password = '';
            }
        });
        this.print();
    };
    ScreenPresentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-screen-presentation',
            template: __webpack_require__("./src/app/presentation/screen-presentation/screen-presentation.component.html"),
            styles: [__webpack_require__("./src/app/presentation/screen-presentation/screen-presentation.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], ScreenPresentationComponent);
    return ScreenPresentationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map