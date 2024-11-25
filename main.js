"use strict";
(self["webpackChunkparagon"] = self["webpackChunkparagon"] || []).push([["main"],{

/***/ 3818:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 7161);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 7063);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ 8081);
/* harmony import */ var _components_how_to_how_to_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/how-to/how-to.component */ 291);
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @okta/okta-angular */ 304);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/auth0-angular */ 5923);
/* harmony import */ var _components_investors_investors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/investors/investors.component */ 4761);
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account/account.component */ 3657);
/* harmony import */ var _components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-panel/admin-panel.component */ 2529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}, {
  path: 'howTo',
  component: _components_how_to_how_to_component__WEBPACK_IMPORTED_MODULE_3__.HowToComponent
}, {
  path: 'investors',
  component: _components_investors_investors_component__WEBPACK_IMPORTED_MODULE_4__.InvestorsComponent
}, {
  path: 'account',
  component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_5__.AccountComponent,
  canActivate: [_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_7__.AuthGuard]
}, {
  path: 'adminPanel',
  component: _components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__.AdminPanelComponent
}, {
  path: 'login/callback',
  component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_8__.OktaCallbackComponent
}, {
  path: '**',
  component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 4836:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_opistolis_Desktop_Paragon_Website_paragon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2961);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 5923);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ 4389);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);







function AppComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "ul", 22)(2, "li")(3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_18_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function AppComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "ul", 24)(2, "li")(3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_20_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class AppComponent {
  constructor(router, /*public authStateService: OktaAuthStateService*/auth, route, userService) {
    this.router = router;
    this.auth = auth;
    this.route = route;
    this.userService = userService;
    this.title = 'paragon';
    this.isAuthenticated$ = this.auth.isAuthenticated$;
    this.loginFromPython = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['triggerLogin']) {
        this.loginFromPython = true; // Set flag to indicate login is from Python
        this.triggerPythonLogin();
      }
    });
    // Detect when the user is authenticated
    if (this.isAuthenticated$ && this.loginFromPython) {
      //this.handlePostPythonLogin(); // Only call if login was triggered by Python app
      this.loginFromPython = false; // Reset flag after handling post-login
    }
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
  login() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout();
  }
  swapLogo(event) {
    const target = event.target;
    if (event.type === 'mouseenter') {
      target.setAttribute("src", "../assets/orangeLogoNoBack.png");
    } else if (event.type === 'mouseleave') {
      target.setAttribute("src", "../assets/whiteLogoNoBack.png");
    }
  }
  triggerPythonLogin() {
    var _this = this;
    return (0,_Users_opistolis_Desktop_Paragon_Website_paragon_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("I got to the login attempt!");
      yield _this.auth.loginWithRedirect().toPromise();
      try {
        const token = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(_this.auth.idTokenClaims$);
        console.log('Token: ' + token);
      } catch (err) {
        console.error("Error retrieving token: ", err);
      }
    })();
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 44,
      vars: 9,
      consts: [[1, "navbar"], [1, "logo"], ["src", "../assets/whiteLogoNoBack.png", 3, "mouseenter", "mouseleave", "click"], [1, "nav-links"], ["routerLink", "/home"], ["routerLink", "/about"], ["routerLink", "/howTo"], ["routerLink", "/investors"], [4, "ngIf"], [1, "footer"], [1, "footer-content"], [1, "footer-links"], ["href", "#about"], ["href", "#services"], ["href", "#contact"], ["href", "#privacy"], [1, "footer-social"], ["href", "#", "aria-label", "Facebook"], ["href", "#", "aria-label", "Twitter"], ["href", "#", "aria-label", "Instagram"], [1, "footer-bottom"], ["routerLink", "/account"], ["id", "login", 1, "nav-links"], ["id", "loginLink", 3, "click"], ["id", "logout", 1, "nav-links"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function AppComponent_Template_img_mouseenter_2_listener($event) {
            return ctx.swapLogo($event);
          })("mouseleave", function AppComponent_Template_img_mouseleave_2_listener($event) {
            return ctx.swapLogo($event);
          })("click", function AppComponent_Template_img_click_2_listener() {
            return ctx.goToHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 3)(4, "li")(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "About");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "How To");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Investors");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_li_16_Template, 3, 0, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppComponent_div_18_Template, 5, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_div_20_Template, 5, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "footer", 9)(24, "div", 10)(25, "div", 11)(26, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Services");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Contact");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 16)(35, "a", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 20)(42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u00A9 Paragon AI. All Rights Reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 3, ctx.isAuthenticated$));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 5, ctx.isAuthenticated$));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 7, ctx.isAuthenticated$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; \n\n  padding: 1rem 2rem;\n  background-color: black;\n  color: white;\n  position: fixed; \n\n  top: 0; \n\n  width: 100%; \n\n  z-index: 1000; \n\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); \n\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  padding-top: 80px; \n\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex: 1;\n  margin: 0;\n}\n\n\n\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #fd7014;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-weight: bold;\n}\n\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n  font-size: 1rem;\n  transition: color 0.3s ease;\n  padding: 8px;\n  border: 1px solid black;\n  border-radius: 15px;\n}\n\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fd7014;\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 15px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n}\n\n#login[_ngcontent-%COMP%], #logout[_ngcontent-%COMP%] {\n  margin: 0 3rem;\n}\n\n#login[_ngcontent-%COMP%]:hover, #logout[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  background-color: black;\n  color: white;\n  padding: 20px;\n  text-align: center;\n  margin-top: auto;\n}\n\n.footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.footer-links[_ngcontent-%COMP%], .footer-social[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  margin: 0 10px;\n  transition: color 0.3s;\n  font-weight: bold;\n}\n\n.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fd7014;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR0EsbUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBLEVBQUEsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUEsRUFBQSxpQ0FBQTtFQUNBLE1BQUEsRUFBQSwyQkFBQTtFQUNBLFdBQUEsRUFBQSxlQUFBO0VBQ0EsYUFBQSxFQUFBLHlDQUFBO0VBQ0Esd0NBQUEsRUFBQSwwQ0FBQTtBQWhHRjs7QUFtR0EseURBQUE7QUFDQTtFQUNFLGlCQUFBLEVBQUEsa0NBQUE7QUFoR0Y7O0FBbUdBLG9CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQWhHRjs7QUFtR0EsU0FBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFoR0Y7O0FBbUdBO0VBQ0UsZUFBQTtBQWhHRjs7QUFtR0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFoR0Y7O0FBbUdBO0VBQ0UsY0FBQTtBQWhHRjs7QUFtR0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhHRjs7QUFtR0E7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEdGOztBQW1HQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBaEdGOztBQW1HQTtFQUNFLGNBQUE7QUFoR0Y7O0FBa0dBO0VBQ0UsZUFBQTtBQS9GRjs7QUFpR0EsbUJBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBOUZGOztBQWlHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTlGRjs7QUFpR0E7RUFDRSxZQUFBO0FBOUZGOztBQWlHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBOUZGOztBQWlHQTtFQUNFLGNBQUE7QUE5RkY7O0FBaUdBO0VBQ0UsZ0JBQUE7QUE5RkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLyogTmF2YmFyIFN0eWxpbmcgKi9cbi8vIC5uYXZiYXIge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIEtlZXAgc3BhY2UgYmV0d2VlbiBsb2dvIGFuZCBuYXYgbGlua3MgKi9cbi8vICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICAvLyB3aWR0aDogMTAwJTtcbi8vIH1cbi8vICAgLyogQ2VudGVyaW5nIExpbmtzICovXG4vLyAgIC5uYXZiYXIgLm5hdi1saW5rcyB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBuYXYgbGlua3MgKi9cbi8vICAgICBmbGV4OiAxOyAvKiBBbGxvdyBuYXYgbGlua3MgdG8gdGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cbi8vICAgICBtYXJnaW46IDA7IC8qIFJlc2V0IG1hcmdpbiAqL1xuLy8gICB9XG4gIFxuLy8gICAvKiBMb2dvICovXG4vLyAgIC5sb2dvIHtcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogI2ZkNzAxNDtcbi8vICAgfVxuXG4vLyAgIC5sb2dvOmhvdmVye1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuICBcbi8vICAgLyogTmF2aWdhdGlvbiBMaW5rcyAqL1xuLy8gICAubmF2LWxpbmtzIHtcbi8vICAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICB9XG4gIFxuLy8gICAubmF2LWxpbmtzIGxpIHtcbi8vICAgICBtYXJnaW46IDAgMXJlbTtcbi8vICAgfVxuICBcbi8vICAgLm5hdi1saW5rcyBhIHtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIGZvbnQtc2l6ZTogMXJlbTtcbi8vICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4vLyAgICAgcGFkZGluZzogOHB4O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAvKiBPcHRpb25hbDogYm9yZGVyIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIEFkanVzdCB0aGUgdmFsdWUgdG8gbWFrZSBjb3JuZXJzIG1vcmUgb3IgbGVzcyByb3VuZGVkICovXG4vLyAgIH1cbiAgXG4vLyAgIC5uYXYtbGlua3MgYTpob3ZlciB7XG4vLyAgICAgY29sb3I6ICNmZDcwMTQ7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IC8qIE9wdGlvbmFsOiBib3JkZXIgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSB0byBtYWtlIGNvcm5lcnMgbW9yZSBvciBsZXNzIHJvdW5kZWQgKi9cbi8vICAgfVxuLy8gICAubG9nbyBpbWd7XG4vLyAgICAgd2lkdGg6IDc1cHg7XG4vLyAgICAgaGVpZ2h0OiA3NXB4O1xuLy8gICB9XG5cbi8vICAgLmZvb3RlciB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IC8qIERhcmsgYmFja2dyb3VuZCBjb2xvciAqL1xuLy8gICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7IC8qIFBhZGRpbmcgYXJvdW5kIHRoZSBmb290ZXIgKi9cbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlcmVkIHRleHQgKi9cbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyLWNvbnRlbnQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IGZvciBsYXlvdXQgKi9cbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIG91dCB0aGUgbGlua3MgYW5kIHNvY2lhbCBpY29ucyAqL1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5ICovXG4vLyAgICAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvdyB3cmFwcGluZyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbi8vICAgfVxuICBcbi8vICAgLmZvb3Rlci1saW5rcywgLmZvb3Rlci1zb2NpYWwge1xuLy8gICAgIG1hcmdpbjogMTBweDsgLyogTWFyZ2luIGZvciBzcGFjaW5nICovXG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXItbGlua3MgYSwgLmZvb3Rlci1zb2NpYWwgYSB7XG4vLyAgICAgY29sb3I6IHdoaXRlOyAvKiBMaW5rIGNvbG9yICovXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lICovXG4vLyAgICAgbWFyZ2luOiAwIDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gbGlua3MgKi9cbi8vICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzOyAvKiBTbW9vdGggY29sb3IgdHJhbnNpdGlvbiAqL1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyLWxpbmtzIGE6aG92ZXIsIC5mb290ZXItc29jaWFsIGE6aG92ZXIge1xuLy8gICAgIGNvbG9yOiAjZmQ3MDE0O1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyLWJvdHRvbSB7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBjb250ZW50IGFuZCBjb3B5cmlnaHQgKi9cbi8vICAgfVxuLyogTmF2YmFyIFN0eWxpbmcgKi9cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIEtlZXAgc3BhY2UgYmV0d2VlbiBsb2dvIGFuZCBuYXYgbGlua3MgKi9cbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEtlZXAgbmF2YmFyIGZpeGVkIGF0IHRoZSB0b3AgKi9cbiAgdG9wOiAwOyAvKiBQb3NpdGlvbiBpdCBhdCB0aGUgdG9wICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCBzdGF5cyBhYm92ZSBvdGhlciBlbGVtZW50cyAqL1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBPcHRpb25hbCBzaGFkb3cgZm9yIGJldHRlciBzZXBhcmF0aW9uICovXG59XG5cbi8qIEFkZCBwYWRkaW5nLXRvcCB0byB0aGUgbWFpbiBjb250ZW50IHRvIGF2b2lkIG92ZXJsYXAgKi9cbmJvZHkge1xuICBwYWRkaW5nLXRvcDogODBweDsgLyogQWRqdXN0IGJhc2VkIG9uIG5hdmJhciBoZWlnaHQgKi9cbn1cblxuLyogQ2VudGVyaW5nIExpbmtzICovXG4ubmF2YmFyIC5uYXYtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBMb2dvICovXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZDcwMTQ7XG59XG5cbi5sb2dvOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdi1saW5rcyBsaSB7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuXG4ubmF2LWxpbmtzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmQ3MDE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5sb2dvIGltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbiNsb2dpbiwgI2xvZ291dHtcbiAgbWFyZ2luOiAwIDNyZW07XG59XG4jbG9naW46aG92ZXIsICNsb2dvdXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBGb290ZXIgU3R5bGluZyAqL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLmZvb3Rlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb290ZXItbGlua3MsIC5mb290ZXItc29jaWFsIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZm9vdGVyLWxpbmtzIGEsIC5mb290ZXItc29jaWFsIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9vdGVyLWxpbmtzIGE6aG92ZXIsIC5mb290ZXItc29jaWFsIGE6aG92ZXIge1xuICBjb2xvcjogI2ZkNzAxNDtcbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHQSxtQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUEsRUFBQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQSxFQUFBLGlDQUFBO0VBQ0EsTUFBQSxFQUFBLDJCQUFBO0VBQ0EsV0FBQSxFQUFBLGVBQUE7RUFDQSxhQUFBLEVBQUEseUNBQUE7RUFDQSx3Q0FBQSxFQUFBLDBDQUFBO0FBaEdGOztBQW1HQSx5REFBQTtBQUNBO0VBQ0UsaUJBQUEsRUFBQSxrQ0FBQTtBQWhHRjs7QUFtR0Esb0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBaEdGOztBQW1HQSxTQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWhHRjs7QUFtR0E7RUFDRSxlQUFBO0FBaEdGOztBQW1HQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQWhHRjs7QUFtR0E7RUFDRSxjQUFBO0FBaEdGOztBQW1HQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaEdGOztBQW1HQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoR0Y7O0FBbUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFoR0Y7O0FBbUdBO0VBQ0UsY0FBQTtBQWhHRjs7QUFrR0E7RUFDRSxlQUFBO0FBL0ZGOztBQWlHQSxtQkFBQTtBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUE5RkY7O0FBaUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBOUZGOztBQWlHQTtFQUNFLFlBQUE7QUE5RkY7O0FBaUdBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUE5RkY7O0FBaUdBO0VBQ0UsY0FBQTtBQTlGRjs7QUFpR0E7RUFDRSxnQkFBQTtBQTlGRjtBQUNBLHd1UEFBd3VQIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLyogTmF2YmFyIFN0eWxpbmcgKi9cbi8vIC5uYXZiYXIge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIEtlZXAgc3BhY2UgYmV0d2VlbiBsb2dvIGFuZCBuYXYgbGlua3MgKi9cbi8vICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICAvLyB3aWR0aDogMTAwJTtcbi8vIH1cbi8vICAgLyogQ2VudGVyaW5nIExpbmtzICovXG4vLyAgIC5uYXZiYXIgLm5hdi1saW5rcyB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBuYXYgbGlua3MgKi9cbi8vICAgICBmbGV4OiAxOyAvKiBBbGxvdyBuYXYgbGlua3MgdG8gdGFrZSB1cCBhdmFpbGFibGUgc3BhY2UgKi9cbi8vICAgICBtYXJnaW46IDA7IC8qIFJlc2V0IG1hcmdpbiAqL1xuLy8gICB9XG4gIFxuLy8gICAvKiBMb2dvICovXG4vLyAgIC5sb2dvIHtcbi8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogI2ZkNzAxNDtcbi8vICAgfVxuXG4vLyAgIC5sb2dvOmhvdmVye1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgfVxuICBcbi8vICAgLyogTmF2aWdhdGlvbiBMaW5rcyAqL1xuLy8gICAubmF2LWxpbmtzIHtcbi8vICAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICB9XG4gIFxuLy8gICAubmF2LWxpbmtzIGxpIHtcbi8vICAgICBtYXJnaW46IDAgMXJlbTtcbi8vICAgfVxuICBcbi8vICAgLm5hdi1saW5rcyBhIHtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIGZvbnQtc2l6ZTogMXJlbTtcbi8vICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4vLyAgICAgcGFkZGluZzogOHB4O1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAvKiBPcHRpb25hbDogYm9yZGVyIGZvciBiZXR0ZXIgdmlzaWJpbGl0eSAqL1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7IC8qIEFkanVzdCB0aGUgdmFsdWUgdG8gbWFrZSBjb3JuZXJzIG1vcmUgb3IgbGVzcyByb3VuZGVkICovXG4vLyAgIH1cbiAgXG4vLyAgIC5uYXYtbGlua3MgYTpob3ZlciB7XG4vLyAgICAgY29sb3I6ICNmZDcwMTQ7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IC8qIE9wdGlvbmFsOiBib3JkZXIgZm9yIGJldHRlciB2aXNpYmlsaXR5ICovXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSB0byBtYWtlIGNvcm5lcnMgbW9yZSBvciBsZXNzIHJvdW5kZWQgKi9cbi8vICAgfVxuLy8gICAubG9nbyBpbWd7XG4vLyAgICAgd2lkdGg6IDc1cHg7XG4vLyAgICAgaGVpZ2h0OiA3NXB4O1xuLy8gICB9XG5cbi8vICAgLmZvb3RlciB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IC8qIERhcmsgYmFja2dyb3VuZCBjb2xvciAqL1xuLy8gICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xuLy8gICAgIHBhZGRpbmc6IDIwcHg7IC8qIFBhZGRpbmcgYXJvdW5kIHRoZSBmb290ZXIgKi9cbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlcmVkIHRleHQgKi9cbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyLWNvbnRlbnQge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7IC8qIFVzZSBmbGV4Ym94IGZvciBsYXlvdXQgKi9cbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIFNwYWNlIG91dCB0aGUgbGlua3MgYW5kIHNvY2lhbCBpY29ucyAqL1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciBpdGVtcyB2ZXJ0aWNhbGx5ICovXG4vLyAgICAgZmxleC13cmFwOiB3cmFwOyAvKiBBbGxvdyB3cmFwcGluZyBvbiBzbWFsbGVyIHNjcmVlbnMgKi9cbi8vICAgfVxuICBcbi8vICAgLmZvb3Rlci1saW5rcywgLmZvb3Rlci1zb2NpYWwge1xuLy8gICAgIG1hcmdpbjogMTBweDsgLyogTWFyZ2luIGZvciBzcGFjaW5nICovXG4vLyAgIH1cbiAgXG4vLyAgIC5mb290ZXItbGlua3MgYSwgLmZvb3Rlci1zb2NpYWwgYSB7XG4vLyAgICAgY29sb3I6IHdoaXRlOyAvKiBMaW5rIGNvbG9yICovXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lICovXG4vLyAgICAgbWFyZ2luOiAwIDEwcHg7IC8qIFNwYWNlIGJldHdlZW4gbGlua3MgKi9cbi8vICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzOyAvKiBTbW9vdGggY29sb3IgdHJhbnNpdGlvbiAqL1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyLWxpbmtzIGE6aG92ZXIsIC5mb290ZXItc29jaWFsIGE6aG92ZXIge1xuLy8gICAgIGNvbG9yOiAjZmQ3MDE0O1xuLy8gICB9XG4gIFxuLy8gICAuZm9vdGVyLWJvdHRvbSB7XG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDsgLyogU3BhY2UgYmV0d2VlbiBjb250ZW50IGFuZCBjb3B5cmlnaHQgKi9cbi8vICAgfVxuLyogTmF2YmFyIFN0eWxpbmcgKi9cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IC8qIEtlZXAgc3BhY2UgYmV0d2VlbiBsb2dvIGFuZCBuYXYgbGlua3MgKi9cbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEtlZXAgbmF2YmFyIGZpeGVkIGF0IHRoZSB0b3AgKi9cbiAgdG9wOiAwOyAvKiBQb3NpdGlvbiBpdCBhdCB0aGUgdG9wICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSBpdCBzdGF5cyBhYm92ZSBvdGhlciBlbGVtZW50cyAqL1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBPcHRpb25hbCBzaGFkb3cgZm9yIGJldHRlciBzZXBhcmF0aW9uICovXG59XG5cbi8qIEFkZCBwYWRkaW5nLXRvcCB0byB0aGUgbWFpbiBjb250ZW50IHRvIGF2b2lkIG92ZXJsYXAgKi9cbmJvZHkge1xuICBwYWRkaW5nLXRvcDogODBweDsgLyogQWRqdXN0IGJhc2VkIG9uIG5hdmJhciBoZWlnaHQgKi9cbn1cblxuLyogQ2VudGVyaW5nIExpbmtzICovXG4ubmF2YmFyIC5uYXYtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBMb2dvICovXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZDcwMTQ7XG59XG5cbi5sb2dvOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdi1saW5rcyBsaSB7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuXG4ubmF2LWxpbmtzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmQ3MDE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5sb2dvIGltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG59XG5cbiNsb2dpbiwgI2xvZ291dHtcbiAgbWFyZ2luOiAwIDNyZW07XG59XG4jbG9naW46aG92ZXIsICNsb2dvdXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBGb290ZXIgU3R5bGluZyAqL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLmZvb3Rlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5mb290ZXItbGlua3MsIC5mb290ZXItc29jaWFsIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZm9vdGVyLWxpbmtzIGEsIC5mb290ZXItc29jaWFsIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZm9vdGVyLWxpbmtzIGE6aG92ZXIsIC5mb290ZXItc29jaWFsIGE6aG92ZXIge1xuICBjb2xvcjogI2ZkNzAxNDtcbn1cblxuLmZvb3Rlci1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 803:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3818);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 4836);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 7161);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ 8081);
/* harmony import */ var _components_how_to_how_to_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/how-to/how-to.component */ 291);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 7063);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _components_investors_investors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/investors/investors.component */ 4761);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @auth0/auth0-angular */ 5923);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-interceptor */ 4537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [/*{ provide: OKTA_CONFIG, useValue: { oktaAuth } }*/(0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_9__.provideAnimationsAsync)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.withInterceptorsFromDi)()), {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
      //OktaAuthModule,
      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__.AuthModule.forRoot({
        domain: 'dev-5oqrhjyxiuhwflbd.us.auth0.com',
        clientId: 'NbXsZlJZKqbNjgg91ECHOHEZfKGhhVdr',
        authorizationParams: {
          redirect_uri: window.location.origin,
          audience: 'https://dev-5oqrhjyxiuhwflbd.us.auth0.com/api/v2/'
        }
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _components_how_to_how_to_component__WEBPACK_IMPORTED_MODULE_4__.HowToComponent, _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__.PageNotFoundComponent, _components_investors_investors_component__WEBPACK_IMPORTED_MODULE_6__.InvestorsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
    //OktaAuthModule,
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_14__.AuthModule]
  });
})();

/***/ }),

/***/ 4537:
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5429);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/auth0-angular */ 5923);




class AuthInterceptor {
  constructor(auth) {
    this.auth = auth;
  }
  intercept(req, next) {
    // Only add an Authorization header if a token is available
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.auth.getAccessTokenSilently()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(token => {
      // Clone the request and add the Authorization header if the token is available
      if (token) {
        console.log("I got the Token!");
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(cloned);
      }
      console.log("I didn't get the token!");
      // If no token is available, pass the original request through
      return next.handle(req);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 8081:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 5,
      vars: 0,
      consts: [[1, "aboutDiv"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Paragon AI");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Paragon is an avant-garde software solution meticulously crafted to amplify efficiency and productivity by seamlessly monitoring, analyzing, and automating computer activities. As a trailblazer in micro-process automation, Paragon leverages cutting-edge AI, process & task mining, and cloud technologies to metamorphose user activities into automated workflows, heralding a paradigm shift in digital workflow automation.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: [".aboutDiv[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 1200px;\n  display: column;\n  justify-content: center; \n\n  align-items: center; \n\n  margin: auto;\n  padding-top: 200px;\n}\n\n.aboutDiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 20x;\n}\n\n.aboutDiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 400px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUEsRUFBQSx3QkFBQTtFQUNBLG1CQUFBLEVBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dERpdntcbiAgICB3aWR0aDo0MDBweDtcbiAgICBoZWlnaHQ6IDEyMDBweDtcbiAgICBkaXNwbGF5OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4uYWJvdXREaXYgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjB4O1xufVxuLmFib3V0RGl2IGgyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBLEVBQUEsd0JBQUE7RUFDQSxtQkFBQSxFQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFDQSx3OEJBQXc4QiIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dERpdntcbiAgICB3aWR0aDo0MDBweDtcbiAgICBoZWlnaHQ6IDEyMDBweDtcbiAgICBkaXNwbGF5OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRlciBob3Jpem9udGFsbHkgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgLyogQ2VudGVyIHZlcnRpY2FsbHkgKi9cbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4uYWJvdXREaXYgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjB4O1xufVxuLmFib3V0RGl2IGgyIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3657:
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class AccountComponent {
  static {
    this.ɵfac = function AccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "account works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2529:
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-panel/admin-panel.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminPanelComponent: () => (/* binding */ AdminPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_services_mysql_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mysql.service */ 8540);











class AdminPanelComponent {
  constructor(fb, mysql) {
    this.fb = fb;
    this.mysql = mysql;
    this.addUser = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(25)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(25)]],
      organization: ['', []],
      isManager: [false],
      isAdmin: [false],
      isOwner: [false]
    });
    this.addOrganization = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(40)]],
      organizatoinManagerID: ['']
    });
  }
  ngOnInit() {}
  submitUser() {
    var user = {
      id: "",
      email: this.addUser.controls['email'].value,
      firstName: this.addUser.controls['firstName'].value,
      lastName: this.addUser.controls['lastName'].value,
      organization: this.addUser.controls['organization'].value,
      organizationID: "",
      isManager: this.addUser.controls['isManager'].value,
      isAdmin: this.addUser.controls['isAdmin'].value,
      isOwner: this.addUser.controls['isOwner'].value
    };
    var userObject = {
      ID: user.id,
      Email: user.email,
      FirstName: user.firstName,
      LastName: user.lastName,
      Organization: null,
      OrganizationID: user.organizationID,
      IsManager: user.isManager,
      IsAdmin: user.isAdmin,
      IsOwner: user.isOwner
    };
    this.mysql.getUserAPI().addUser(userObject);
  }
  submitOrganization() {}
  static {
    this.ɵfac = function AdminPanelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mysql_service__WEBPACK_IMPORTED_MODULE_0__.MysqlService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AdminPanelComponent,
      selectors: [["app-admin-panel"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 44,
      vars: 2,
      consts: [[3, "ngSubmit", "formGroup"], ["for", "email"], ["matInput", "", "type", "email", "id", "email", "name", "email", "formControlName", "email"], ["matInput", "", "type", "text", "name", "organization", "formControlName", "organization"], ["matInput", "", "type", "text", "name", "firstName", "formControlName", "firstName"], ["matInput", "", "type", "text", "name", "lastName", "formControlName", "lastName"], ["name", "isManager", "formControlName", "isManager"], ["name", "isAdmin", "formControlName", "isAdmin"], ["name", "isOwner", "formControlName", "isOwner"], ["type", "submit", 3, "disabled"]],
      template: function AdminPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "mat-expansion-panel")(2, "mat-expansion-panel-header")(3, "mat-panel-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Add User Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AdminPanelComponent_Template_form_ngSubmit_5_listener() {
            return ctx.submitUser();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table")(7, "tr")(8, "td")(9, "mat-form-field")(10, "mat-label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td")(14, "mat-form-field")(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Organization");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr")(19, "td")(20, "mat-form-field")(21, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td")(25, "mat-form-field")(26, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tr")(30, "td")(31, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Manager?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "mat-checkbox", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td")(35, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Admin?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "mat-checkbox", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td")(39, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Owner?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "mat-checkbox", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Add User");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addUser.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox],
      styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  padding: 10px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGIiwiZmlsZSI6ImFkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7IC8vIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZFxufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7IC8vIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkXG4gIG1heC13aWR0aDogMTIwMHB4OyAvLyBPcHRpb25hbDogc2V0IGEgbWF4LXdpZHRoXG4gIHBhZGRpbmc6IDEwcHg7IC8vIE9wdGlvbmFsOiBhZGQgcGFkZGluZyBmb3IgYmV0dGVyIGFwcGVhcmFuY2Vcbn1cbm1hdC1mb3JtLWZpZWxke1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBLG8xQkFBbzFCIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7IC8vIEFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZFxufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7IC8vIEFkanVzdCB0aGUgd2lkdGggYXMgbmVlZGVkXG4gIG1heC13aWR0aDogMTIwMHB4OyAvLyBPcHRpb25hbDogc2V0IGEgbWF4LXdpZHRoXG4gIHBhZGRpbmc6IDEwcHg7IC8vIE9wdGlvbmFsOiBhZGQgcGFkZGluZyBmb3IgYmV0dGVyIGFwcGVhcmFuY2Vcbn1cbm1hdC1mb3JtLWZpZWxke1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7161:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HomeComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 291:
/*!*******************************************************!*\
  !*** ./src/app/components/how-to/how-to.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HowToComponent: () => (/* binding */ HowToComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HowToComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function HowToComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HowToComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HowToComponent,
      selectors: [["app-how-to"]],
      decls: 2,
      vars: 0,
      template: function HowToComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "how-to works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctdG8uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob3ctdG8vaG93LXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4761:
/*!*************************************************************!*\
  !*** ./src/app/components/investors/investors.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvestorsComponent: () => (/* binding */ InvestorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class InvestorsComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function InvestorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InvestorsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvestorsComponent,
      selectors: [["app-investors"]],
      decls: 2,
      vars: 0,
      template: function InvestorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "investors works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RvcnMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnZlc3RvcnMvaW52ZXN0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7063:
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PageNotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PageNotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8540:
/*!*******************************************!*\
  !*** ./src/app/services/mysql.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MysqlService: () => (/* binding */ MysqlService)
/* harmony export */ });
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 4389);
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization.service */ 6565);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/auth0-angular */ 5923);





class MysqlService {
  constructor(http, auth) {
    this.http = http;
    this.auth = auth;
    this.UserAPI = new _user_service__WEBPACK_IMPORTED_MODULE_0__.UserService(http, this, auth);
    this.OrganizationAPI = new _organization_service__WEBPACK_IMPORTED_MODULE_1__.OrganizationService(http, this);
  }
  getUserAPI() {
    return this.UserAPI;
  }
  getOrganizationAPI() {
    return this.OrganizationAPI;
  }
  static {
    this.ɵfac = function MysqlService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MysqlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_4__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MysqlService,
      factory: MysqlService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6565:
/*!**************************************************!*\
  !*** ./src/app/services/organization.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationService: () => (/* binding */ OrganizationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _mysql_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysql.service */ 8540);



class OrganizationService {
  constructor(http, mysql) {
    this.http = http;
    this.mysql = mysql;
  }
  static {
    this.ɵfac = function OrganizationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrganizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_mysql_service__WEBPACK_IMPORTED_MODULE_0__.MysqlService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrganizationService,
      factory: OrganizationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4389:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 7144);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _mysql_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mysql.service */ 8540);
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-angular */ 5923);







class UserService {
  constructor(http, mysql, auth) {
    this.http = http;
    this.mysql = mysql;
    this.auth = auth;
    this.userInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.userInfo$ = this.userInfoSubject.asObservable();
  }
  ngOnInit() {
    this.user$ = this.auth.user$;
  }
  addUser(user) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      "Content-Type": "application/json"
    });
    console.log(user);
    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIURL + "/Users/addUser", user, {
      headers: headers
    }).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.error(error);
      }
    });
  }
  getUser() {
    const email = this.getEmail();
    if (!email) {
      console.log("Email not found!");
      return undefined;
    }
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIURL + "/Users/" + email);
  }
  getEmail() {
    return this.user$ ? this.user$.subscribe(user => user?.email) : null;
  }
  static {
    this.ɵfac = function UserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_mysql_service__WEBPACK_IMPORTED_MODULE_1__.MysqlService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7144:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  APIURL: "http://localhost:5211/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5413:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 803);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 7144);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5413)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map