function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingcomponent */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingcomponent", function () {
      return routingcomponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landpage/landpage.component */
    "./src/app/landpage/landpage.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/slider/slider.component.ts");

    var routes = [{
      path: '',
      component: _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_2__["LandpageComponent"]
    }, {
      path: 'home',
      component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]
    }, {
      path: '**',
      component: _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_2__["LandpageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();

    var routingcomponent = [_landpage_landpage_component__WEBPACK_IMPORTED_MODULE_2__["LandpageComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.cc = "green";
        this.error = true;
        this.hr = "superMan";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0VBV0UiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZGl2e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAwcHg7YmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG59XHJcbmRpdi5yb3RhdGVcclxue1xyXG53aWR0aDogMTAwcHg7XHJcbmhlaWdodDogMTAwcHg7XHJcbmJvcmRlcjogMXB4IHNvbGlkICMwMGY7XHJcblxyXG59Ki8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landpage/landpage.component */
    "./src/app/landpage/landpage.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./slider/slider.component */
    "./src/app/slider/slider.component.ts");
    /* harmony import */


    var _destination_destination_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./destination/destination.component */
    "./src/app/destination/destination.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _offer_offer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./offer/offer.component */
    "./src/app/offer/offer.component.ts");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./service/service.component */
    "./src/app/service/service.component.ts");
    /* harmony import */


    var _invest_invest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./invest/invest.component */
    "./src/app/invest/invest.component.ts");
    /* harmony import */


    var _trending_trending_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./trending/trending.component */
    "./src/app/trending/trending.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_7__["LandpageComponent"], _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_7__["LandpageComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"], _destination_destination_component__WEBPACK_IMPORTED_MODULE_11__["DestinationComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_13__["OfferComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_14__["ServiceComponent"], _invest_invest_component__WEBPACK_IMPORTED_MODULE_15__["InvestComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_16__["TrendingComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingcomponent"], _landpage_landpage_component__WEBPACK_IMPORTED_MODULE_7__["LandpageComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_10__["SliderComponent"], _destination_destination_component__WEBPACK_IMPORTED_MODULE_11__["DestinationComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_13__["OfferComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_14__["ServiceComponent"], _invest_invest_component__WEBPACK_IMPORTED_MODULE_15__["InvestComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_16__["TrendingComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 61,
      vars: 0,
      consts: [["id", "blog", 1, "blog", "pt-5", "pb-4", "wow", "fadeInLeft"], [1, "container"], [1, "section-title", "text-center"], [1, "row"], [1, "col-lg-4", "col-md-6", "post", "d-flex", "align-items-stretch"], [1, "card"], [1, "img"], ["src", "../../assets/lib/gallery/pic2.jpg", "alt", "", 1, "card-img"], [1, "card-title"], ["href", ""], [1, "card-body"], [1, "read-more"], ["src", "../../assets/lib/gallery/pic1.jpg", "alt", "", 1, "img-fluid"], ["src", "../../assets/lib/gallery/pic3.jpg", "alt", "", 1, "img-fluid"], [1, "blog-pagination"], [1, "justify-content-center"], [1, "disabled"], [1, "icofont-rounded-left"], ["href", "#"], [1, "active"], [1, "icofont-rounded-right"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0634\u0648\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0647\u0630\u0627 \u0627\u0644\u062C\u0632\u064A \u064A\u0645\u062B\u0644 \u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0628\u0648\u0633\u062A /\u0627\u0644\u0645\u0646\u0634\u0648\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0627\u0644\u0645\u0632\u064A\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "article", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0634\u0648\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0647\u0630\u0627 \u0627\u0644\u062C\u0632\u064A \u064A\u0645\u062B\u0644 \u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0628\u0648\u0633\u062A /\u0627\u0644\u0645\u0646\u0634\u0648\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0627\u0644\u0645\u0632\u064A\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "article", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u0634\u0648\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0647\u0630\u0627 \u0627\u0644\u062C\u0632\u064A \u064A\u0645\u062B\u0644 \u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0628\u0648\u0633\u062A /\u0627\u0644\u0645\u0646\u0634\u0648\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u0645\u0632\u064A\u062F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mt-4[_ngcontent-%COMP%]\r\n{\r\nmargin-top: 5vh;\r\n}.post[_ngcontent-%COMP%]\r\n{\r\n    margin: 0 0;\r\npadding: 1px 10px;}.card[_ngcontent-%COMP%]\r\n{\r\n    \r\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);\r\n}.card-title[_ngcontent-%COMP%]\r\n{\r\n \r\npadding-left: 1.5rem   \r\n}.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: 4vh;\r\n}.blog-pagination[_ngcontent-%COMP%] {\r\n    margin-top: 4vh;\r\n    color: #7f6d68;\r\n  }.blog[_ngcontent-%COMP%]\r\n  {\r\n    background-color: #f5f5f5\r\n  }.blog-pagination[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding-left: 0;\r\n    list-style: none;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border: 1px solid #f2f2f2;\r\n    margin: 0 5px;\r\n    transition: 0.3s;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n    background: white;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #989595;\r\n    padding: 7px 16px;\r\n    display: inline-block;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n    background: #ff5821;\r\n    border: 1px solid #ff5821;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .blog-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    border: 1px solid #fdfcfc;\r\n  }.blog-pagination[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #dedede;\r\n    padding: 10px 16px;\r\n    display: inline-block;\r\n  }@media (max-width:750px) {\r\n    .post[_ngcontent-%COMP%]\r\n    {\r\n        margin-top: 1.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBLGVBQWU7QUFDZixDQUFDOztJQUVHLFdBQVc7QUFDZixpQkFBaUIsQ0FBQyxDQUNsQjs7O0VBR0UseUNBQXlDO0FBQzNDLENBQUM7OztBQUdEO0FBQ0EsQ0FDQTs7RUFFRSxrQkFBa0I7QUFDcEIsQ0FDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0VBQ2hCLENBQ0E7O0lBRUU7RUFDRixDQUNBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEIsQ0FFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCLENBRUE7SUFDRSxpQkFBaUI7RUFDbkIsQ0FFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCLENBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCLENBRUE7SUFDRSxXQUFXO0VBQ2IsQ0FFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7RUFDM0IsQ0FFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCLENBRUY7SUFDSTs7UUFFSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tdC00XHJcbntcclxubWFyZ2luLXRvcDogNXZoO1xyXG59LnBvc3Rcclxue1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbnBhZGRpbmc6IDFweCAxMHB4O31cclxuLmNhcmRcclxue1xyXG4gICAgXHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn0uY2FyZC10aXRsZVxyXG57XHJcbiBcclxucGFkZGluZy1sZWZ0OiAxLjVyZW0gICBcclxufVxyXG4uc2VjdGlvbi10aXRsZSBoMlxyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTogNHZoO1xyXG59XHJcbi5ibG9nLXBhZ2luYXRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgY29sb3I6ICM3ZjZkNjg7XHJcbiAgfVxyXG4gIC5ibG9nXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxyXG4gIH1cclxuICAuYmxvZy1wYWdpbmF0aW9uIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1wYWdpbmF0aW9uIGxpIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmJsb2ctcGFnaW5hdGlvbiBsaS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5ibG9nLXBhZ2luYXRpb24gbGkgYSB7XHJcbiAgICBjb2xvcjogIzk4OTU5NTtcclxuICAgIHBhZGRpbmc6IDdweCAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1wYWdpbmF0aW9uIGxpLmFjdGl2ZSwgLmJsb2ctcGFnaW5hdGlvbiBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY1ODIxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmNTgyMTtcclxuICB9XHJcbiAgXHJcbiAgLmJsb2ctcGFnaW5hdGlvbiBsaS5hY3RpdmUgYSwgLmJsb2ctcGFnaW5hdGlvbiBsaTpob3ZlciBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1wYWdpbmF0aW9uIGxpLmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmRmY2ZjO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1wYWdpbmF0aW9uIGxpLmRpc2FibGVkIGkge1xyXG4gICAgY29sb3I6ICNkZWRlZGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDo3NTBweCkge1xyXG4gICAgLnBvc3RcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/destination/destination.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/destination/destination.component.ts ***!
    \******************************************************/

  /*! exports provided: DestinationComponent */

  /***/
  function srcAppDestinationDestinationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationComponent", function () {
      return DestinationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DestinationComponent = /*#__PURE__*/function () {
      function DestinationComponent() {
        _classCallCheck(this, DestinationComponent);
      }

      _createClass(DestinationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DestinationComponent;
    }();

    DestinationComponent.ɵfac = function DestinationComponent_Factory(t) {
      return new (t || DestinationComponent)();
    };

    DestinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DestinationComponent,
      selectors: [["app-destination"]],
      decls: 54,
      vars: 0,
      consts: [["id", "destanion", 1, "destanion", "wow", "fadeInLeft"], [1, "container"], [1, "section-title", "text-center", "mb-5", "mt-3"], [1, "row"], [1, "col-md-6", "d-flex", "align-items-stretch"], [1, "card", 2, "background-image", "url(../../assets/lib/gallery/pic2.jpg)"], [1, "card-body"], [1, "card-title"], ["href", ""], [1, "card-text"], [1, "read-more", "text-center"], ["href", "#"], [1, "icofont-arrow-right"], [1, "col-md-6", "d-flex", "align-items-stretch", "mt-4", "mt-md-0"], [1, "col-md-6", "d-flex", "align-items-stretch", "mt-4"]],
      template: function DestinationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0648\u062C\u0647\u0640\u0640\u0627\u062A \u0645\u0642\u0640\u062A\u0631\u062D\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0645\u0640\u0640\u0631\u0648\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0627\u0639\u0640\u0631\u0641 \u0623\u0643\u062B\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0628\u0648\u0631\u062A\u0633\u0648\u062F\u0627\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0627\u0639\u0640\u0631\u0641 \u0623\u0643\u062B\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0643\u0640\u0640\u0631\u062F\u0641\u0627\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u0627\u0639\u0640\u0631\u0641 \u0623\u0643\u062B\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0627\u0644\u0640\u0640\u062C\u0628\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u0627\u0639\u0640\u0631\u0641 \u0623\u0643\u062B\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#destanion[_ngcontent-%COMP%]\r\n{    background-color: #fff9f7;\r\n    padding: 3vh;\r\n    padding-bottom: 8vh;\r\n}\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n.card-text[_ngcontent-%COMP%] {\r\n    color: #4b4949;\r\n}\r\np[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n.card-body[_ngcontent-%COMP%] {\r\n    z-index: 10;\r\n    background: rgba(255, 255, 255, 0.9);\r\n    padding: 15px 30px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n    transition: 0.3s;\r\n    transition: ease-in-out 0.4s;\r\n    border-radius: 5px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n\r\n\r\nposition: relative;\r\ndisplay: flex;\r\nflex-direction: column;\r\nwidth: 100%; \r\nmin-width: 0;\r\nword-wrap: break-word;\r\nbackground-color: #fff;\r\nbackground-clip: border-box;\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nbackground-position: center center;\r\nborder: 1px solid rgba(0,0,0,.125);\r\nborder-radius: .25rem;\r\n\r\npadding: 160px 20px 20px 20px;\r\n   box-shadow: 1px 2px 6px #649af1;}\r\n.read-more[_ngcontent-%COMP%]\r\n   {\r\n       \r\n    font-weight: bolder;\r\n    font-size: 18px;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzdGluYXRpb24vZGVzdGluYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtLQUNLLHlCQUF5QjtJQUMxQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNDO0lBQ0csY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUFDO0lBQ0csV0FBVztJQUNYLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBQUM7OztBQUdELGtCQUFrQjtBQUNsQixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWCxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QiwyQkFBMkI7QUFDM0Isc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDLHFCQUFxQjs7QUFFckIsNkJBQTZCO0dBQzFCLCtCQUErQixDQUFDO0FBQ2hDOzs7SUFHQyxtQkFBbUI7SUFDbkIsZUFBZTtHQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rlc3RpbmF0aW9uL2Rlc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVzdGFuaW9uXHJcbnsgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjlmNztcclxuICAgIHBhZGRpbmc6IDN2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4dmg7XHJcbn1cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIC5jYXJkLXRleHQge1xyXG4gICAgY29sb3I6ICM0YjQ5NDk7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn0uY2FyZC1ib2R5IHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjRzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59LmNhcmR7XHJcblxyXG5cclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG53aWR0aDogMTAwJTsgXHJcbm1pbi13aWR0aDogMDtcclxud29yZC13cmFwOiBicmVhay13b3JkO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5iYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbmJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuXHJcbnBhZGRpbmc6IDE2MHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAjNjQ5YWYxO31cclxuICAgLnJlYWQtbW9yZVxyXG4gICB7XHJcbiAgICAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-destination',
          templateUrl: './destination.component.html',
          styleUrls: ['./destination.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 14,
      vars: 0,
      consts: [[1, "footer-area"], [1, "container"], [1, "row"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "copyright", "text-center"], [1, "credits"], ["href", "#"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA9 Copyright ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GEEKs Dev");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". All Rights Reserved ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Designed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Devs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer-area[_ngcontent-%COMP%] { \r\n  background: #f1f1f1 none repeat scroll 0 0;\r\n  padding: 15px 0;padding-top: 2vh;\r\n}\r\n\r\n.copyright-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n  color: #3EC1D5;\r\n}\r\n\r\n.copyright-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #444;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  color: #444;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .credits[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #3EC1D5;\r\n}\r\n\r\n.credits[_ngcontent-%COMP%] {\r\n  padding-top: 5px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDBDQUEwQztFQUMxQyxlQUFlLENBQUMsZ0JBQWdCO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb3Rlci1hcmVhIHsgXHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtwYWRkaW5nLXRvcDogMnZoO1xyXG59XHJcblxyXG4uY29weXJpZ2h0LXRleHQgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICMzRUMxRDU7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQtdGV4dCBhIHtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLmNvcHlyaWdodD5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4uY29weXJpZ2h0IGEsIC5jcmVkaXRzIGEge1xyXG4gIGNvbG9yOiAjM0VDMUQ1O1xyXG59XHJcblxyXG4uY3JlZGl0cyB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gallery/gallery.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/gallery/gallery.component.ts ***!
    \**********************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 56,
      vars: 0,
      consts: [["id", "venue", 1, "wow", "fadeInUp"], [1, "container-fluid"], [1, "section-header", "mb-5"], [1, "text-center"], [1, "fas", "fa-camera"], [1, "container-fluid", "venue-gallery-container"], [1, "row", "no-gutters"], [1, "col-lg-3", "col-md-4", "wow", "fadeInLeft"], [1, "venue-gallery"], ["href", "../../assets/lib/gallery/pic4.jpg", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../assets/lib/gallery/pic4.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-3", "col-md-4", "wow", "fadeInUp"], ["href", "../../assets/lib/gallery/karma.JPG", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/karma.JPG", "alt", "", 1, "img-fluid"], ["href", "../../assets/lib/gallery/eat.jpg", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/eat.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-3", "col-md-4", "fadeInLeft"], ["href", "../../assets/lib/gallery/pyr.JPG", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/pyr.JPG", "alt", "", 1, "img-fluid", 2, "height", "280px"], ["href", "../../assets/lib/gallery/mara.JPG", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/mara.JPG", "alt", "", 1, "img-fluid"], ["href", "../../../assets/lib/gallery/suaken.JPG", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../../assets/lib/gallery/suaken.JPG", "alt", "", 1, "img-fluid"], ["href", "../../assets/lib/gallery/pic2.jpg", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/pic2.jpg", "alt", "", 1, "img-fluid"], ["href", "../../assets/lib/gallery/pic1.jpg", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/pic1.jpg", "alt", "", 1, "img-fluid"], ["href", "../../assets/lib/gallery/pic3.jpg", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/pic3.jpg", "alt", "", 1, "img-fluid"], ["href", "../../assets/lib/gallery/eat1.png", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/eat1.png", "alt", "", 1, "img-fluid"], ["href", "../../assets/lib/gallery/seng.JPG", "data-gall", "venue-gallery", 1, "venobox"], ["src", "../../assets/lib/gallery/seng.JPG", "alt", "", 1, "img-fluid"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u0641\u064A \u0635\u0648\u0631");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#venue[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n  }\r\n  \r\n  .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  #venue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .text-center[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n    margin-bottom: 20px;\r\n    color: #060c22;\r\n    font-style: italic;\r\n    font-size: 15px;}\r\n  \r\n  #venue[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\r\n    margin-bottom: 3px;\r\n  }\r\n  \r\n  #venue[_ngcontent-%COMP%]   .venue-gallery-container[_ngcontent-%COMP%] {\r\n    padding-right: 12px;\r\n  }\r\n  \r\n  #venue[_ngcontent-%COMP%]   .venue-gallery[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    border-right: 3px solid #fff;\r\n    border-bottom: 3px solid #fff;\r\n    width:100% ;\r\n    height: 250px;\r\n  }\r\n  \r\n  #venue[_ngcontent-%COMP%]   .venue-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all ease-in-out 0.4s;\r\n    width: 100%;\r\n    height: 250px;\r\n    \r\n    max-width: 100%;\r\n  }\r\n  \r\n  #venue[_ngcontent-%COMP%]   .venue-gallery[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n    transform: scale(1.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBQUU7SUFDQSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZSxDQUFDOztFQUNsQjtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGFBQWE7O0lBRWIsZUFBZTtFQUNqQjs7RUFFQTtJQUVFLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiN2ZW51ZSB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLWhlYWRlciBoMiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfSAjdmVudWUgcCwudGV4dC1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiAjMDYwYzIyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O31cclxuICAjdmVudWUgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gICN2ZW51ZSAudmVudWUtZ2FsbGVyeS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgI3ZlbnVlIC52ZW51ZS1nYWxsZXJ5IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICN2ZW51ZSAudmVudWUtZ2FsbGVyeSBpbWcge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuNHM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI3ZlbnVlIC52ZW51ZS1nYWxsZXJ5OmhvdmVyIGltZyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invest/invest.component.ts":
  /*!********************************************!*\
    !*** ./src/app/invest/invest.component.ts ***!
    \********************************************/

  /*! exports provided: InvestComponent */

  /***/
  function srcAppInvestInvestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvestComponent", function () {
      return InvestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InvestComponent = /*#__PURE__*/function () {
      function InvestComponent() {
        _classCallCheck(this, InvestComponent);
      }

      _createClass(InvestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InvestComponent;
    }();

    InvestComponent.ɵfac = function InvestComponent_Factory(t) {
      return new (t || InvestComponent)();
    };

    InvestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvestComponent,
      selectors: [["app-invest"]],
      decls: 41,
      vars: 0,
      consts: [[1, "tabs", "mb-5", "wow", "fadeInUp"], [1, "-container"], [1, "title", "text-center", "mb-4"], [1, "fas", "fa-subway"], [1, "row"], [1, "col-lg-2", "mt-2", "mb-3"], [1, "nav", "nav-pills", "nav-stacked", "flex-column"], [1, "active"], ["href", "#tab_a", "data-toggle", "pill"], ["href", "#tab_b", "data-toggle", "pill"], ["href", "#tab_c", "data-toggle", "pill"], [1, "col-lg-12"], [1, "tab-content"], ["id", "tab_a", 1, "tab-pane", "active"], [1, "col-md-4", "text-center"], [1, "lead"], [1, "col-md-7", "img", 2, "background-image", "url(../../assets/lib/gallery/pic1.jpg)"], ["id", "tab_b", 1, "tab-pane"], [1, "col-md-7", "img", 2, "background-image", "url(../../assets/lib/gallery/pic2.jpg)"], ["id", "tab_c", 1, "tab-pane"], [1, "col-md-7", "img", 2, "background-image", "url(../../assets/lib/gallery/pic3.jpg)"]],
      template: function InvestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Tourism area ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u062A\u0627\u0631\u064A\u062E - Zipline.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0622\u062B\u0627\u0631 \u0633\u0648\u0627\u0643\u0646 \u0628\u0648\u0627\u0628\u0629 \u0643\u062A\u0634\u0646\u0631 \u0641\u064A \u0633\u0648\u0627\u0643\u0646 \u0645\u062F\u064A\u0646\u0629 \u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0642\u062F\u064A\u0645\u0629 \u0641\u064A \u0634\u0631\u0642 \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u0639\u0644\u0649 \u0633\u0627\u062D\u0644 \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0623\u062D\u0645\u0631 \u0628\u064F\u0646\u064A\u062A \u0639\u0644\u064A \u062C\u0632\u064A\u0631\u0629 \u0645\u0631\u062C\u0627\u0646\u064A\u0629 \u0648\u064A\u062D\u064A\u0637 \u0628\u0647\u0627 \u0633\u0648\u0631 \u0644\u0647 \u062E\u0645\u0633 \u0628\u0648\u0627\u0628\u0627\u062A. \u062A\u062A\u0645\u064A\u0632 \u0645\u0628\u0627\u0646\u064A\u0647\u0627 \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0628\u0627\u0644\u0632\u062E\u0627\u0631\u0641 \u0648\u0627\u0644\u0646\u0642\u0648\u0634 \u0627\u0644\u062C\u0645\u064A\u0644\u0629. \u0648\u062A\u0648\u062C\u062F \u0639\u0644\u0649 \u0628\u0639\u062F \u0645\u064A\u0644\u064A\u0646 \u0645\u0646\u0647\u0627 \u062B\u0645\u0627\u0646\u064A\u0629 \u0623\u0628\u0631\u0627\u062C \u0623\u062B\u0631\u064A\u0629 \u0644\u0644\u0645\u0631\u0627\u0642\u0628\u0629. \u0632\u0627\u0631\u0647\u0627 \u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0631\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0631\u0628 \u0645\u062B\u0644 \u0627\u0628\u0646 \u0628\u0637\u0648\u0637\u0629 \u0648\u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064A\u064A\u0646 \u0643\u0635\u0627\u0645\u0648\u064A\u0644 \u0628\u064A\u0643\u0631 \u0643\u0645\u0627 \u0632\u0627\u0631\u0647\u0627 \u0639\u062F\u062F \u0645\u0646 \u0627\u0644\u0642\u0627\u062F\u0629 \u0648\u0627\u0644\u0632\u0639\u0645\u0627\u0621 \u0645\u0646\u0647\u0645 \u062E\u062F\u064A\u0648\u064A \u0645\u0635\u0631 \u0639\u0628\u0627\u0633 \u062D\u0644\u0645\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u060C \u0648\u0627\u0644\u0644\u0648\u0631\u062F \u0623\u0644\u064A\u0646\u0628\u064A. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Special Zones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u064A\u0632\u062E\u0631 \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u0628\u0627\u0644\u0643\u062B\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u0642\u0648\u0645\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629 \u0648\u0639\u0644\u0649 \u0645\u062E\u062A\u0644\u0641 \u0623\u0646\u0648\u0627\u0639\u0647\u0627 \u0648\u0630\u0644\u0643 \u0644\u062A\u0646\u0648\u0639 \u0628\u064A\u0626\u0627\u062A\u0647 \u0627\u0644\u062C\u063A\u0631\u0627\u0641\u064A\u0629 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629 \u0648\u0627\u0644\u062B\u0642\u0627\u0641\u064A\u0629. \u0641\u0641\u064A \u0627\u0644\u0634\u0645\u0627\u0644 \u062A\u0648\u062C\u062F \u0622\u062B\u0627\u0631 \u0627\u0644\u0645\u0645\u0627\u0644\u0643 \u0627\u0644\u0646\u0648\u0628\u064A\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0627\u0644\u062A\u064A \u062A\u0639\u062A\u0628\u0631 \u0645\u0647\u062F \u062D\u0636\u0627\u0631\u0629 \u0628\u0634\u0631\u064A\u0629 \u062D\u064A\u062B \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \u0648\u0627\u0644\u0645\u0639\u0627\u0628\u062F \u0627\u0644\u0641\u0631\u0639\u0648\u0646\u064A\u0629\u060C \u0648\u0641\u064A \u0627\u0644\u0634\u0631\u0642 \u062D\u064A\u062B \u062A\u062A\u0644\u0627\u0637\u0645 \u0623\u0645\u0648\u0627\u062C \u0645\u064A\u0627\u0647 \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0623\u062D\u0645\u0631 \u0628\u0627\u0644\u0628\u0631 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u064A \u062A\u0648\u062C\u062F \u0627\u0644\u062C\u0632\u0631 \u0627\u0644\u0645\u0631\u062C\u0627\u0646\u064A\u0629 \u0627\u0644\u0641\u0631\u064A\u062F\u0629 \u0627\u0644\u062A\u064A \u062A\u0634\u0643\u0644 \u0645\u0648\u0637\u0646\u0627 \u0644\u0644\u0623\u0633\u0645\u0627\u0643 \u0627\u0644\u0645\u0644\u0648\u0646\u0629 \u0648\u062C\u0646\u0629 \u0644\u0647\u0648\u0627\u0629 \u0627\u0644\u063A\u0637\u0633 \u0641\u064A \u0645\u064A\u0627\u0647 \u0627\u0644\u0628\u062D\u0627\u0631 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Innovation City.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u0648\u0627\u0644\u064A 220 \u0647\u0631\u0645\u0627\u064B \u0648\u0647\u0648 \u0639\u062F\u062F \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0623\u0647\u0631\u0627\u0645 \u0627\u0644\u0645\u0635\u0631\u064A\u0629. \u0648\u062A\u0648\u062C\u062F \u0628\u0627\u0644\u0648\u0644\u0627\u064A\u0629 \u0627\u0644\u0634\u0645\u0627\u0644\u064A\u0629 \u0648\u062A\u0628\u0639\u062F \u0639\u0646 \u0627\u0644\u062E\u0631\u0637\u0648\u0645 500 \u0643\u064A\u0644\u0648\u0645\u062A\u0631\u060C \u0648\u0647\u064A \u0645\u0646 \u0623\u0642\u062F\u0645 \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \u0641\u064A \u0648\u0627\u062F\u064A \u0627\u0644\u0646\u064A\u0644 \u0647\u064A \u0627\u0644\u062A\u064A \u0623\u0642\u0627\u0645\u0647\u0627 \u0627\u0644\u062D\u0643\u0627\u0645 \u0627\u0644\u0643\u0648\u0634\u064A\u0648\u0646. \u0648\u0625\u0644\u0649 \u062C\u0627\u0646\u0628 \u0627\u0644\u0623\u0647\u0631\u0627\u0645\u0627\u062A \u062A\u0648\u062C\u062F \u0639\u062F\u0629 \u0645\u0639\u0627\u0628\u062F \u0642\u062F\u064A\u0645\u0629 \u0645\u0646\u0647\u0627 \u0645\u0639\u0628\u062F \u0627\u0644\u0623\u0633\u062F \u0623\u0628\u0627\u062F\u0645\u0627\u0643 \u0648\u0645\u0639\u0628\u062F \u0622\u0645\u0648\u0646 \u0648\u0627\u0644\u0643\u0634\u0643 \u0627\u0644\u0631\u0648\u0645\u0627\u0646\u064A \u0648\u0643\u0644\u0647\u0627 \u062A\u0642\u0639 \u0641\u064A \u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0646\u0642\u0639\u0629 \u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0645\u0635\u0648\u0631\u0627\u062A \u0627\u0644\u0635\u0641\u0631\u0627\u0621 \u0648\u0628\u0647\u0627 \u0628\u0639\u0636 \u0627\u0644\u0622\u062B\u0627\u0631 \u0627\u0644\u0646\u0648\u0628\u064A\u0629 \u0627\u0644\u0642\u062F\u064A\u0645\u0629. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".card[_ngcontent-%COMP%]\r\n{\r\n     padding: 18px 7px;\r\n    line-height: 1.7;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n\r\n}\r\n.tabs[_ngcontent-%COMP%]{\r\n    background-color:#f5f5f5;\r\n    padding-top:30px;\r\n    padding-bottom:30px;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   .tab-pane[_ngcontent-%COMP%]{\r\n    margin-left:20px;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size:20px;\r\n    margin-top:10px;\r\n    margin-bottom:60px;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size:14px;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-family:OpenSans,sans-serif;\r\n    color:#fff;\r\n    padding: 12px;;\r\n  }\r\nul[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: inline;\r\n    right: 305px;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{  margin-left: 2px;\r\n     background-color: #333;\r\n    \r\n    text-align: center;\r\n    padding-top: 2px;\r\n    border-radius: 65%;\r\n    display: inline;  \r\n  }\r\n.tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%]\r\n  {\r\n      font-weight: bolder;\r\n      font-size: 20px;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n      font-size: 23px;\r\n  }\r\n.img[_ngcontent-%COMP%]\r\n  {background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n      height: 70vh;\r\n  }\r\n.tabs[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{\r\n    background-color:green;\r\n  }\r\n@media (max-width:1000px  )\r\n  {\r\n    ul[_ngcontent-%COMP%]\r\n{display: none;\r\n}  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZXN0L2ludmVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0NBQWtDO0tBQzlCLGlCQUFpQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDQSxXQUFXLGdCQUFnQjtLQUN4QixzQkFBc0I7O0lBRXZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFDQTs7TUFFSSxtQkFBbUI7TUFDbkIsZUFBZTtFQUNuQjtBQUNBO01BQ0ksZUFBZTtFQUNuQjtBQUNBO0dBQ0MsMkJBQTJCO0lBQzFCLDRCQUE0QjtJQUM1QixzQkFBc0I7TUFDcEIsWUFBWTtFQUNoQjtBQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0E7O0lBRUU7Q0FDSCxhQUFhO0FBQ2QsR0FBRyIsImZpbGUiOiJzcmMvYXBwL2ludmVzdC9pbnZlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkXHJcbnsvKmZvbnQtZmFtaWx5OiAnTGF0ZWVmJywgY3Vyc2l2ZTsqL1xyXG4gICAgIHBhZGRpbmc6IDE4cHggN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufVxyXG4udGFic3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcclxuICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFicyAudGFiLXBhbmV7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGFicyBoM3tcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG4gIH1cclxuICBcclxuICAudGFicyBwe1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJzIGF7XHJcbiAgICBmb250LWZhbWlseTpPcGVuU2FucyxzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDEycHg7O1xyXG4gIH1cclxuICB1bHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHJpZ2h0OiAzMDVweDtcclxuICB9XHJcbiAgLnRhYnMgbGl7ICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7ICBcclxuICB9XHJcbiAgLnRhYnMgLnRhYi1jb250ZW50IC5sZWFkXHJcbiAge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC50YWJzIC50YWItY29udGVudCBoM3tcclxuICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxuICAuaW1nXHJcbiAge2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgfVxyXG4gIC50YWJzIGxpLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjEwMDBweCAgKVxyXG4gIHtcclxuICAgIHVsXHJcbntkaXNwbGF5OiBub25lO1xyXG59ICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-invest',
          templateUrl: './invest.component.html',
          styleUrls: ['./invest.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landpage/landpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/landpage/landpage.component.ts ***!
    \************************************************/

  /*! exports provided: LandpageComponent */

  /***/
  function srcAppLandpageLandpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandpageComponent", function () {
      return LandpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../slider/slider.component */
    "./src/app/slider/slider.component.ts");
    /* harmony import */


    var _service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/service.component */
    "./src/app/service/service.component.ts");
    /* harmony import */


    var _destination_destination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../destination/destination.component */
    "./src/app/destination/destination.component.ts");
    /* harmony import */


    var _trending_trending_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../trending/trending.component */
    "./src/app/trending/trending.component.ts");
    /* harmony import */


    var _invest_invest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../invest/invest.component */
    "./src/app/invest/invest.component.ts");
    /* harmony import */


    var _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../offer/offer.component */
    "./src/app/offer/offer.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../gallery/gallery.component */
    "./src/app/gallery/gallery.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var LandpageComponent = /*#__PURE__*/function () {
      function LandpageComponent() {
        _classCallCheck(this, LandpageComponent);

        this.cc = "red";
      }

      _createClass(LandpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandpageComponent;
    }();

    LandpageComponent.ɵfac = function LandpageComponent_Factory(t) {
      return new (t || LandpageComponent)();
    };

    LandpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandpageComponent,
      selectors: [["app-landpage"]],
      decls: 11,
      vars: 0,
      consts: [[1, "fluid-containerwow", "fadeInBottom"]],
      template: function LandpageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-trending");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-invest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"], _service_service_component__WEBPACK_IMPORTED_MODULE_3__["ServiceComponent"], _destination_destination_component__WEBPACK_IMPORTED_MODULE_4__["DestinationComponent"], _trending_trending_component__WEBPACK_IMPORTED_MODULE_5__["TrendingComponent"], _invest_invest_component__WEBPACK_IMPORTED_MODULE_6__["InvestComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_7__["OfferComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRwYWdlL2xhbmRwYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landpage',
          templateUrl: './landpage.component.html',
          styleUrls: ['./landpage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var mad = [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[mad], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [mad],
          exports: [mad]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);

        this.cc = "red";
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 32,
      vars: 2,
      consts: [[1, "container", "ml-auto"], ["id", "mainNav", 1, "navbar", "navbar-expand-lg", "fixed-top"], ["href", "#page-top", 1, "navbar-brand", "js-scroll-trigger", "font-weight-bolder", "justify-content-right", "text-white"], [1, "text-fs"], ["id", "nav-btn", "type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fas", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse", "justify-content-center"], [1, "nav-menu", "ml-2", "navbar-nav"], [1, "nav-item"], ["href", "#", "mat-raised-button", "", 1, "nav-link", 2, "font-size", "22px"], ["href", "#about", 1, "nav-link"], ["href", "#destanion", 1, "nav-link"], ["href", "#offer", 1, "nav-link"], ["href", "#blog", 1, "nav-link"], ["href", "#sponsors", 1, "nav-link"], ["href", "#contact", 1, "nav-link"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0644\u0641\u0640\u0629 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u0633\u0648\u062F\u0627\u0646 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n\u0627\u0644\u0642\u0627\u0626\u0645\u0629 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u062D\u0648\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0648\u062C\u0647\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0648\u062C\u0647\u0627\u062A \u0645\u0642\u062A\u0631\u062D\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0641\u0646\u0627\u062F\u0642");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0627\u0644\u0631\u0639\u0640\u0627\u0629");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u062A\u0648\u0627\u0635\u0644");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "white");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]],
      styles: [".wrap[_ngcontent-%COMP%]   .bg-wrap[_ngcontent-%COMP%]:before {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tright: -40px;\r\n\t\tcontent: '';\r\n\t\twidth: 0;\r\n\t\theight: 0;\r\n\t\tborder-style: solid;\r\n\t\tborder-width: 40px 40px 0 0;\r\n\t\tborder-color: #413c69 transparent transparent transparent;\r\n\t\tz-index: -1; }\r\n\t  @media (max-width: 991.98px) {\r\n\t\t.wrap[_ngcontent-%COMP%]   .bg-wrap[_ngcontent-%COMP%]:before {\r\n\t\t  right: -39px; }\r\n\t\t.wrap[_ngcontent-%COMP%]   .bg-wrap[_ngcontent-%COMP%]:after {\r\n\t\t  right: -39px; } }\r\n\t  @media (max-width: 767.98px) {\r\n\t\t.wrap[_ngcontent-%COMP%]   .bg-wrap[_ngcontent-%COMP%] {\r\n\t\t  padding-left: 20px;\r\n\t\t  padding-right: 20px; }\r\n\t\t  .wrap[_ngcontent-%COMP%]   .bg-wrap[_ngcontent-%COMP%]:after, .wrap[_ngcontent-%COMP%]   .bg-wrap[_ngcontent-%COMP%]:before {\r\n\t\t\tdisplay: none; } }\r\n\t  .wrap[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\r\n\t  z-index: 1; }\r\n\t  .wrap[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tcolor: #fff; }\r\n\t  .wrap[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tcolor: #fff;\r\n\t\tfont-size: 12px; }\r\n\t  .navbar-brand[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\tcolor: #000000;\r\n\t\t\t\t\t\t\tfont-weight: 800;\r\n\t\t\t\t\t\t\tfont-size: 28px;\r\n\t\t\t\t\t\t\tline-height: 1;\r\n\t\t\t\t\t\t\tpadding-right:26px;\r\n\t\t\t\t\t\t}\r\n\t  .text-fs[_ngcontent-%COMP%]\r\n{\r\ncolor: \thsl(152 94% 50% / 0.94);\r\n\tfont-style: italic;\r\n}\r\n\t  #nav-btn[_ngcontent-%COMP%]\r\n{\r\n\tcolor: white;\r\n}\r\n\t  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 20px 20px;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    text-transform: uppercase;\r\n\tcolor: #fff;\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7R0FDRztFQUNELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IseURBQXlEO0VBQ3pELFdBQVcsRUFBRTtHQUNaO0VBQ0Q7SUFDRSxZQUFZLEVBQUU7RUFDaEI7SUFDRSxZQUFZLEVBQUUsRUFBRTtHQUNqQjtFQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFFO0lBQ3JCO0dBQ0QsYUFBYSxFQUFFLEVBQUU7R0FDbkI7R0FDRSxVQUFVLEVBQUU7R0FDWjtFQUNELFdBQVcsRUFBRTtHQUNaO0VBQ0QsV0FBVztFQUNYLGVBQWUsRUFBRTtHQUNqQjtPQUNLLGNBQWM7T0FDZCxnQkFBZ0I7T0FDaEIsZUFBZTtPQUNmLGNBQWM7T0FDZCxrQkFBa0I7TUFDbkI7R0FFTjs7QUFFQSwrQkFBK0I7Q0FDOUIsa0JBQWtCO0FBQ25CO0dBQ0E7O0NBRUMsWUFBWTtBQUNiO0dBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIseUJBQXlCO0NBQzVCLFdBQVc7O0FBRVoiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHQgIC53cmFwIC5iZy13cmFwOmJlZm9yZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRyaWdodDogLTQwcHg7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogNDBweCA0MHB4IDAgMDtcclxuXHRcdGJvcmRlci1jb2xvcjogIzQxM2M2OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHRcdHotaW5kZXg6IC0xOyB9XHJcblx0ICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcclxuXHRcdC53cmFwIC5iZy13cmFwOmJlZm9yZSB7XHJcblx0XHQgIHJpZ2h0OiAtMzlweDsgfVxyXG5cdFx0LndyYXAgLmJnLXdyYXA6YWZ0ZXIge1xyXG5cdFx0ICByaWdodDogLTM5cHg7IH0gfVxyXG5cdCAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcblx0XHQud3JhcCAuYmctd3JhcCB7XHJcblx0XHQgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRcdCAgcGFkZGluZy1yaWdodDogMjBweDsgfVxyXG5cdFx0ICAud3JhcCAuYmctd3JhcDphZnRlciwgLndyYXAgLmJnLXdyYXA6YmVmb3JlIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTsgfSB9XHJcblx0LndyYXAgLnBob25lIHtcclxuXHQgIHotaW5kZXg6IDE7IH1cclxuXHQgIC53cmFwIC5waG9uZSBzcGFuIHtcclxuXHRcdGNvbG9yOiAjZmZmOyB9XHJcblx0ICAud3JhcCAucGhvbmUgYSB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDsgfVxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA4MDA7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdFx0XHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctcmlnaHQ6MjZweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuLnRleHQtZnNcclxue1xyXG5jb2xvcjogXHRoc2woMTUyIDk0JSA1MCUgLyAwLjk0KTtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuI25hdi1idG5cclxue1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG51bCBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/offer/offer.component.ts":
  /*!******************************************!*\
    !*** ./src/app/offer/offer.component.ts ***!
    \******************************************/

  /*! exports provided: OfferComponent */

  /***/
  function srcAppOfferOfferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferComponent", function () {
      return OfferComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OfferComponent = /*#__PURE__*/function () {
      function OfferComponent() {
        _classCallCheck(this, OfferComponent);
      }

      _createClass(OfferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OfferComponent;
    }();

    OfferComponent.ɵfac = function OfferComponent_Factory(t) {
      return new (t || OfferComponent)();
    };

    OfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OfferComponent,
      selectors: [["app-offer"]],
      decls: 9,
      vars: 2,
      consts: [["id", "offer", 1, "offer", "wow", "fadeInLeft"], [1, "bg-wrap", 2, "background-image", "url('../../assets/lib/gallery/pic2.jpg')", "min-width", "91%", "min-height", "70vh"], [1, "overlay", "text-center"], [1, "card-title"], ["href", "", 1, "btn", "btn-white"]],
      template: function OfferComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sponsored Travel Guides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0642\u0645 \u0628\u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u062F\u0644\u064A\u0644\u0640\u0640\u0646\u0640\u0640\u0627 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0623\u062B\u0646\u0627\u0621 \u0648\u062C\u0648\u062F\u0643 \u0641\u064A \u0627\u0644\u0645\u0646\u0632\u0644 \u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0632\u064A\u062F \u0639\u0646 \u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0633\u0640\u0648\u062F\u0627\u0646");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " CHECK OUT THE GUIDES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", 20, "px");
        }
      },
      styles: [".offer[_ngcontent-%COMP%]\r\n{\r\n    margin-top: 7vh;\r\n}\r\n.bg-wrap[_ngcontent-%COMP%]\r\n{\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n.overlay[_ngcontent-%COMP%]\r\n{\r\n    background: rgba(255, 255, 255, 0.4);\r\n    padding: 15px 30px;\r\n    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\r\n   position: relative;\r\n   bottom: -25vh;\r\n    border-radius: 5px;\r\n}\r\n.btn-white[_ngcontent-%COMP%]\r\n{outline: green;\r\n    box-shadow: 1px 1px 1px 1px green;\r\n    border: 1px solid green;\r\n    padding: 5px;\r\n    font-weight: bolder;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXIvb2ZmZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQztBQUNBOztJQUVJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsMkNBQTJDO0dBQzVDLGtCQUFrQjtHQUNsQixhQUFhO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7Q0FDQyxjQUFjO0lBQ1gsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXIvb2ZmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlclxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbn1cclxuLmJnLXdyYXBcclxue1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLm92ZXJsYXlcclxue1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBib3R0b206IC0yNXZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5idG4td2hpdGVcclxue291dGxpbmU6IGdyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGdyZWVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-offer',
          templateUrl: './offer.component.html',
          styleUrls: ['./offer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service/service.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/service.component.ts ***!
    \**********************************************/

  /*! exports provided: ServiceComponent */

  /***/
  function srcAppServiceServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceComponent", function () {
      return ServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ServiceComponent = /*#__PURE__*/function () {
      function ServiceComponent() {
        _classCallCheck(this, ServiceComponent);
      }

      _createClass(ServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServiceComponent;
    }();

    ServiceComponent.ɵfac = function ServiceComponent_Factory(t) {
      return new (t || ServiceComponent)();
    };

    ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceComponent,
      selectors: [["app-service"]],
      decls: 31,
      vars: 0,
      consts: [[1, "service", "mb-3", "pt-2", "wow", "fadeInLeft"], [1, "container"], [1, "section-title", "text-center", "mb-3", "mt-3"], [1, "row"], [1, "col-md-6", "img"], ["src", ""], [1, "col-md-6"], [1, "row", "service-list"], [1, "col-md-6", "service-item"], [1, "text"]],
      template: function ServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0644\u0645\u0627\u0630\u0627 \u0627\u0644\u0633\u064A\u0627\u062D\u0647 \u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u061F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "video", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0637\u0628\u064A\u0639\u0647 \u062E\u0644\u0627\u0628\u0629 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ..\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u0627\u0644\u0645\u0646\u0627\u0638\u0631 \u0627\u0644\u0637\u0628\u064A\u0640\u0640\u0640\u0640\u0639\u0647..\u0641\u064A \u0627\u0644\u0633\u0640\u0640\u0640\u0640\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u0627\u0644\u0645\u0646\u0640\u0640\u0640\u0640\u0640\u0640\u0627\u0638\u0631 \u0627\u0644\u0637\u0628\u064A\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0639\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0627\u0644\u0643\u0631\u0645 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u064A ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u0627\u0644\u0643\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0631\u0645 \u0627\u0644\u0633\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u062F\u0627\u0646\u064A ..\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u0627\u0644\u0643\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0631\u0645 \u0627\u0644\u0633\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0640\u0648\u062F\u0627\u0646\u064A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u062D\u064A\u0627\u0629 \u0637\u0628\u064A\u0639\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u062D\u0628\u0627\u0629 \u0637\u0628\u064A\u0639\u0647 \u0645\u0646 \u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0648\u063A\u064A\u0631\u0647..\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u062D\u0628\u0627\u0629 \u0637\u0628\u064A\u0639\u0647 \u0645\u0646 \u062D\u064A\u0648\u0627\u0646\u0627\u062A \u0648\u063A\u064A\u0631\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u0648\u062C\u0628\u0627\u062A \u0648\u0627\u0643\u0644\u0627\u062A \u0637\u0628\u064A\u0639\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u0627\u0644\u0627\u0643\u0644\u0627\u062A \u0627\u0644\u0634\u0639\u0628\u064A\u0647 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0647..\u0641\u064A \u0627\u0644\u0633\u0648\u062F\u0627\u0646 \u062D\u064A\u062B \u0627\u0644\u0627\u0643\u0644\u0627\u062A \u0627\u0644\u0634\u0639\u0628\u064A\u0647 \u0627\u0644\u0645\u062A\u0639\u062F\u062F\u0647");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".img[_ngcontent-%COMP%]\r\n{\r\n    background-image:url('pic2.jpg');\r\n    background-repeat: no-repeat;background-position: center;\r\n\r\nmin-height: 50vh;\r\n}\r\n.service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]\r\n{\r\n    padding: 5px 10px;\r\n}\r\n.service-list[_ngcontent-%COMP%]   .service-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]\r\n{\r\n\r\n    color: #0e10138c;\r\n}\r\n.service[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    margin-bottom: 1.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0NBQXVEO0lBQ3ZELDRCQUE0QixDQUFDLDJCQUEyQjs7QUFFNUQsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7OztJQUdJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS9zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4uLy4uL2Fzc2V0cy9saWIvZ2FsbGVyeS9waWMyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbm1pbi1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuLnNlcnZpY2UtbGlzdCAuc2VydmljZS1pdGVtXHJcbntcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbi5zZXJ2aWNlLWxpc3QgLnNlcnZpY2UtaXRlbSAudGV4dFxyXG57XHJcblxyXG4gICAgY29sb3I6ICMwZTEwMTM4YztcclxufVxyXG4uc2VydmljZSBoMntcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service',
          templateUrl: './service.component.html',
          styleUrls: ['./service.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/slider/slider.component.ts":
  /*!********************************************!*\
    !*** ./src/app/slider/slider.component.ts ***!
    \********************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      decls: 49,
      vars: 0,
      consts: [[1, "mb-4", "wow", "fadeInUp", 2, "width", "100%"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active", 2, "background-image", "url('../../assets/lib/gallery/pic1.jpg')", "height", "40rem"], [1, "overlay"], [1, "container"], [1, "row", "no-gutters", "slider-text", "align-items-center", "justify-content-center"], [1, "col-md-8"], [1, "vision"], [1, "text", "w-100", "text-center"], ["href", "#", 1, "btn", "btn-white", "text-white"], [1, "carousel-item", 2, "background-image", "url('../../assets/lib/gallery/mara.JPG')", "height", "40rem"], [1, "text", "w-100", "font-weight-700", "text-center"], [1, "carousel-item", 2, "background-image", "url('../../assets/lib/gallery/pic3.jpg')", "height", "40rem"], ["href", "#", 1, "btn", "btn-white", "text-white", "font-weight-bolder"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0627\u0644\u0631\u0627\u062D\u0647 , \u0627\u0644\u0637\u0628\u064A\u0639\u0647 \u0627\u0644\u062F\u0627\u0641\u0640\u064A\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Savety offer ! \u0627\u062D\u062C\u0632 \u0627\u0644\u0627\u0646 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0627\u0644\u0631\u0627\u062D\u0647 , \u0627\u0644\u0637\u0628\u064A\u0639\u0647 \u0627\u0644\u062F\u0627\u0641\u0640\u064A\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " !\u062E\u0635\u0645 50% ! \u0627\u062D\u062C\u0632 \u0627\u0644\u0627\u0646 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u0627\u0644\u0631\u0627\u062D\u0647 , \u0627\u0644\u0637\u0628\u064A\u0639\u0647 \u0627\u0644\u062F\u0627\u0641\u0640\u064A\u0647 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0627\u062D\u062C\u0632 \u0627\u0644\u0627\u0646 ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".slider-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor:#3b098a;\r\n\tfont-size: 30px;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]\r\n{\r\n\theight: 600px;background-size: cover;\r\n\tposition: relative;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n.overlay[_ngcontent-%COMP%]\r\n{position: absolute;\r\n    background-color:rgba(0, 0, 0, 0.6);\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;left: 0;\r\nz-index: 1;\r\n}\r\n.vision[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]\r\n\t{z-index: 1;\r\n\t\tposition: relative;\r\n\t\t\r\n\t}\r\n.vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n  padding-bottom:2px;\r\n  font-weight:  bolder;\r\n  margin: 6px;}\r\n.slider-text[_ngcontent-%COMP%] {\r\n\t\t\t\t  font-family: \"Montserrat\", Arial, sans-serif;\r\n\t\t\t\t  position: relative;\r\n\t\t\t\t  line-height: 1.2;right: -5px;\r\n\t\t\t\t\r\n\t\t\ttop: 15vh;}\r\n.slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n\t\t\t{\r\nfont-size: 20vw;\r\nfont-weight: bolder;\r\n\t\t\t}\r\n.btn-white[_ngcontent-%COMP%]\r\n\t\t\t\t  {padding: 10px 10px;\r\n\t\t\t\t\t  border: 2px solid limegreen;\r\n\t\t\t\t\t  font-size:22rem;\r\n\t\t\t\t  }\r\n@media (max-width: 991.98px) {\r\n\t\t\t\t\t .slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\t\t\t\t  font-size: 40px; } }\r\n.slider-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\t\t\t\t\t\r\n\t\t\t\t\t\tline-height: 1.5;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t }\r\n@media (max-width: 600.98px) {\r\n\t\t\t\t\t\t.slider-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n\t\t\t\t\t\t{\tfont-size: 18px;\r\n\t\t\t\t\t\t\tcolor: turquoise;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n@media (min-width:999.98px) {\r\n\t\t\t\t\t.vision[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]\r\n\r\n\t\t\t{\r\nmargin: 10px;\r\n\t\t\t}\r\n\t\t\t.vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\t\t\t\tmargin-top: 10px; margin-left: 7px;\r\n\t\t\t}}\r\n.nav-link[_ngcontent-%COMP%] {\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t\tpadding-top: 2.3rem;\r\n\t\t\t\tpadding-bottom: 2.6rem;\r\n\t\t\t\tpadding-left: 18px;\r\n\t\t\t\tpadding-right: 18px;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tcolor: #000000;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\topacity: 1 !important;\r\n\t\t\t}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n\t\t\t\tcolor: #000000;\r\n\t\t\t\tfont-weight: 800;\r\n\t\t\t\tfont-size: 28px;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t}\r\n.slider-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\t\t\tfont-size: 30px;\r\n\t\t\t}\r\n.carousel-item[_ngcontent-%COMP%]\r\n\t\t\t{\r\n\t\t\t\theight: 600px;background-size: cover;\r\n\t\t\t\t\r\n\t\t\t\tbackground-repeat: no-repeat;\r\n\t\t\t}\r\n.vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\t\t\t  color: #ffffff;\r\n\t\t\t  font: 30px;padding-bottom:2px;\r\n\t\t\t  font-weight:  bold;\r\n\t\t\t  margin: 6px;\r\n\t\t\t}\r\n.slider-text[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\t\theight: 400px; }\r\n.slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\t\t  font-weight: 400;\r\n\t\t\t\t\t\t\t\t  font-size: 40px; }\r\n.slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\t  color: #fff;\r\n\t\t\t\t\t\t\t  line-height: 1.2;\r\n\t\t\t\t\t\t\t  font-family: \"Montserrat\", Arial, sans-serif;\r\n\t\t\t\t\t\t\t   \r\n\t\t\t\t\t\t\t  line-height: 1.2;}\r\n@media (max-width: 991.98px) {\r\n\t\t\t\t\t\t\t\t .slider-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\t\t  font-size: 40px; } }\r\n.slider-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\tline-height: 1.5;\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t }\r\n@media (max-width: 600.98px) {\r\n\t\t\t\t\t\t\t\t\t.slider-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]\r\n\t\t\t\t\t\t\t\t\t{\tfont-size: 18px;\r\n\t\t\t\t\t\t\t\t\t\tcolor: turquoise;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n@media (min-width:999.98px) {\r\n\t\t\t\t\t\t\t\t.vision[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]\r\n\t\t\t\r\n\t\t\t\t\t\t{\r\n\t\t\tmargin: 10px;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t.vision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n\t\t\t\t\t\t\tmargin-top: 10px; margin-left: 7px;\r\n\t\t\t\t\t\t}}\r\n.nav-link[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t\t\t\tpadding-top: 2.3rem;\r\n\t\t\t\t\t\t\tpadding-bottom: 2.6rem;\r\n\t\t\t\t\t\t\tpadding-left: 18px;\r\n\t\t\t\t\t\t\tpadding-right: 18px;\r\n\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\tcolor: #000000;\r\n\t\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t\t\t\topacity: 1 !important;\r\n\t\t\t\t\t\t}\r\n.navbar-brand[_ngcontent-%COMP%] {\r\n\t\t\t\t\t\t\tcolor: #000000;\r\n\t\t\t\t\t\t\tfont-weight: 800;\r\n\t\t\t\t\t\t\tfont-size: 28px;\r\n\t\t\t\t\t\t\tline-height: 1;\r\n\t\t\t\t\t\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0FBQ2hCO0FBQ0E7O0NBRUMsYUFBYSxDQUFDLHNCQUFzQjtDQUNwQyxrQkFBa0I7Q0FDbEIsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixtQ0FBbUM7Q0FDdEMsV0FBVztDQUNYLFlBQVk7Q0FDWixNQUFNLENBQUMsT0FBTztBQUNmLFVBQVU7QUFDVjtBQUNDO0VBQ0MsVUFBVTtFQUNWLGtCQUFrQjs7Q0FFbkI7QUFDRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFdBQVcsQ0FBQztBQUdUO01BQ0MsNENBQTRDO01BQzVDLGtCQUFrQjtNQUNsQixnQkFBZ0IsQ0FBQyxXQUFXOztHQUUvQixTQUFTLENBQUM7QUFDVjs7QUFFSCxlQUFlO0FBQ2YsbUJBQW1CO0dBQ2hCO0FBQ0M7T0FDRyxrQkFBa0I7T0FDbEIsMkJBQTJCO09BQzNCLGVBQWU7TUFDaEI7QUFDQTtNQUNBO09BQ0MsZUFBZSxFQUFFLEVBQUU7QUFDbkI7O01BRUQsZ0JBQWdCOztNQUVoQjtBQUNBO01BQ0E7UUFDRSxlQUFlO09BQ2hCLGdCQUFnQjtNQUNqQjtLQUNEO0FBQ0E7S0FDQTs7O0FBR0wsWUFBWTtHQUNUO0dBQ0E7SUFDQyxnQkFBZ0IsRUFBRSxnQkFBZ0I7R0FDbkMsQ0FBQztBQUFFO0lBQ0YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0dBQ3RCO0FBQUU7SUFDRCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0dBQ2Y7QUFBRTtJQUNELGVBQWU7R0FDaEI7QUFDQTs7SUFFQyxhQUFhLENBQUMsc0JBQXNCOztJQUVwQyw0QkFBNEI7R0FDN0I7QUFFQTtLQUNFLGNBQWM7S0FDZCxVQUFVLENBQUMsa0JBQWtCO0tBQzdCLGtCQUFrQjtLQUNsQixXQUFXO0dBQ2I7QUFDSTtRQUNDLGFBQWEsRUFBRTtBQUNkO1VBQ0MsZ0JBQWdCO1VBQ2hCLGVBQWUsRUFBRTtBQUNuQjtTQUNDLFdBQVc7U0FDWCxnQkFBZ0I7U0FDaEIsNENBQTRDOztTQUU1QyxnQkFBZ0IsQ0FBQztBQUNqQjtTQUNBO1VBQ0MsZUFBZSxFQUFFLEVBQUU7QUFDbkI7O1NBRUQsZ0JBQWdCOztTQUVoQjtBQUNBO1NBQ0E7V0FDRSxlQUFlO1VBQ2hCLGdCQUFnQjtTQUNqQjtRQUNEO0FBQ0E7UUFDQTs7O0dBR0wsWUFBWTtNQUNUO01BQ0E7T0FDQyxnQkFBZ0IsRUFBRSxnQkFBZ0I7TUFDbkMsQ0FBQztBQUFFO09BQ0YsZUFBZTtPQUNmLG1CQUFtQjtPQUNuQixzQkFBc0I7T0FDdEIsa0JBQWtCO09BQ2xCLG1CQUFtQjtPQUNuQixnQkFBZ0I7T0FDaEIsY0FBYztPQUNkLGtCQUFrQjtPQUNsQix5QkFBeUI7T0FDekIscUJBQXFCO01BQ3RCO0FBQUU7T0FDRCxjQUFjO09BQ2QsZ0JBQWdCO09BQ2hCLGVBQWU7T0FDZixjQUFjO01BQ2YiLCJmaWxlIjoic3JjL2FwcC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNsaWRlci10ZXh0IGEge1xyXG5cdGNvbG9yOiMzYjA5OGE7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5jYXJvdXNlbC1pdGVtXHJcbntcclxuXHRoZWlnaHQ6IDYwMHB4O2JhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5vdmVybGF5XHJcbntwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwO2xlZnQ6IDA7XHJcbnotaW5kZXg6IDE7XHJcbn1cclxuXHQudmlzaW9uLC50ZXh0XHJcblx0e3otaW5kZXg6IDE7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcclxuXHR9XHJcbi52aXNpb24gaDJ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjJweDtcclxuICBmb250LXdlaWdodDogIGJvbGRlcjtcclxuICBtYXJnaW46IDZweDt9XHJcblxyXG5cclxuXHRcdFx0XHQgLnNsaWRlci10ZXh0IHtcclxuXHRcdFx0XHQgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0ICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0ICBsaW5lLWhlaWdodDogMS4yO3JpZ2h0OiAtNXB4O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0b3A6IDE1dmg7fVxyXG5cdFx0XHQuc2xpZGVyLXRleHQgIGgxXHJcblx0XHRcdHtcclxuZm9udC1zaXplOiAyMHZ3O1xyXG5mb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdCAuYnRuLXdoaXRlXHJcblx0XHRcdFx0ICB7cGFkZGluZzogMTBweCAxMHB4O1xyXG5cdFx0XHRcdFx0ICBib3JkZXI6IDJweCBzb2xpZCBsaW1lZ3JlZW47XHJcblx0XHRcdFx0XHQgIGZvbnQtc2l6ZToyMnJlbTtcclxuXHRcdFx0XHQgIH1cclxuXHRcdFx0XHQgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG5cdFx0XHRcdFx0IC5zbGlkZXItdGV4dCBoMSB7XHJcblx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogNDBweDsgfSB9XHJcblx0XHRcdFx0XHQgIC5zbGlkZXItdGV4dCBwIGF7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0IEBtZWRpYSAobWF4LXdpZHRoOiA2MDAuOThweCkge1xyXG5cdFx0XHRcdFx0XHQuc2xpZGVyLXRleHQgIGFcclxuXHRcdFx0XHRcdFx0e1x0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB0dXJxdW9pc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOjk5OS45OHB4KSB7XHJcblx0XHRcdFx0XHQudmlzaW9uIC50ZXh0XHJcblxyXG5cdFx0XHR7XHJcbm1hcmdpbjogMTBweDtcclxuXHRcdFx0fVxyXG5cdFx0XHQudmlzaW9uIGgye1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1sZWZ0OiA3cHg7XHJcblx0XHRcdH19IC5uYXYtbGluayB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAyLjNyZW07XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIuNnJlbTtcclxuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMThweDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuXHRcdFx0fSAubmF2YmFyLWJyYW5kIHtcclxuXHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0fSAuc2xpZGVyLXRleHQgYSB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5jYXJvdXNlbC1pdGVtXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWlnaHQ6IDYwMHB4O2JhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdC52aXNpb24gaDJ7XHJcblx0XHRcdCAgY29sb3I6ICNmZmZmZmY7XHJcblx0XHRcdCAgZm9udDogMzBweDtwYWRkaW5nLWJvdHRvbToycHg7XHJcblx0XHRcdCAgZm9udC13ZWlnaHQ6ICBib2xkO1xyXG5cdFx0XHQgIG1hcmdpbjogNnB4O1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0LnNsaWRlci10ZXh0IHtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNDAwcHg7IH1cclxuXHRcdFx0XHRcdFx0XHRcdCAuc2xpZGVyLXRleHQgaDEge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICBmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICBmb250LXNpemU6IDQwcHg7IH1cclxuXHRcdFx0XHRcdFx0XHQgLnNsaWRlci10ZXh0IGgxIHtcclxuXHRcdFx0XHRcdFx0XHQgIGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdCAgbGluZS1oZWlnaHQ6IDEuMjtcclxuXHRcdFx0XHRcdFx0XHQgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0XHRcdFx0ICAgXHJcblx0XHRcdFx0XHRcdFx0ICBsaW5lLWhlaWdodDogMS4yO31cclxuXHRcdFx0XHRcdFx0XHQgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0IC5zbGlkZXItdGV4dCBoMSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgIGZvbnQtc2l6ZTogNDBweDsgfSB9XHJcblx0XHRcdFx0XHRcdFx0XHQgIC5zbGlkZXItdGV4dCBwIGF7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0IEBtZWRpYSAobWF4LXdpZHRoOiA2MDAuOThweCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc2xpZGVyLXRleHQgIGFcclxuXHRcdFx0XHRcdFx0XHRcdFx0e1x0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB0dXJxdW9pc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOjk5OS45OHB4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHQudmlzaW9uIC50ZXh0XHJcblx0XHRcdFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdG1hcmdpbjogMTBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQudmlzaW9uIGgye1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7IG1hcmdpbi1sZWZ0OiA3cHg7XHJcblx0XHRcdFx0XHRcdH19IC5uYXYtbGluayB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyLjNyZW07XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIuNnJlbTtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1yaWdodDogMThweDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fSAubmF2YmFyLWJyYW5kIHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogODAwO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0XHRcdFx0fSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/trending/trending.component.ts":
  /*!************************************************!*\
    !*** ./src/app/trending/trending.component.ts ***!
    \************************************************/

  /*! exports provided: TrendingComponent */

  /***/
  function srcAppTrendingTrendingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrendingComponent", function () {
      return TrendingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TrendingComponent = /*#__PURE__*/function () {
      function TrendingComponent() {
        _classCallCheck(this, TrendingComponent);
      }

      _createClass(TrendingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TrendingComponent;
    }();

    TrendingComponent.ɵfac = function TrendingComponent_Factory(t) {
      return new (t || TrendingComponent)();
    };

    TrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrendingComponent,
      selectors: [["app-trending"]],
      decls: 17,
      vars: 0,
      consts: [[1, "cards", "wow", "fadeInBottom"], ["data-card", "0", 1, "card", "fill-orange"], ["data-icon", "\u0643\u0631\u0645\u0647", 1, "card__icon"], [1, "card__detail"], ["data-card", "1", 1, "card", "fill-blue"], ["data-icon", "\u0645\u0631\u0648\u064A", 1, "card__icon"], ["data-card", "2", 1, "card", "fill-green"], ["data-icon", "\u0628\u062C\u0631\u0648\u0627\u064A\u0647", 1, "card__icon"], ["data-card", "3", 1, "card", "fill-purple"], ["data-icon", "\u0633\u0648\u0627\u0643\u0646", 1, "card__icon"]],
      template: function TrendingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]\r\n{\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content:center;\r\n  width:100vw;\r\n  height:100vh;\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\n.fill-purple[_ngcontent-%COMP%]\r\n{\r\n  background-image: url('karma.JPG');\r\n  \r\n  -webkit-backdrop-filter: blur(105px);\r\n  \r\n          backdrop-filter: blur(105px);\r\n\r\n}\r\n\r\n.fill-green[_ngcontent-%COMP%]\r\n{\r\n  \r\n  background-image: url('mara.JPG');\r\n  \r\n  -webkit-backdrop-filter: blur(105px);\r\n  \r\n          backdrop-filter: blur(105px);\r\n\r\n}\r\n\r\n.fill-blue[_ngcontent-%COMP%]\r\n{\r\n  \r\n  background-image: url('suaken.JPG');\r\n  \r\n  -webkit-backdrop-filter: blur(105px);\r\n  \r\n          backdrop-filter: blur(105px);\r\n\r\n}\r\n\r\n.fill-orange[_ngcontent-%COMP%]\r\n{\r\n  \r\n  -webkit-backdrop-filter: blur(105px);\r\n  \r\n          backdrop-filter: blur(105px);\r\n\r\n  background-image: url('nega.JPG');\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]\r\n{\r\n  display:flex;\r\n  flex-direction:row;\r\n  align-items:center;\r\n  justify-content:center;\r\n  position: relative;\r\n  height:21.875rem;\r\n  width:100%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]\r\n{\r\n  display:flex;\r\n  width:27.8125rem;\r\n  height:16.25rem;\r\n  border-radius:0.5rem;\r\n  transform-origin:center center;\r\n  transform:scale(1) translate(0px,0px) perspective( 750px ) rotateY(0deg);\r\n  transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);\r\n  transition-duration: 0.5s;\r\n  position:absolute;\r\n  top:0;\r\n  box-shadow:0 30px 50px rgba(0,0,0,0.1);\r\n  z-index:3;\r\n  cursor: pointer;\r\n  overflow:hidden;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]\r\n{\r\n  pointer-events: none;\r\n}\r\n\r\n.card--left[_ngcontent-%COMP%]\r\n{\r\n  transform:scale(0.75) translate(-335px,0px) perspective( 750px ) rotateY(10deg);\r\n  box-shadow:0 15px 25px rgba(0,0,0,0.1);\r\n  z-index:1;\r\n}\r\n\r\n.card--center[_ngcontent-%COMP%]\r\n{\r\n  transform:scale(1) translate(0px, 0px) perspective( 750px ) rotateY(0deg);\r\n  box-shadow:0 30px 50px rgba(0,0,0,0.1);\r\n  z-index:3;\r\n}\r\n\r\n.card--right[_ngcontent-%COMP%]\r\n{\r\n  transform:scale(0.75) translate(335px,0px) perspective( 750px ) rotateY(-10deg);\r\n  box-shadow:0 15px 25px rgba(0,0,0,0.1);\r\n  z-index:1;\r\n}\r\n\r\n.card__icon[_ngcontent-%COMP%]\r\n{\r\n  width:30%;\r\n  height:100%;\r\n  background:rgba(255,255,255,0.5);\r\n  position:relative;\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.card__icon[_ngcontent-%COMP%]:before\r\n{\r\n  content:attr(data-icon);\r\n  font-size:3rem;\r\n  position:absolute;\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width:100px;\r\n  height:100px;\r\n  border-radius: 50px;\r\n  background:rgba(255,255,255,1);\r\n}\r\n\r\n.card__detail[_ngcontent-%COMP%]\r\n{\r\n  flex:1;\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@media only screen and (max-width : 736px)\r\n{\r\n  .cards[_ngcontent-%COMP%]\r\n  {\r\n    flex-direction:column;\r\n    margin:auto 0;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]\r\n  {\r\n    display:flex;\r\n    width:90%;\r\n  }\r\n\r\n  .card--left[_ngcontent-%COMP%]\r\n  {\r\n    transform:scale(0.75) translate(0px, -150px) perspective(750px) rotateY(0) rotateX(-10deg) translateZ(-5px);\r\n  }\r\n\r\n  .card--center[_ngcontent-%COMP%]\r\n  {\r\n    transform:scale(1) translate(0px, 0px) perspective( 750px ) rotateY(0deg)  rotateX(0deg) translateZ(5px);\r\n  }\r\n\r\n  .card--right[_ngcontent-%COMP%]\r\n  {\r\n    transform:scale(0.75) translate(0px, 150px) perspective(750px) rotateY(0) rotateX(10deg) translateZ(-5px);\r\n  }\r\n\r\n  .card__icon[_ngcontent-%COMP%]:before\r\n  {\r\n    transform:scale(0.75);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJlbmRpbmcvdHJlbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7Q0FDQzs4REFDNkQ7RUFDNUQsa0NBQXlEOztFQUV6RCxvQ0FBNEI7O1VBQTVCLDRCQUE0Qjs7QUFFOUI7O0FBRUE7Q0FDQzs4REFDNkQ7O0VBRTVELGlDQUF3RDs7RUFFeEQsb0NBQTRCOztVQUE1Qiw0QkFBNEI7O0FBRTlCOztBQUVBO0NBQ0M7OERBQzZEOztFQUU1RCxtQ0FBMEQ7O0VBRTFELG9DQUE0Qjs7VUFBNUIsNEJBQTRCOztBQUU5Qjs7QUFFQTtDQUNDOzhEQUM2RDs7RUFFNUQsb0NBQTRCOztVQUE1Qiw0QkFBNEI7O0VBRTVCLGlDQUF3RDtBQUMxRDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5Qix3RUFBd0U7RUFDeEUsMERBQTBEO0VBQzFELHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsS0FBSztFQUNMLHNDQUFzQztFQUN0QyxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLCtFQUErRTtFQUMvRSxzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBOztFQUVFLHlFQUF5RTtFQUN6RSxzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBOztFQUVFLCtFQUErRTtFQUMvRSxzQ0FBc0M7RUFDdEMsU0FBUztBQUNYOztBQUVBOztFQUVFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsTUFBTTtFQUNOLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFOztJQUVFLHFCQUFxQjtJQUNyQixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLFNBQVM7RUFDWDs7RUFFQTs7SUFFRSwyR0FBMkc7RUFDN0c7O0VBRUE7O0lBRUUsd0dBQXdHO0VBQzFHOztFQUVBOztJQUVFLHlHQUF5RztFQUMzRzs7RUFFQTs7SUFFRSxxQkFBcUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyZW5kaW5nL3RyZW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLGJvZHlcclxue1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICB3aWR0aDoxMDB2dztcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG4uZmlsbC1wdXJwbGVcclxuey8qXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGFkZGZmLCAjYTM0ZGZlKTsqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbGliL2dhbGxlcnkva2FybWEuSlBHKTtcclxuICBcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTA1cHgpO1xyXG5cclxufVxyXG5cclxuLmZpbGwtZ3JlZW5cclxuey8qXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZlNDBjLCAjMzNkNDk3KTsqL1xyXG4gIFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbGliL2dhbGxlcnkvbWFyYS5KUEcpO1xyXG4gIFxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDVweCk7XHJcblxyXG59XHJcblxyXG4uZmlsbC1ibHVlXHJcbnsvKlxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzI4NWNhNSwgIzE4ZDVmZik7Ki9cclxuICBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2xpYi9nYWxsZXJ5L3N1YWtlbi5KUEcpO1xyXG4gIFxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDVweCk7XHJcblxyXG59XHJcblxyXG4uZmlsbC1vcmFuZ2Vcclxuey8qXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmNmNTk1LCAjZmY5NTRkKTsqL1xyXG4gIFxyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDVweCk7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbGliL2dhbGxlcnkvbmVnYS5KUEcpO1xyXG59XHJcblxyXG4uY2FyZHNcclxue1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDoyMS44NzVyZW07XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNhcmRcclxue1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDoyNy44MTI1cmVtO1xyXG4gIGhlaWdodDoxNi4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOjAuNXJlbTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7XHJcbiAgdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgwcHgsMHB4KSBwZXJzcGVjdGl2ZSggNzUwcHggKSByb3RhdGVZKDBkZWcpO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40MiwgMCwgMC41OCwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBib3gtc2hhZG93OjAgMzBweCA1MHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB6LWluZGV4OjM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQgKlxyXG57XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLS1sZWZ0XHJcbntcclxuICB0cmFuc2Zvcm06c2NhbGUoMC43NSkgdHJhbnNsYXRlKC0zMzVweCwwcHgpIHBlcnNwZWN0aXZlKCA3NTBweCApIHJvdGF0ZVkoMTBkZWcpO1xyXG4gIGJveC1zaGFkb3c6MCAxNXB4IDI1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIHotaW5kZXg6MTtcclxufVxyXG5cclxuLmNhcmQtLWNlbnRlclxyXG57XHJcbiAgdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgwcHgsIDBweCkgcGVyc3BlY3RpdmUoIDc1MHB4ICkgcm90YXRlWSgwZGVnKTtcclxuICBib3gtc2hhZG93OjAgMzBweCA1MHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB6LWluZGV4OjM7XHJcbn1cclxuXHJcbi5jYXJkLS1yaWdodFxyXG57XHJcbiAgdHJhbnNmb3JtOnNjYWxlKDAuNzUpIHRyYW5zbGF0ZSgzMzVweCwwcHgpIHBlcnNwZWN0aXZlKCA3NTBweCApIHJvdGF0ZVkoLTEwZGVnKTtcclxuICBib3gtc2hhZG93OjAgMTVweCAyNXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB6LWluZGV4OjE7XHJcbn1cclxuXHJcbi5jYXJkX19pY29uXHJcbntcclxuICB3aWR0aDozMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkX19pY29uOmJlZm9yZVxyXG57XHJcbiAgY29udGVudDphdHRyKGRhdGEtaWNvbik7XHJcbiAgZm9udC1zaXplOjNyZW07XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6MTAwcHg7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG59XHJcblxyXG4uY2FyZF9fZGV0YWlsXHJcbntcclxuICBmbGV4OjE7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDczNnB4KVxyXG57XHJcbiAgLmNhcmRzXHJcbiAge1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgbWFyZ2luOmF1dG8gMDtcclxuICB9XHJcblxyXG4gIC5jYXJkXHJcbiAge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtLWxlZnRcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMC43NSkgdHJhbnNsYXRlKDBweCwgLTE1MHB4KSBwZXJzcGVjdGl2ZSg3NTBweCkgcm90YXRlWSgwKSByb3RhdGVYKC0xMGRlZykgdHJhbnNsYXRlWigtNXB4KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLS1jZW50ZXJcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlKDBweCwgMHB4KSBwZXJzcGVjdGl2ZSggNzUwcHggKSByb3RhdGVZKDBkZWcpICByb3RhdGVYKDBkZWcpIHRyYW5zbGF0ZVooNXB4KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLS1yaWdodFxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMHB4LCAxNTBweCkgcGVyc3BlY3RpdmUoNzUwcHgpIHJvdGF0ZVkoMCkgcm90YXRlWCgxMGRlZykgdHJhbnNsYXRlWigtNXB4KTtcclxuICB9XHJcblxyXG4gIC5jYXJkX19pY29uOmJlZm9yZVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjc1KTtcclxuICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-trending',
          templateUrl: './trending.component.html',
          styleUrls: ['./trending.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\AbdulRazq\Documents\ONE\bin\angular-4\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map