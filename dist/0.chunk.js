webpackJsonpac__name_([0],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shared_modules__ = __webpack_require__(762);

/**
 * Created by luwenwe on 2017/4/27.
 */





//import { AuthInterceptor } from '../../providers/httpInterceptor';


var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__home_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_7__components_shared_modules__["a" /* SharedModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes__["a" /* MyPipe */], __WEBPACK_IMPORTED_MODULE_4__pipes_pipes__["b" /* SafeHtmlPipe */]],
    })
], HomeModule);



/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_dataFields__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilClass_crud__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilClass_tableSort__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_httpService__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_globalService__ = __webpack_require__(166);








var HomeComponent = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HomeComponent, _super);
    function HomeComponent(http, globalService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.globalService = globalService;
        _this.dataFields = __WEBPACK_IMPORTED_MODULE_2__home_dataFields__["a" /* dataFields */].fields;
        _this.fieldShow = __WEBPACK_IMPORTED_MODULE_2__home_dataFields__["a" /* dataFields */].fieldShow;
        _this.dateRangeConfig = { dateRangeName: "本周" };
        _this.baseUrl = "../src/data.json";
        _this.http = http;
        _this.globalService = globalService;
        _this.tableSort = new __WEBPACK_IMPORTED_MODULE_5__utilClass_tableSort__["a" /* TableSort */](_this.dataFields, "#homeTable");
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log(this.globalService);
        /*this.term.valueChanges.debounceTime(2000).subscribe(function (term){
                console.log(term)
            })*/
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.run();
    };
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_4__utilClass_crud__["a" /* DataTable */]));
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(767),
        providers: [__WEBPACK_IMPORTED_MODULE_6__service_httpService__["a" /* HttpService */]],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__service_httpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7__service_globalService__["a" /* GlobalService */]])
], HomeComponent);

;
/*declare var $:any
@Component({
  selector: 'home',
  template: require('./home.component.html'),
  //providers:[HttpService],
})
export class HomeComponent implements OnInit{
    constructor() {

    }

    ngOnInit() {

    }

}*/


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(13);
var debounceTime_1 = __webpack_require__(105);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpBackend */
/* unused harmony export HttpHandler */
/* unused harmony export HttpClient */
/* unused harmony export HttpHeaders */
/* unused harmony export HTTP_INTERCEPTORS */
/* unused harmony export JsonpClientBackend */
/* unused harmony export JsonpInterceptor */
/* unused harmony export HttpClientJsonpModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientModule; });
/* unused harmony export HttpClientXsrfModule */
/* unused harmony export ɵinterceptingHandler */
/* unused harmony export HttpParams */
/* unused harmony export HttpUrlEncodingCodec */
/* unused harmony export HttpRequest */
/* unused harmony export HttpErrorResponse */
/* unused harmony export HttpEventType */
/* unused harmony export HttpHeaderResponse */
/* unused harmony export HttpResponse */
/* unused harmony export HttpResponseBase */
/* unused harmony export HttpXhrBackend */
/* unused harmony export XhrFactory */
/* unused harmony export HttpXsrfTokenExtractor */
/* unused harmony export ɵa */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
/* unused harmony export ɵg */
/* unused harmony export ɵh */
/* unused harmony export ɵe */
/* unused harmony export ɵf */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);

/**
 * @license Angular v4.3.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@experimental
 * @abstract
 */
var HttpHandler = (function () {
    function HttpHandler() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    HttpHandler.prototype.handle = function (req) { };
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@experimental
 * @abstract
 */
var HttpBackend = (function () {
    function HttpBackend() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    HttpBackend.prototype.handle = function (req) { };
    return HttpBackend;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * \@experimental
 */
var HttpUrlEncodingCodec = (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeValue = function (v) { return standardEncoding(v); };
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeKey = function (k) { return decodeURIComponent(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeValue = function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    var /** @type {?} */ map$$1 = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immuatable - all mutation operations return a new instance.
 *
 * \@experimental
 */
var HttpParams = (function () {
    /**
     * @param {?=} options
     */
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        this.map = !!options.fromString ? paramParser(options.fromString, this.encoder) : null;
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return ((this.map)).has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var /** @type {?} */ res = ((this.map)).get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return ((this.map)).get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(/** @type {?} */ ((this.map)).keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var /** @type {?} */ eKey = _this.encoder.encodeKey(key);
            return ((((_this.map)).get(key))).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpParams.prototype.clone = function (update) {
        var /** @type {?} */ clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    /**
     * @return {?}
     */
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return ((_this.map)).set(key, /** @type {?} */ ((((((_this.cloneFrom)).map)).get(key)))); }); /** @type {?} */
            ((this.updates)).forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var /** @type {?} */ base = (update.op === 'a' ? ((_this.map)).get(update.param) : undefined) || [];
                        base.push(/** @type {?} */ ((update.value))); /** @type {?} */
                        ((_this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var /** @type {?} */ base_1 = ((_this.map)).get(update.param) || [];
                            var /** @type {?} */ idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                ((_this.map)).set(update.param, base_1);
                            }
                            else {
                                ((_this.map)).delete(update.param);
                            }
                        }
                        else {
                            ((_this.map)).delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 * \@experimental
 */
var HttpHeaders = (function () {
    /**
     * @param {?=} headers
     */
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name = line.slice(0, index);
                        var key = name.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var /** @type {?} */ values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    /**
     * @return {?}
     */
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    /**
     * @param {?} other
     * @return {?}
     */
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, /** @type {?} */ ((other.headers.get(key))));
            _this.normalizedNames.set(key, /** @type {?} */ ((other.normalizedNames.get(key))));
        });
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.clone = function (update) {
        var /** @type {?} */ clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.applyUpdate = function (update) {
        var /** @type {?} */ key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var /** @type {?} */ value = ((update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var /** @type {?} */ base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, value);
                this.headers.set(key, base);
                break;
            case 'd':
                var /** @type {?} */ toDelete_1 = (update.value);
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var /** @type {?} */ existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(/** @type {?} */ ((_this.normalizedNames.get(key))), /** @type {?} */ ((_this.headers.get(key)))); });
    };
    return HttpHeaders;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@experimental
 */
var HttpRequest = (function () {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = third || null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((this.body)).toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var /** @type {?} */ method = update.method || this.method;
        var /** @type {?} */ url = update.url || this.url;
        var /** @type {?} */ responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var /** @type {?} */ body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var /** @type {?} */ withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var /** @type {?} */ reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var /** @type {?} */ headers = update.headers || this.headers;
        var /** @type {?} */ params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, /** @type {?} */ ((update.setHeaders))[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, /** @type {?} */ ((update.setParams))[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var HttpEventType = {};
HttpEventType.Sent = 0;
HttpEventType.UploadProgress = 1;
HttpEventType.ResponseHeader = 2;
HttpEventType.DownloadProgress = 3;
HttpEventType.Response = 4;
HttpEventType.User = 5;
HttpEventType[HttpEventType.Sent] = "Sent";
HttpEventType[HttpEventType.UploadProgress] = "UploadProgress";
HttpEventType[HttpEventType.ResponseHeader] = "ResponseHeader";
HttpEventType[HttpEventType.DownloadProgress] = "DownloadProgress";
HttpEventType[HttpEventType.Response] = "Response";
HttpEventType[HttpEventType.User] = "User";
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@experimental
 * @abstract
 */
var HttpResponseBase = (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@experimental
 */
var HttpHeaderResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@experimental
 */
var HttpResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body || null;
        return _this;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@experimental
 */
var HttpErrorResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpErrorResponse, _super);
    /**
     * @param {?} init
     */
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 * \@experimental
 */
var HttpClient = (function () {
    /**
     * @param {?} handler
     */
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = (first);
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            req = new HttpRequest(first, /** @type {?} */ ((url)), options.body || null, {
                headers: options.headers,
                params: options.params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var /** @type {?} */ events$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__["concatMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(req), function (req) { return _this.handler.handle(req); });
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var /** @type {?} */ res$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__["filter"].call(events$, function (event) { return event instanceof HttpResponse; });
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        });
                    case 'blob':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        });
                    case 'text':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        });
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) { return res.body; });
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    return HttpClient;
}());
HttpClient.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpClient.ctorParameters = function () { return [
    { type: HttpHandler, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 * \@experimental
 */
var HttpInterceptorHandler = (function () {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * \@experimental
 */
var HTTP_INTERCEPTORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    return NoopInterceptor;
}());
NoopInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NoopInterceptor.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 * \@experimental
 * @abstract
 */
var JsonpCallbackContext = (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@experimental
 */
var JsonpClientBackend = (function () {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var /** @type {?} */ callback = _this.nextCallback();
            var /** @type {?} */ url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var /** @type {?} */ node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var /** @type {?} */ body = null;
            // Whether the response callback has been called.
            var /** @type {?} */ finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var /** @type {?} */ cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var /** @type {?} */ cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var /** @type {?} */ onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the resposne is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var /** @type {?} */ onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    return JsonpClientBackend;
}());
JsonpClientBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JsonpClientBackend.ctorParameters = function () { return [
    { type: JsonpCallbackContext, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"],] },] },
]; };
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@experimental
 */
var JsonpInterceptor = (function () {
    /**
     * @param {?} jsonp
     */
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(/** @type {?} */ (req));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    return JsonpInterceptor;
}());
JsonpInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JsonpInterceptor.ctorParameters = function () { return [
    { type: JsonpClientBackend, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@experimental
 * @abstract
 */
var XhrFactory = (function () {
    function XhrFactory() {
    }
    /**
     * @abstract
     * @return {?}
     */
    XhrFactory.prototype.build = function () { };
    return XhrFactory;
}());
/**
 * A factory for \@{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    return BrowserXhr;
}());
BrowserXhr.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserXhr.ctorParameters = function () { return []; };
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * \@experimental
 */
var HttpXhrBackend = (function () {
    /**
     * @param {?} xhrFactory
     */
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var /** @type {?} */ xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var /** @type {?} */ detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                xhr.responseType = (req.responseType.toLowerCase());
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var /** @type {?} */ reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var /** @type {?} */ headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var /** @type {?} */ partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
                var /** @type {?} */ statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var /** @type {?} */ headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var /** @type {?} */ url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var /** @type {?} */ onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var /** @type {?} */ body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                    // Strip a common XSSI prefix from string responses.
                    // TODO: determine if this behavior should be optional and moved to an interceptor.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var /** @type {?} */ ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (ok && typeof body === 'string' && req.responseType === 'json') {
                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                    try {
                        body = JSON.parse(body);
                    }
                    catch (error) {
                        // Even though the response status was 2xx, this is still an error.
                        ok = false;
                        // The parse error contains the text of the body that failed to parse.
                        body = ({ error: error, text: body });
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var /** @type {?} */ onError = function (error) {
                var /** @type {?} */ res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var /** @type {?} */ sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var /** @type {?} */ progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var /** @type {?} */ progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    return HttpXhrBackend;
}());
HttpXhrBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXhrBackend.ctorParameters = function () { return [
    { type: XhrFactory, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@experimental
 * @abstract
 */
var HttpXsrfTokenExtractor = (function () {
    function HttpXsrfTokenExtractor() {
    }
    /**
     * Get the XSRF token to use with an outgoing request.
     *
     * Will be called for every request, so the token may change between requests.
     * @abstract
     * @return {?}
     */
    HttpXsrfTokenExtractor.prototype.getToken = function () { };
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = (function () {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var /** @type {?} */ cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_common__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    return HttpXsrfCookieExtractor;
}());
HttpXsrfCookieExtractor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXsrfCookieExtractor.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [XSRF_COOKIE_NAME,] },] },
]; };
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = (function () {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var /** @type {?} */ lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var /** @type {?} */ token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    return HttpXsrfInterceptor;
}());
HttpXsrfInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXsrfInterceptor.ctorParameters = function () { return [
    { type: HttpXsrfTokenExtractor, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [XSRF_HEADER_NAME,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * Meant to be used as a factory function within `HttpClientModule`.
 *
 * \@experimental
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 * \@experimental
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * `NgModule` which adds XSRF protection support to outgoing requests.
 *
 * Provided the server supports a cookie-based XSRF protection system, this
 * module can be used directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no such names are provided, the default is to use `X-XSRF-TOKEN` for
 * the header name and `XSRF-TOKEN` for the cookie name.
 *
 * \@experimental
 */
var HttpClientXsrfModule = (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    return HttpClientXsrfModule;
}());
HttpClientXsrfModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientXsrfModule.ctorParameters = function () { return []; };
/**
 * `NgModule` which provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 * \@experimental
 */
var HttpClientModule = (function () {
    function HttpClientModule() {
    }
    return HttpClientModule;
}());
HttpClientModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                providers: [
                    HttpClient,
                    // HttpHandler is the backend + interceptors and is constructed
                    // using the interceptingHandler factory function.
                    {
                        provide: HttpHandler,
                        useFactory: interceptingHandler,
                        deps: [HttpBackend, [new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"](HTTP_INTERCEPTORS)]],
                    },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientModule.ctorParameters = function () { return []; };
/**
 * `NgModule` which enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 * \@experimental
 */
var HttpClientJsonpModule = (function () {
    function HttpClientJsonpModule() {
    }
    return HttpClientJsonpModule;
}());
HttpClientJsonpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientJsonpModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=http.es5.js.map


/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataFields; });
/**
 * Created by luwenwe on 2017/7/12.
 */
var dataFields = {
    fields: [
        {
            "name": "ID",
            "fieldName": "id",
            "show": true,
            "use": true,
            "sort": true
        },
        {
            "name": "用户名",
            "fieldName": "username",
            "show": true,
            "sort": true,
            "use": true,
            "edit": true,
            "model": "editingObject.username",
            "inputType": "text",
            "placeholder": "必填",
            "required": true,
            "validators": [{
                    "name": "required",
                    "required": "required",
                    "description": "必填"
                }],
            "validateFunc": function (formValue) {
                if (!formValue.hasOwnProperty(this.fieldName) || !formValue[this.fieldName])
                    return "required";
            },
            "render": function (value) {
                return "<a href=\"#\" style=\"color: #337ab7;\">" + value + "</a>";
            }
        },
        {
            "name": "密码",
            "fieldName": "password",
            "show": true,
            "use": true,
            "edit": true,
            "model": "editingObject.password",
            "inputType": "password",
            "required": true,
            "placeholder": "必填",
            "validators": [{
                    "name": "required",
                    "required": "required",
                    "description": "必填"
                }, {
                    "name": "customValidator",
                    "customValidator": function (control) {
                        var value = control.value;
                        if (value && (value.length > 16 || value.length < 6))
                            return { "customValidator": true };
                        return null;
                    },
                    "description": "6~16"
                }],
            "render": function (value) {
                return value;
            }
        },
        {
            "name": "人数",
            "fieldName": "people",
            "show": true,
            "use": true,
            "edit": true,
            "model": "editingObject.people",
            "inputType": "number",
            "required": true,
            "placeholder": "必填",
            "validators": [{
                    "name": "required",
                    "required": "required",
                    "description": "必填"
                }]
        },
        {
            "name": "选择日期",
            "fieldName": "myDate",
            "show": true,
            "use": true,
            "edit": true,
            "placeholder": "必选",
            "required": true,
            /* "format":"YYYY-MM-DD HH:mm:ss",
             "showTime":true,*/
            "model": "editingObject.myDate",
            "inputType": "date",
            "validators": [{
                    "name": "required",
                    "required": "required",
                    "description": "必选"
                }],
            "render": function (value) {
                return value;
            }
        },
        {
            "name": "爱好",
            "fieldName": "hobby",
            "show": true,
            "use": true,
            "edit": true,
            "model": "editingObject.hobby",
            "inputType": "select",
            "placeholder": "必选",
            "source": "selectData",
            "mode": "multiple",
            "required": true,
            "validators": [{
                    "name": "required",
                    "required": "required",
                    "description": "必选"
                }],
            "render": function (value) {
                return value;
            }
        },
        {
            "name": "确定",
            "fieldName": "confirm",
            "show": true,
            "use": true,
            "edit": true,
            "model": "editingObject.confirm",
            "inputType": "switch",
            "render": function (value) {
                return value;
            }
        },
        {
            "name": "启用",
            "fieldName": "enabled",
            "show": true,
            "use": true,
            "edit": true,
            "model": "editingObject.enabled",
            "inputType": "switch",
            "render": function (value) {
                return value;
            }
        },
        {
            "name": "描述",
            "fieldName": "description",
            "show": true,
            "use": true,
            "edit": true,
            "model": "editingObject.description",
            "inputType": "textarea",
            "render": function (value) {
                return value;
            }
        },
    ],
    fieldShow: {
        id: true,
        username: true,
        password: true,
        hobby: true,
        myDate: true,
        confirm: true,
        enabled: true,
        description: true,
        people: true
    }
};



/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(754);


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);


/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldCheckBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DateRangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__(418);

/**
 * Created by luwenwe on 2017/7/12.
 */


var UiPagination = __webpack_require__(773);
var DateRange = __webpack_require__(772);
var FieldCheckBoxComponent = (function () {
    function FieldCheckBoxComponent() {
        this.showPanel = false;
    }
    FieldCheckBoxComponent.prototype.ngOnInit = function () {
        var self = this;
        document.onclick = function (e) {
            var event = e || window.event;
            event.stopPropagation() || event.cancelBubble;
            self.showPanel = false;
        };
    };
    FieldCheckBoxComponent.prototype.openbindclick = function (e) {
        var event = e || window.event;
        event.stopPropagation() || event.cancelBubble;
        this.showPanel = !this.showPanel;
    };
    FieldCheckBoxComponent.prototype.selectField = function (e, name) {
        var event = e || window.event;
        event.stopPropagation() || event.cancelBubble;
        if (!name)
            return;
        this.fieldshow[name] = !this.fieldshow[name];
    };
    return FieldCheckBoxComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], FieldCheckBoxComponent.prototype, "datafields", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], FieldCheckBoxComponent.prototype, "fieldshow", void 0);
FieldCheckBoxComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'field-check-box',
        template: __webpack_require__(770),
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], FieldCheckBoxComponent);

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.paginationMessage = { totalRecords: 0, totalPages: 1, currentPage: 1, page_size: 20 };
        this.loadData = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.currentTimestamp = 0;
        this.params = { page_size: 20, page: 1 };
    }
    PaginationComponent.prototype.everyPageSize = function () {
        this.params.page_size = this.paginationMessage.page_size;
        this.params.page = 1;
        this.loadData.emit(this.params);
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        if (!this.currentTimestamp)
            return;
        this.uiPagination.totalPage = this.paginationMessage.totalPages;
        this.uiPagination.currentPage = 1;
        this.uiPagination.init();
        this.gotoPage();
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.ngAfterViewInit = function () {
        this.uiPagination = new UiPagination(this.paginationMessage.totalPages, this.paginationEle.nativeElement);
        this.uiPagination.init();
        this.gotoPage();
    };
    PaginationComponent.prototype.gotoPage = function () {
        $(this.paginationEle.nativeElement).on("gotoPage", function (event, currentPage) {
            this.params.page = currentPage;
            this.loadData.emit(this.params);
        }.bind(this));
    };
    PaginationComponent.prototype.ngDoCheck = function () {
    };
    return PaginationComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], PaginationComponent.prototype, "paginationMessage", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Number)
], PaginationComponent.prototype, "currentTimestamp", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], PaginationComponent.prototype, "loadData", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("pagination"),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], PaginationComponent.prototype, "paginationEle", void 0);
PaginationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'pagination',
        template: __webpack_require__(771),
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], PaginationComponent);

var EditModalComponent = (function () {
    function EditModalComponent(el, _message) {
        this._message = _message;
        this.saveForm = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.isVisible = false;
        this.el = el;
    }
    EditModalComponent.prototype.ngOnInit = function () {
    };
    EditModalComponent.prototype.ngOnChanges = function (change) {
        if (this.currentTimestamp) {
            this.translateForm();
            this.isVisible = true;
        }
    };
    EditModalComponent.prototype.translateForm = function () {
        for (var _i = 0, _a = this.dataFields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.inputType == "date") {
                var value = this.editForm.controls[field.fieldName].value;
                if (!value)
                    continue;
                this.editForm.controls[field.fieldName].setValue(new Date(value));
            }
        }
    };
    EditModalComponent.prototype.handleCancel = function (e) {
        this.isVisible = false;
    };
    EditModalComponent.prototype.onSubmit = function (event) {
        if (!this.validateForm(this.editForm)) {
            this._message.create('error', '表单填写有误', { nzDuration: 5000 });
            return;
        }
        this.saveForm.emit(this.editForm.value);
        this.isVisible = false;
    };
    EditModalComponent.prototype.validateForm = function (form) {
        for (var control in form.controls) {
            if (!form.controls[control].valid) {
                var result = this.runValidate(control);
                if (!result)
                    return false;
            }
        }
        return true;
    };
    EditModalComponent.prototype.runValidate = function (control) {
        for (var _i = 0, _a = this.dataFields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.fieldName == control) {
                if (!field.validators)
                    continue;
                for (var _b = 0, _c = field.validators; _b < _c.length; _b++) {
                    var validator = _c[_b];
                    var value = this.editForm.controls[control].value;
                    if (validator.name == "required") {
                        if ((!value && parseInt(value) != 0) || value.length == 0)
                            return false;
                    }
                    else {
                        return validator[validator.name](value);
                    }
                }
            }
        }
        return true;
    };
    EditModalComponent.prototype.uiSelected = function (e, control) {
        control.selectValue = e.id;
        console.log(control);
    };
    return EditModalComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], EditModalComponent.prototype, "dataFields", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], EditModalComponent.prototype, "editForm", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], EditModalComponent.prototype, "currentTimestamp", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], EditModalComponent.prototype, "selectSources", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], EditModalComponent.prototype, "saveForm", void 0);
EditModalComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'edit-modal',
        template: __webpack_require__(769)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["b" /* NzMessageService */]])
], EditModalComponent);

var DateRangeComponent = (function () {
    function DateRangeComponent(el) {
        this.dateChangeFunc = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.el = el;
        this.config = {
            minView: 2,
            dateRangeName: "今天"
        };
    }
    DateRangeComponent.prototype.ngOnInit = function () {
        var self = this;
    };
    DateRangeComponent.prototype.ngAfterViewInit = function () {
        var dateRange = new DateRange(this.dateRangeSelectEle.nativeElement, Object.assign(this.config, this.dateRangeConfig));
        //setTimeout(function (){
        this.renderDatePicker(dateRange.currentDateRange);
        //}.bind(this))
        dateRange.targetElement.on("dataRangeChange", function (event, dateRange) {
            this.renderDatePicker(dateRange, true);
        }.bind(this));
    };
    DateRangeComponent.prototype.renderDatePicker = function (dateRange, emitEvent) {
        this.dateRange.begin_time = new Date(dateRange.begin_time).getTime();
        this.dateRange.end_time = new Date(dateRange.end_time).getTime();
        if (emitEvent)
            this.dateChangeFunc.emit();
    };
    return DateRangeComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], DateRangeComponent.prototype, "dateRange", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], DateRangeComponent.prototype, "dateRangeConfig", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], DateRangeComponent.prototype, "dateChangeFunc", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("dateRangeSelect"),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], DateRangeComponent.prototype, "dateRangeSelectEle", void 0);
DateRangeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'daterange',
        template: "<span>\n                    <div nz-form-item style=\"margin-right: 5px;\">\n                        <div nz-form-control>\n                            <select class='custom-select' #dateRangeSelect id='dateSelect'></select>\n                        </div>\n                    </div>\n                    <div nz-form-item style=\"margin-right: 5px\">\n                    <div nz-form-control>\n                        <nz-datepicker [nzSize]=\"'large'\" [(ngModel)]=\"dateRange.begin_time\" [nzPlaceHolder]=\"'\u5F00\u59CB\u65E5\u671F'\"></nz-datepicker>\n                    </div>\n                </div>\n                <div nz-form-item>\n                    <p nz-form-split style=\"margin-top: 5px\">-</p>\n                </div>\n                <div nz-form-item style=\"margin-left: -12px\">\n                    <div nz-form-control>\n                        <nz-datepicker [nzSize]=\"'large'\" [(ngModel)]=\"dateRange.end_time\" [nzPlaceHolder]=\"'\u7ED3\u675F\u65E5\u671F'\"></nz-datepicker>\n                    </div>\n                </div>\n            </span>"
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
], DateRangeComponent);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_component__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_directives__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__ = __webpack_require__(418);

/**
 * Created by luwenwei on 17/7/23.
 */






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NO_ERRORS_SCHEMA"]],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__["a" /* NgZorroAntdModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__directives_directives__["a" /* DatepickerDirective */], __WEBPACK_IMPORTED_MODULE_5__directives_directives__["b" /* BeautyDirective */], __WEBPACK_IMPORTED_MODULE_5__directives_directives__["c" /* InitDirective */], __WEBPACK_IMPORTED_MODULE_4__global_component__["a" /* FieldCheckBoxComponent */], __WEBPACK_IMPORTED_MODULE_4__global_component__["b" /* PaginationComponent */], __WEBPACK_IMPORTED_MODULE_4__global_component__["c" /* EditModalComponent */], __WEBPACK_IMPORTED_MODULE_4__global_component__["d" /* DateRangeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__directives_directives__["a" /* DatepickerDirective */], __WEBPACK_IMPORTED_MODULE_5__directives_directives__["b" /* BeautyDirective */], __WEBPACK_IMPORTED_MODULE_6_ng_zorro_antd__["a" /* NgZorroAntdModule */], __WEBPACK_IMPORTED_MODULE_5__directives_directives__["c" /* InitDirective */], __WEBPACK_IMPORTED_MODULE_4__global_component__["a" /* FieldCheckBoxComponent */], __WEBPACK_IMPORTED_MODULE_4__global_component__["b" /* PaginationComponent */], __WEBPACK_IMPORTED_MODULE_4__global_component__["c" /* EditModalComponent */], __WEBPACK_IMPORTED_MODULE_4__global_component__["d" /* DateRangeComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]]
    })
], SharedModule);



/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BeautyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InitDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);

/**
 * Created by luwenwe on 2017/7/17.
 */

var BeautyDirective = (function () {
    function BeautyDirective(el) {
        this.el = el;
    }
    BeautyDirective.prototype.ngOnInit = function () {
        //console.log(this.bgc)
        this.el.nativeElement.style.backgroundColor = this.bgc;
    };
    BeautyDirective.prototype.onClick = function () {
        console.log(this);
    };
    return BeautyDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", String)
], BeautyDirective.prototype, "bgc", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])("click"),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", []),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:returntype", void 0)
], BeautyDirective.prototype, "onClick", null);
BeautyDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[beauty]'
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
], BeautyDirective);
var InitDirective = (function () {
    function InitDirective(el) {
        this.el = el;
        this.y = "x";
    }
    InitDirective.prototype.ngOnInit = function () {
        this.newData = this.init(this.params);
        //console.log(this.newData)
    };
    return InitDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], InitDirective.prototype, "params", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], InitDirective.prototype, "init", void 0);
InitDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[init]',
        exportAs: "andy"
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
], InitDirective);
var DatepickerDirective = (function () {
    function DatepickerDirective(el) {
        this.el = el;
        this.el = el;
    }
    DatepickerDirective.prototype.ngOnChanges = function (changes) {
        if (!this.dateModel.value)
            return;
        $(this.el.nativeElement).datetimepicker('update', this.dateModel.value);
    };
    DatepickerDirective.prototype.ngOnInit = function () {
        var format = this.dateFormat;
        var minView = parseInt(this.minView || 2);
        var self = this;
        var datepicker = $(this.el.nativeElement).datetimepicker({
            format: format || "yyyy-mm-dd",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            minView: minView,
        });
        datepicker.on("changeDate", function (e) {
            if (self.dateModel) {
                if (self.dateModel.setValue) {
                    self.dateModel.setValue(e.currentTarget.value);
                }
                else {
                    self.dateModel = e.currentTarget.value;
                }
            }
        });
    };
    return DatepickerDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], DatepickerDirective.prototype, "dateModel", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], DatepickerDirective.prototype, "dateFormat", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Object)
], DatepickerDirective.prototype, "minView", void 0);
DatepickerDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[datepicker]'
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
], DatepickerDirective);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);

/**
 * Created by luwenwe on 2017/7/19.
 */


// 管道装师符 ， name就是管道名称
var MyPipe = (function () {
    function MyPipe() {
    }
    // value : 就是传入的值
    // ...args : 参数集合(用了...拓展符),会把数组内的值依次作为参数传入
    // ...args可以改成我们常规的写法(value:any,start:number,end:number)
    MyPipe.prototype.transform = function (input) {
        return input + "aaa";
    };
    return MyPipe;
}());
MyPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'addStr'
    })
], MyPipe);

var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafeHtmlPipe;
}());
SafeHtmlPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'safeHtml' }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
], SafeHtmlPipe);



/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/**
 * Created by luwenwe on 2017/8/7.
 */


var DataTable = (function () {
    function DataTable() {
        this.fb = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]();
        this.loadObjectParams = { "page": 1, "page_size": 20, "ordering": "", "search": "", "begin_time": "", "end_time": "" };
        this.paginationMessage = { "totalRecords": null, "totalPages": 1, "currentPage": 1, "page_size": 20, "pageReady": false, "currentTimestamp": null };
        this.selectSources = {
            selectData: [{ code: '1', description: '篮球' }, { code: '2', description: '音乐' }, { code: '3', description: '跑步' }],
            translate: function (source, name) {
                if (this[name])
                    return this[name];
                var array = [];
                for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                    var item = source_1[_i];
                    array.push({ code: item.code, description: item.description });
                }
                return this[name] = array;
            }
        };
    }
    DataTable.prototype.makeUrl = function (restApi) {
        if (restApi.startsWith("/")) {
            return "/api/v0" + restApi;
        }
        else {
            return "/api/v0/" + restApi;
        }
    };
    DataTable.prototype.loadFirstPage = function (params) {
        params = Object.assign({ page: 1 }, params || {});
        this.loadObjects(params, true);
    }; //载入第一页
    DataTable.prototype.loadObjects = function (params, reset) {
        this.loadObjectParams = Object.assign(this.loadObjectParams, params || {});
        this.translateDatePicker();
        var promise = this.http.getData({
            "url": this.baseUrl,
            "params": this.loadObjectParams
        });
        promise.then(function (res) {
            if (res.status == 200)
                return res;
        }).then(function (res) {
            return this.parseResponse(res.json());
        }.bind(this)).then(function (res) {
            if (reset)
                this.paginationMessage.currentTimestamp = new Date().getTime();
        }.bind(this)).catch(function (error) {
            console.debug(error);
        });
    }; //载入资源
    DataTable.prototype.parseResponse = function (response) {
        //return this.dataStore = response;
        this.objectList = response.results;
        this.paginationMessage["totalRecords"] = response.count;
        this.paginationMessage["totalPages"] = response.num_pages;
        this.paginationMessage["pageReady"] = true;
        this.paginationMessage["currentPage"] = this.loadObjectParams.page;
        this.paginationMessage["summary"] = response.summary;
        return this.objectList;
    };
    DataTable.prototype.renderData = function (params) {
        var renderData = function (params) {
            var fieldObj = params[0], singleData = params[1];
            this.currentRepeatObj = singleData;
            var key = fieldObj["fieldName"];
            if (fieldObj["render"]) {
                return fieldObj["render"].apply(this, [singleData[key]]);
            }
            return singleData[key];
        }.bind(this);
        return renderData(params);
    }; /*对后端返回的数据进行合适的转换以供前端展示*/
    DataTable.prototype.createTableForm = function () {
        var obj = {}, validators = [];
        for (var _i = 0, _a = this.dataFields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (!field.edit)
                continue;
            obj[field.fieldName] = [field.defaultValue || ''];
            if (!field.validators)
                continue;
            for (var _b = 0, _c = field.validators; _b < _c.length; _b++) {
                var error = _c[_b];
                validators.push(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */][error.name] || error[error.name]);
            }
            obj[field.fieldName][1] = __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].compose(validators);
        }
        this.tableForm = this.fb.group(obj);
    };
    DataTable.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    DataTable.prototype.createTable = function () {
        this.tableForm ? this.tableForm.reset() : this.createTableForm();
        this.tableForm.currentTimestamp = new Date().getTime();
        this.tableForm.title = "新增";
    };
    DataTable.prototype.edit = function (obj) {
        this.tableForm ? this.tableForm.reset() : this.createTableForm();
        for (var control in obj) {
            if (!this.tableForm.controls.hasOwnProperty(control))
                continue;
            this.tableForm.controls[control].setValue(obj[control]);
        }
        this.tableForm.currentTimestamp = new Date().getTime();
        this.tableForm.title = "编辑";
    };
    DataTable.prototype.beforeSave = function (data) {
        return data;
    };
    DataTable.prototype.saveForm = function (data) {
        var data = this.beforeSave(data);
        var promise = this.http.postData({ url: this.baseUrl, data: data });
        promise.then(function (res) {
            console.log(res);
        });
    };
    DataTable.prototype.toggleDetail = function (obj) {
        return obj.showDetail = !obj.showDetail;
    };
    DataTable.prototype.loadData = function (params) {
        console.log(params);
    };
    DataTable.prototype.quickSearch = function () {
        this.loadFirstPage();
    };
    DataTable.prototype.translateDatePicker = function (date, loadObject) {
        var begin_time = new Date(this.loadObjectParams.begin_time).getTime();
        var end_time = new Date(this.loadObjectParams.end_time).getTime();
        if (begin_time > end_time) {
            var t = end_time;
            end_time = begin_time + 23 * 60 * 60 * 1000 + 59 * 60 * 1000 + 59 * 1000 + 999;
            begin_time = t - 23 * 60 * 60 * 1000 - 59 * 60 * 1000 - 59 * 1000 - 999;
        }
        this.loadObjectParams.begin_time = begin_time;
        this.loadObjectParams.end_time = end_time;
        /*this.currRouteStorage.dateRangeName = date.dateRangeName;//当前页面的日期选择
        this.setLocalStorage(this.storage);*/
    }; //处理发送给后端的日期格式
    DataTable.prototype.sort = function (event, field) {
        var o = this.tableSort.beginSort(event.target, field);
        this.loadObjects({ ordering: o });
    };
    DataTable.prototype.run = function () {
        this.loadFirstPage();
    };
    return DataTable;
}());



/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSort; });
var TableSort = (function () {
    function TableSort(dataFields, table, initSort) {
        this.dataFields = dataFields;
        this.tbElement = table;
        this.initSort = initSort;
        this.setSortData();
    }
    TableSort.prototype.setSortData = function () {
        var sortObj = {};
        for (var _i = 0, _a = this.dataFields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.sort) {
                sortObj[field.fieldName] = true;
            }
        }
        this.sortData = sortObj;
        if (this.initSort) {
            var initSort;
            if (this.initSort.indexOf("-") != -1) {
                initSort = this.initSort.split("-")[1];
                this.sortData[initSort] = true;
            }
            else {
                initSort = this.initSort;
                this.sortData[initSort] = false;
            }
            setTimeout(function () {
                var target = $(this.tbElement).find(".sort[sortName=" + initSort + "]");
                this.beginSort(target, initSort);
            }.bind(this));
        }
    };
    TableSort.prototype.beginSort = function (target, field) {
        if (this.sortData[field]) {
            this.sortData[field] = false;
            $(this.tbElement).find(".sort").removeClass().addClass("fa fa-sort sort");
            $(target).removeClass().addClass("fa fa-sort-amount-desc sort");
            return "-" + field;
        }
        else {
            this.sortData[field] = true;
            $(this.tbElement).find(".sort").removeClass().addClass("fa fa-sort sort");
            $(target).removeClass().addClass("fa fa-sort-amount-asc sort");
            return field;
        }
    };
    return TableSort;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<nz-card>\n    <ng-template #title>\n        <nz-breadcrumb>\n            <nz-breadcrumb-item>首页</nz-breadcrumb-item>\n            <nz-breadcrumb-item>home</nz-breadcrumb-item>\n        </nz-breadcrumb>\n    </ng-template>\n    <ng-template #body>\n        <div class=\"row\" style=\"margin:-24px;margin-bottom: 0;padding: 0 0 15px 15px;\">\n            <form nz-form [nzLayout]=\"'inline'\" class=\"filter-form\">\n                <daterange [dateRangeConfig]=\"dateRangeConfig\" [dateRange]=\"loadObjectParams\" (dateChangeFunc)=\"loadFirstPage()\"></daterange>\n                <div nz-form-item>\n                    <div nz-form-control>\n                        <nz-input [nzPlaceHolder]=\"'搜索'\" [nzSize]=\"'large'\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"loadObjectParams.search\">\n                            <ng-template #prefix>\n                                <i class=\"anticon anticon-search\"></i>\n                            </ng-template>\n                        </nz-input>\n                    </div>\n                </div>\n                <div nz-form-item>\n                    <div nz-form-control>\n                        <nz-select nzAllowClear style=\"width: 159px\" [nzNotFoundContent]=\"'无选项'\"\n                                   [nzShowSearch]=\"true\" [nzPlaceHolder]=\"'爱好'\"\n                                   [ngModelOptions]=\"{standalone: true}\"\n                                   [(ngModel)]=\"loadObjectParams.hobby\"\n                                   [nzSize]=\"'large'\" [name]=\"'hobby'\"\n                                   [id]=\"'id_hobby'\">\n                            <nz-option *ngFor=\"let ops of selectSources.selectData\" [nzLabel]=\"ops.description\" [nzValue]=\"ops.code\"></nz-option>\n                        </nz-select>\n                    </div>\n                </div>\n                <div nz-form-item>\n                    <div nz-form-control>\n                        <button nz-button [nzType]=\"'primary'\" (click)=\"quickSearch()\">\n                            <span>Search</span>\n                        </button>\n                    </div>\n                </div>\n                <div nz-form-item style=\"vertical-align: text-top\">\n                    <field-check-box [datafields]=\"dataFields\" [fieldshow]=\"fieldShow\"></field-check-box>\n                </div>\n                <div nz-form-item style=\"float: right\">\n                    <div nz-form-control>\n                        <button nz-button [nzType]=\"'primary'\" (click)=\"createTable()\">\n                            <span>新增</span>\n                        </button>\n                    </div>\n                </div>\n                <div style=\"clear: both;\"></div>\n            </form>\n        </div>\n        <nz-table #nzTable id=\"homeTable\" class=\"data-table\" [nzIsPagination]=\"false\" [nzShowFooter]=\"true\" [nzSize]=\"'middle'\" [nzBordered]=\"true\" [nzCustomNoResult]=\"true\">\n            <thead nz-thead>\n            <tr>\n                <ng-container *ngFor=\"let th of dataFields\">\n                    <ng-container *ngIf=\"th.use && fieldShow[th.fieldName]\">\n                        <th nz-th [attr.fieldName]=\"th.fieldName\">\n                            {{th.name}}\n                            <i class=\"fa fa-sort sort\" [attr.sortName]=\"th.sortName || th.fieldName\" (click)=\"sort($event,th.sortName || th.fieldName)\" *ngIf=\"th.sort\"></i>\n                        </th>\n                    </ng-container>\n                </ng-container>\n                <th nz-th id=\"handle\">操作</th>\n            </tr>\n            </thead>\n            <tbody nz-tbody>\n                <tr *ngIf=\"objectList && objectList.length === 0\" nz-tbody-tr>\n                    <td nz-td colspan=\"30\">\n                        <div class=\"no-data\" style=\"text-align: center\">\n                            <h3><i class=\"icon fa fa-warning\"></i>没有数据</h3>\n                        </div>\n                    </td>\n                </tr>\n                <ng-container *ngFor=\"let obj of objectList;trackBy:trackByFn\">\n                    <tr nz-tbody-tr>\n                        <ng-container *ngFor=\"let item of dataFields\">\n                            <ng-container *ngIf=\"item.use && fieldShow[item.fieldName]\" init [init]=\"renderData\" [params]=\"[item,obj]\" #results=\"andy\">\n                                <td nz-td [innerHtml]=\"results.newData | safeHtml\">\n                                </td>\n                            </ng-container>\n                        </ng-container>\n                        <td class=\"handle\" nz-td>\n                            <button nz-button [nzType]=\"'primary'\" (click)=\"edit(obj)\">编辑</button>\n                            <button nz-button [nzType]=\"'default'\" (click)=\"toggleDetail(obj)\">详情</button>\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"obj.showDetail\" nz-tbody-tr>\n                        <td colspan=\"4\" nz-td>\n                            <span>hello1</span>\n                        </td>\n                    </tr>\n                </ng-container>\n            </tbody>\n            <span nz-table-footer>\n                <pagination [paginationMessage]=\"paginationMessage\" [currentTimestamp]=\"paginationMessage.currentTimestamp\" (loadData)=\"loadObjects($event)\"></pagination>\n            </span>\n        </nz-table>\n    </ng-template>\n</nz-card>\n<edit-modal [editForm]=\"tableForm\" [currentTimestamp]=\"tableForm.currentTimestamp\" *ngIf=\"tableForm\" [dataFields]=\"dataFields\" [selectSources]=\"selectSources\" (saveForm)=\"saveForm($event)\"></edit-modal>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<nz-modal [nzVisible]=\"isVisible\"[nzMaskClosable]=\"false\" [nzTitle]=\"editForm.title\" [nzWidth]=\"700\" [nzOkText]=\"'保存'\" [nzContent]=\"modalContent\" (nzOnCancel)=\"handleCancel($event)\" (nzOnOk)=\"onSubmit($event)\">\n    <ng-template #modalContent>\n        <form nz-form [nzLayout]=\"'horizontal'\" role=\"form\" [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm)\">\n            <div nz-row>\n                <ng-container *ngFor=\"let field of dataFields\">\n                    <ng-container *ngIf=\"field.edit\">\n                        <ng-container [ngSwitch]=\"field.inputType\">\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'text'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-input [formControl]=\"editForm.controls[field.fieldName]\"\n                                                  [nzPlaceHolder]=\"field.placeholder || ''\"\n                                                  [nzSize]=\"'large'\"\n                                                  [id]=\"'id'+field.fieldName\"\n                                                  [name]=\"field.fieldName\">\n                                        </nz-input>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'password'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-input [formControl]=\"editForm.controls[field.fieldName]\"\n                                                  [nzPlaceHolder]=\"field.placeholder || ''\"\n                                                  [nzSize]=\"'large'\"\n                                                  [nzType]=\"'password'\"\n                                                  [id]=\"'id'+field.fieldName\"\n                                                  [name]=\"field.fieldName\">\n                                        </nz-input>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'number'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-input-number [nzStep]=\"1\" style=\"width: 100%\"\n                                                  [formControl]=\"editForm.controls[field.fieldName]\"\n                                                  [nzPlaceHolder]=\"field.placeholder || ''\"\n                                                  [nzSize]=\"'large'\"\n                                                  [nzType]=\"'textarea'\"\n                                                  [id]=\"'id'+field.fieldName\"\n                                                  [name]=\"field.fieldName\">\n                                        </nz-input-number>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'textarea'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-input [formControl]=\"editForm.controls[field.fieldName]\"\n                                                  [nzPlaceHolder]=\"field.placeholder || ''\"\n                                                  [nzSize]=\"'large'\"\n                                                  [nzType]=\"'textarea'\"\n                                                  [id]=\"'id'+field.fieldName\"\n                                                  [name]=\"field.fieldName\">\n                                        </nz-input>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'select'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-select nzAllowClear [nzMode]=\"field.mode || ''\" [nzNotFoundContent]=\"'无选项'\"\n                                                   [nzShowSearch]=\"true\" [nzPlaceHolder]=\"field.placeholder || ''\"\n                                                   [formControl]=\"editForm.controls[field.fieldName]\"\n                                                   [nzSize]=\"'large'\" [name]=\"field.fieldName\"\n                                                   [id]=\"'id'+field.fieldName\">\n                                            <ng-contanier *ngFor=\"let ops of selectSources[field.source]\">\n                                                <nz-option [nzLabel]=\"ops.description\" [nzValue]=\"ops.code\"></nz-option>\n                                            </ng-contanier>\n                                        </nz-select>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'date'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-datepicker [nzFormat]=\"field.format || 'YYYY-MM-DD'\" [nzShowTime]=\"field.showTime || false\" [nzSize]=\"'large'\" style=\"width: 100%;\" [formControl]=\"editForm.controls[field.fieldName]\" [nzPlaceHolder]=\"field.placeholder || ''\"></nz-datepicker>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'switch'\">\n                                <div nz-form-item nz-row>\n                                    <div nz-form-label nz-col [nzSpan]=\"6\">\n                                        <label [for]=\"'id_'+field.fieldName\">{{field.name}}</label>\n                                    </div>\n                                    <div nz-form-control nz-col [nzSpan]=\"18\">\n                                        <nz-switch [formControl]=\"editForm.controls[field.fieldName]\"></nz-switch>\n                                        <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                            <div nz-form-explain *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</div>\n                                        </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <!--<div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'number'\">\n                                <div class=\"form-group\">\n                                    <label [for]=\"'id_'+field.fieldName\" class=\"col-sm-3 col-md-3 col-xs-3 control-label\">{{field.name}}</label>\n                                    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n                                        <input type=\"number\" [id]=\"'id'+field.fieldName\" [name]=\"field.fieldName\" [placeholder]=\"field.placeholder || ''\" class=\"form-control\" [ngClass]=\"{'warning-border':field.required && !editForm.value[field.fieldName]}\" [formControl]=\"editForm.controls[field.fieldName]\">\n                                                    <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                                        <strong *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</strong>\n                                                    </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'textarea'\">\n                                <div class=\"form-group\">\n                                    <label [for]=\"'id_'+field.fieldName\" class=\"col-sm-3 col-md-3 col-xs-3 control-label\">{{field.name}}</label>\n                                    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n                                        <textarea [id]=\"'id'+field.fieldName\" [name]=\"field.fieldName\" [placeholder]=\"field.placeholder || ''\" class=\"form-control\" [ngClass]=\"{'warning-border':field.required && !editForm.value[field.fieldName]}\" [formControl]=\"editForm.controls[field.fieldName]\"></textarea>\n                                                    <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                                        <strong *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</strong>\n                                                    </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div nz-col [nzXs]=\"24\" [nzSm]=\"24\" [nzMd]=\"12\" [nzLg]=\"12\" *ngSwitchCase=\"'password'\">\n                                <div class=\"form-group\">\n                                    <label [for]=\"'id_'+field.fieldName\" class=\"col-sm-3 col-md-3 col-xs-3 control-label\">{{field.name}}</label>\n                                    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n                                        <input type=\"password\" [id]=\"'id'+field.fieldName\" [name]=\"field.fieldName\" [placeholder]=\"field.placeholder || ''\" class=\"form-control\" [ngClass]=\"{'warning-border':field.required && !editForm.value[field.fieldName]}\" [formControl]=\"editForm.controls[field.fieldName]\">\n                                                    <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                                        <strong *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</strong>\n                                                    </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>-->\n                            <!--<div class=\"col-sm-6 col-md-6 edit-input\" *ngSwitchCase=\"'select'\">\n                                <div class=\"form-group\">\n                                    <label [for]=\"'id_'+field.fieldName\" class=\"col-sm-3 col-md-3 col-xs-3 control-label\">{{field.name}}</label>\n                                    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n                                        <ng-select [multiple]=\"field.multiple\"\n                                                   [allowClear]=\"true\"\n                                                   [items]=\"selectSources[field.source]\"\n                                                   [placeholder]=\"field.placeholder || ''\"\n                                                   (selected)=\"uiSelected($event,editForm.controls[field.fieldName])\"\n                                                   [formControl]=\"editForm.controls[field.fieldName]\"\n                                                   [id]=\"'id_'+field.fieldName\" [name]=\"field.fieldName\">\n                                        </ng-select>\n                                            <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                                <strong *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</strong>\n                                            </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\" style=\"display: block\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-md-6 edit-input\" *ngSwitchCase=\"'date'\">\n                                <div class=\"form-group\">\n                                    <label [for]=\"'id_'+field.fieldName\" class=\"col-sm-3 col-md-3 col-xs-3 control-label\">{{field.name}}</label>\n                                    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n                                        <div class=\"input-group\">\n                                                <span class=\"input-group-addon add-on\">\n                                                    <i class=\"fa fa-calendar\"></i>\n                                                </span>\n                                            <input datepicker [id]=\"'id_'+field.fieldName\" [name]=\"field.fieldName\" [placeholder]=\"field.placeholder || ''\" class=\"form-control input-append date form_datetime\"\n                                                   [ngClass]=\"{'warning-border':field.required && !editForm.value[field.fieldName]}\"\n                                                   [dateFormat]=\"field.format || ''\" [minView]=\"field.minView || ''\"\n                                                   [dateModel]=\"editForm.controls[field.fieldName]\"\n                                                   [formControl]=\"editForm.controls[field.fieldName]\">\n                                        </div>\n                                            <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                                <strong *ngIf=\"editForm.hasError(error.name,field.fieldName) && error.name!='required'\">{{error.description}}</strong>\n                                            </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-md-6 edit-input\" *ngSwitchCase=\"'switch'\">\n                                <div class=\"form-group\">\n                                    <label [for]=\"'id_'+field.fieldName\" class=\"col-sm-3 col-md-3 col-xs-3 control-label\">{{field.name}}</label>\n                                    <div class=\"col-sm-8 col-md-8 col-xs-8\">\n                                        <ui-switch [formControl]=\"editForm.controls[field.fieldName]\"></ui-switch>\n                                            <span *ngFor=\"let error of field.validators\" class=\"form-error\">\n                                                <strong *ngIf=\"editForm.hasError(error.name,field.fieldName)\">{{error.description}}</strong>\n                                            </span>\n                                        <span align=\"start\" *ngIf=\"field.hint\" style=\"display: block\"><strong>{{field.hint}}</strong></span>\n                                    </div>\n                                </div>\n                            </div>-->\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </div>\n        </form>\n    </ng-template>\n</nz-modal>"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"mySelectBox\">\n    <div class=\"openBtn\">\n        <button nz-button [nzType]=\"'default'\" (click)=\"openbindclick($event)\">\n          <i class=\"anticon anticon-eye\"></i>\n        </button>\n    </div>\n    <div class=\"selectPanel\" tabindex=\"1\" id=\"selectPanel\" (click)=\"selectField($event)\" *ngIf=\"showPanel\">\n        <ng-container *ngFor=\"let item of datafields\">\n            <ng-container *ngIf=\"item.use\">\n                <dl (click)=\"selectField($event,item.fieldName)\" class=\"field_dl\">\n                    <dd style=\"padding-top:10px\">\n                        <span class=\"myCheckBox\" [ngClass]=\"{'selectSpan':fieldshow[item.fieldName]}\">✔</span>\n                    </dd>\n                    <dt>\n                        <label [for]=\"item.fieldName\">{{item.name}}</label>\n                    </dt>\n                </dl>\n            </ng-container>\n        </ng-container>\n    </div>\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <div style=\"float:left\">\n        <span>一共{{paginationMessage.totalRecords}}条数据，分为{{paginationMessage.totalPages }}页，当前{{paginationMessage.currentPage}}页。</span>\n        <span style=\"display: inline-block;width: 60px;\">\n            <select class=\"custom-select\" style=\"width: 60px;\" (change)=\"everyPageSize()\" [(ngModel)]=\"paginationMessage.page_size\">\n                <option>20</option>\n                <option>50</option>\n                <option>100</option>\n                <option>200</option>\n            </select>\n        </span>\n    </div>\n    <div style=\"float:right\">\n        <span #pagination></span>\n    </div>\n    <div style=\"clear: both\"></div>\n</ng-container>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * Created by luwenwei on 17/8/17.
 */
(function (global, factory) {
     true ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.UploadFile = factory());
}(this,function () {
    function firstSecond(date,fromSelect,minView) {
        if(!date){
            return '';
        }
        var d = new Date(date);
        if(!fromSelect){
            if(minView !== "0"){
                d.setHours(0);
                d.setMinutes(0);
                d.setSeconds(0);
                d.setMilliseconds(0);
            }
            return d;
        }
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        return d;
    }

    function lastSecond(date,fromSelect,minView) {
        if(!date){
            return '';
        }
        var d = new Date(date);
        if(!fromSelect){
            if(minView !== "0"){
                d.setHours(23);
                d.setMinutes(59);
                d.setSeconds(59);
                d.setMilliseconds(999);
            }
            return d;
        }
        d.setHours(23);
        d.setMinutes(59);
        d.setSeconds(59);
        d.setMilliseconds(999);
        return d;
    };

    function dateNameToRange(name) {
        var t, now = new Date();
        var begin, end;
        var yang = new MrYangUtil();//返回当前时间
        switch (name) {
            case "今天", "自定义":
                begin = new Date(now.getFullYear(), now.getMonth(), now.getDate());//年月日
                end = new Date(now.getFullYear(), now.getMonth(), now.getDate());//年月日
                break;
            case "昨天":
                t = yang.getYesterday();
                begin = t;
                end = t;
                break;
            case "前天":
                t = yang.getTwoDaysAgo();
                begin = t;
                end = t;
                break;
            case "本周":
                t = yang.getCurrentWeek();
                begin = t[0];
                end = t[1];
                break;
            case "上周":
                t = yang.getPreviousWeek();
                begin = t[0];
                end = t[1];
                break;
            case "本月份":
                t = yang.getCurrentMonth();
                begin = t[0];
                end = t[1];
                break;
            case "上个月":
                t = yang.getPreviousMonth();
                begin = t[0];
                end = t[1];
                break;
            case "最近三个月":
                t = yang.getLastThreeMonths();
                begin = t[0];
                end = t[1];
                break;
            case "最近一年":
                t = yang.getLastYear();
                begin = t[0];
                end = t[1];
                break;
            case "本季度":
                t = yang.getCurrentSeason();
                begin = t[0];
                end = t[1];
                break;
            case "上个季度":
                t = yang.getPreviousSeason();
                begin = t[0];
                end = t[1];
                break;
            case "本年度":
                t = yang.getCurrentYear();
                begin = t[0];
                end = t[1];
                break;
            case "上一年度":
                t = yang.getPreviousYear();
                begin = t[0];
                end = t[1];
                break;
            case "不限":
                begin = '';
                end = '';
                break;
            default:
                begin = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
                end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
                break;
        }
        begin = firstSecond(begin,true);
        end = lastSecond(end,true);
        return [ begin, end ];
    };

    function MrYangUtil() {
        this.getCurrentDate = function() {
            return new Date();
        };//返回当前时间

        this.getCurrentWeek = function() {
            var currentDate = this.getCurrentDate();
            var week = currentDate.getDay();

            var millisecond = 1000 * 60 * 60 * 24;//一天的毫秒树
            var minusDay = week != 0 ? week - 1 : 6;
            var monday = new Date(currentDate.getTime() - (minusDay * millisecond));
            var sunday = new Date(monday.getTime() + (6 * millisecond));
            return [ monday, sunday ];
        };

        this.getCurrentMonth = function() {
            var currentDate = this.getCurrentDate();
            var currentMonth = currentDate.getMonth();
            var currentYear = currentDate.getFullYear();
            var firstDay = new Date(currentYear, currentMonth, 1);

            if (currentMonth == 11) {
                currentYear++;
                currentMonth = 0;
            } else {
                currentMonth++;
            }

            var millisecond = 1000 * 60 * 60 * 24;
            var nextMonthDayOne = new Date(currentYear, currentMonth, 1);
            var lastDay = new Date(nextMonthDayOne.getTime() - millisecond);

            return [ firstDay, lastDay ];
        };

        this.getQuarterSeasonStartMonth = function(month) {
            var spring = 0;
            var summer = 3;
            var fall = 6;
            var winter = 9;

            if (month < 3) {
                return spring;
            } else if (month < 6) {
                return summer;
            } else if (month < 9) {
                return fall;
            } else {
                return winter;
            }
        };

        this.getMonthDays = function(year, month) {
            var relativeDate = new Date(year, month, 1);
            var relativeMonth = relativeDate.getMonth();
            var relativeYear = relativeDate.getFullYear();

            if (relativeMonth == 11) {
                relativeYear++;
                relativeMonth = 0;
            } else {
                relativeMonth++;
            }
            var millisecond = 1000 * 60 * 60 * 24;
            var nextMonthDayOne = new Date(relativeYear, relativeMonth, 1);
            return new Date(nextMonthDayOne.getTime() - millisecond).getDate();
        };

        this.getCurrentSeason = function() {
            var currentDate = this.getCurrentDate();
            var currentMonth = currentDate.getMonth();
            var currentYear = currentDate.getFullYear();
            var quarterSeasonStartMonth = this.getQuarterSeasonStartMonth(currentMonth);
            var quarterSeasonEndMonth = quarterSeasonStartMonth + 2;
            var quarterSeasonStartDate = new Date(currentYear, quarterSeasonStartMonth, 1);
            var quarterSeasonEndDate = new Date(currentYear, quarterSeasonEndMonth, this.getMonthDays(currentYear, quarterSeasonEndMonth));
            return [ quarterSeasonStartDate, quarterSeasonEndDate ];
        };

        this.getCurrentYear = function() {
            var currentDate = this.getCurrentDate();
            var currentYear = currentDate.getFullYear();

            var currentYearFirstDate = new Date(currentYear, 0, 1);
            var currentYearLastDate = new Date(currentYear, 11, 31);
            return [ currentYearFirstDate, currentYearLastDate ];
        };

        this.getPriorMonthFirstDay = function(year, month) {
            if (month == 0) {
                month = 11;
                year--;
                return new Date(year, month, 1);
            }
            month--;
            return new Date(year, month, 1);
        };

        this.getPreviousMonth = function() {
            var currentDate = this.getCurrentDate();
            var currentMonth = currentDate.getMonth();
            var currentYear = currentDate.getFullYear();
            var priorMonthFirstDay = this.getPriorMonthFirstDay(currentYear, currentMonth);
            var priorMonthLastDay = new Date(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth(), this.getMonthDays(priorMonthFirstDay.getFullYear(), priorMonthFirstDay.getMonth()));
            return [ priorMonthFirstDay, priorMonthLastDay ];
        };

        this.getPreviousWeek = function() {
            var currentDate = this.getCurrentDate();
            var week = currentDate.getDay();
            var millisecond = 1000 * 60 * 60 * 24;
            var minusDay = week != 0 ? week - 1 : 6;
            var currentWeekDayOne = new Date(currentDate.getTime() - (millisecond * minusDay));
            var priorWeekLastDay = new Date(currentWeekDayOne.getTime() - millisecond);
            var priorWeekFirstDay = new Date(priorWeekLastDay.getTime() - (millisecond * 6));
            return [ priorWeekFirstDay, priorWeekLastDay ];
        };

        this.getPriorSeasonFirstDay = function(year, month) {
            var spring = 0;
            var summer = 3;
            var fall = 6;
            var winter = 9;
            if (month < 3) {
                --year;
                month = winter;
            } else if (month < 6) {
                month = spring;
            } else if (month < 9) {
                month = summer;
            } else {
                month = fall;
            }
            return new Date(year, month, 1);
        };

        this.getPreviousSeason = function() {
            var currentDate = this.getCurrentDate();
            var currentMonth = currentDate.getMonth();
            var currentYear = currentDate.getFullYear();
            var priorSeasonFirstDay = this.getPriorSeasonFirstDay(currentYear, currentMonth);
            var priorSeasonLastDay = new Date(priorSeasonFirstDay.getFullYear(), priorSeasonFirstDay.getMonth() + 2, this.getMonthDays(priorSeasonFirstDay.getFullYear(),
                priorSeasonFirstDay.getMonth() + 2));
            return [ priorSeasonFirstDay, priorSeasonLastDay ];
        };

        this.getPreviousYear = function() {
            var currentDate = this.getCurrentDate();
            var currentYear = currentDate.getFullYear() - 1;
            var priorYearFirstDay = new Date(currentYear, 0, 1);
            var priorYearLastDay = new Date(currentYear, 11, 31);
            return [ priorYearFirstDay, priorYearLastDay ];
        };

        this.getYesterday = function() {
            var currentDate = this.getCurrentDate();
            var yesterday = new Date(currentDate.getTime() - 1000 * 60 * 60 * 24);
            return yesterday;
        };

        this.getTwoDaysAgo = function () {
            var today = new Date();
            var twoDaysAgo = new Date(today.getTime() - 1000 * 60 * 60 * 24 * 2);
            return twoDaysAgo;
        };

        this.getLastThreeMonths = function () {
            var today = new Date();
            var ninetyDaysAgo = new Date(today.getTime() - 1000 * 60 * 60 * 24 * 90);
            var theFirstDay = new Date(ninetyDaysAgo.getFullYear(), ninetyDaysAgo.getMonth(), 1);
            return [theFirstDay, today];
        };

        this.getLastYear = function () {
            var today = new Date();
            var aYearAgo = new Date(today.getTime() - 1000 * 60 * 60 * 24 * 365);
            var theFirstDay = new Date(aYearAgo.getFullYear(), aYearAgo.getMonth(), 1);
            return [theFirstDay, today];
        };
    };

    function DateRange(targetElement,config) {
        this.namedDateRanges = [
            "今天",
            "昨天",
            "前天",
            "本周",
            "上周",
            "本月份",
            "上个月",
            "最近三个月",
            "上个季度",
            "最近一年",
            "本季度",
            "本年度",
            "上一年度",
            "不限",
            "自定义"
        ];
        this.targetElement = $(targetElement);
        this.dateRangeName = config.dateRangeName;
        console.log(config)
        this.render();
    }
    
    DateRange.prototype = {
        render: function () {
            var dateRangeName = this.dateRangeName;
            var fragment = document.createDocumentFragment();
            for(var i = 0,l = this.namedDateRanges.length; i < l; i++){
                var ops = document.createElement("option");
                ops.setAttribute("value",this.namedDateRanges[i]);
                ops.innerHTML = this.namedDateRanges[i];
                if(dateRangeName && dateRangeName === this.namedDateRanges[i]){
                    ops.setAttribute("selected",true);
                }
                fragment.appendChild(ops);
            }
            this.targetElement.append(fragment);
            this.targetElement.on("change", this.doChangeName.bind(this.targetElement));
            var dateRangeName = $(this.targetElement).val();
            var t = dateNameToRange(dateRangeName);
            this.currentDateRange = {begin_time:t[0],end_time:t[1],dateRangeName:dateRangeName}
        },

        doChangeName: function () {
            var dateRangeName = $(this).val();
            var t = dateNameToRange(dateRangeName);
            $(this).trigger("dataRangeChange",[{begin_time:t[0],end_time:t[1],dateRangeName:dateRangeName}]);
        }
    };

    return DateRange;
}))
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * Created by luwenwei on 16/6/5.
 */
(function (global, factory) {
     true ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.UploadFile = factory());
}(this,function () {
    function UiPagination(totalPage, targetElement) {
        this.targetElement = null;
        this.configure = null;
        this.targetElement = $(targetElement);//目标节点
        this.totalPage = totalPage || 1;
        this.currentPage = 1;
        this.etc = '<li class="not_allow"><a class="not_allow etc">...</a></li>';
        this.paginationHead = '<ul style="margin-top:0;margin-bottom: 0;" class="pagination ui_pagination"><li class=""><a class="previous allow">&laquo;</a></li>';
    }

    UiPagination.prototype = {
        init: function () {
            this.state = null;
            if (this.totalPage <= 7) {
                this.sevenPage();
            } else {
                this.exceedSevenPage();
            }
            this.setActivePage();
            this.pageBindClick();
            if (this.currentPage != 1) this.gotoPage(this.currentPage);
        },

        setInputGoPage: function () {
            return '<span class="input-go-page"><input class="text-page form-control" value="' + this.currentPage + '"><button class="btn-go-page">Go</button></span>'
        },

        setActivePage: function () {
            var self = this;
            var page_li = this.targetElement.find("li");
            page_li.removeClass("active");
            page_li.each(function (index, item) {
                if ($(item).find("a").attr("current-page") == self.currentPage) {
                    $(item).addClass("active");
                    return;
                }
            })
        },

        sevenPage: function () {
            if (this.state === "sevenPage") return;
            this.paginationMain = this.paginationHead;
            for (var i = 1; i <= this.totalPage; i++) {
                this.paginationMain += "<li><a class='allow' current-page='" + i + "'>" + i + "</a></li>";
            }
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "sevenPage";
        },

        exceedSevenPage: function () {
            this.paginationMain = this.paginationHead;
            for (var i = 1; i <= 6; i++) {
                this.paginationMain += "<li><a class='allow' current-page='" + i + "'>" + i + "</a></li>";
            }
            this.paginationMain += this.etc;
            this.paginationMain += "<li><a class='allow' current-page='" + this.totalPage + "'>" + this.totalPage + "</a></li>";
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "exceedSevenPage";
        },

        middlePage: function () {
            var previousPage = this.currentPage - 1, nextPage = this.currentPage + 1;
            if (this.state === "middlePage") {
                var prev_previous_page = this.middleCurrentPage - 1, next_next_page = this.middleCurrentPage + 1;
                var next_page_a = this.targetElement.find("a[current-page=" + next_next_page + "]");
                var previous_page_a = this.targetElement.find("a[current-page=" + prev_previous_page + "]");
                var current_page_a = this.targetElement.find("a[current-page=" + this.middleCurrentPage + "]");
                next_page_a.attr("current-page", nextPage).text(nextPage);
                previous_page_a.attr("current-page", previousPage).text(previousPage);
                current_page_a.attr("current-page", this.currentPage).text(this.currentPage)
                this.middleCurrentPage = this.currentPage;
                return;
            }
            this.paginationMain = this.paginationHead;
            this.paginationMain += "<li><a class='allow' current-page='1'>1</a></li>";
            this.paginationMain += this.etc;
            this.paginationMain += "<li><a class='allow' current-page='" + previousPage + "'>" + previousPage + "</a></li>";
            this.paginationMain += "<li><a class='allow' current-page='" + this.currentPage + "'>" + this.currentPage + "</a></li>";
            this.paginationMain += "<li><a class='allow' current-page='" + nextPage + "'>" + nextPage + "</a></li>";
            this.paginationMain += this.etc;
            this.paginationMain += "<li><a class='allow' current-page='" + this.totalPage + "'>" + this.totalPage + "</a></li>";
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "middlePage";
            this.middleCurrentPage = this.currentPage;
        },

        backPage: function () {
            if (this.state === "backPage") return;
            this.paginationMain = this.paginationHead;
            this.paginationMain += "<li><a class='allow' current-page='1'>1</a></li>";
            this.paginationMain += this.etc;
            for (var i = this.totalPage - 5; i <= this.totalPage; i++) {
                this.paginationMain += "<li><a class='allow' current-page='" + i + "'>" + i + "</a></li>";
            }
            this.paginationMain += '<li><a class="next allow">&raquo;</a></li></ul>';
            this.paginationMain += this.setInputGoPage();
            $(this.targetElement).empty();
            $(this.targetElement).append($(this.paginationMain));
            this.state = "backPage";
        },

        setPagination: function () {
            var totalPage = this.totalPage || 1;
            if (totalPage <= 7) {
                this.sevenPage();
            } else {
                this.exceedSevenPage();
            }
        },


        pageBindClick: function () {
            var self = this;
            this.targetElement.unbind();
            this.targetElement.bind("click", function (event) {
                var page;
                if ($(event.target).hasClass("not_allow")) return;
                if ($(event.target).hasClass("previous")) {
                    if (self.currentPage == 1) return;//如果是第一页则禁止向前翻页
                    page = self.currentPage - 1;
                } else if ($(event.target).hasClass("next")) {
                    if (self.currentPage == self.totalPage) return;//如果是最后一页则禁止向后翻页
                    page = self.currentPage + 1;
                } else if ($(event.target).hasClass("allow")) {
                    page = $(event.target).attr("current-page");
                } else if ($(event.target).hasClass("btn-go-page")) {
                    var inputGoPage = $(self.targetElement).find(".text-page");
                    page = inputGoPage.val();
                    if (!page || page > self.totalPage || page <= 0 || isNaN(Number(page)) || parseInt(page) != parseFloat(page)) return;
                } else {
                    return;
                }
                if (parseInt(page) == self.currentPage) return;
                self.gotoPage(parseInt(page))
            });
        },

        gotoPage: function (currentPage) {
            this.targetElement.trigger("gotoPage", [currentPage]);
            this.currentPage = currentPage;
            if (currentPage <= 4) {
                this.setPagination();
            }
            if (4 < currentPage && currentPage < this.totalPage - 4) {
                this.middlePage()
            }
            if (4 < currentPage && currentPage >= this.totalPage - 4 && this.totalPage > 7) {
                this.backPage()
            }
            this.setActivePage();
            this.targetElement.find(".text-page").val(currentPage)
            return;
        }
    };

    return UiPagination;
}))
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ })

});