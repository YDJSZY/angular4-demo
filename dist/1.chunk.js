webpackJsonpac__name_([1],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_routing__ = __webpack_require__(760);

/**
 * Created by luwenwe on 2017/7/12.
 */



//import { SharedModule } from  '../../components/shared.modules';
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__main_routing__["a" /* routing */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]]
    })
], MainModule);



/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var MainComponent = (function () {
    function MainComponent() {
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern(EMAIL_REGEX)
        ]);
        this.title = "main";
        this.data = [1, 2, 3];
        this.paginationMessage = { totalRecords: 2, totalPages: 10, currentPage: 1, pageSize: 200, currentTimestamp: null };
    }
    MainComponent.prototype.loadData = function (params) {
        console.log(params);
    };
    return MainComponent;
}());
MainComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'main',
        template: __webpack_require__(768),
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], MainComponent);

;


/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_component__ = __webpack_require__(755);


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<!--\n<section class=\"content\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h5>\n                <i class=\"fa fa-reorder\"></i>\n                main\n            </h5>\n        </div>\n        <div class=\"panel-body\">\n            <input [(ngModel)]=\"title\">\n            <p *ngFor=\"let item of data\">{{item}}</p>\n            &lt;!&ndash;<form class=\"example-form\" role=\"form\">\n                <md-input-container class=\"example-full-width\">\n                    <input mdInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n                    <md-error *ngIf=\"emailFormControl.hasError('pattern')\">\n                        Please enter a valid email address\n                    </md-error>\n                    <md-error *ngIf=\"emailFormControl.hasError('required')\">\n                        Email is <strong>required</strong>\n                    </md-error>\n                </md-input-container>\n            </form>&ndash;&gt;\n        </div>\n        <div class=\"panel-footer\">\n            <pagination [paginationMessage]=\"paginationMessage\" [currentTimestamp]=\"paginationMessage.currentTimestamp\" (loadData)=\"loadData($event)\"></pagination>\n        </div>\n    </div>\n</section>-->\n<h3>main!!!</h3>\n"

/***/ })

});