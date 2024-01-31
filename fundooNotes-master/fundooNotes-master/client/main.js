(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/signup/signup.component */ "./src/app/component/signup/signup.component.ts");
/* harmony import */ var _component_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/forgotpass/forgotpass.component */ "./src/app/component/forgotpass/forgotpass.component.ts");
/* harmony import */ var _component_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/reset/reset.component */ "./src/app/component/reset/reset.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/notes/notes.component */ "./src/app/component/notes/notes.component.ts");
/* harmony import */ var _core_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/auth/auth.guard */ "./src/app/core/services/auth/auth.guard.ts");
/* harmony import */ var _component_archive_archive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/archive/archive.component */ "./src/app/component/archive/archive.component.ts");
/* harmony import */ var _component_trash_trash_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/trash/trash.component */ "./src/app/component/trash/trash.component.ts");
/* harmony import */ var _component_label_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/label/label.component */ "./src/app/component/label/label.component.ts");
/* harmony import */ var _component_search_notes_search_notes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/search-notes/search-notes.component */ "./src/app/component/search-notes/search-notes.component.ts");
/* harmony import */ var _component_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/reminder/reminder.component */ "./src/app/component/reminder/reminder.component.ts");
/* harmony import */ var _component_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/question-answer/question-answer.component */ "./src/app/component/question-answer/question-answer.component.ts");
/* harmony import */ var _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/product-card/product-card.component */ "./src/app/component/product-card/product-card.component.ts");
/* harmony import */ var _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/shopping-cart/shopping-cart.component */ "./src/app/component/shopping-cart/shopping-cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', redirectTo: "card", pathMatch: "full" },
    { path: 'card', component: _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_15__["ProductCardComponent"] },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'signup', component: _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'forgotpass', component: _component_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_4__["ForgotpassComponent"] },
    { path: 'resetpassword/:id', component: _component_reset_reset_component__WEBPACK_IMPORTED_MODULE_5__["ResetComponent"] },
    { path: '', component: _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], canActivate: [_core_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]], children: [
            { path: 'home', component: _component_notes_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"] },
            { path: 'QuestionAnswer/:noteId', component: _component_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_14__["QuestionAnswerComponent"] },
            { path: 'archive', component: _component_archive_archive_component__WEBPACK_IMPORTED_MODULE_9__["ArchiveComponent"] },
            { path: 'trash', component: _component_trash_trash_component__WEBPACK_IMPORTED_MODULE_10__["TrashComponent"] },
            { path: 'label/:label', component: _component_label_label_component__WEBPACK_IMPORTED_MODULE_11__["LabelComponent"] },
            { path: 'search', component: _component_search_notes_search_notes_component__WEBPACK_IMPORTED_MODULE_12__["SearchNotesComponent"] },
            { path: 'reminder', component: _component_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_13__["ReminderComponent"] },
            { path: 'shoppingCart', component: _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingCartComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private appService : FirebaseService
    ) {
        this.title = 'fundooNotes: A Notes taking application';
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.appService.getPermission()
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_error_handler_errors_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/error_handler/errors-handler */ "./src/app/core/services/error_handler/errors-handler.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _core_services_intercept_intercept_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/intercept/intercept.service */ "./src/app/core/services/intercept/intercept.service.ts");
/* harmony import */ var _core_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/firebase/firebase.service */ "./src/app/core/services/firebase/firebase.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bar-rating */ "./node_modules/ngx-bar-rating/index.js");
/* harmony import */ var _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/signup/signup.component */ "./src/app/component/signup/signup.component.ts");
/* harmony import */ var _component_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/forgotpass/forgotpass.component */ "./src/app/component/forgotpass/forgotpass.component.ts");
/* harmony import */ var _component_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/reset/reset.component */ "./src/app/component/reset/reset.component.ts");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_notes_notes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/notes/notes.component */ "./src/app/component/notes/notes.component.ts");
/* harmony import */ var _component_remind_me_remind_me_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/remind-me/remind-me.component */ "./src/app/component/remind-me/remind-me.component.ts");
/* harmony import */ var _component_notes_add_notes_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/notes-add/notes-add.component */ "./src/app/component/notes-add/notes-add.component.ts");
/* harmony import */ var _component_change_color_change_color_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/change-color/change-color.component */ "./src/app/component/change-color/change-color.component.ts");
/* harmony import */ var _component_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/notes-list/notes-list.component */ "./src/app/component/notes-list/notes-list.component.ts");
/* harmony import */ var _component_collaborator_collaborator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/collaborator/collaborator.component */ "./src/app/component/collaborator/collaborator.component.ts");
/* harmony import */ var _component_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/add-image/add-image.component */ "./src/app/component/add-image/add-image.component.ts");
/* harmony import */ var _component_more_more_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/more/more.component */ "./src/app/component/more/more.component.ts");
/* harmony import */ var _component_notes_archive_notes_archive_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/notes-archive/notes-archive.component */ "./src/app/component/notes-archive/notes-archive.component.ts");
/* harmony import */ var _component_archive_archive_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/archive/archive.component */ "./src/app/component/archive/archive.component.ts");
/* harmony import */ var _component_trash_trash_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/trash/trash.component */ "./src/app/component/trash/trash.component.ts");
/* harmony import */ var _component_card_display_card_display_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/card-display/card-display.component */ "./src/app/component/card-display/card-display.component.ts");
/* harmony import */ var _component_create_label_create_label_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/create-label/create-label.component */ "./src/app/component/create-label/create-label.component.ts");
/* harmony import */ var _component_label_label_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/label/label.component */ "./src/app/component/label/label.component.ts");
/* harmony import */ var _component_search_notes_search_notes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/search-notes/search-notes.component */ "./src/app/component/search-notes/search-notes.component.ts");
/* harmony import */ var _component_pin_pin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/pin/pin.component */ "./src/app/component/pin/pin.component.ts");
/* harmony import */ var _component_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/image-crop/image-crop.component */ "./src/app/component/image-crop/image-crop.component.ts");
/* harmony import */ var _component_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./component/reminder/reminder.component */ "./src/app/component/reminder/reminder.component.ts");
/* harmony import */ var _component_add_collaborator_add_collaborator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./component/add-collaborator/add-collaborator.component */ "./src/app/component/add-collaborator/add-collaborator.component.ts");
/* harmony import */ var ngx_rating_index__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-rating/index */ "./node_modules/ngx-rating/index.js");
/* harmony import */ var ngx_rating_index__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ngx_rating_index__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _core_pipe_search_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./core/pipe/search.pipe */ "./src/app/core/pipe/search.pipe.ts");
/* harmony import */ var _core_pipe_search_note_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./core/pipe/search-note.pipe */ "./src/app/core/pipe/search-note.pipe.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _component_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./component/question-answer/question-answer.component */ "./src/app/component/question-answer/question-answer.component.ts");
/* harmony import */ var _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./component/product-card/product-card.component */ "./src/app/component/product-card/product-card.component.ts");
/* harmony import */ var _component_card_details_card_details_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./component/card-details/card-details.component */ "./src/app/component/card-details/card-details.component.ts");
/* harmony import */ var _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./component/shopping-cart/shopping-cart.component */ "./src/app/component/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _component_loader_loader_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./component/loader/loader.component */ "./src/app/component/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _component_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                _component_forgotpass_forgotpass_component__WEBPACK_IMPORTED_MODULE_15__["ForgotpassComponent"],
                _component_reset_reset_component__WEBPACK_IMPORTED_MODULE_16__["ResetComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _component_notes_notes_component__WEBPACK_IMPORTED_MODULE_18__["NotesComponent"],
                _component_remind_me_remind_me_component__WEBPACK_IMPORTED_MODULE_19__["RemindMeComponent"],
                _component_notes_add_notes_add_component__WEBPACK_IMPORTED_MODULE_20__["NotesAddComponent"],
                _component_change_color_change_color_component__WEBPACK_IMPORTED_MODULE_21__["ChangeColorComponent"],
                _component_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_22__["NotesListComponent"],
                _component_collaborator_collaborator_component__WEBPACK_IMPORTED_MODULE_23__["CollaboratorComponent"],
                _component_add_image_add_image_component__WEBPACK_IMPORTED_MODULE_24__["AddImageComponent"],
                _component_more_more_component__WEBPACK_IMPORTED_MODULE_25__["MoreComponent"],
                _component_notes_archive_notes_archive_component__WEBPACK_IMPORTED_MODULE_26__["NotesArchiveComponent"],
                _component_archive_archive_component__WEBPACK_IMPORTED_MODULE_27__["ArchiveComponent"],
                _component_trash_trash_component__WEBPACK_IMPORTED_MODULE_28__["TrashComponent"],
                _component_card_display_card_display_component__WEBPACK_IMPORTED_MODULE_29__["CardDisplayComponent"],
                _component_create_label_create_label_component__WEBPACK_IMPORTED_MODULE_30__["CreateLabelComponent"],
                _component_label_label_component__WEBPACK_IMPORTED_MODULE_31__["LabelComponent"],
                _core_pipe_search_pipe__WEBPACK_IMPORTED_MODULE_38__["SearchPipe"],
                _component_search_notes_search_notes_component__WEBPACK_IMPORTED_MODULE_32__["SearchNotesComponent"],
                _component_pin_pin_component__WEBPACK_IMPORTED_MODULE_33__["PinComponent"],
                _core_pipe_search_note_pipe__WEBPACK_IMPORTED_MODULE_39__["SearchNotePipe"],
                _component_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_34__["ImageCropComponent"],
                _component_reminder_reminder_component__WEBPACK_IMPORTED_MODULE_35__["ReminderComponent"],
                _component_add_collaborator_add_collaborator_component__WEBPACK_IMPORTED_MODULE_36__["AddCollaboratorComponent"],
                _component_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_42__["QuestionAnswerComponent"],
                _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_43__["ProductCardComponent"],
                _component_card_details_card_details_component__WEBPACK_IMPORTED_MODULE_44__["CardDetailsComponent"],
                _component_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_45__["ShoppingCartComponent"],
                _component_loader_loader_component__WEBPACK_IMPORTED_MODULE_46__["LoaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatCheckboxModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                ngx_rating_index__WEBPACK_IMPORTED_MODULE_37__["RatingModule"],
                ngx_bar_rating__WEBPACK_IMPORTED_MODULE_13__["BarRatingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatStepperModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_40__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_40__["FroalaViewModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_41__["MatProgressBarModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_41__["MatDatepickerModule"], _core_services_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"], _core_services_intercept_intercept_service__WEBPACK_IMPORTED_MODULE_9__["InterceptService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _core_services_intercept_intercept_service__WEBPACK_IMPORTED_MODULE_9__["InterceptService"],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"],
                    useClass: _core_services_error_handler_errors_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorsHandler"],
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [
                _component_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_22__["NotesListComponent"],
                _component_card_display_card_display_component__WEBPACK_IMPORTED_MODULE_29__["CardDisplayComponent"],
                _component_create_label_create_label_component__WEBPACK_IMPORTED_MODULE_30__["CreateLabelComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _component_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_34__["ImageCropComponent"],
                _component_add_collaborator_add_collaborator_component__WEBPACK_IMPORTED_MODULE_36__["AddCollaboratorComponent"],
                _component_collaborator_collaborator_component__WEBPACK_IMPORTED_MODULE_23__["CollaboratorComponent"],
                _component_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_43__["ProductCardComponent"],
                _component_card_details_card_details_component__WEBPACK_IMPORTED_MODULE_44__["CardDetailsComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/add-collaborator/add-collaborator.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/add-collaborator/add-collaborator.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abbr title=Collaborator (click)=addCol()><mat-icon>person_add</mat-icon></abbr>"

/***/ }),

/***/ "./src/app/component/add-collaborator/add-collaborator.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/add-collaborator/add-collaborator.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/add-collaborator/add-collaborator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/add-collaborator/add-collaborator.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddCollaboratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCollaboratorComponent", function() { return AddCollaboratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _collaborator_collaborator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collaborator/collaborator.component */ "./src/app/component/collaborator/collaborator.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> add-collaborator.component.ts
 *
 *  Purpose         : To
 *
 *  @file           : add-collaborator.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/





var AddCollaboratorComponent = /** @class */ (function () {
    function AddCollaboratorComponent(dialog) {
        this.dialog = dialog;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAddingCol = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddCollaboratorComponent.prototype.ngOnInit = function () {
    };
    AddCollaboratorComponent.prototype.addCol = function () {
        if (this.card) {
            this.addColNote();
        }
        else {
            this.onAddingCol.emit({});
        }
    };
    AddCollaboratorComponent.prototype.addColNote = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_collaborator_collaborator_component__WEBPACK_IMPORTED_MODULE_2__["CollaboratorComponent"], {
            width: '600px',
            maxWidth: 'auto',
            data: { noteData: this.card }
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (result) {
            _this.onChanges.emit({});
        });
    };
    AddCollaboratorComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddCollaboratorComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddCollaboratorComponent.prototype, "onChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddCollaboratorComponent.prototype, "onAddingCol", void 0);
    AddCollaboratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-collaborator',
            template: __webpack_require__(/*! ./add-collaborator.component.html */ "./src/app/component/add-collaborator/add-collaborator.component.html"),
            styles: [__webpack_require__(/*! ./add-collaborator.component.scss */ "./src/app/component/add-collaborator/add-collaborator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AddCollaboratorComponent);
    return AddCollaboratorComponent;
}());



/***/ }),

/***/ "./src/app/component/add-image/add-image.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/add-image/add-image.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abbr title=\"Add image\"><mat-icon>panorama</mat-icon></abbr>"

/***/ }),

/***/ "./src/app/component/add-image/add-image.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/add-image/add-image.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/add-image/add-image.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/add-image/add-image.component.ts ***!
  \************************************************************/
/*! exports provided: AddImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageComponent", function() { return AddImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> add-image.component.ts
 *
 *  Purpose         : To add image to the notes
 *
 *  @file           : add-image.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/

var AddImageComponent = /** @class */ (function () {
    function AddImageComponent() {
    }
    AddImageComponent.prototype.ngOnInit = function () {
    };
    AddImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-image',
            template: __webpack_require__(/*! ./add-image.component.html */ "./src/app/component/add-image/add-image.component.html"),
            styles: [__webpack_require__(/*! ./add-image.component.scss */ "./src/app/component/add-image/add-image.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddImageComponent);
    return AddImageComponent;
}());

// {
//   "name": "fundoo",
//   "version": "0.0.0",
//   "scripts": {
//     "ng": "ng",
//     "start": "ng serve",
//     "build": "ng build",
//     "test": "ng test",
//     "lint": "ng lint",
//     "e2e": "ng e2e"
//   },
//   "private": true,
//   "dependencies": {
//     "@angular/animations": "^6.1.9",
//     "@angular/cdk": "^6.4.7",
//     "@angular/common": "^6.1.0",
//     "@angular/compiler": "^6.1.0",
//     "@angular/core": "^6.1.0",
//     "@angular/flex-layout": "^6.0.0-beta.18",
//     "@angular/forms": "^6.1.0",
//     "@angular/http": "^6.1.0",
//     "@angular/material": "^6.4.7",
//     "@angular/material-moment-adapter": "^7.0.3",
//     "@angular/platform-browser": "^6.1.0",
//     "@angular/platform-browser-dynamic": "^6.1.0",
//     "@angular/router": "^6.1.0",
//     "angular-moment": "^1.3.0",
//     "core-js": "^2.5.4",
//     "firebase": "^5.5.8",
//     "ngx-image-cropper": "^1.2.2",
//     "rxjs": "~6.2.0",
//     "zone.js": "~0.8.26"
//   },
//   "devDependencies": {
//     "@angular-devkit/build-angular": "~0.8.0",
//     "@angular/cli": "~6.2.4",
//     "@angular/compiler-cli": "^6.1.0",
//     "@angular/language-service": "^6.1.0",
//     "@types/jasmine": "~2.8.8",
//     "@types/jasminewd2": "~2.0.3",
//     "@types/node": "~8.9.4",
//     "codelyzer": "~4.3.0",
//     "jasmine-core": "~2.99.1",
//     "jasmine-spec-reporter": "~4.2.1",
//     "karma": "^3.0.0",
//     "karma-chrome-launcher": "^2.2.0",
//     "karma-coverage-istanbul-reporter": "^2.0.4",
//     "karma-jasmine": "^1.1.2",
//     "karma-jasmine-html-reporter": "^0.2.2",
//     "karma-teamcity-reporter": "^1.1.0",
//     "karma-typescript": "^3.0.13",
//     "protractor": "~5.4.0",
//     "ts-node": "~7.0.0",
//     "tslint": "~5.11.0",
//     "typescript": "~2.9.2"
//   }
// }


/***/ }),

/***/ "./src/app/component/archive/archive.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/archive/archive.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notes-list [notes]=archiveList (anyChanges)=\"refresh($event)\"></app-notes-list>"

/***/ }),

/***/ "./src/app/component/archive/archive.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/component/archive/archive.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/archive/archive.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/archive/archive.component.ts ***!
  \********************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> archive.component.ts
 *
 *  Purpose         : To get the list of archived notes
 *
 *  @file           : archive.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/




var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(archiveService) {
        this.archiveService = archiveService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.archiveList = [];
        this.notes = [];
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.getArchiveList();
    };
    ArchiveComponent.prototype.refresh = function (event) {
        if (event) {
            this.getArchiveList();
        }
    };
    /**
     *
     * @description getting the archieved note list
     */
    ArchiveComponent.prototype.getArchiveList = function () {
        var _this = this;
        this.archiveService.getArchivedList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.notes = response["data"].data;
            _this.archiveList = [];
            for (var i = _this.notes.length; i > 0; i--) {
                if (_this.notes[i - 1]["isDeleted"] == false)
                    _this.archiveList.push(_this.notes[i - 1]);
            }
        }, function (error) {
        });
    };
    ArchiveComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/component/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.scss */ "./src/app/component/archive/archive.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/component/card-details/card-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/card-details/card-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" #navbar>\n    <mat-toolbar-row>\n      <div fxLayout=\"row\" fxFlex=\"100%\" fxLayoutGap=\"5%\" class=margin_15>\n        <div fxFlex=\"5%\"></div>\n        <div fxFlex=\"70%\" class=\"packDetails\">Advance Pack Details</div>\n        <div fxFlex=\"10%\" class=price >${{data.noteData.price}}/month</div>\n        <div fxFlex=\"5%\"></div>\n      </div>\n    </mat-toolbar-row>\n  </div>\n<div class=margin_15>\n  <mat-tab-group>\n    <mat-tab label=\"Feature1\"> Content 1 </mat-tab>\n    <mat-tab label=\"Feature2\"> Content 2 </mat-tab>\n    <mat-tab label=\"Feature3\"> Content 3 </mat-tab>\n  </mat-tab-group>\n</div>\n<div class=margin_15 fxLayout=row>\n    <div fxFlex=40% fxLayoutAlign='start'><button class=button1 (click)=remove()>Remove</button></div>\n    <div fxFlex=60% fxLayoutAlign='end'><button class=button1 (click)=checkout()>Proceed to Checkout</button></div>\n  </div>"

/***/ }),

/***/ "./src/app/component/card-details/card-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/card-details/card-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #fb0; }\n\n::ng-deep.mat-dialog-container {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  display: block;\n  padding: 0px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n  overflow-x: hidden; }\n\n.packDetails {\n  font-size: 15px;\n  color: white;\n  font-weight: 40px; }\n\n.price {\n  font-size: 10px;\n  color: white;\n  font-weight: 40px; }\n"

/***/ }),

/***/ "./src/app/component/card-details/card-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/card-details/card-details.component.ts ***!
  \******************************************************************/
/*! exports provided: CardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDetailsComponent", function() { return CardDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CardDetailsComponent = /** @class */ (function () {
    function CardDetailsComponent(dialogRef, router, data, dataService) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
        this.dataService = dataService;
        this.isLinear = false;
    }
    CardDetailsComponent.prototype.ngOnInit = function () {
    };
    CardDetailsComponent.prototype.remove = function () {
        this.dialogRef.close();
    };
    CardDetailsComponent.prototype.checkout = function () {
        this.dialogRef.close();
        this.router.navigateByUrl('/signup');
    };
    CardDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-details',
            template: __webpack_require__(/*! ./card-details.component.html */ "./src/app/component/card-details/card-details.component.html"),
            styles: [__webpack_require__(/*! ./card-details.component.scss */ "./src/app/component/card-details/card-details.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CardDetailsComponent);
    return CardDetailsComponent;
}());



/***/ }),

/***/ "./src/app/component/card-display/card-display.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/card-display/card-display.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- *******************************matcard start****************************** -->\n<mat-card [ngStyle]=\"{'background-color':cardColor}\">\n\n  <app-pin class=pin [card]=data.noteData></app-pin>\n  <div mat-dialog-title contenteditable=true #title class=input [innerHTML]=data.noteData.title></div>\n  <div *ngIf=\"data.noteData.noteCheckLists.length==0\" mat-dialog-content contenteditable=true #description \n  class=input [innerHTML]=data.noteData.description></div>\n\n  <!-- ****************************checkbox start****************************** -->\n  <div *ngIf=\"data.noteData.noteCheckLists.length!=0\">\n    <div *ngFor=\"let list of checkList\" >\n      <div *ngIf=\"list.isDeleted==false && list.status=='open'\" fxLayout=row>\n      <div fxFlex=10>\n        <mat-checkbox (click)=check(list,data)></mat-checkbox>\n      </div>\n      <div fxFlex=75>\n        <input placeholder=\"List item\" class=input [(ngModel)]=\"list.itemName\"(keydown.enter)=\"listitem(list)\">\n      </div>\n      <div fxFlex=10><mat-icon class=clear (click)=removeCheckList(list)>clear</mat-icon></div>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div fxLayout=row class=listInput>\n      <div fxFlex=10><mat-icon class=clear>add</mat-icon></div>\n      <input fxFlex=75 placeholder=\"List item\" #item=ngModel class=input [(ngModel)]=\"model.item\"\n      (keydown.enter)=\"listAdd()\">\n      <div fxFlex=10><mat-icon class=clear (click)=clear()>clear</mat-icon></div>\n    </div>\n    <mat-divider></mat-divider>\n    <div *ngFor=\"let list of checkList\" >\n      <div *ngIf=\"list.isDeleted==false && list.status=='close'\" fxLayout=row>\n      <div fxFlex=10>\n        <mat-checkbox checked=true (click)=check(list,data)></mat-checkbox>\n      </div>\n      <div fxFlex=75>\n        <input placeholder=\"List item\" class=input2 [(ngModel)]=\"list.itemName\"(keydown.enter)=\"listitem(list)\">\n      </div>\n      <div fxFlex=10><mat-icon class=clear (click)=removeCheckList(list)>clear</mat-icon></div>\n      </div>\n    </div>\n  </div>\n  <!-- ****************************checkbox end****************************** -->\n\n  <!-- ****************************reminder chip list start****************************** -->\n  <mat-chip-list >\n    <div *ngFor=\"let cardData of reminders\" >\n      <mat-chip class=delchip *ngIf=\"checkDate(cardData)==1 || checkDate(cardData)==4 \" \n      (click)=showReminder(data.id) (click)=reminderClick()>\n        <mat-icon>access_time</mat-icon>\n        <del *ngIf=\"checkDate(cardData)==1\">{{date}}</del>\n        <del *ngIf=\"checkDate(cardData)==4\">{{cardData| date:medium}}</del>\n        <mat-icon (click)=removeReminder(data.noteData.id)>cancel</mat-icon>\n      </mat-chip>\n      <mat-chip class=chip *ngIf=\"checkDate(cardData)==2 || checkDate(cardData)==3\">\n        <mat-icon>access_time</mat-icon>\n        <div *ngIf=\"checkDate(cardData)==2\">{{date}}</div>\n        <div *ngIf=\"checkDate(cardData)==3\">{{cardData| date:'medium'}}</div>\n\n        <mat-icon (click)=removeReminder(data.noteData.id)>cancel</mat-icon>\n      </mat-chip>\n    </div>\n  </mat-chip-list>\n  <!-- ****************************reminder chip list end****************************** -->\n\n  <!-- ****************************label chip list start****************************** -->\n  <div class=margin_top5>\n  <mat-chip-list>\n    <span *ngFor=\"let cardData of labels\" >\n      <mat-chip class=chip *ngIf=\"cardData.isDeleted==false\">\n        <span class=label>{{cardData.label}}</span><mat-icon *ngIf=!isDelete \n        (click)=removeLabel(cardData.id,data.noteData.id)>cancel</mat-icon>\n      </mat-chip>\n    </span>\n  </mat-chip-list></div>\n  <!-- ****************************label chip list end****************************** -->\n\n  <!-- **************************collaborators start************************* -->\n  <div class=margin_top5>\n    <span *ngFor=\"let cardData of data.noteData.collaborators\" >\n      <button mat-mini-fab>{{cardData.firstName[0].toUpperCase()}}</button>\n    </span>\n  </div>\n  <!-- ***************************collaborators end*************************** -->\n\n  <!-- *******************************maticon start********************************** -->\n  <div class=icondiv>\n    <app-remind-me *ngIf=!isDelete class=iconButton [card]=data.noteData \n    (onChanges)=reminderChanges($event)></app-remind-me>\n    <app-add-collaborator *ngIf=!isDelete class=iconButton [card]=data.noteData \n    (onChanges)=\"entry($event)\"></app-add-collaborator>\n    <app-change-color *ngIf=!isDelete class=iconButton [card]=data.noteData \n    (onChangeColor)=colorChanges($event)></app-change-color>\n    <app-add-image *ngIf=!isDelete class=iconButton></app-add-image>\n    <app-notes-archive [card]=data.noteData (onArchiveEntry)=\"archive($event)\" \n    *ngIf=!isDelete class=iconButton></app-notes-archive>\n    <app-more class=iconButton [card]=data.noteData (popupChange)=\"labelChanges($event)\"></app-more>\n    <button *ngIf=!isDelete mat-button  class=pin (click)=click()>Close</button>\n    </div>\n  <!-- *********************************maticon end****************************** -->\n\n</mat-card>\n<!-- *********************************matcard end****************************** -->"

/***/ }),

/***/ "./src/app/component/card-display/card-display.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/card-display/card-display.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".iconButton {\n  margin: 3% 2% 3% 3%;\n  opacity: 0.7; }\n\n@media only screen and (max-width: 599px) {\n  .iconButton {\n    margin: 3% 3% 3% 0%;\n    opacity: 0.7; } }\n\n.iconButton:hover {\n  opacity: 1; }\n\n::ng-deep.mat-dialog-container {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  display: block;\n  padding: 0px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n  overflow-x: hidden; }\n\n.pin {\n  float: right;\n  cursor: pointer; }\n\n.label {\n  max-width: 150px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  background-color: transparent; }\n\n.delchip {\n  background-color: rgba(135, 167, 159, 0.465);\n  color: rgba(0, 0, 0, 0.4); }\n\n.chip {\n  background-color: rgba(135, 167, 159, 0.465); }\n\n.input {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  width: 100%; }\n\n.input2 {\n  text-decoration: line-through;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  width: 100%; }\n\n.clear {\n  cursor: pointer; }\n\n.close {\n  margin: 0% 0% 0% 60%; }\n\n.icondiv {\n  margin: 20px 0px 0px 0px; }\n"

/***/ }),

/***/ "./src/app/component/card-display/card-display.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/card-display/card-display.component.ts ***!
  \******************************************************************/
/*! exports provided: CardDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDisplayComponent", function() { return CardDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/logger/logger.service */ "./src/app/core/services/logger/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> card-display.component.ts
 *
 *  Purpose         : To display and update card details while click on the particular card
 *
 *  @file           : card-display.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/






var CardDisplayComponent = /** @class */ (function () {
    function CardDisplayComponent(UpdateService, dialogRef, data) {
        this.UpdateService = UpdateService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.model = {
            "item": ""
        };
        this.labels = this.data.noteData["noteLabels"];
        this.checkList = this.data.noteData["noteCheckLists"];
        this.reminders = this.data.noteData["reminder"];
        this.isDelete = this.data.noteData["isDeleted"];
        this.cardColor = this.data.noteData["color"];
        this.current = new Date();
        this.titleValue = '';
        this.descriptionValue = '';
    }
    CardDisplayComponent.prototype.ngOnInit = function () {
    };
    /**
    *
    * @description displaying the particular note and updating the note
    */
    CardDisplayComponent.prototype.click = function () {
        this.titleValue = this.title.nativeElement.innerHTML;
        if (this.titleValue == "")
            return;
        if (this.data.noteData["noteCheckLists"].length == 0) {
            this.descriptionValue = this.description.nativeElement.innerHTML;
            var body1 = {
                "noteId": this.data.noteData["id"],
                "title": this.titleValue,
                "description": this.descriptionValue
            };
            this.UpdateService.updateNotes(body1)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
            }, function (error) {
            });
        }
        this.dialogRef.close();
    };
    /**
     *
     * @description remove a lebel from the note while displaying the card
     */
    CardDisplayComponent.prototype.removeLabel = function (labelId, cardId) {
        var _this = this;
        this.UpdateService.removeLabelFromNotes(cardId, labelId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            for (var i = 0; i < _this.labels.length; i++) {
                if (_this.labels[i]['id'] == labelId)
                    _this.labels.splice(i, 1);
            }
        }, function (error) {
        });
    };
    /**
     *
     * @description remove reminder from the note
     */
    CardDisplayComponent.prototype.removeReminder = function (cardId) {
        var _this = this;
        var id = [];
        id.push(cardId);
        var body = {
            "noteIdList": id
        };
        this.UpdateService.removeReminder(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.reminders.splice(0, 1);
        }, function (error) {
        });
    };
    /**
     *
     * @description on reminder change
     */
    CardDisplayComponent.prototype.reminderChanges = function (event) {
        this.reminders = [];
        this.reminders.push(event.body);
        this.checkDate(event.body);
    };
    /**
     *
     * @description on color change
     */
    CardDisplayComponent.prototype.colorChanges = function (event) {
        if (event)
            this.cardColor = event;
    };
    /**
     *
     * @description on adding or removing of label
     */
    CardDisplayComponent.prototype.labelChanges = function (event) {
        this.labels = [];
        for (var i = 0; i < event.length; i++) {
            this.labels.push(event[i]);
        }
    };
    CardDisplayComponent.prototype.entry = function (event) {
        _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"].log("event occu", event);
    };
    /**
     *
     * @description on note archive
     */
    CardDisplayComponent.prototype.archive = function (event) {
        if (event)
            this.dialogRef.close();
    };
    /**
     *
     * @description checked or unchecked the note when display the card
     */
    CardDisplayComponent.prototype.check = function (list) {
        if (list.status == "open") {
            list.status = "close";
        }
        else {
            list.status = "open";
        }
        var body = {
            "itemName": list.itemName,
            "status": list.status
        };
        this.UpdateService.updateCheckList(list.notesId, list.id, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
        }, function (error) {
        });
    };
    /**
     *
     * @description update the list item
     */
    CardDisplayComponent.prototype.listitem = function (list) {
        if (list.itemName == '')
            return false;
        var body = {
            "itemName": list.itemName,
            "status": list.status
        };
        this.UpdateService.updateCheckList(list.notesId, list.id, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
        }, function (error) {
        });
    };
    /**
     *
     * @description remove a checklist
     */
    CardDisplayComponent.prototype.removeCheckList = function (list) {
        var _this = this;
        this.UpdateService.removeChecklist(list.notesId, list.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            for (var j = 0; j < _this.checkList.length; j++) {
                if (_this.checkList[j] == list)
                    _this.checkList.splice(j, 1);
            }
        }, function (error) {
        });
    };
    CardDisplayComponent.prototype.clear = function () {
        this.model.item = "";
    };
    /**
     *
     * @description adding a checklist
     */
    CardDisplayComponent.prototype.listAdd = function () {
        var _this = this;
        if (this.model.item == '')
            return false;
        var body = {
            "itemName": this.model.item,
            "status": "open"
        };
        this.UpdateService.addCheckList(this.data.noteData["id"], body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.checkList.push(response["data"].details);
            _this.model.item = "";
        }, function (error) {
        });
    };
    /**
     *
     * @description checking the date and printing
     */
    CardDisplayComponent.prototype.checkDate = function (value) {
        this.date = new Date(value).getUTCHours();
        var saved = new Date(value).getTime();
        var current = this.current.getTime();
        var year = new Date(value).getFullYear();
        var month = new Date(value).getMonth();
        var date = new Date(value).getDate();
        var hr;
        var min;
        var ampm = 'AM';
        if (saved < current) {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date + 1 == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10)
                    hr = '0' + hr;
                if (new Date(value).getMinutes() < 10)
                    min = '0' + new Date(value).getMinutes();
                this.date = "yesterday " + hr + ":" + min + " " + ampm;
            }
            else if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10)
                    hr = '0' + hr;
                if (new Date(value).getMinutes() < 10)
                    min = '0' + new Date(value).getMinutes();
                this.date = "today " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 4;
            }
            return 1;
        }
        else {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10)
                    hr = '0' + hr;
                if (new Date(value).getMinutes() < 10)
                    min = '0' + new Date(value).getMinutes();
                this.date = "today " + hr + ":" + min + " " + ampm;
            }
            else if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate() + 1)) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10)
                    hr = '0' + hr;
                if (new Date(value).getMinutes() < 10)
                    min = '0' + new Date(value).getMinutes();
                this.date = "tomorrow " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 3;
            }
            return 2;
        }
    };
    CardDisplayComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('title'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardDisplayComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('description'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CardDisplayComponent.prototype, "description", void 0);
    CardDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-display',
            template: __webpack_require__(/*! ./card-display.component.html */ "./src/app/component/card-display/card-display.component.html"),
            styles: [__webpack_require__(/*! ./card-display.component.scss */ "./src/app/component/card-display/card-display.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CardDisplayComponent);
    return CardDisplayComponent;
}());



/***/ }),

/***/ "./src/app/component/change-color/change-color.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/change-color/change-color.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abbr title=Change color><mat-icon [matMenuTriggerFor]=menu>palette</mat-icon></abbr>\n\n<!-- ****************************metmenu for color start****************************** -->\n<mat-menu #menu=matMenu>\n    <div>\n        <abbr title=white><span class=border (click)=\"colorChange('#FFFFFF')\"></span></abbr>\n        <abbr title=salmon><span class=salmon (click)=\"colorChange('#fa8072')\"></span></abbr>\n        <abbr title=orange><span class=orange (click)=\"colorChange('#FF9900')\"></span></abbr>\n        <abbr title=yellow><span class=yellow_color (click)=\"colorChange('#FFFF64')\"></span></abbr>\n    </div>\n    <div>\n        <abbr title=green><span class=green_color (click)=\"colorChange('#66FF66')\"></span></abbr>\n        <abbr title=teal><span class=teal (click)=\"colorChange('#008080')\"></span></abbr>\n        <abbr title=blue><span class=blue (click)=\"colorChange('#2F5FFF')\"></span></abbr>\n        <abbr title=aqua><span class=aqua (click)=\"colorChange('#00FFFF')\"></span></abbr>\n    </div>\n    <div>\n        <abbr title=purple><span class=purple (click)=\"colorChange('#9B2C9B')\"></span></abbr>\n        <abbr title=pink><span class=pink (click)=\"colorChange('#FFC0CB')\"></span></abbr>\n        <abbr title=red><span class=red (click)=\"colorChange('#FF1A06')\"></span></abbr>\n        <abbr title=gray><span class=gray (click)=\"colorChange('#808080')\"></span></abbr>\n    </div>\n</mat-menu>\n<!-- ****************************metmenu for color end****************************** -->"

/***/ }),

/***/ "./src/app/component/change-color/change-color.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/change-color/change-color.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 2px 2px 2px 2px;\n  padding: 7px 7px 7px 7px; }\n\nspan {\n  border: none;\n  border-radius: 50%;\n  padding: 6px 15px 6px 15px;\n  margin: 3px 3px 3px 3px; }\n\n.blue {\n  background-color: #0606f8; }\n\n.red {\n  background-color: #d10303; }\n\n.green_color {\n  background-color: #66ff66; }\n\n.pink {\n  background-color: pink; }\n\n.aqua {\n  background-color: cyan; }\n\n.purple {\n  background-color: #9b2c9b; }\n\n.orange {\n  background-color: #fd823b; }\n\n.gray {\n  background-color: gray; }\n\n.yellow_color {\n  background-color: #ffff64; }\n\n.teal {\n  background-color: #5bb4b4; }\n\n.salmon {\n  background-color: salmon; }\n\n.border {\n  border: 1px solid gray; }\n"

/***/ }),

/***/ "./src/app/component/change-color/change-color.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/change-color/change-color.component.ts ***!
  \******************************************************************/
/*! exports provided: ChangeColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeColorComponent", function() { return ChangeColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> change-color.component.ts
 *
 *  Purpose         : To change the color of the particular note
 *
 *  @file           : change-color.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/




var ChangeColorComponent = /** @class */ (function () {
    function ChangeColorComponent(changeColorService) {
        this.changeColorService = changeColorService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onChangeColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChangeColorComponent.prototype.ngOnInit = function () {
    };
    /**
    *
    * @description changing the color of particular note
    */
    ChangeColorComponent.prototype.colorChange = function (color) {
        var _this = this;
        if (this.card) {
            var id = [];
            id.push(this.card.id);
            var body = {
                "color": color,
                "noteIdList": id
            };
            this.changeColorService.cardColorChange(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onChangeColor.emit(color);
            }, function (error) {
            });
        }
        else {
            this.onChangeColor.emit({ color: color });
        }
    };
    ChangeColorComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangeColorComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChangeColorComponent.prototype, "onChangeColor", void 0);
    ChangeColorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-color',
            template: __webpack_require__(/*! ./change-color.component.html */ "./src/app/component/change-color/change-color.component.html"),
            styles: [__webpack_require__(/*! ./change-color.component.scss */ "./src/app/component/change-color/change-color.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], ChangeColorComponent);
    return ChangeColorComponent;
}());



/***/ }),

/***/ "./src/app/component/collaborator/collaborator.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/collaborator/collaborator.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=fontXs>\n    <div>Collaborators</div>\n    <mat-divider></mat-divider>\n    <div class=margin>\n    <mat-card-header>\n        <div mat-card-avatar ngStyle.xs=\"width:30px;height:30px\" [ngStyle]=\"{'background-image':'url(' +img+ ')',\n        'background-size':'cover','height':'40px','width':'40px','border-radius':'50%'}\"></div>\n        <mat-card-title class=fontXs >{{owner.firstName}}  {{owner.lastName}} (Owner)</mat-card-title>\n        <mat-card-subtitle  class=fontXs>{{owner.email}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-header *ngFor=\"let list of collaborators\">\n        <div mat-card-avatar ngStyle.xs=\"width:30px;height:30px\" [ngStyle]=\"{'background-color':'rgba(0, 0, 255,0.3)',\n        'background-size':'cover','height':'40px','width':'40px','border-radius':'50%','border':'1px solid blue'}\">\n            <div fxLayoutAlign=center class=nameIcon>{{list.firstName[0].toUpperCase()}}</div>\n        </div>\n        <div fxFlex=80>\n            <mat-card-title class=fontXs>{{list.firstName}}  {{list.lastName}}</mat-card-title>\n            <mat-card-subtitle class=fontXs>{{list.email}}</mat-card-subtitle>\n        </div>\n        <div fxFlex=10><mat-icon (click)=removeCol(list) class=clear>clear</mat-icon></div>\n    </mat-card-header>\n    <mat-card-header>\n        <div mat-card-avatar ngStyle.xs=\"width:30px;height:30px\" class=\"addPerson\"><mat-icon ngStyle.xs=\"padding:1px\"\n        class=icon>person_add</mat-icon></div>\n        <input class=fontXs placeholder=\"person or email to share with\" [matMenuTriggerFor]=menu\n        [(ngModel)]=\"searchValue\" (keyup)=searchUser()>\n    </mat-card-header>\n    </div>\n    <mat-card-footer class=save>\n        <div fxLayoutAlign=end><button mat-button (click)=save()>save</button></div>\n    </mat-card-footer>\n</mat-card>\n\n<mat-menu #menu=matMenu>\n    <div *ngFor=\"let data of userList\">\n    <button class=name (click)=addCol(data) ngStyle.xs=\"font-size:10px\">\n    {{data.firstName}} {{data.lastName}} [{{data.email}}]</button>\n    </div>\n</mat-menu>"

/***/ }),

/***/ "./src/app/component/collaborator/collaborator.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/collaborator/collaborator.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep.mat-dialog-container {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n  display: block;\n  padding: 0px;\n  border-radius: 5px;\n  box-sizing: border-box;\n  overflow: auto;\n  outline: 0;\n  width: 100%;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n  max-height: 500px; }\n\n.addPerson {\n  border: 1px solid black;\n  border-radius: 50%;\n  opacity: 0.4; }\n\n.nameIcon {\n  font-size: 22px;\n  color: #0606f8;\n  padding: 7px 0px 0px 0px; }\n\n@media only screen and (max-width: 599px) {\n  .nameIcon {\n    font-size: 15px;\n    color: #0606f8;\n    padding: 7px 0px 0px 0px; } }\n\n.clear {\n  cursor: pointer;\n  opacity: 0.3; }\n\n@media only screen and (max-width: 599px) {\n  .clear {\n    cursor: pointer;\n    opacity: 0.3;\n    font-size: 15px; } }\n\n.clear:hover {\n  opacity: 0.8; }\n\ninput {\n  border: none;\n  outline: none;\n  width: 100%; }\n\n::ng-deep.icon[_ngcontent-c24] {\n  padding: 18% 18% 18% 18%; }\n\n.save {\n  margin-top: 10px;\n  background-color: #e9e9e9; }\n\n.icon {\n  padding: 6px 6px 6px 6px; }\n\n.margin {\n  margin-top: 15px; }\n\n.name {\n  padding: 5px 5px 5px 5px;\n  margin: 2px 0px 0px 0px;\n  border: none;\n  background-color: transparent;\n  text-align: left; }\n\n@media only screen and (max-width: 599px) {\n  .fontXs {\n    font-size: 12px; } }\n"

/***/ }),

/***/ "./src/app/component/collaborator/collaborator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/collaborator/collaborator.component.ts ***!
  \******************************************************************/
/*! exports provided: CollaboratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollaboratorComponent", function() { return CollaboratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> collaborator.component.ts
 *
 *  Purpose         : To
 *
 *  @file           : collaborator.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/





var CollaboratorComponent = /** @class */ (function () {
    function CollaboratorComponent(dialogRef, data, collaboratorService, CollaboratorService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.collaboratorService = collaboratorService;
        this.CollaboratorService = CollaboratorService;
        this.snackBar = snackBar;
        this.userList = [];
        this.search = false;
        this.collaborators = [];
        this.owner = this.data.noteData["user"];
        this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].Url + this.owner.imageUrl;
    }
    CollaboratorComponent.prototype.ngOnInit = function () {
        if (this.data.noteData) {
            for (var i = 0; i < this.data.noteData["collaborators"].length; i++) {
                this.collaborators.push(this.data.noteData["collaborators"][i]);
            }
        }
    };
    CollaboratorComponent.prototype.save = function () {
        this.dialogRef.close("hiii");
    };
    CollaboratorComponent.prototype.searchUser = function () {
        var _this = this;
        var body = { 'searchWord': this.searchValue };
        this.collaboratorService.searchUserList(body)
            .subscribe(function (response) {
            _this.userList = [];
            _this.userList = response['data'].details;
        }, function (error) {
        });
    };
    CollaboratorComponent.prototype.addCol = function (data) {
        var _this = this;
        if (this.data.noteData) {
            for (var i = 0; i < this.collaborators.length; i++) {
                if (data.email == this.collaborators[i].email) {
                    this.snackBar.open("failed", "this email already exist", {
                        duration: 2000,
                    });
                    return;
                }
            }
            this.CollaboratorService.addColaborator(data, this.data.noteData['id'])
                .subscribe(function (response) {
                _this.collaborators.push(data);
            }, function (error) {
            });
        }
        else {
            this.collaborators.push(data);
        }
    };
    CollaboratorComponent.prototype.removeCol = function (data) {
        var _this = this;
        if (this.data.noteData) {
            this.CollaboratorService.removeColaborator(this.data.noteData['id'], data.userId)
                .subscribe(function (response) {
                for (var j = 0; j < _this.collaborators.length; j++) {
                    if (data == _this.collaborators[j]) {
                        _this.collaborators.splice(j, 1);
                    }
                }
            }, function (error) {
            });
        }
        else {
            for (var j = 0; j < this.collaborators.length; j++) {
                if (data == this.collaborators[j]) {
                    this.collaborators.splice(j, 1);
                }
            }
        }
    };
    CollaboratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-collaborator',
            template: __webpack_require__(/*! ./collaborator.component.html */ "./src/app/component/collaborator/collaborator.component.html"),
            styles: [__webpack_require__(/*! ./collaborator.component.scss */ "./src/app/component/collaborator/collaborator.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], CollaboratorComponent);
    return CollaboratorComponent;
}());



/***/ }),

/***/ "./src/app/component/create-label/create-label.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/create-label/create-label.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=edit_label>Edit label</div>\n<!-- ****************************label create start****************************** -->\n<div fxLayout=row fxLayoutGap=5>\n    <div fxFlex=10><mat-icon class=doneIcon (click)=clear()>clear</mat-icon></div>\n    <div fxFlex=80><input placeholder=\"Create new label\" class=textarea [(ngModel)]=\"model.labelName\" maxlength=40\n        #labelName=ngModel></div>\n    <div fxFlex=10><mat-icon class=doneIcon (click)=done()>done</mat-icon></div>\n</div>\n<!-- ****************************label create end****************************** -->\n\n<!-- ****************************edit label start****************************** -->\n<div *ngFor=\"let data of labelList\" > \n<div fxLayout=row >\n    <div fxFlex=20 class=icon (click)=delete(data.id)>\n        <mat-icon  class=labelIcon>label</mat-icon>\n        <mat-icon class=deleteIcon (click)=delete(data.id) >delete</mat-icon>\n    </div>\n    <div fxFlex=80 fxLayout=row *ngIf=\"labelId != data.id\" (click)=\"editIcon(data.id,data.label)\">\n        <div fxFlex=90 class=labelName [innerHTML]=\"data.label\"></div>\n        <div fxFlex=10><mat-icon class=\"doneIcon\" (click)=\"editIcon(data.id,data.label)\">edit</mat-icon></div>\n    </div>\n    <div fxFlex=80 fxLayout=row *ngIf=\"labelId == data.id\">\n        <div fxFlex=90><input class=\"textarea\" [(ngModel)]=\"model.newName\" #newName=\"ngModel\" maxlength=40></div>\n        <div fxFlex=10><mat-icon class=\"doneIcon\" (click)=update(data.id)>done</mat-icon></div>\n    </div> \n</div>\n</div>\n<button mat-button class=done (click)=add()>Done</button>\n<!-- ****************************edit label end****************************** -->"

/***/ }),

/***/ "./src/app/component/create-label/create-label.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/create-label/create-label.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textarea {\n  outline: none;\n  border: none;\n  width: 100%; }\n\n.labelName {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important; }\n\n.textarea:empty:before {\n  content: attr(data-text);\n  opacity: 0.5;\n  font-size: 12px; }\n\n.doneIcon {\n  font-size: 18px;\n  opacity: 0.7;\n  cursor: pointer; }\n\n.icon:hover .labelIcon,\n.icon .deleteIcon {\n  display: none;\n  cursor: pointer; }\n\n.icon:hover .deleteIcon,\n.icon .labelIcon {\n  display: inline;\n  font-size: 20px;\n  opacity: 0.7;\n  cursor: pointer; }\n\n.done {\n  float: right;\n  cursor: pointer; }\n\n.edit_label {\n  margin: 0px 0px 3px 5px; }\n"

/***/ }),

/***/ "./src/app/component/create-label/create-label.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/create-label/create-label.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLabelComponent", function() { return CreateLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> create-label.component.ts
 *
 *  Purpose         : To create label
 *
 *  @file           : create-label.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/





var CreateLabelComponent = /** @class */ (function () {
    function CreateLabelComponent(dialogRef, NoteAddService) {
        this.dialogRef = dialogRef;
        this.NoteAddService = NoteAddService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.model = {
            "labelName": "",
            "newName": ""
        };
        this.label = [];
        this.id = localStorage.getItem("fundooUserId");
        this.labelList = [];
    }
    CreateLabelComponent.prototype.ngOnInit = function () {
        this.show();
    };
    CreateLabelComponent.prototype.editIcon = function (id, labelNew) {
        this.labelId = [];
        this.labelId = id;
        this.model.newName = labelNew;
    };
    CreateLabelComponent.prototype.add = function () {
        this.done();
        this.dialogRef.close();
    };
    CreateLabelComponent.prototype.clear = function () {
        this.model.labelName = null;
    };
    /**
     *
     * @description getting the list of labels
     */
    CreateLabelComponent.prototype.show = function () {
        var _this = this;
        this.NoteAddService.showNoteLabels()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.label = response["data"].details;
            _this.labelList = [];
            _this.labelList = _this.label;
        }, function (error) {
        });
    };
    /**
     *
     * @description deleting a label from list
     */
    CreateLabelComponent.prototype.delete = function (labelId) {
        var _this = this;
        this.NoteAddService.deleteLabel(labelId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.show();
        }, function (error) {
        });
    };
    /**
     *
     * @description updating a label from list
     */
    CreateLabelComponent.prototype.update = function (labelId) {
        var _this = this;
        var label = this.model.newName;
        var body = { "label": label };
        this.NoteAddService.updateLabel(labelId, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.show();
        }, function (error) {
        });
    };
    /**
     *
     * @description adding a label to list
     */
    CreateLabelComponent.prototype.done = function () {
        var _this = this;
        var label = this.model.labelName;
        if (label == "") {
            this.dialogRef.close();
            return false;
        }
        var body = {
            "label": label,
            "isDeleted": false,
            "userId": this.id
        };
        this.NoteAddService.createLabel(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.show();
            _this.model.labelName = null;
        }, function (error) {
        });
    };
    CreateLabelComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    CreateLabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-label',
            template: __webpack_require__(/*! ./create-label.component.html */ "./src/app/component/create-label/create-label.component.html"),
            styles: [__webpack_require__(/*! ./create-label.component.scss */ "./src/app/component/create-label/create-label.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], CreateLabelComponent);
    return CreateLabelComponent;
}());



/***/ }),

/***/ "./src/app/component/forgotpass/forgotpass.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/forgotpass/forgotpass.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=column fxLayoutGap=\"5%\">\n  <div fxFlex.lg=\"20%\" fxFlex.md=\"10%\" fxFlex.sm=\"5%\" fxFlex.xs=\"0%\"></div>\n  <div  fxLayout=\"row\" fxFlex.lg=\"70%\">\n    <div fxFlex.lg=\"30%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n\n    <div fxFlex.lg=\"40%\" fxFlex.md=\"50%\" fxFlex.sm=\"60%\" fxFlex.xs=\"100%\">\n      \n      <!-- ****************************matcard start****************************** -->\n      <mat-card>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n          <div fxLayoutAlign=\"center\" class=userPage_header>\n            <span class=blue>F</span><span class=red>u</span><span class=yellow>n</span>\n            <span class=blue>d</span><span class=green>o</span><span class=red>o</span>\n          </div>\n          <mat-card-title fxLayoutAlign=center><h4>Find your email</h4></mat-card-title>\n          <mat-card-actions fxLayoutAlign=center>Enter your recovery email</mat-card-actions>\n            \n          <mat-form-field class=full_width>\n            <input matInput placeholder=\"email\" [(ngModel)]=\"model.email\" name=\"email\" \n              [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" #email=\"ngModel\" required >\n          </mat-form-field>\n          <mat-error *ngIf=\"f.submitted && email.invalid\">\n            <mat-error *ngIf=\"email.errors.required\" class=\"error\">email is required</mat-error>\n          </mat-error>\n\n          <div  fxLayoutAlign=\"end\"><button mat-button class=mat_button type=\"submit\" (click)=\"reset()\">\n          Next</button></div>\n          <div class=back (click)=login()>back</div>\n\n        </form>\n      </mat-card>\n      <!-- ****************************matcard end****************************** -->\n\n    </div>\n\n    <div fxFlex.lg=\"30%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n  </div>\n  <div fxFlex.lg=\"20%\" fxFlex.md=\"10%\" fxFlex.sm=\"5%\" fxFlex.xs=\"0%\"></div>\n</div>"

/***/ }),

/***/ "./src/app/component/forgotpass/forgotpass.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/forgotpass/forgotpass.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/forgotpass/forgotpass.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/forgotpass/forgotpass.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotpassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassComponent", function() { return ForgotpassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> forgotpass.component.ts
 *
 *  Purpose         : To send a request to registered email id if user has forgotten password
 *
 *  @file           : forgotpass.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/






var ForgotpassComponent = /** @class */ (function () {
    function ForgotpassComponent(resetService, snackBar, router) {
        this.resetService = resetService;
        this.snackBar = snackBar;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.model = {
            "email": ""
        };
    }
    ForgotpassComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @description reset of password
     */
    ForgotpassComponent.prototype.reset = function () {
        var _this = this;
        if (this.model.email.length == 0) {
            /**
             *
             * @description checking the email is entered or not
             */
            this.snackBar.open("failed", "please enter email", {
                duration: 2000,
            });
            return;
        }
        var body = {
            "email": this.model.email
        };
        this.resetService.forgotPassword(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.snackBar.open("check your email", "Set password link sent to you registered email", {
                duration: 2000,
            });
        }, function (error) {
            if (error.status == 404) {
                _this.snackBar.open("failed", "email not found", {
                    duration: 2000,
                });
            }
        });
    };
    ForgotpassComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ForgotpassComponent.prototype.login = function () {
        this.router.navigateByUrl('/login');
    };
    ForgotpassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpass',
            template: __webpack_require__(/*! ./forgotpass.component.html */ "./src/app/component/forgotpass/forgotpass.component.html"),
            styles: [__webpack_require__(/*! ./forgotpass.component.scss */ "./src/app/component/forgotpass/forgotpass.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ForgotpassComponent);
    return ForgotpassComponent;
}());



/***/ }),

/***/ "./src/app/component/image-crop/image-crop.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/image-crop/image-crop.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<image-cropper\n    [imageChangedEvent]=\"data\"\n    [maintainAspectRatio]=\"true\"\n    [aspectRatio]=\"1 / 1\"\n    [resizeToWidth]=\"128\"\n    format=\"png\"\n    (imageCropped)=\"imageCropped($event)\"\n\n></image-cropper>\n<button mat-button (click)=\"uploadpic()\">Upload</button>\n"

/***/ }),

/***/ "./src/app/component/image-crop/image-crop.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/image-crop/image-crop.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/image-crop/image-crop.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/image-crop/image-crop.component.ts ***!
  \**************************************************************/
/*! exports provided: ImageCropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropComponent", function() { return ImageCropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> image-crop.component.ts
 *
 *  Purpose         : To crop the selected image and setting as profile picture
 *
 *  @file           : image-crop.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/





var ImageCropComponent = /** @class */ (function () {
    function ImageCropComponent(NavbarServiceUser, dialogRef, data) {
        this.NavbarServiceUser = NavbarServiceUser;
        this.dialogRef = dialogRef;
        this.data = data;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ImageCropComponent.prototype.ngOnInit = function () {
    };
    ImageCropComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event;
    };
    /**
     *
     * @description uploading the image to profile
     */
    ImageCropComponent.prototype.uploadpic = function () {
        var _this = this;
        this.apiImage = this.croppedImage.file;
        var uploadData = new FormData();
        uploadData.append('file', this.apiImage, this.apiImage.name);
        this.NavbarServiceUser.addProfileImage(uploadData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (res) {
            _this.dialogRef.close();
            localStorage.setItem("fundooUserImage", res['status'].imageUrl);
        }, function (error) {
        });
    };
    ImageCropComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ImageCropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-crop',
            template: __webpack_require__(/*! ./image-crop.component.html */ "./src/app/component/image-crop/image-crop.component.html"),
            styles: [__webpack_require__(/*! ./image-crop.component.scss */ "./src/app/component/image-crop/image-crop.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImageCropComponent);
    return ImageCropComponent;
}());



/***/ }),

/***/ "./src/app/component/label/label.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/label/label.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notes-add (onNewEntry)=refresh($event)></app-notes-add>\n<app-notes-list  *ngIf=\"spinnerValue==false\" [notes]=\"labelNotesList\" (anyChanges)=\"refresh($event)\"></app-notes-list>\n<app-loader *ngIf=\"spinnerValue==true\"></app-loader>\n"

/***/ }),

/***/ "./src/app/component/label/label.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/label/label.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/label/label.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/label/label.component.ts ***!
  \****************************************************/
/*! exports provided: LabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelComponent", function() { return LabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> label.component.ts
 *
 *  Purpose         : To send a request to registered email id if user has forgotten password
 *
 *  @file           : label.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
******************************************************************************/





var LabelComponent = /** @class */ (function () {
    function LabelComponent(labelService, route) {
        this.labelService = labelService;
        this.route = route;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.label = [];
        this.labelNotesList = [];
        this.labelName = '';
        this.spinnerValue = true;
    }
    LabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.labelName = params['label'];
            _this.labelNotes();
        });
    };
    LabelComponent.prototype.refresh = function (event) {
        if (event) {
            this.labelNotes();
        }
    };
    /**
     *
     * @description getting the notes according to label
     */
    LabelComponent.prototype.labelNotes = function () {
        var _this = this;
        this.labelService.getNotelistByLabel(this.labelName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.label = response["data"].data;
            _this.labelNotesList = [];
            for (var i = _this.label.length; i > 0; i--) {
                _this.labelNotesList.push(_this.label[i - 1]);
            }
            console.log(_this.labelNotesList);
            _this.spinnerValue = false;
        }, function (error) {
        });
    };
    LabelComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    LabelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-label',
            template: __webpack_require__(/*! ./label.component.html */ "./src/app/component/label/label.component.html"),
            styles: [__webpack_require__(/*! ./label.component.scss */ "./src/app/component/label/label.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LabelComponent);
    return LabelComponent;
}());



/***/ }),

/***/ "./src/app/component/loader/loader.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/loader/loader.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-fading-circle\">\n    <div class=\"sk-circle1 sk-circle\"></div>\n    <div class=\"sk-circle2 sk-circle\"></div>\n    <div class=\"sk-circle3 sk-circle\"></div>\n    <div class=\"sk-circle4 sk-circle\"></div>\n    <div class=\"sk-circle5 sk-circle\"></div>\n    <div class=\"sk-circle6 sk-circle\"></div>\n    <div class=\"sk-circle7 sk-circle\"></div>\n    <div class=\"sk-circle8 sk-circle\"></div>\n    <div class=\"sk-circle9 sk-circle\"></div>\n    <div class=\"sk-circle10 sk-circle\"></div>\n    <div class=\"sk-circle11 sk-circle\"></div>\n    <div class=\"sk-circle12 sk-circle\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/component/loader/loader.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/loader/loader.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n"

/***/ }),

/***/ "./src/app/component/loader/loader.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/loader/loader.component.ts ***!
  \******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/component/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/component/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"5%\">\n  <div fxFlex.lg=\"15%\" fxFlex.md=\"10%\" fxFlex.sm=\"5%\" fxFlex.xs=\"0%\"></div>\n  <div  fxLayout=\"row wrap\" fxFlex.lg=\"70%\" fxLayoutAlign=center>\n    <!-- <div fxFlex.lg=\"15%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div> -->\n\n    <div fxFlex.lg=\"30%\" fxFlex.md=\"55%\" fxFlex.sm=\"100%\" fxFlex.xs=\"100%\">\n      <!-- ****************************matcard start****************************** -->\n      <mat-card>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n          <div fxLayoutAlign=\"center\" class=userPage_header>\n            <span class=blue>F</span><span class=red>u</span><span class=yellow>n</span>\n            <span class=blue>d</span><span class=green>o</span><span class=red>o</span>\n          </div>\n          <mat-card-title fxLayoutAlign=center><h3>Sign in</h3></mat-card-title>\n          <mat-card-title fxLayoutAlign=center>Continue to Fundoo</mat-card-title>\n\n          <mat-form-field class=\"full_width\">\n            <input matInput placeholder=\"Email Id\" [(ngModel)]=\"model.email\" name=\"email\" \n            [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" #email=\"ngModel\" required >\n          </mat-form-field>\n          <mat-error *ngIf=\"f.submitted && email.invalid\">\n            <mat-error *ngIf=\"email.errors.required\" class=\"error\">email is required</mat-error>\n          </mat-error>\n          \n          <mat-form-field class=\"full_width\">\n            <input  matInput placeholder=\"Password\" [type]=\"hide ? 'text' : 'password'\" \n              [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\" required>\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n          </mat-form-field>\n          <mat-error *ngIf=\"f.submitted && password.invalid\">\n            <mat-error *ngIf=\"password.errors.required\" class=\"error\">password is required</mat-error>\n          </mat-error>\n\n          <div  fxLayoutAlign=\"end\"><button mat-button type=\"submit\" class=mat_button (click)=\"login()\">Log In</button></div>\n          <div class=back (click)=forgotPass()>Forgot password?</div>\n          <div class=back (click)=signup()>Create account</div>\n\n        </form>\n      </mat-card>\n      <!-- ****************************matcard end****************************** -->\n    </div>\n\n    <div *ngIf=cartId class=gray_background fxFlex.lg=\"30%\" fxFlex.md=\"55%\" fxFlex.sm=\"80%\" fxFlex.xs=\"100%\" fxLayout=column \n     fxLayoutGap=\"10%\">\n     <div></div>\n    <div fxLayoutAlign=center>Service</div>\n    <div fxLayout=row fxLayoutAlign=center fxLayoutGap=\"10%\" >\n        <div  *ngFor=\"let data of card\" class=div>\n        <mat-card  class=matCard >\n          \n          <div fxFlex=column fxLayoutGap=\"10%\">\n              <div class=font_20>price: ${{data.price}} per month</div>\n              <div class=blue>{{data.name}}</div>\n                  <li class=features>${{data.price}}/month</li>\n                  <li class=features>{{data.description}}</li>\n            </div>\n        </mat-card>\n        <mat-card [ngClass]=\"data.id==cardId ? 'card cardSelected' : 'cardNotSelected card'\">\n            <div *ngIf=\"data.id==cardId\" class=add>SELECTED</div>\n            <div *ngIf=\"data.id!=cardId\" class=add>ADD TO CART</div>\n        </mat-card>\n       \n    </div>\n    </div>\n    <div></div>\n   \n  </div>\n\n  </div>\n  <div fxFlex.lg=\"15%\" fxFlex.md=\"10%\" fxFlex.sm=\"5%\" fxFlex.xs=\"0%\"></div>\n</div>"

/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gray_background {\n  background-color: #d0d1d1; }\n\n@media only screen and (max-width: 599px) {\n  .card {\n    width: 124px;\n    margin-top: -159%;\n    padding: 169% 0% 6% 16%;\n    margin-left: 10%;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .cardNotSelected {\n    background-color: #acacac; }\n  .cardSelected {\n    background-color: #fb0; }\n  .matCard {\n    width: 120px;\n    z-index: 10;\n    height: 200px; }\n  .font_20 {\n    font-size: 15px; }\n  .features {\n    margin-top: 10px;\n    font-size: 9px; }\n  .add {\n    font-size: 10px; } }\n\n@media only screen and (min-width: 600px) {\n  .card {\n    width: 150px;\n    margin-top: -117%;\n    padding: 122% 0% 7% 15%;\n    margin-left: 10%;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .cardNotSelected {\n    background-color: #acacac; }\n  .cardSelected {\n    background-color: #fb0; }\n  .matCard {\n    width: 150px;\n    z-index: 10;\n    height: 200px; }\n  .font_25 {\n    font-size: 25px; }\n  .font_20 {\n    font-size: 20px; }\n  .features {\n    margin-top: 10px;\n    font-size: 12px; }\n  .add {\n    font-size: 17px; } }\n"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/logger/logger.service */ "./src/app/core/services/logger/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> login.component.ts
 *
 *  Purpose         : To login to Fundoo Account
 *
 *  @file           : login.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, snackBar, router) {
        this.loginService = loginService;
        this.snackBar = snackBar;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.model = {
            "email": "",
            "password": ""
        };
        this.card = [];
        this.cartId = localStorage.getItem("productCartId");
        this.productCartId = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cartId) {
            this.productCartId = this.cartId;
            this.loginService.getCardDetails(this.cartId)
                .subscribe(function (response) {
                _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"].log("response", response);
                _this.cardId = response["data"].product.id;
            }, function (error) {
            });
        }
        this.getService();
    };
    LoginComponent.prototype.getService = function () {
        var _this = this;
        this.loginService.getService()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            for (var i = 0; i < response["data"].data.length; i++) {
                response["data"].data[i].select = false;
                _this.card.push(response["data"].data[i]);
            }
        });
    };
    /**
     *
     * @description user login
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.model.email.length == 0 || this.model.password.length == 0) {
            /**
             *
             * @description checking the email and password are filled
             */
            this.snackBar.open("login failed", "please enter all details", {
                duration: 2000,
            });
            return;
        }
        /**
         *
         * @description email validation
         */
        var regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (regexEmail.test(this.model.email) == false) {
            this.snackBar.open("failed", "invalid email", {
                duration: 2000,
            });
            return;
        }
        var body = {
            "email": this.model.email,
            "password": this.model.password,
            "cartId": this.productCartId
        };
        this.loginService.userLogin(body)
            .subscribe(function (response) {
            localStorage.setItem("fundooUserToken", response["id"]);
            localStorage.setItem("fundooUserId", response["userId"]);
            localStorage.setItem("fundooUserFirstname", response["firstName"]);
            localStorage.setItem("fundooUserLastname", response["lastName"]);
            localStorage.setItem("fundooUserEmail", response["email"]);
            localStorage.setItem("fundooUserImage", response["imageUrl"]);
            /**
             *
             * @description if the login is success then it will directly take to dashboard page
             */
            var obj = {
                "pushToken": localStorage.getItem("fundooUserPushToken")
            };
            _this.loginService.pushLogin(obj)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.destroy$))
                .subscribe(function (response) {
            }, function (error) {
            });
            _this.router.navigateByUrl('/home');
        }, function (error) {
            if (error.status == 401) {
                _this.snackBar.open("login failed", "wrong email or password", {
                    duration: 2000,
                });
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    LoginComponent.prototype.forgotPass = function () {
        this.router.navigateByUrl('/forgotpass');
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigateByUrl('/card');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/more/more.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/more/more.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abbr *ngIf=\"!isDelete\" title=\"More\"><mat-icon [matMenuTriggerFor]=\"menu\">more_vert</mat-icon></abbr>\n\n<!-- ****************************more menu start****************************** -->\n<mat-menu #menu=\"matMenu\">\n    <button mat-menu-item class=\"menu\" *ngIf=\"card\" (click)=\"deleteNotes()\">Delete Note</button>\n    <button mat-menu-item class=\"menu\" [matMenuTriggerFor]=\"nestedMenu\" (click)=\"showLabel()\">Add label</button>\n    <button mat-menu-item class=\"menu\" (click)=\"showCheckBox()\">Show checkboxes</button>\n    <button mat-menu-item class=\"menu\" *ngIf=\"card && card.questionAndAnswerNotes.length==0\"(click)=\"questAns()\">Ask a Question</button>\n    <button mat-menu-item class=\"menu\" *ngIf=\"card && card.questionAndAnswerNotes.length!=0\" (click)=\"questAns()\">Show Question</button>\n</mat-menu>\n<!-- ****************************more menu end****************************** -->\n\n<!-- ****************************label menu start****************************** -->\n<mat-menu #nestedMenu=\"matMenu\">\n    <div>Label note</div>\n    <div  fxLayout=\"row\">    \n        <div fxFlex=80%>\n            <input type=text class=input placeholder=\"Enter label name\" [(ngModel)]=\"searchLabel\" \n            (click)=$event.stopPropagation()>\n        </div>\n        <div fxFlex=10% ><mat-icon><small>search</small></mat-icon></div>\n    </div>\n    <div>\n        <div fxLayout=row *ngFor=\"let data of labelList | search: searchLabel\">\n            <div fxFlex=10%>\n                <input *ngIf=\"data.isChecked==true\" type=\"checkbox\" (click)=removeLabel(data) \n                (click)=$event.stopPropagation() checked>\n                <input *ngIf=\"data.isChecked==false\" type=\"checkbox\" (click)=addLabel(data) \n                (click)=$event.stopPropagation() unchecked>\n            </div>\n            <div fxFlex=80% class=label>{{data.label}}</div>\n        </div>\n    </div>\n</mat-menu>\n<!-- ****************************label menu end****************************** -->\n\n<abbr *ngIf=\"isDelete\" title=\"More\"><mat-icon [matMenuTriggerFor]=\"menuDelete\">more_vert</mat-icon></abbr>\n<!-- ****************************trashed more menu end****************************** -->\n<mat-menu #menuDelete=\"matMenu\">\n    <button mat-menu-item class=\"menu\" (click)=deleteForver()>Delete Forever</button>\n    <button mat-menu-item class=\"menu\" (click)=deleteNotes()>Restore</button>\n</mat-menu>\n<!-- ****************************trashed more menu end****************************** -->"

/***/ }),

/***/ "./src/app/component/more/more.component.scss":
/*!****************************************************!*\
  !*** ./src/app/component/more/more.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu:hover {\n  background-color: #dbdbdb; }\n\n.input {\n  outline: none;\n  border: none; }\n\n.label {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important; }\n"

/***/ }),

/***/ "./src/app/component/more/more.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/more/more.component.ts ***!
  \**************************************************/
/*! exports provided: MoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreComponent", function() { return MoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> more.component.ts
 *
 *  Purpose         :
 *
 *  @file           : more.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/







var MoreComponent = /** @class */ (function () {
    function MoreComponent(MoreService, snackBar, router, data) {
        this.MoreService = MoreService;
        this.snackBar = snackBar;
        this.router = router;
        this.data = data;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.popupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCheckbox = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.labelArray = [];
        this.Array = [];
        this.isDelete = false;
        this.string = "Note trashed";
        this.label = [];
    }
    MoreComponent.prototype.ngOnInit = function () {
        if (this.card) {
            this.isDelete = this.card.isDeleted;
            if (this.card.isDeleted == true)
                this.string = "Note Restored";
        }
    };
    /**
     *
     * @description deleting the selecting note
     */
    MoreComponent.prototype.deleteNotes = function () {
        var _this = this;
        if (this.card) {
            var id = [];
            id.push(this.card.id);
            var body = {
                "isDeleted": !this.isDelete,
                "noteIdList": id
            };
            this.MoreService.deleteNote(body)
                .subscribe(function (response) {
                _this.onChanges.emit({});
                _this.snackBar.open(_this.string, "undo", {
                    duration: 2000,
                });
            }, function (error) {
            });
        }
    };
    /**
     *
     * @description getting label list
     */
    MoreComponent.prototype.showLabel = function () {
        var _this = this;
        this.labelArray = [];
        this.Array = [];
        this.MoreService.showNoteLabels()
            .subscribe(function (response) {
            _this.label = response["data"].details;
            _this.labelList = [];
            _this.labelList = _this.label;
            for (var i = 0; i < _this.labelList.length; i++) {
                _this.labelList[i].isChecked = false;
                if (_this.card) {
                    for (var j = 0; j < _this.card.noteLabels.length; j++) {
                        if (_this.labelList[i].label == _this.card.noteLabels[j].label) {
                            _this.Array.push(_this.labelList[i]);
                            _this.labelList[i].isChecked = true;
                        }
                    }
                }
            }
        }, function (error) {
        });
    };
    /**
     *
     * @description adding label to note
     */
    MoreComponent.prototype.addLabel = function (label) {
        var _this = this;
        if (this.card) {
            this.MoreService.addLabelToNotes(this.card.id, label.id)
                .subscribe(function (response) {
                _this.onChanges.emit({});
                // for(let i=0;i<this.Array.length;i++){
                //   if(this.Array[i].id==label.id){
                //     this.Array.splice(i, 1);
                //     this.popupChange.emit(this.Array)
                //     return;
                //   }
                // }
                _this.Array.push(label);
                _this.popupChange.emit(_this.Array);
            }, function (error) {
            });
        }
        else {
            for (var i = 0; i < this.labelArray.length; i++) {
                if (this.labelArray[i].id == label.id) {
                    this.labelArray.splice(i, 1);
                    this.onChanges.emit(this.labelArray);
                    return;
                }
            }
            this.labelArray.push(label);
            this.onChanges.emit(this.labelArray);
        }
    };
    /**
     *
     * @description remove label from list
     */
    MoreComponent.prototype.removeLabel = function (label) {
        var _this = this;
        this.MoreService.removeLabelFromNotes(this.card.id, label.id)
            .subscribe(function (response) {
            _this.onChanges.emit({});
            for (var i = 0; i < _this.Array.length; i++) {
                if (_this.Array[i].id == label.id) {
                    _this.Array.splice(i, 1);
                    _this.popupChange.emit(_this.Array);
                    return;
                }
            }
            _this.Array.push(label);
            _this.popupChange.emit(_this.Array);
        }, function (error) {
        });
    };
    MoreComponent.prototype.showCheckBox = function () {
        this.showCheckbox.emit({});
    };
    /**
     *
     * @description deleting a note permanently
     */
    MoreComponent.prototype.deleteForver = function () {
        var _this = this;
        if (this.card) {
            var id = [];
            id.push(this.card.id);
            var body = { "noteIdList": id };
            this.MoreService.permanentDeleteNote(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onChanges.emit({});
            }, function (error) {
            });
        }
    };
    MoreComponent.prototype.questAns = function () {
        // LoggerService.log("hiii",this.card)
        this.router.navigateByUrl('/QuestionAnswer/' + this.card.id);
        this.data.hideView(true);
    };
    MoreComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoreComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MoreComponent.prototype, "onChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MoreComponent.prototype, "popupChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MoreComponent.prototype, "showCheckbox", void 0);
    MoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-more',
            template: __webpack_require__(/*! ./more.component.html */ "./src/app/component/more/more.component.html"),
            styles: [__webpack_require__(/*! ./more.component.scss */ "./src/app/component/more/more.component.scss")],
            outputs: ['onDeleteEntry']
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ******************************navbar start******************************** -->\n<div class=\"navbar\" #navbar>\n  <mat-toolbar-row>\n  <div fxLayout=\"column\" fxFlex=\"100%\" fxLayoutGap=\"0.8%\">\n  <div fxFlex=\"5%\"></div>\n  <div fxLayout=\"row\" fxFlex=\"100%\" >\n    <div fxFlex.xs=\"0%\" fxFlex.sm=\"0%\" fxFlex.md=\"2%\" fxFlex.lg=\"2%\" fxFlex.xl=\"2%\"></div>\n          \n    <div fxFlex.xs=\"10%\" fxFlex.sm=\"5%\" fxFlex.md=\"5%\" fxFlex.lg=\"5%\" fxFlex.xl=\"5%\" class=\"example-sidenav-content\">\n      <mat-icon (click)=\"drawer.toggle()\"ngStyle.xs=\"font-size:25px\"ngStyle.sm=\"font-size:25px\"\n      ngStyle.md=\"font-size:25px\" ngStyle.lg=\"font-size:30px\" ngStyle.xl=\"font-size:50px\" class=\"button\" \n      matTooltip=\"main menu\">menu</mat-icon>\n    </div>\n\n    <div fxHide.xs=true fxFlex.sm=\"25%\" fxFlex.md=\"20%\" fxFlex.lg=\"20%\" fxFlex.xl=\"20%\">\n      <div *ngIf=!labelShow ngStyle.sm=\"font-size:19px\" ngStyle.md=\"font-size:20px\" ngStyle.lg=\"font-size:23px\" \n      ngStyle.xl=\"font-size:40px;max-width:300px\" class=\"toolbar\">fundooNotes</div>\n      <div *ngIf=labelShow ngStyle.sm=\"font-size:15px\" ngStyle.md=\"font-size:15px\" ngStyle.lg=\"font-size:25px\" \n      ngStyle.xl=\"font-size:25px\" class=\"toolbar\">{{labelValue}}</div>\n    </div>\n\n    <div fxFlex.xs=\"20%\" fxHide.sm=true fxHide.md=true fxHide.lg=true fxHide.xl=true>\n      <div *ngIf=!labelShow ngStyle.xs=\"font-size:20px\" class=\"toolbar\">Note</div>\n      <div *ngIf=labelShow ngStyle.xs=\"font-size:20px\" class=\"toolbar\">{{labelValue}}</div>\n    </div>\n\n    <div *ngIf=!showSearchBar fxFlex.xs=40% fxFlex.sm=\"50%\" fxFlex.md=\"50%\" fxFlex.lg=\"55%\" fxFlex.xl=\"56%\">\n      <mat-icon *ngIf=!viewHide ngStyle.xl=\"font-size:50px\" class=\"searchbutton\" matTooltip=\"search\" (click)=\"showSearchBar=true\">\n      search</mat-icon>\n      <input *ngIf=!viewHide type=\"text\" [(ngModel)]=\"searchValue\" class=\"search\" (click)=\"search()\" (keyup)=newMessage() \n      placeholder=\"Search..\" ngStyle.md=\"font-size:13px\" ngStyle.lg=\"font-size:16px\" \n      ngStyle.sm=\"font-style:10px;margin-top:2px;\" \n      fxHide.xs=true ngStyle.xl=\"font-size:30px\">\n    </div>\n    <div *ngIf=showSearchBar fxFlex.xs=\"40%\" fxHide.sm=true fxHide.md=true fxHide.lg=true fxHide.xl=true>\n      <input type=\"text\" [(ngModel)]=\"searchValue\" class=\"search2\" (click)=\"search()\" (keyup)=newMessage() \n      placeholder=\"Search..\" (keydown.enter)=\"hideSearch()\">\n    </div>\n    \n\n    <div fxFlex.xs=\"10%\" fxFlex.sm=\"5%\" fxFlex.md=\"5%\" fxFlex.lg=\"5%\" fxFlex.xl=\"5%\">\n      <mat-icon class=\"button\" ngStyle.xs=\"font-size:25px\" ngStyle.sm=\"font-size:25px\"\n      ngStyle.md=\"font-size:25px\" ngStyle.lg=\"font-size:30px\" ngStyle.xl=\"font-size:50px\" \n      matTooltip=\"cart\" (click)=\"cardPayment()\">shopping_cart</mat-icon>\n    </div>\n            \n    <div fxHide.xs=true fxFlex.sm=\"5%\" fxFlex.md=\"5%\" fxFlex.lg=\"5%\" fxFlex.xl=\"5%\">\n      <mat-icon *ngIf=\"gridView && !viewHide\" class=\"button\"  ngStyle.md=\"font-size:25px\" \n      ngStyle.lg=\"font-size:30px\" ngStyle.xl=\"font-size:50px\" (click)=view() \n      matTooltip=\"list view\">view_stream</mat-icon>\n      <mat-icon *ngIf=\"!gridView && !viewHide\"class=\"button\" ngStyle.md=\"font-size:25px\" \n      ngStyle.lg=\"font-size:30px\" ngStyle.xl=\"font-size:50px\" (click)=view() \n      matTooltip=\"grid view\">view_module</mat-icon>\n    </div>\n\n    <div fxFlex.xs=\"10%\" fxFlex.sm=\"5%\" fxFlex.md=\"5%\" fxFlex.lg=\"5%\" fxFlex.xl=\"5%\">\n      <div [ngStyle]=\"{'background-image':'url(' +img+ ')','background-size':'cover','width':'40px','height':'40px'}\" \n      class=img (click)=\"account()\" ngStyle.xl=\"width:60px;height:60px\"  ngStyle.xs=\"width:30px;height:30px\"></div>\n    </div>\n\n    <div fxFlex.xs=\"0%\" fxFlex.sm=\"0%\" fxFlex.md=\"2%\" fxFlex.lg=\"2%\" fxFlex.xl=\"2%\"></div>\n  </div>\n  <div fxFlex=\"5%\"></div>\n  </div>\n  </mat-toolbar-row>\n</div>\n<!-- ******************************navbar end******************************** -->\n\n  \n<!-- ****************************profile start****************************** -->\n<mat-card class=\"account\" *ngIf=\"signoutCard\">\n  <mat-card-header>\n    <div mat-card-avatar [ngStyle]=\"{'background-image':'url(' +img+ ')','background-size':'cover',\n    'width':'60px','height':'60px','margin-bottom':'10px'}\" class=\"img\"\n   (click)=image.click()></div>      \n    <mat-card-title>{{firstName}} {{lastName}}</mat-card-title>\n    <mat-card-subtitle>{{email}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider ></mat-divider>\n  <input type=file class=\"fileSelect\" (change)=profileImage($event) #image>\n  <div><button  class=\"signout\" (click)=\"logout()\">Sign out</button></div>\n</mat-card>\n<!-- ****************************profile end*********************************** -->\n\n\n<!-- *****************************menu start************************************* -->\n<mat-drawer-container class=\"example-container\"ngStyle.xs=\"height:93%\"ngStyle.sm=\"height:95%\"\nngStyle.md=\"height:95%\" ngStyle.lg=\"height:90%\" ngStyle.lg=\"height:90%\">\n  <mat-drawer #drawer class=\"example-sidenav\" [mode]=\"width > 960?'side':'over'\" closed>\n    <div class=\"side_icon\"(click)=\"homeClick()\" [ngClass]=\"home? 'selected' : 'side_icon'\">\n      <img class=margin_left20 src=\"../../../assets/img/notes.svg\">\n      <small class=\"name\">Note</small></div>\n    <div class=\"side_icon\" (click)=\"reminderClick()\" \n    [ngClass]=\"reminder? 'selected' : 'side_icon'\">\n      <img class=margin_left20 src=\"../../../assets/img/reminder.svg\"><small class=\"name\">Reminder</small></div>\n    <mat-divider></mat-divider>    \n    \n      <div fxLayout=\"row\"  class=\"edit\">\n        <div fxFlex=10%></div>\n        <div fxFlex=40% class=\"edit\"><small>Labels</small></div>\n        <div fxFlex=40%><button mat-button (click)=createLabel()><small>EDIT</small></button></div>\n      </div>\n\n    <div *ngFor=\"let data of labelList\" (click)=\"labelClick(data)\" \n    [ngClass]=\"data==labelclick && labelShowing? 'selected' : 'side_icon'\" fxLayout=row class=\"side_icon\">\n        <div fxFlex=\"10%\"></div>\n        <div fxFlex=\"20%\"><mat-icon class=label>label</mat-icon></div>\n        <div fxFlex=\"60%\" class=label >{{data}}</div>\n    </div>\n\n    <div><button mat-button class=side_icon (click)=createLabel()><mat-icon>add</mat-icon> \n      <span class=\"plus\">Create new label</span></button></div>\n      <mat-divider></mat-divider>\n\n    <div class=side_icon (click)=\"searchValue=null;archiveClick()\"\n    [ngClass]=\"archive? 'selected' : 'side_icon'\">\n      <img class=margin_left20 src=\"../../../assets/img/archive.svg\"><small class=\"name\">Archive</small></div>\n    <div class=side_icon (click)=\"searchValue=null;trashClick()\"\n    [ngClass]=\"trash? 'selected' : 'side_icon'\">\n      <img class=margin_left20 src=\"../../../assets/img/trash.svg\"><small class=\"name\">Trash</small></div>\n      \n  </mat-drawer>\n  <router-outlet></router-outlet>\n</mat-drawer-container>\n<!-- ********************************menu end************************************* -->"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #fb0;\n  width: 100%;\n  height: fixed; }\n\n.search {\n  padding: 2% 4% 2% 9%;\n  width: 80%;\n  background-color: #f0b000;\n  border: none;\n  margin: -1% -3% -1% -3%;\n  border-radius: 5px; }\n\n@media only screen and (min-width: 970px) and (max-width: 1170px) {\n  .search {\n    padding: 2% 4% 2% 9%;\n    width: 80%;\n    background-color: #f0b000;\n    border: none;\n    margin: 0% -3% -3% -3%;\n    border-radius: 5px; } }\n\n@media only screen and (min-width: 600px) and (max-width: 780px) {\n  .search {\n    padding: 3% 4% 2% 9%;\n    width: 80%;\n    background-color: #f0b000;\n    border: none;\n    margin: 0% -3% -3% 0%;\n    border-radius: 5px; } }\n\n.search2 {\n  width: 150%;\n  border: none;\n  border-radius: 5px;\n  padding: 10% 0% 5% 0%;\n  margin: 0% 0% 0% -50%; }\n\n.searchbutton {\n  background-color: transparent;\n  cursor: pointer;\n  position: absolute;\n  opacity: 0.7;\n  margin: 6px 0px 0px 0px; }\n\ninput:focus {\n  background-color: #ffffff; }\n\n.button {\n  border: none;\n  cursor: pointer;\n  margin: 0% 0% 0% 1%;\n  padding: 10% 20% 15% 10%;\n  opacity: 0.7; }\n\n.button:hover {\n  background-color: #f0b000;\n  border-radius: 50%;\n  padding: 10% 20% 15% 10%; }\n\n.example-container {\n  width: 100%;\n  background-color: #e8e8e8;\n  overflow-x: hidden; }\n\n.example-sidenav {\n  background-color: #e8e8e8;\n  width: 260px;\n  height: fixed; }\n\n.selected {\n  background-color: #888785;\n  border-radius: 0px 20px 20px 0px; }\n\n.plus {\n  margin: 0% 0% 0% 10%;\n  opacity: 0.8; }\n\n.name {\n  margin: 0% 0% 0% 20%;\n  color: black; }\n\n.side_icon {\n  padding: 2% 2% 2% 2%;\n  width: 90%;\n  cursor: pointer;\n  margin: 10px 0px 10px 0px;\n  opacity: 0.8;\n  border-radius: 0px 20px 20px 0px; }\n\n.side_icon:hover, .side_label:hover {\n  background-color: #bbb8b8; }\n\n.account {\n  margin: 0% 0% -100% 0%;\n  width: 250px;\n  float: right;\n  z-index: 10; }\n\n.signout {\n  padding: 3% 3% 3% 3%;\n  border: 1px solid #c0bebe;\n  background-color: transparent;\n  float: right;\n  margin: 5px 0px 0px 0px; }\n\n.toolbar {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  margin: 3% 0% 0% 0%;\n  max-width: 150px; }\n\n.label {\n  font-weight: 500;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important; }\n\n.labelCreate {\n  width: 95%; }\n\n.fileSelect {\n  display: none; }\n\n.img {\n  border-radius: 50%;\n  background-color: cyan; }\n\n.edit {\n  margin: 10px 0px 0px 0px; }\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_label_create_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-label/create-label.component */ "./src/app/component/create-label/create-label.component.ts");
/* harmony import */ var _image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-crop/image-crop.component */ "./src/app/component/image-crop/image-crop.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> navbar.component.ts
 *
 *  Purpose         : To display navbar
 *
 *  @file           : navbar.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(NavbarServiceUser, NavbarServiceNotes, router, dialog, data) {
        this.NavbarServiceUser = NavbarServiceUser;
        this.NavbarServiceNotes = NavbarServiceNotes;
        this.router = router;
        this.dialog = dialog;
        this.data = data;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.label = [];
        this.signoutCard = false;
        this.firstName = localStorage.getItem("fundooUserFirstname");
        this.lastName = localStorage.getItem("fundooUserLastname");
        this.email = localStorage.getItem("fundooUserEmail");
        this.image = localStorage.getItem("fundooUserImage");
        this.labelNotesList = [];
        this.labelList = [];
        this.selectedFile = null;
        this.gridView = true;
        this.labelShow = false;
        this.showSearchBar = false;
        this.labelValue = '';
        this.labelclick = '';
        this.reminder = false;
        this.archive = false;
        this.trash = false;
        this.home = false;
        this.labelShowing = false;
        this.viewHide = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLabel();
        this.data.currentMessageViewHide.subscribe(function (message) { return _this.viewHide = message; });
        this.data.currentMessageSearch.subscribe(function (message) { return _this.message = message; });
        this.data.currentMessageLabel.subscribe(function (message) {
            _this.message = message;
            if (_this.message != "default") {
                _this.router.navigateByUrl('/label/' + _this.message);
                _this.toolbarName(_this.message);
            }
        });
        this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].Url + this.image;
        this.isLargeScreen();
        this.routeCheck();
    };
    NavbarComponent.prototype.routeCheck = function () {
        var temp = this.router.url.split("/").pop();
        var temp2 = this.router.url.split("/");
        if (temp == 'home') {
            this.homeClick();
        }
        else if (temp == 'reminder') {
            this.viewHide = false;
            this.reminderClick();
        }
        else if (temp == 'archive') {
            this.viewHide = false;
            this.archiveClick();
        }
        else if (temp == 'trash') {
            this.viewHide = false;
            this.trashClick();
        }
        else if (temp == 'search') {
            this.viewHide = false;
            this.homeClick();
        }
        else if (temp == 'shoppingCart') {
            this.viewHide = true;
            this.router.navigateByUrl('/shoppingCart');
        }
        else if (temp2[1] == 'QuestionAnswer') {
            this.labelShowing = false;
            this.viewHide = true;
        }
        else {
            this.labelClick(temp);
            this.viewHide = false;
        }
    };
    NavbarComponent.prototype.hideSearch = function () {
        this.showSearchBar = false;
        this.data.changeMessageSearch('');
    };
    NavbarComponent.prototype.view = function () {
        this.data.changeView(this.gridView);
        this.gridView = !this.gridView;
    };
    NavbarComponent.prototype.search = function () {
        this.router.navigateByUrl('/search');
    };
    NavbarComponent.prototype.newMessage = function () {
        this.data.changeMessageSearch(this.searchValue);
    };
    /**
    *
    * @description displaying the profile
    */
    NavbarComponent.prototype.account = function () {
        this.signoutCard = !(this.signoutCard);
    };
    NavbarComponent.prototype.cardPayment = function () {
        this.router.navigateByUrl('/shoppingCart');
        this.viewHide = false;
    };
    /**
    *
    * @description for logging out from account
    */
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.NavbarServiceUser.userLogout()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            localStorage.removeItem("fundooUserToken");
            localStorage.removeItem("fundooUserId");
            localStorage.removeItem("fundooUserEmail");
            localStorage.removeItem("fundooUserFirstname");
            localStorage.removeItem("fundooUserLastname");
            localStorage.removeItem("fundooUserImage");
            _this.router.navigateByUrl('/card');
        }, function (error) {
        });
    };
    NavbarComponent.prototype.createLabel = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_create_label_create_label_component__WEBPACK_IMPORTED_MODULE_2__["CreateLabelComponent"], {
            width: '300px'
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe(function (result) {
            _this.showLabel();
        });
    };
    NavbarComponent.prototype.showLabel = function () {
        var _this = this;
        this.NavbarServiceNotes.showNoteLabels()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.label = response["data"].details;
            _this.labelList = [];
            for (var i = 0; i < _this.label.length; i++) {
                _this.labelList.push(_this.label[i].label);
            }
            _this.labelList.sort();
        }, function (error) {
        });
    };
    NavbarComponent.prototype.profileImage = function (event) {
        var _this = this;
        var dialogRef = this.dialog.open(_image_crop_image_crop_component__WEBPACK_IMPORTED_MODULE_3__["ImageCropComponent"], {
            width: '400px',
            data: event
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe(function (result) {
            _this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].Url + localStorage.getItem("fundooUserImage");
        });
    };
    NavbarComponent.prototype.isLargeScreen = function () {
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    NavbarComponent.prototype.toolbarName = function (name) {
        this.labelShow = true;
        this.labelValue = name;
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    NavbarComponent.prototype.homeClick = function () {
        this.viewHide = false;
        this.home = true;
        this.labelShowing = false;
        this.reminder = this.archive = this.trash = this.labelShowing = false;
        this.labelShow = false;
        this.router.navigateByUrl('/home');
    };
    NavbarComponent.prototype.reminderClick = function () {
        this.viewHide = false;
        this.router.navigateByUrl('/reminder');
        this.toolbarName('reminder');
        this.reminder = true;
        this.home = this.archive = this.trash = this.labelShowing = false;
    };
    NavbarComponent.prototype.archiveClick = function () {
        this.viewHide = false;
        this.toolbarName('archive');
        this.archive = true;
        this.reminder = this.home = this.trash = this.labelShowing = false;
        this.router.navigateByUrl('/archive');
    };
    NavbarComponent.prototype.trashClick = function () {
        this.viewHide = false;
        this.toolbarName('trash');
        this.trash = true;
        this.reminder = this.archive = this.home = this.labelShowing = false;
        this.router.navigateByUrl('/trash');
    };
    NavbarComponent.prototype.labelClick = function (label) {
        this.viewHide = false;
        this.labelShowing = true;
        this.labelclick = label;
        this.home = this.reminder = this.archive = this.trash = false;
        this.router.navigateByUrl('/label/' + label);
        this.toolbarName(label);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_7__["NotesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/notes-add/notes-add.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/notes-add/notes-add.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ****************************notecard start****************************** -->\n<div fxLayoutAlign=\"center\" *ngIf=\"noteCard && !collaboratorCard\" >\n  <mat-card class=\"card\" (click)=\"noteCardOpen()\" fxFlex.xl=\"700px\" fxFlex.lg=\"600px\" fxFlex.md=\"500px\" \n  fxFlex.sm=\"500px\" fxFlex.xs=\"95%\">\n    <span>Take a note...</span>\n    <!-- <mat-icon class=\"icon\">edit</mat-icon> -->\n    <mat-icon class=\"icon\">panorama</mat-icon>\n    <mat-icon class=\"icon\" (click)=\"list()\">view_list</mat-icon>\n  </mat-card>\n</div>\n<!-- ****************************notecard end****************************** -->\n\n<!-- ****************************add notecard start****************************** -->\n<div fxLayoutAlign=\"center\" *ngIf=\"!noteCard && !collaboratorCard\">\n  <mat-card class=\"card\" [ngStyle]=\"{'background-color':cardColor}\" fxFlex.xl=\"600px\" fxFlex.lg=\"600px\" \n  fxFlex.md=\"500px\" fxFlex.sm=\"500px\" fxFlex.xs=\"95%\">\n    <div fxLayout=\"row\">\n      <div fxFlex=\"90%\" data-text=\"Title\" contenteditable=\"true\" class=\"textarea\" [innerHTML]=titleValue\n      #title></div>\n      <app-pin class=pin (onChange)=\"onPinChange($event)\"></app-pin>\n    </div>\n\n    <div *ngIf=!listNote data-text=\"Take a Note...\" contenteditable=\"true\" [innerHTML]=descriptionValue \n    class=\"textarea\" #description></div>\n    <!-- ****************************checkbox end****************************** -->    \n    <div *ngIf=listNote>\n      <div *ngFor=\"let data of listArray\" fxLayout=row class=listInput>\n        <div fxFlex=5%><mat-checkbox (click)=checked(data)></mat-checkbox></div>\n        <input fxFlex=85% type=text name=input [(ngModel)]=data.itemName class=input>\n        <div fxFlex=5%><mat-icon class=clear (click)=removeList(data)>clear</mat-icon></div>\n      </div>\n      <mat-divider></mat-divider>\n      <div fxLayout=row class=listInput>\n        <div fxFlex=5%><mat-icon class=clear>add</mat-icon></div>\n        <input fxFlex=85% placeholder=\"List item\" #item=ngModel class=input [(ngModel)]=\"model.item\"\n        (keydown.enter)=\"listitem()\">\n        <div fxFlex=5%><mat-icon class=clear (click)=clear()>clear</mat-icon></div>\n      </div>\n      <mat-divider></mat-divider>\n    </div>\n    <!-- ****************************checkbox end****************************** -->    \n\n    <!-- ****************************reminder start****************************** -->    \n   \n      <mat-chip-list >\n        <div *ngFor=\"let cardData of reminder\">\n          <mat-chip class=label *ngIf=\"checkDate(cardData)==2 || checkDate(cardData)==3\"(click)=showReminder(data.id)>\n            <mat-icon>access_time</mat-icon>\n            <div *ngIf=\"checkDate(cardData)==2\">{{date}}</div>\n            <div *ngIf=\"checkDate(cardData)==3\">{{cardData| date:'medium'}}</div>\n\n            <mat-icon class=\"cancelIcon\" (click)=cancelReminder()>cancel</mat-icon>\n          </mat-chip>\n        </div>\n      </mat-chip-list>\n    <!-- ****************************reminder end****************************** -->    \n\n    <!-- ****************************label start****************************** -->    \n      <mat-chip-list>\n        <span *ngFor=\"let cardData of labels\" >\n          <mat-chip class=\"chip\"><span class=labelName>\n            {{cardData.label}}</span><mat-icon class=\"cancelIcon\" (click)=cancelLabel(cardData)>cancel</mat-icon>\n          </mat-chip>\n        </span>\n      </mat-chip-list>\n    <!-- ****************************label end****************************** -->  \n\n    <!-- ************************collaborators start**************************** -->    \n    <div class=margin_top5>\n      <span *ngFor=\"let list of collaborators\" >\n        <button mat-mini-fab>{{list.firstName[0].toUpperCase()}}</button>\n      </span>\n    </div>\n    <!-- *************************collaborators end****************************** -->  \n\n    <!-- ****************************icon start****************************** -->    \n    <div class=\"iconsList\">\n      <app-remind-me class=\"iconButton\" (onChanges)=addRemoveReminder($event)></app-remind-me>\n      <app-add-collaborator class=\"iconButton\" (onAddingCol)=\"collaboratorCardOpen()\"></app-add-collaborator>\n      <app-change-color class=\"iconButton\" (onChangeColor)=\"onColorChange($event)\"></app-change-color>\n      <app-add-image class=\"iconButton\"></app-add-image>\n      <app-notes-archive class=\"iconButton\" (onArchiveEntry)=\"onArchive($event)\"></app-notes-archive>\n      <app-more class=\"iconButton\" (onChanges)=\"addRemoveLabel($event)\" (showCheckbox)=showCheckBox($event)></app-more>\n      <button mat-button class=\"pin\" (click)=\"close()\">close</button>\n    </div>\n    <!-- ****************************icon end****************************** -->    \n\n  </mat-card>\n</div>\n<!-- ****************************add notecard end****************************** -->\n\n<!-- ****************************collaborators notecard start****************************** -->\n\n<div fxLayoutAlign=\"center\" *ngIf=collaboratorCard>\n<mat-card class=\"card\" fxFlex.xl=\"700px\" fxFlex.lg=\"600px\" fxFlex.md=\"500px\" fxFlex.sm=\"500px\" fxFlex.xs=\"95%\">\n  <div>Collaborators</div>\n  <mat-divider></mat-divider>\n  <div>\n      <mat-card-header class=margin_top5>\n          <div mat-card-avatar [ngStyle]=\"{'background-image':'url(' +img+ ')','background-size':'cover',\n          'height':'40px','width':'40px','border-radius':'50%'}\" ></div>\n          <mat-card-title>{{firstName}}  {{lastName}} (Owner)</mat-card-title>\n          <mat-card-subtitle>{{email}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-header *ngFor=\"let list of collaborators\">\n          <div mat-card-avatar [ngStyle]=\"{'background-color':'rgba(0, 0, 255,0.3)','background-size':'cover',\n          'height':'40px','width':'40px','border':'1px solid blue','border-radius':'50%'}\">\n              <div fxLayoutAlign=center class=nameIcon>{{list.firstName[0].toUpperCase()}}</div></div>\n              <div fxFlex=80>\n                  <mat-card-title>{{list.firstName}}  {{list.lastName}}</mat-card-title>\n                  <mat-card-subtitle>{{list.email}}</mat-card-subtitle>\n              </div>\n              <div fxFlex=10>\n                  <mat-icon (click)=removeCol(list) class=clear>clear</mat-icon>\n              </div>\n      </mat-card-header>\n      <mat-card-header>\n          <div mat-card-avatar class=\"addPerson\"><mat-icon class=icon2>person_add</mat-icon></div>\n          <input placeholder=\"person or email to share with\" [matMenuTriggerFor]=\"menu\"\n          [(ngModel)]=\"searchValue\" (keyup)=\"searchUser()\">\n      </mat-card-header>\n  </div>\n  <mat-card-footer class=save>\n      <div fxLayoutAlign=\"end\">\n          <button mat-button (click)=save()>save</button>\n      </div>\n  </mat-card-footer>\n   </mat-card>\n</div>\n   <mat-menu #menu=\"matMenu\">\n      <div *ngFor=\"let data of userList\">\n      <button class=name (click)=\"addCol(data)\">\n          {{data.firstName}} {{data.lastName}} [{{data.email}}]\n      </button>\n      </div>\n  </mat-menu>\n<!-- ****************************collaborators notecard end****************************** -->\n"

/***/ }),

/***/ "./src/app/component/notes-add/notes-add.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/notes-add/notes-add.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 15px;\n  border-radius: 7px; }\n\n.icon {\n  float: right;\n  font-size: 30px;\n  padding-left: 5%;\n  cursor: pointer;\n  opacity: 0.7; }\n\n.addPerson {\n  border: 1px solid black;\n  border-radius: 50%;\n  opacity: 0.4; }\n\n.icon2 {\n  padding: 6px;\n  font-size: 25px; }\n\n.listIcon {\n  font-size: 35px; }\n\n.iconsList {\n  padding-top: 3%; }\n\n.iconButton {\n  opacity: 0.7;\n  margin: 0% 3% -1% 3%;\n  cursor: pointer; }\n\n.iconButton:hover {\n  opacity: 0.9; }\n\n.textarea {\n  width: 90%;\n  outline: none;\n  margin: 2%; }\n\n.textarea:empty:before {\n  content: attr(data-text);\n  opacity: 0.5;\n  font-size: 14px;\n  width: 60%;\n  height: 10%;\n  margin-top: 2px; }\n\n.input {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  width: 100%; }\n\n.nameIcon {\n  font-size: 22px;\n  color: #0606f8;\n  padding: 7px 0px 0px 0px;\n  padding: 7px 0px 0px 0px; }\n\n.pin {\n  float: right;\n  cursor: pointer; }\n\n.listInput {\n  background-color: transparent; }\n\n.chip {\n  background-color: rgbs(119, 119, 119, 0.2);\n  max-width: 150px; }\n\n.labelName {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important; }\n\n.clear {\n  cursor: pointer; }\n\ninput {\n  border: none;\n  outline: none;\n  width: 100%; }\n\n.save {\n  margin-top: 10px;\n  background-color: #e9e9e9; }\n\n.name {\n  padding: 5px;\n  margin-top: 2px;\n  border: none;\n  background-color: transparent;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/component/notes-add/notes-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/notes-add/notes-add.component.ts ***!
  \************************************************************/
/*! exports provided: NotesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesAddComponent", function() { return NotesAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> notes-add.component.ts
 *
 *  Purpose         : To adding a new note to list
 *
 *  @file           : notes-add.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/






var NotesAddComponent = /** @class */ (function () {
    function NotesAddComponent(NoteAddService, noteAddService) {
        this.NoteAddService = NoteAddService;
        this.noteAddService = noteAddService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onNewEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.noteCard = true;
        this.isPin = false;
        this.cardColor = "#FFFFFF";
        this.isAchive = false;
        this.labels = [];
        this.reminder = [];
        this.collaborators = [];
        this.listNote = false;
        this.listArray = [];
        this.current = new Date();
        this.model = {
            "item": ""
        };
        this.userList = [];
        this.collaboratorCard = false;
        this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].Url + localStorage.getItem("fundooUserImage");
        this.firstName = localStorage.getItem("fundooUserFirstname");
        this.lastName = localStorage.getItem("fundooUserLastname");
        this.email = localStorage.getItem("fundooUserEmail");
        this.titleValue = '';
        this.descriptionValue = '';
    }
    NotesAddComponent.prototype.ngOnInit = function () {
    };
    NotesAddComponent.prototype.list = function () {
        this.listNote = true;
    };
    /**
     *
     * @description adding a checklist
     */
    NotesAddComponent.prototype.listitem = function () {
        if (this.model.item == '')
            return false;
        this.listArray.push({ "itemName": this.model.item, "status": "open" });
        this.model.item = "";
    };
    /**
     *
     * @description erase the text
     */
    NotesAddComponent.prototype.clear = function () {
        this.model.item = "";
    };
    NotesAddComponent.prototype.checked = function (value) {
        for (var i = 0; i < this.listArray.length; i++) {
            if (value == this.listArray[i]) {
                if (value.status == "open") {
                    value.status = "close";
                }
                else {
                    value.status = "open";
                }
            }
        }
    };
    /**
     *
     * @description remove a checklist while adding
     */
    NotesAddComponent.prototype.removeList = function (value) {
        for (var i = 0; i < this.listArray.length; i++) {
            if (value == this.listArray[i]) {
                this.listArray.splice(i, 1);
            }
        }
    };
    /**
     *
     * @description adding a new note
     */
    NotesAddComponent.prototype.close = function () {
        var _this = this;
        this.noteCard = !(this.noteCard);
        this.titleValue = this.title.nativeElement.innerHTML;
        if (this.titleValue == "") {
            this.listArray = [];
            this.listNote = false;
            return false;
        }
        var labelId = [];
        for (var i = 0; i < this.labels.length; i++) {
            labelId.push(this.labels[i].id);
        }
        if (this.listNote == false) {
            this.descriptionValue = this.description.nativeElement.innerHTML;
            var body = {
                "title": this.titleValue,
                "description": this.descriptionValue,
                "isPined": this.isPin,
                "color": this.cardColor,
                "isArchived": this.isAchive,
                "labelIdList": JSON.stringify(labelId),
                "reminder": this.reminder,
                "collaberators": JSON.stringify(this.collaborators)
            };
            this.NoteAddService.addNote(this.getFormUrlEncoded(body))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onNewEntry.emit({});
            }, function (error) {
            });
        }
        else {
            var checkList1 = this.listArray;
            var bodyList = {
                "title": this.titleValue,
                "checklist": JSON.stringify(checkList1),
                "isPined": this.isPin,
                "color": this.cardColor,
                "isArchived": this.isAchive,
                "labelIdList": JSON.stringify(labelId),
                "reminder": this.reminder,
                "collaberators": JSON.stringify(this.collaborators)
            };
            this.NoteAddService.addNote(this.getFormUrlEncoded(bodyList))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onNewEntry.emit({});
            }, function (error) {
            });
            this.listArray = [];
            this.listNote = false;
        }
        this.collaborators = [];
        this.titleValue = '';
        this.descriptionValue = '';
    };
    /**
     *
     * @description opening the notecard for adding
     */
    NotesAddComponent.prototype.noteCardOpen = function () {
        this.noteCard = !(this.noteCard);
        this.isPin = false;
        this.cardColor = "#FFFFFF";
        this.labels = [];
        this.reminder = [];
    };
    /**
     *
     * @description giving color to new note
     */
    NotesAddComponent.prototype.onColorChange = function (event) {
        this.cardColor = event.color;
    };
    /**
     *
     * @description archive the new note
     */
    NotesAddComponent.prototype.onArchive = function (event) {
        if (event) {
            this.isAchive = true;
            this.close();
        }
    };
    /**
     *
     * @description adding or removing of label
     */
    NotesAddComponent.prototype.addRemoveLabel = function (event) {
        this.labels = [];
        this.labels = event;
    };
    /**
     *
     * @description adding or removing of reminder
     */
    NotesAddComponent.prototype.addRemoveReminder = function (value) {
        this.reminder = [];
        this.reminder.push(value);
        this.date = new Date(value).getUTCHours();
        var saved = new Date(value).getTime();
        var current = this.current.getTime();
        var year = new Date(value).getFullYear();
        var month = new Date(value).getMonth();
        var date = new Date(value).getDate();
        var hr;
        var min;
        var ampm = 'AM';
        if (saved < current) {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date + 1 == this.current.getDate())) {
                hr = new Date(value).getHours();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "yesterday " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 4;
            }
            return 1;
        }
        else {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate())) {
                hr = new Date(value).getHours();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "today " + hr + ":" + min + " " + ampm;
            }
            else if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate() + 1)) {
                hr = new Date(value).getHours();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "tomorrow " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 3;
            }
            return 2;
        }
    };
    /**
     *
     * @description pin change on note
     */
    NotesAddComponent.prototype.onPinChange = function (event) {
        this.isPin = event;
    };
    NotesAddComponent.prototype.showCheckBox = function (event) {
        this.list();
    };
    NotesAddComponent.prototype.cancelReminder = function () {
        this.reminder = [];
    };
    NotesAddComponent.prototype.cancelLabel = function (data) {
        for (var i = 0; i < this.labels.length; i++) {
            if (this.labels[i] == data) {
                this.labels.splice(i, 1);
            }
        }
    };
    NotesAddComponent.prototype.checkDate = function (value) {
        this.date = new Date(value).getUTCHours();
        var saved = new Date(value).getTime();
        var current = this.current.getTime();
        var year = new Date(value).getFullYear();
        var month = new Date(value).getMonth();
        var date = new Date(value).getDate();
        var hr;
        var min;
        var ampm = 'AM';
        if (saved < current) {
            return false;
        }
        else {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "today " + hr + ":" + min + " " + ampm;
            }
            else if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate() + 1)) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "tomorrow " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 3;
            }
            return 2;
        }
    };
    NotesAddComponent.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    NotesAddComponent.prototype.searchUser = function () {
        var _this = this;
        var body = { 'searchWord': this.searchValue };
        this.noteAddService.searchUserList(body)
            .subscribe(function (response) {
            _this.userList = [];
            _this.userList = response['data'].details;
        }, function (error) {
        });
    };
    NotesAddComponent.prototype.addCol = function (value) {
        for (var m = 0; m < this.collaborators.length; m++) {
            if (value.email == this.collaborators[m]["email"])
                return;
        }
        this.collaborators.push(value);
    };
    NotesAddComponent.prototype.save = function () {
        this.collaboratorCard = false;
    };
    NotesAddComponent.prototype.removeCol = function (value) {
        for (var j = 0; j < this.collaborators.length; j++) {
            if (value.email == this.collaborators[j]["email"])
                this.collaborators.splice(j, 1);
        }
    };
    NotesAddComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    NotesAddComponent.prototype.collaboratorCardOpen = function () {
        this.titleValue = this.title.nativeElement.innerHTML;
        if (this.listNote == false)
            this.descriptionValue = this.description.nativeElement.innerHTML;
        this.collaboratorCard = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('title'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NotesAddComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('description'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NotesAddComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('listItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NotesAddComponent.prototype, "listItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotesAddComponent.prototype, "onNewEntry", void 0);
    NotesAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes-add',
            template: __webpack_require__(/*! ./notes-add.component.html */ "./src/app/component/notes-add/notes-add.component.html"),
            styles: [__webpack_require__(/*! ./notes-add.component.scss */ "./src/app/component/notes-add/notes-add.component.scss")],
            outputs: ['onNewEntry']
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], NotesAddComponent);
    return NotesAddComponent;
}());



/***/ }),

/***/ "./src/app/component/notes-archive/notes-archive.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/notes-archive/notes-archive.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abbr title=\"Archive\" *ngIf=\"(!isArchive)\"><mat-icon (click)=\"archive()\">archive</mat-icon></abbr>\n<abbr title=\"Unarchive\" *ngIf=\"(isArchive)\"><mat-icon (click)=\"archive()\">unarchive</mat-icon></abbr>"

/***/ }),

/***/ "./src/app/component/notes-archive/notes-archive.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/notes-archive/notes-archive.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/notes-archive/notes-archive.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/notes-archive/notes-archive.component.ts ***!
  \********************************************************************/
/*! exports provided: NotesArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesArchiveComponent", function() { return NotesArchiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> notes-archive.component.ts
 *
 *  Purpose         : To archive the note
 *
 *  @file           : notes-archive.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/





var NotesArchiveComponent = /** @class */ (function () {
    function NotesArchiveComponent(noteArchiveService, snackBar) {
        this.noteArchiveService = noteArchiveService;
        this.snackBar = snackBar;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.onArchiveEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isArchive = false;
    }
    NotesArchiveComponent.prototype.ngOnInit = function () {
        if (this.card) {
            if (this.card.isArchived == true) {
                this.isArchive = true;
            }
        }
    };
    /**
    *
    * @description archive the particular note
    */
    NotesArchiveComponent.prototype.archive = function () {
        var _this = this;
        if (this.card) {
            var id = [];
            id.push(this.card.id);
            var string_1;
            var body = {
                "isArchived": !this.card.isArchived,
                "noteIdList": id
            };
            this.noteArchiveService.archiveNote(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onArchiveEntry.emit({});
                if (_this.card.isArchived == false)
                    string_1 = "Note Archived";
                else
                    string_1 = "Note Unarchived";
                _this.snackBar.open(string_1, "undo", {
                    duration: 2000,
                });
            }, function (error) {
            });
        }
        else {
            this.onArchiveEntry.emit({});
        }
    };
    NotesArchiveComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotesArchiveComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotesArchiveComponent.prototype, "onArchiveEntry", void 0);
    NotesArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes-archive',
            template: __webpack_require__(/*! ./notes-archive.component.html */ "./src/app/component/notes-archive/notes-archive.component.html"),
            styles: [__webpack_require__(/*! ./notes-archive.component.scss */ "./src/app/component/notes-archive/notes-archive.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], NotesArchiveComponent);
    return NotesArchiveComponent;
}());



/***/ }),

/***/ "./src/app/component/notes-list/notes-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/notes-list/notes-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center\" >\n  <div class=\"main\" fxLayoutAlign=left fxFlex.xl=\"70%\" fxFlex.lg=\"750px\" fxFlex.md=\"750px\" fxFlex.sm=\"500px\" \n  fxFlex.xs=\"100%\">\n  <div  class=\"pinOthers\" *ngIf=\"length!=0\">{{pin}}</div>\n\n    <!-- ****************************matcard start****************************** -->        \n    <mat-card *ngFor=\"let data of notes | searchNote: searchItem\" class=\"div\" [ngClass.xl]=\"view ? 'list' : 'grid'\" \n    [ngClass.lg]=\"view ? 'list' : 'grid'\" [ngClass.md]=\"view ? 'list' : 'grid'\" [ngClass.sm]=\"view ? 'list' : 'grid'\"\n    [ngClass.xs]=\"view ? 'list' : 'list'\" [ngStyle]=\"{'background-color':data.color}\">\n      <app-pin class=pin [card]=data (onChange)=\"entry($event)\"></app-pin>\n      <div (click)=\"openDialog(data)\">\n        <div class=title [innerHTML]=\"data.title\"></div>\n        <div class=description [innerHTML]=\"data.description\"></div>\n      </div>\n\n      <!-- ****************************checklist start****************************** -->        \n            \n        <div *ngFor=\"let list of data.noteCheckLists\" >\n          <div *ngIf=\"list.status=='open' && list.isDeleted==false\"class=checkBox fxLayout='row'>\n            <mat-checkbox (click)=check(list)></mat-checkbox>\n            <div>{{list.itemName}}</div>\n          </div>\n        </div>\n        <div *ngFor=\"let list of data.noteCheckLists\">\n          <div *ngIf=\"list.status=='close' && list.isDeleted==false\" class=checkBox fxLayout='row'>\n            <mat-checkbox class=delCheck  checked=true (click)=check(list)></mat-checkbox>\n            <del>{{list.itemName}}</del>\n          </div>\n        </div>\n      <!-- ****************************checklist end****************************** -->    \n\n      <!-- ****************************reminder start******************************** -->\n      <mat-chip-list class=paddingTop3>\n        <span *ngFor=\"let cardData of data.reminder\" >\n          <mat-chip class=dellabel *ngIf=\"checkDate(cardData)==1 || checkDate(cardData)==4\" \n          (click)=showReminder(data.id)>\n            <mat-icon>access_time</mat-icon>\n            <del  *ngIf=\"checkDate(cardData)==1\">{{date}}</del>\n            <del  *ngIf=\"checkDate(cardData)==4\">{{cardData| date:medium}}</del>\n            <mat-icon (click)=removeReminder(data.id) class=cancelIcon>cancel</mat-icon>\n          </mat-chip>\n          <mat-chip class=label *ngIf=\"checkDate(cardData)==2 || checkDate(cardData)==3\"(click)=showReminder(data.id)>\n            <mat-icon>access_time</mat-icon>\n            <div *ngIf=\"checkDate(cardData)==2\">{{date}}</div>\n            <div *ngIf=\"checkDate(cardData)==3\">{{cardData| date:'medium'}}</div>\n            <mat-icon (click)=removeReminder(data.id) class=cancelIcon>cancel</mat-icon>\n          </mat-chip>\n        </span>\n      <!-- ****************************reminder end******************************** -->\n\n      <!-- ****************************label start****************************** -->        \n        <span *ngFor=\"let cardData of data.noteLabels\">\n          <mat-chip  class=\"label\"*ngIf=\"cardData.isDeleted==false\" (click)=showLabel(cardData.label)>\n            <span class=\"chip\">{{cardData.label}}</span>\n            <mat-icon *ngIf=\"!data.isDeleted\" class=cancelIcon (click)=removeLabel(cardData.id,data.id)>cancel</mat-icon>\n          </mat-chip>\n        </span>\n      <!-- ******************************label end******************************** -->   \n      \n      <!-- **************************collaborators start************************* -->\n        <span *ngFor=\"let cardData of data.collaborators\" class=margin>\n          <button mat-mini-fab [ngStyle]=\"{'background-color':data.color}\">{{cardData.firstName[0].toUpperCase()}}</button>\n        </span>\n      </mat-chip-list>\n      <!-- ***************************collaborators end*************************** -->\n\n      <!-- ******************************icon start****************************** -->        \n      <div class=\"icon\">\n        <app-remind-me *ngIf=\"!data.isDeleted\" class=\"iconButton\"(onChanges)=\"entry($event)\"[card]=data></app-remind-me>\n        <app-add-collaborator *ngIf=\"!data.isDeleted\"class=\"iconButton\"(onChanges)=\"entry($event)\" [card]=data></app-add-collaborator>\n        <app-change-color *ngIf=\"!data.isDeleted\"class=\"iconButton\" [card]=data (onChangeColor)=\"entry($event)\"></app-change-color>\n        <app-add-image *ngIf=\"!data.isDeleted\"class=\"iconButton\"></app-add-image>\n        <app-notes-archive *ngIf=\"!data.isDeleted\"class=\"iconButton\" [card]=data (onArchiveEntry)=\"entry($event)\"></app-notes-archive>\n        <app-more class=\"iconButton\" [card]=data (onChanges)=\"entry($event)\"></app-more>\n        </div>\n      <!-- ****************************icon start****************************** --> \n      <div *ngIf=\"data.questionAndAnswerNotes.length!=0\" (click)=questionAnswer(data.id)>       \n      <mat-divider></mat-divider>\n        <div><small>Question Asked</small></div>\n        <div class=question [innerHTML]=data.questionAndAnswerNotes[0].message></div>\n      </div>\n    </mat-card>\n    <!-- ******************************matcard end******************************* -->   \n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/notes-list/notes-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/component/notes-list/notes-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 15px 0px 0px 0px; }\n\n.div {\n  margin: 5px;\n  border-radius: 5%;\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n  width: 100%; }\n\n.checkBox {\n  word-break: break-all;\n  margin: 0px 0px 10px 0px; }\n\n.margin {\n  margin: 2px 3px 2px 3px; }\n\n.title {\n  word-wrap: break-word;\n  font-weight: bold;\n  font-size: 18px;\n  max-width: 90%;\n  opacity: 0.6;\n  margin: 0px 0px 10px 0px; }\n\n.description {\n  opacity: 0.6;\n  font-size: 15px;\n  word-wrap: break-word;\n  margin: 0px 0px 10px 0px; }\n\n.icon {\n  visibility: hidden;\n  margin-top: 15px; }\n\n.iconButton {\n  opacity: 0.7;\n  cursor: pointer;\n  margin-right: 5%; }\n\n.iconButton:hover {\n  opacity: 1; }\n\n.div:hover .icon {\n  visibility: visible; }\n\n.label {\n  background-color: rgba(135, 167, 159, 0.465);\n  font-size: 10px;\n  max-width: 140px; }\n\n.dellabel {\n  background-color: rgba(135, 167, 159, 0.465);\n  font-size: 10px;\n  max-width: 140px;\n  color: rgba(0, 0, 0, 0.4); }\n\n.chip {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  background-color: transparent; }\n\n.delCheck {\n  color: rgba(0, 0, 0, 0.4); }\n\n.label .cancelIcon {\n  visibility: hidden; }\n\n.label:hover .cancelIcon {\n  visibility: visible; }\n\n.pin {\n  float: right;\n  cursor: pointer;\n  visibility: hidden; }\n\n.div:hover .pin {\n  visibility: visible; }\n\n@media screen and (max-width: 960px) {\n  .grid {\n    max-width: 190px; } }\n\n.question {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important; }\n\n.grid {\n  width: 190px; }\n\n.list {\n  width: 100%;\n  border-radius: 10px;\n  overflow-x: hidden; }\n\n.pinOthers {\n  font-size: 12px;\n  color: black;\n  width: 100%;\n  margin-top: 5px; }\n\n.rem {\n  margin-top: 15px; }\n"

/***/ }),

/***/ "./src/app/component/notes-list/notes-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/notes-list/notes-list.component.ts ***!
  \**************************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _card_display_card_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-display/card-display.component */ "./src/app/component/card-display/card-display.component.ts");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> notes-list.component.ts
 *
 *  Purpose         : To get the notes
 *
 *  @file           : notes-list.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/








var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(dialog, noteListService, data, router) {
        this.dialog = dialog;
        this.noteListService = noteListService;
        this.data = data;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.anyChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.current = new Date();
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessageView
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (message) {
            _this.view = message;
        });
    };
    NotesListComponent.prototype.questionAnswer = function (id) {
        this.data.hideView(true);
        this.router.navigateByUrl('/QuestionAnswer/' + id);
    };
    /**
     *
     * @description on any changes
     */
    NotesListComponent.prototype.entry = function (event) {
        if (event) {
            this.anyChanges.emit({});
        }
    };
    NotesListComponent.prototype.check = function (list) {
        if (list.status == "open") {
            list.status = "close";
        }
        else {
            list.status = "open";
        }
        var body = {
            "itemName": list.itemName,
            "status": list.status
        };
        this.noteListService.updateCheckList(list.notesId, list.id, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
        }, function (error) {
        });
    };
    /**
    *
    * @description opening the particular note
    */
    NotesListComponent.prototype.openDialog = function (noteData1) {
        var _this = this;
        var dialogRef = this.dialog.open(_card_display_card_display_component__WEBPACK_IMPORTED_MODULE_2__["CardDisplayComponent"], {
            width: '600px',
            maxHeight: '400px',
            maxWidth: 'auto',
            data: { noteData: noteData1 }
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (result) {
            _this.anyChanges.emit({});
        });
    };
    NotesListComponent.prototype.removeLabel = function (labelId, cardId) {
        var _this = this;
        this.noteListService.removeLabelFromNotes(cardId, labelId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.anyChanges.emit({});
        }, function (error) {
        });
    };
    NotesListComponent.prototype.removeReminder = function (cardId) {
        var _this = this;
        var id = [];
        id.push(cardId);
        var body = {
            "noteIdList": id
        };
        this.noteListService.removeReminder(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.anyChanges.emit({});
        }, function (error) {
        });
    };
    NotesListComponent.prototype.checkDate = function (value) {
        this.date = new Date(value).getUTCHours();
        var saved = new Date(value).getTime();
        var current = this.current.getTime();
        var year = new Date(value).getFullYear();
        var month = new Date(value).getMonth();
        var date = new Date(value).getDate();
        var hr;
        var min;
        var ampm = 'AM';
        if (saved < current) {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date + 1 == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "yesterday " + hr + ":" + min + " " + ampm;
            }
            else if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "today " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 4;
            }
            return 1;
        }
        else {
            if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate())) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "today " + hr + ":" + min + " " + ampm;
            }
            else if ((year == this.current.getFullYear()) && (month == this.current.getMonth()) && (date == this.current.getDate() + 1)) {
                hr = new Date(value).getHours();
                min = new Date(value).getMinutes();
                if (new Date(value).getHours() > 12) {
                    ampm = 'PM';
                    hr = new Date(value).getHours() - 12;
                }
                if (hr < 10) {
                    hr = '0' + hr;
                }
                if (new Date(value).getMinutes() < 10) {
                    min = '0' + new Date(value).getMinutes();
                }
                this.date = "tomorrow " + hr + ":" + min + " " + ampm;
            }
            else {
                this.date = value;
                return 3;
            }
            return 2;
        }
    };
    NotesListComponent.prototype.showLabel = function (data) {
        this.data.changeMessageLabel(data);
    };
    NotesListComponent.prototype.showReminder = function (data) {
        this.data.changeMessageReminder(data);
    };
    NotesListComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotesListComponent.prototype, "pin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotesListComponent.prototype, "length", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotesListComponent.prototype, "notes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NotesListComponent.prototype, "searchItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NotesListComponent.prototype, "anyChanges", void 0);
    NotesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./src/app/component/notes-list/notes-list.component.html"),
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./src/app/component/notes-list/notes-list.component.scss")],
            outputs: ['anyChanges']
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"], _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./src/app/component/notes/notes.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/notes/notes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notes-add (onNewEntry)=refresh($event)></app-notes-add>\n<app-notes-list *ngIf=\"spinnerValue==false\" [length]=pinedArray.length [pin]=\"'PINNED'\" [notes]=\"pinedArray\" \n(anyChanges)=\"refresh($event)\"></app-notes-list>\n<app-notes-list *ngIf=\"spinnerValue==false\" [length]=pinedArray.length [notes]=\"unpinedArray\" (anyChanges)=\"refresh($event)\" \n[pin]=\"'OTHERS'\"></app-notes-list>\n<app-loader *ngIf=\"spinnerValue==true\"></app-loader>"

/***/ }),

/***/ "./src/app/component/notes/notes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/notes/notes.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/notes/notes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/notes/notes.component.ts ***!
  \****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> notes.component.ts
 *
 *  Purpose         : To display the notes page
 *
 *  @file           : notes.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/




var NotesComponent = /** @class */ (function () {
    function NotesComponent(noteService) {
        this.noteService = noteService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notes = [];
        this.pinedArray = [];
        this.unpinedArray = [];
        this.spinnerValue = true;
    }
    NotesComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    /**
    *
    * @description refresh the page after any change in notelist
    */
    NotesComponent.prototype.refresh = function (event) {
        if (event) {
            this.getNotes();
        }
    };
    /**
    *
    * @description getting the note list
    */
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteService.getNoteList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.notes = response["data"].data;
            _this.pinedArray = [];
            _this.unpinedArray = [];
            for (var i = _this.notes.length; i > 0; i--) {
                if ((_this.notes[i - 1]["isDeleted"] == false) && (_this.notes[i - 1]["isArchived"] == false)) {
                    if (_this.notes[i - 1]["isPined"] == true) {
                        _this.pinedArray.push(_this.notes[i - 1]);
                    }
                    else {
                        _this.unpinedArray.push(_this.notes[i - 1]);
                    }
                }
            }
            _this.spinnerValue = false;
        }, function (error) {
        });
    };
    NotesComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/component/notes/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.scss */ "./src/app/component/notes/notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/component/pin/pin.component.html":
/*!**************************************************!*\
  !*** ./src/app/component/pin/pin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img *ngIf=!isPin (click)=pin() src=\"../../../assets/img/pin.svg\">\n<img *ngIf=isPin (click)=pin() src=\"../../../assets/img/pinblue.svg\">"

/***/ }),

/***/ "./src/app/component/pin/pin.component.scss":
/*!**************************************************!*\
  !*** ./src/app/component/pin/pin.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/pin/pin.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/pin/pin.component.ts ***!
  \************************************************/
/*! exports provided: PinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinComponent", function() { return PinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PinComponent = /** @class */ (function () {
    function PinComponent(pinService) {
        this.pinService = pinService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.isPin = false;
    }
    PinComponent.prototype.ngOnInit = function () {
        if (this.card)
            this.isPin = this.card.isPined;
    };
    PinComponent.prototype.pin = function () {
        var _this = this;
        this.isPin = !this.isPin;
        if (this.card) {
            var id = [];
            id.push(this.card.id);
            var body = {
                "isPined": this.isPin,
                "noteIdList": id
            };
            this.pinService.pinChange(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onChange.emit({});
            });
        }
        else
            this.onChange.emit(this.isPin);
    };
    PinComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PinComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PinComponent.prototype, "onChange", void 0);
    PinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pin',
            template: __webpack_require__(/*! ./pin.component.html */ "./src/app/component/pin/pin.component.html"),
            styles: [__webpack_require__(/*! ./pin.component.scss */ "./src/app/component/pin/pin.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], PinComponent);
    return PinComponent;
}());



/***/ }),

/***/ "./src/app/component/product-card/product-card.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/product-card/product-card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" #navbar>\n  <mat-toolbar-row>\n    <div fxLayout=\"row\" fxFlex=\"100%\" fxLayoutGap=\"5%\" class=margin_15>\n      <div fxFlex=\"5%\"></div>\n      <div fxFlex=\"90%\" class=font>fundooNotes</div>\n      <div fxFlex=\"5%\"></div>\n    </div>\n  </mat-toolbar-row>\n</div>\n  <div  fxLayout=\"column\" fxLayoutGap=\"4%\">\n    <div fxFlex=\"2%\"></div>\n    <div fxLayoutAlign=center class=font>fundooNotes offered. Choose below service to Register.</div>\n    <app-loader *ngIf=loader></app-loader>\n    <div fxLayout=row fxLayoutAlign=center fxLayoutGap=\"10%\">\n        <div  *ngFor=\"let data of card\" class=div (click)=cardSelect(data)>\n        <mat-card  class=notSelected >\n          \n          <div fxFlex=column fxLayoutGap=\"10%\">\n              <div class=font_size>price: ${{data.price}} per month</div>\n              <div class=blue>{{data.name}}</div>\n                  <li class=features>${{data.price}}/month</li>\n                  <li class=features>{{data.description}}</li>\n            </div>\n        </mat-card>\n        <mat-card class=card>\n            <div *ngIf=\"data.id!=cardId\" class=add>ADD TO CART</div>\n        </mat-card>\n       \n    </div>\n   \n  </div>\n  <div class=\"back\" fxLayoutAlign=center (click)=signin()>Sign in instead</div>\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/component/product-card/product-card.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/product-card/product-card.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: #fb0;\n  width: 100%; }\n\n.font {\n  font-size: 25px; }\n\n@media only screen and (max-width: 599px) {\n  .card {\n    width: 120px;\n    margin-top: -128%;\n    padding: 135% 0% 5% 15%;\n    margin-left: 10%;\n    background-color: #acacac;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .div:hover .card {\n    width: 130px;\n    margin-top: -128%;\n    padding: 135% 0% 5% 15%;\n    margin-left: 10%;\n    background-color: #fb0;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .notSelected {\n    width: 120px;\n    z-index: 10;\n    height: 170px; }\n  .div:hover .notSelected {\n    width: 130px;\n    z-index: 10;\n    height: 180px; }\n  .font_20 {\n    font-size: 15px; }\n  .features {\n    margin-top: 10px;\n    font-size: 9px; }\n  .add {\n    font-size: 10px; } }\n\n@media only screen and (min-width: 600px) {\n  .card {\n    width: 240px;\n    margin-top: -97%;\n    padding: 99% 0% 7% 15%;\n    margin-left: 10%;\n    background-color: #acacac;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .div:hover .card {\n    width: 260px;\n    margin-top: -97%;\n    padding: 99% 0% 7% 15%;\n    margin-left: 10%;\n    background-color: #fb0;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .notSelected {\n    width: 240px;\n    z-index: 10;\n    height: 260px; }\n  .div:hover .notSelected {\n    width: 260px;\n    z-index: 10;\n    height: 290px; }\n  .div:hover .font_size {\n    font-size: 30px; }\n  .font_size {\n    font-size: 25px; }\n  .div:hover .features {\n    margin-top: 10px;\n    font-size: 20px; }\n  .features {\n    margin-top: 10px;\n    font-size: 17px; }\n  .add {\n    font-size: 17px; } }\n"

/***/ }),

/***/ "./src/app/component/product-card/product-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/product-card/product-card.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _card_details_card_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../card-details/card-details.component */ "./src/app/component/card-details/card-details.component.ts");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(router, dialog, productCardService) {
        this.router = router;
        this.dialog = dialog;
        this.productCardService = productCardService;
        this.basic = false;
        this.advance = false;
        this.card = [];
        this.cartId = '';
        this.loader = true;
        this.id = localStorage.getItem("fundooUserToken");
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        if (this.id != null) {
            this.router.navigateByUrl('/home');
        }
        this.getService();
        localStorage.removeItem("productCartId");
    };
    ProductCardComponent.prototype.getService = function () {
        var _this = this;
        this.card = [];
        this.productCardService.getService()
            .subscribe(function (response) {
            for (var i = 0; i < response["data"].data.length; i++) {
                response["data"].data[i].select = false;
                _this.card.push(response["data"].data[i]);
                _this.loader = false;
            }
        }, function (error) {
        });
    };
    ProductCardComponent.prototype.cardSelect = function (product) {
        var _this = this;
        var body = { "productId": product.id };
        this.productCardService.addToCart(body)
            .subscribe(function (response) {
            localStorage.setItem("productCartId", response['data'].details.id);
            _this.proceed(product);
        }, function (error) {
        });
    };
    ProductCardComponent.prototype.proceed = function (product) {
        var dialogRef = this.dialog.open(_card_details_card_details_component__WEBPACK_IMPORTED_MODULE_2__["CardDetailsComponent"], {
            width: '600px',
            maxWidth: 'auto',
            data: { noteData: product }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
        });
    };
    ProductCardComponent.prototype.signin = function () {
        this.router.navigateByUrl('/login');
    };
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/component/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/component/product-card/product-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/component/question-answer/question-answer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/question-answer/question-answer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n<div fxLayout=row fxLayoutAlign=center class=div >\n\n<div class=main2 >\n  <button mat-button class=close (click)=close()>close</button>\n  <div class=margin >\n    <div class=\"title\" [innerHTML]=note.title></div>\n    <div class=description2 [innerHTML]=note.description></div>\n    <div *ngFor='let data of note.noteCheckLists'>\n      <div *ngIf=\"data.status=='open'\" class=description><mat-checkbox>{{data.itemName}}</mat-checkbox></div>\n      <div *ngIf=\"data.status=='close'\" class=description><mat-checkbox checked=true>\n      <del>{{data.itemName}}</del></mat-checkbox></div>\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n  <div class=body *ngIf=\"questions.length==0\">\n    <div class=description>Ask a Question</div>\n    <div class=full_width  [froalaEditor]=options [(froalaModel)]=\"editorContent\"></div>\n    <button mat-button color=primary class=close (click)=addQuestion()>Ask</button>\n  </div>\n  <div class=body1 *ngIf=\"questions.length!=0\">\n    <div *ngFor=\"let item of questions\">\n      <div *ngIf=\"item.parentId==undefined\" class=description>Question Asked</div>\n      <div *ngIf=\"item.parentId==undefined\"class=description2 class=opacity [innerHTML]=item.message></div>\n    </div>\n  </div>\n</div>\n\n</div>\n<div fxLayout=row fxLayoutAlign=center>\n  <div *ngIf=\"questions.length!=0\" class=main>\n    <!-- *******************************question start************************************ -->\n    <div *ngFor=\"let item of questions\" class=body>\n      <div *ngIf=\"item.parentId==undefined\" fxLayout=\"row\">\n      <div class=image>\n        <div mat-card-avatar ngStyle.xs=\"width:25px;height:25px\" \n        [ngStyle]=\"{'background-image':'url(' +img+item.user.imageUrl+ ')',\n        'background-size':'cover','height':'40px','width':'40px','border-radius':'50%'}\"></div>\n      </div>\n      <div fxLayout=\"row wrap\">\n      <div>\n        <div class=details>{{item.user.firstName}} {{item.user.lastName}}\n          <span class=details> {{item.createdDate | date:'medium'}}</span></div>\n        <div class=description [innerHTML]=\"item.message\"></div>\n      </div>\n      <div fxLayout=row>\n      <button mat-icon-button class=icon><mat-icon (click)=replyToQuestion(item)>reply</mat-icon></button>\n      <button mat-icon-button class=icon *ngIf=\"Check(item.like)\"><mat-icon class=blue\n        (click)=like(item)>thumb_up_alt</mat-icon></button>\n      <button mat-icon-button class=icon *ngIf=\"!Check(item.like)\">\n        <mat-icon (click)=like(item)>thumb_up_alt</mat-icon></button>\n\n      <div class=margin_top10>{{countLIke(item)}} likes</div>\n      <div class=star *ngIf=rateCheck(item.rate)>\n        <bar-rating [(rate)]=ratingValue (rateChange)=\"rating(item,$event)\"[max]=\"5\"></bar-rating>\n      </div>\n      <div class=margin_top10>{{rateCount(item.rate)}}</div>\n      </div>\n      </div>\n    </div>\n    </div>\n    <div *ngIf=\"reply\">\n          <div class=full_width [froalaEditor]=options [(froalaModel)]=\"editorContent\"></div>\n          <div><button color=primary mat-button (click)=answer()>Reply</button></div>\n     </div>\n    <!-- *******************************question end************************************ -->\n\n    <!-- *******************************reply of question start************************************ -->\n    <div *ngFor=\"let data of questions\" >\n      <div  *ngIf=\"data.parentId==questions[0].id && data.isApproved\" class=body2>\n\n        <div fxLayout=\"row\">\n          <div fxFlex.xl=8 fxFlex.lg=8 fxFlex.md=8 fxFlex.sm=8 fxFlex.xs=15>\n            <div class=image>\n            <div mat-card-avatar ngStyle.xs=\"width:30px;height:30px\" \n            [ngStyle]=\"{'background-image':'url(' +img+data.user.imageUrl+ ')',\n            'background-size':'cover','height':'40px','width':'40px','border-radius':'50%'}\"></div>\n          </div>\n        </div>\n          <div fxFlex.xl=85 fxFlex.lg=85 fxFlex.md=85 fxFlex.sm=85 fxFlex.xs=80>\n            <div class=details>{{data.user.firstName}} {{data.user.lastName}} \n            <span class=details>{{data.createdDate | date:'medium'}}</span></div>\n            <div [innerHTML]=\"data.message\"></div>\n          \n        \n        <div fxLayout=row fxLayoutAlign=end>\n          <button mat-icon-button class=icon><mat-icon (click)=replyToReply(data)>reply</mat-icon></button>\n          <button mat-icon-button class=icon *ngIf=\"likeCheck(data.like)\"><mat-icon class=blue \n            (click)=like(data)>thumb_up_alt</mat-icon></button>\n          <button mat-icon-button class=icon *ngIf=\"!likeCheck(data.like)\"><mat-icon \n            (click)=like(data)>thumb_up_alt</mat-icon></button>\n          <div class=margin_top10>{{countLIke(data)}} likes</div>\n          <div class=star *ngIf=rateCheck(data.rate)>\n              <bar-rating [(rate)]=ratingValue (rateChange)=\"rating(data,$event)\"[max]=\"5\"></bar-rating>\n          </div>\n          <div class=margin_top10>{{rateCount(data.rate)}}</div>\n          <button mat-icon-button class=icon *ngIf=\"!showReply || id2!=data.id\" \n          (click)=\"replyShowing(data,true)\"><mat-icon>keyboard_arrow_down</mat-icon></button>\n          <button mat-icon-button class=icon *ngIf=\"showReply && id2==data.id\" \n          (click)=\"replyShowing(data,false)\"><mat-icon>keyboard_arrow_up</mat-icon></button>\n        </div></div>\n      </div>\n      <div *ngIf=\"reply2 && id2==data.id\">\n          <mat-divider></mat-divider>\n          <div class=full_width [froalaEditor]=options [(froalaModel)]=\"editorContent\"></div>\n          <div><button color=primary mat-button (click)=answer()>Reply</button></div>\n       </div>\n      <!-- *******************************reply of question end************************************ -->\n\n        <!-- *******************************reply of reply start************************************ --> \n\n        <div *ngFor=\"let data2 of questions\">\n          <div *ngIf=\"data2.parentId==data.id && data2.isApproved\" class=body3>\n            <div fxLayout=\"row\" *ngIf=\"showReply && id2==data.id\">\n                <div fxFlex.xl=8 fxFlex.lg=8 fxFlex.md=8 fxFlex.sm=8 fxFlex.xs=15><div class=image>\n                <div mat-card-avatar ngStyle.xs=\"width:30px;height:30px\" \n                [ngStyle]=\"{'background-image':'url(' +img+data2.user.imageUrl+ ')',\n                'background-size':'cover','height':'40px','width':'40px','border-radius':'50%'}\"></div>\n              </div></div>\n                  <div fxFlex.xl=85 fxFlex.lg=85 fxFlex.md=85 fxFlex.sm=85 fxFlex.xs=80>\n                <div class=details>{{data2.user.firstName}} {{data2.user.lastName}}\n                <span class=details>{{data2.createdDate | date:'medium'}}</span></div>\n                <div [innerHTML]=\"data2.message\"></div>\n              \n            <div fxLayout=row fxLayoutAlign=end>\n              <button mat-icon-button class=icon *ngIf=\"likeCheck(data2.like)\">\n              <mat-icon class=blue (click)=like(data2)>thumb_up_alt</mat-icon></button>\n              <button mat-icon-button class=icon *ngIf=\"!likeCheck(data2.like)\">\n              <mat-icon (click)=like(data2)>thumb_up_alt</mat-icon></button>\n              <div class=margin_top10>{{countLIke(data2)}} likes</div>\n              <div class=star *ngIf=rateCheck(data2.rate)>\n                  <bar-rating [(rate)]=ratingValue (rateChange)=\"rating(data2,$event)\"[max]=\"5\"></bar-rating>\n              </div>\n              <div class=margin_top10>{{rateCount(data2.rate)}}</div>\n            </div>\n          </div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- *******************************reply of reply end************************************ -->      \n\n    \n  </div>\n  \n</div>\n</div>"

/***/ }),

/***/ "./src/app/component/question-answer/question-answer.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/question-answer/question-answer.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main2 {\n  background-color: #e7e7e7;\n  border-bottom: 3px solid #c5c3c3; }\n\n.main {\n  margin-top: 2%; }\n\n@media only screen and (min-width: 320px) and (max-width: 599px) {\n  .main {\n    width: 100%; }\n  .main2 {\n    width: 100%; } }\n\n@media only screen and (min-width: 600px) and (max-width: 959px) {\n  .main {\n    width: 100%; }\n  .main2 {\n    width: 100%;\n    position: fixed;\n    z-index: 99; }\n  .div {\n    margin-bottom: 180px; } }\n\n@media only screen and (min-width: 960px) and (max-width: 1279px) {\n  .main {\n    width: 700px; }\n  .main2 {\n    width: 700px;\n    position: fixed;\n    z-index: 99; }\n  .div {\n    margin-bottom: 180px; } }\n\n@media only screen and (min-width: 1280px) and (max-width: 1919px) {\n  .main {\n    width: 1000px; }\n  .main2 {\n    width: 1000px;\n    position: fixed;\n    z-index: 99; }\n  .div {\n    margin-bottom: 180px; } }\n\n@media only screen and (min-width: 1920px) and (max-width: 5000px) {\n  .main {\n    width: 1100px; }\n  .main2 {\n    width: 1100px;\n    position: fixed;\n    z-index: 99; }\n  .div {\n    margin-bottom: 180px; } }\n\n.margin {\n  margin-bottom: 20px;\n  margin-top: 20px;\n  max-height: 80px;\n  overflow-y: auto; }\n\n.title {\n  font-size: 28px;\n  word-wrap: break-word;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important; }\n\n.description2 {\n  font-size: 20px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden !important;\n  word-wrap: break-word; }\n\n.description {\n  font-size: 20px;\n  word-wrap: break-word; }\n\n.message {\n  word-wrap: break-word; }\n\n.aaa {\n  word-wrap: break-all; }\n\n.star {\n  margin: -8px 0px 0px 0px; }\n\n.body1 {\n  margin: 2% 0% 2% 0%;\n  overflow-y: auto;\n  max-height: 80px; }\n\n.body {\n  margin: 2% 0% 2% 0%; }\n\n.details {\n  font-size: 12px; }\n\n.body2 {\n  margin: 2% 0% 0% 0%; }\n\n.body3 {\n  margin: 1% 0% 0% 10%; }\n\n.input {\n  font-size: 15px;\n  border: 1px dashed #d4d3d3;\n  width: 80%;\n  outline: none; }\n\n.input:empty:before {\n  content: attr(data-text);\n  opacity: 0.5;\n  font-size: 15px;\n  width: 60%; }\n\n.image {\n  margin: 0px 20px 0px 10px; }\n\n.nameIcon {\n  font-size: 29px;\n  color: #0606f8;\n  padding: 3px 0px 0px 0px; }\n\n.close {\n  float: right;\n  margin-top: 10px; }\n\n.opacity {\n  opacity: 0.5; }\n"

/***/ }),

/***/ "./src/app/component/question-answer/question-answer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/question-answer/question-answer.component.ts ***!
  \************************************************************************/
/*! exports provided: QuestionAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswerComponent", function() { return QuestionAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/logger/logger.service */ "./src/app/core/services/logger/logger.service.ts");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionAnswerComponent = /** @class */ (function () {
    function QuestionAnswerComponent(route, QAService, router, data) {
        this.route = route;
        this.QAService = QAService;
        this.router = router;
        this.data = data;
        this.id = this.route.snapshot.params.noteId;
        this.note = {};
        this.questions = [];
        this.reply = false;
        this.showReply = false;
        this.options = {
            charCounterCount: true,
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize',
                'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', 'paragraphFormat', 'align',
                'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'specialCharacters',
                'selectAll', 'undo', 'redo'],
            toolbarButtonsXS: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize',
                'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', 'paragraphFormat', 'align',
                'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'specialCharacters',
                'selectAll', 'undo', 'redo'],
            toolbarButtonsSM: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize',
                'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', 'paragraphFormat', 'align',
                'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'specialCharacters',
                'selectAll', 'undo', 'redo'],
            toolbarButtonsMD: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize',
                'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', 'paragraphFormat', 'align',
                'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'specialCharacters',
                'selectAll', 'undo', 'redo']
        };
    }
    QuestionAnswerComponent.prototype.ngOnInit = function () {
        this.getDetails();
    };
    QuestionAnswerComponent.prototype.getDetails = function () {
        var _this = this;
        this.QAService.getNoteById(this.id)
            .subscribe(function (response) {
            _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("response", response);
            _this.note = response["data"].data[0];
            _this.questions = _this.note['questionAndAnswerNotes'];
            _this.img = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].Url;
            console.log(_this.questions);
        }, function (error) {
            _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("details", error);
        });
    };
    QuestionAnswerComponent.prototype.rateCheck = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].userId == localStorage.getItem("fundooUserId")) {
                this.ratingValue = data[i].rate;
                return true;
            }
        }
        this.ratingValue = 0;
        return true;
    };
    QuestionAnswerComponent.prototype.replyShowing = function (data, value) {
        this.showReply = value;
        this.id2 = data.id;
    };
    QuestionAnswerComponent.prototype.rateCount = function (data) {
        if (data.length == 0)
            return 0;
        var value = 0;
        for (var a = 0; a < data.length; a++) {
            value += data[a].rate;
        }
        var rate = value / (data.length);
        return rate;
    };
    QuestionAnswerComponent.prototype.addQuestion = function () {
        var _this = this;
        var body = {
            "message": this.editorContent,
            "notesId": this.id
        };
        this.QAService.addAQuestion(body)
            .subscribe(function (response) {
            _this.getDetails();
        }, function (error) {
        });
    };
    QuestionAnswerComponent.prototype.close = function () {
        this.router.navigateByUrl('/home');
        this.data.hideView(false);
    };
    QuestionAnswerComponent.prototype.replyToQuestion = function (data) {
        this.id2 = data.id;
        this.reply = !this.reply;
    };
    QuestionAnswerComponent.prototype.replyToReply = function (data) {
        this.id2 = data.id;
        this.reply2 = !this.reply2;
    };
    QuestionAnswerComponent.prototype.like = function (data) {
        var _this = this;
        var body = {
            "like": false
        };
        if (data.like.length == 0)
            body.like = true;
        else {
            body.like = !data.like[0].like;
            for (var l = 0; l < data.like.length; l++) {
                if (data.like[l].userId == localStorage.getItem("fundooUserId") && data.like[l].like == false)
                    body.like = true;
            }
        }
        _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("body", body);
        this.QAService.addLike(body, data.id)
            .subscribe(function (response) {
            _this.getDetails();
        }, function (error) {
        });
    };
    QuestionAnswerComponent.prototype.likeCheck = function (question) {
        for (var m = 0; m < question.length; m++) {
            if (question[m].like == true) {
                if (question[m].userId == localStorage.getItem("fundooUserId")) {
                    return true;
                }
            }
        }
        return false;
    };
    QuestionAnswerComponent.prototype.Check = function (data) {
        for (var m = 0; m < data.length; m++) {
            if (data[m].like == true) {
                if (data[m].userId == localStorage.getItem("fundooUserId")) {
                    return true;
                }
            }
        }
        return false;
    };
    QuestionAnswerComponent.prototype.countLIke = function (data) {
        var count = 0;
        for (var m = 0; m < data.like.length; m++) {
            if (data.like[m].like == true) {
                count += 1;
            }
        }
        return count;
    };
    QuestionAnswerComponent.prototype.answer = function () {
        var _this = this;
        // let reply=this.replayMessage.nativeElement.innerHTML;
        var body = {
            "message": this.editorContent
        };
        _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("data", this.id2);
        _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("body", body);
        this.QAService.addReply(body, this.id2)
            .subscribe(function (response) {
            _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("refreshing", response);
            _this.reply = _this.reply2 = false;
            _this.getDetails();
        }, function (error) {
        });
    };
    QuestionAnswerComponent.prototype.rating = function (data, rate) {
        var _this = this;
        var body = {
            "rate": rate
        };
        this.QAService.addrating(body, data.id)
            .subscribe(function (response) {
            _this.getDetails();
        }, function (error) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('question'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuestionAnswerComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('replayMessage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuestionAnswerComponent.prototype, "replayMessage", void 0);
    QuestionAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-answer',
            template: __webpack_require__(/*! ./question-answer.component.html */ "./src/app/component/question-answer/question-answer.component.html"),
            styles: [__webpack_require__(/*! ./question-answer.component.scss */ "./src/app/component/question-answer/question-answer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], QuestionAnswerComponent);
    return QuestionAnswerComponent;
}());



/***/ }),

/***/ "./src/app/component/remind-me/remind-me.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/remind-me/remind-me.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<abbr title=\"Remind me\">\n    <img src=\"../../../assets/img/reminder.svg\" [matMenuTriggerFor]=\"menu\" (click)=\"timePick=false;reminder()\"></abbr>\n\n<!-- ****************************reminder menu start****************************** -->        \n<mat-menu #menu=\"matMenu\">\n<mat-card *ngIf=!timePick>\n    <div>Reminder:</div>\n    <div mat-menu-item class=\"menu\"fxLayout=\"row\" (click)=today()>\n        <div fxFlex=60%>Later today</div><div fxFlex=\"40%\">8:00 PM</div>\n    </div>\n    <div mat-menu-item class=\"menu\" fxLayout=\"row\" (click)=tomorrow()>\n        <div fxFlex=60%>Tomorrow</div><div fxFlex=\"40%\">8:00 AM</div>\n    </div>\n    <div mat-menu-item class=\"menu\" fxLayout=\"row\" (click)=nextWeek()>\n        <div fxFlex=60%>Next week</div><div fxFlex=\"40%\">Mon, 8:00 AM</div>\n    </div>\n    <div mat-menu-item class=\"menu\" (click)=\"timePick=true\" (click)=$event.stopPropagation()>\n        <mat-icon>access_time</mat-icon>Pick date & time\n    </div>\n</mat-card>\n<mat-card *ngIf=timePick>\n        <div mat-menu-item><mat-icon (click)=\"timePick=false;$event.stopPropagation()\">keyboard_backspace</mat-icon>\n        Pick date & time</div>\n        <mat-divider></mat-divider>\n        <div mat-menu-item>\n        <mat-form-field>\n            <input matInput [matDatepicker]=\"dp\" (click)=$event.stopPropagation() #date=\"ngModel\" \n            [(ngModel)]=model.date [min]=currentDate (dateChange)=datechange()>\n            <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n            <mat-datepicker #dp></mat-datepicker>\n        </mat-form-field>\n        </div>\n        <div mat-menu-item>\n            <mat-form-field>\n                <input matInput (keyup)=timeValidation() [(ngModel)]=model.time (click)=$event.stopPropagation() \n                [matMenuTriggerFor]=\"menuTime\">\n            </mat-form-field>\n        </div>\n        <button mat-button [disabled]=!button (click)=addTime()>save</button>\n\n</mat-card>\n</mat-menu>\n<!-- ****************************reminder menu end****************************** -->        \n<mat-menu #menuTime=\"matMenu\" [overlapTrigger]=false>\n    <button class=\"button\" mat-button [disabled]=button4 (click)=\"model.time='8:00 AM';$event.stopPropagation()\">\n        <div fxLayout=\"row\">\n            <div fxFlex=60%>Morning</div><div fxFlex=\"40%\">8:00 AM</div>\n        </div>\n    </button>\n    <button class=\"button\" mat-button [disabled]=button3 (click)=\"model.time='1:00 PM';$event.stopPropagation()\">\n        <div fxLayout=\"row\">\n            <div fxFlex=60%>Afternoon</div><div fxFlex=\"40%\">1:00 PM</div>\n        </div>\n    </button>\n    <button class=\"button\" mat-button [disabled]=button2 (click)=\"model.time='6:00 PM';$event.stopPropagation()\">\n        <div fxLayout=\"row\">\n            <div fxFlex=60%>Evening</div><div fxFlex=\"40%\">6:00 PM</div>\n        </div>\n    </button>\n    <button class=\"button\" mat-button [disabled]=button1 (click)=\"model.time='8:00 PM';$event.stopPropagation()\">\n        <div fxLayout=\"row\">\n            <div fxFlex=60%>Night</div><div fxFlex=\"40%\">8:00 PM</div>\n        </div>\n    </button>\n    <button mat-button class=\"button\">Custom</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/component/remind-me/remind-me.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/component/remind-me/remind-me.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  cursor: pointer;\n  font-size: 13px;\n  width: 200px; }\n\n.menu:hover {\n  background-color: #d4d4d4; }\n\n.button {\n  width: 200px; }\n\n.dateTime {\n  background-color: gray; }\n\n::ng-deep.mat-menu-content:not(:empty) {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/component/remind-me/remind-me.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/remind-me/remind-me.component.ts ***!
  \************************************************************/
/*! exports provided: RemindMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindMeComponent", function() { return RemindMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> remind-me.component.ts
 *
 *  Purpose         : To
 *
 *  @file           : remind-me.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/






var RemindMeComponent = /** @class */ (function () {
    function RemindMeComponent(remindMeService, data) {
        this.remindMeService = remindMeService;
        this.data = data;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.onChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.model = {
            "date": '',
            'time': ''
        };
        this.timePick = false;
        this.currentDate = new Date();
        this.button = true;
        this.button1 = true;
        this.button2 = true;
        this.button3 = true;
        this.button4 = true;
    }
    RemindMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessageReminder.subscribe(function (message) {
            _this.message = message;
            if (_this.message != "default" && _this.card.id == message) {
                _this.reminder();
                // this.trigger.openMenu();
            }
        });
    };
    /**
     *
     * @description reminder show
     */
    RemindMeComponent.prototype.reminder = function () {
        this.value = this.currentDate;
        if (this.card) {
            if (this.card.reminder.length != 0) {
                var cardReminder = new Date(this.card.reminder[0]);
                this.value = cardReminder;
                this.timePick = true;
            }
        }
        this.model.date = this.value;
        var hr = this.value.getHours();
        var min = this.value.getMinutes() + 1;
        if (min >= 0 && min < 9)
            min = "0" + (min);
        var ampm = 'AM';
        if (hr > 12) {
            hr -= 12;
            ampm = 'PM';
        }
        this.model.time = hr + ":" + min + " " + ampm;
        this.datechange();
    };
    RemindMeComponent.prototype.datechange = function () {
        if (this.model.date.getFullYear() >= this.currentDate.getFullYear()) {
            if (this.model.date.getMonth() >= this.currentDate.getMonth()) {
                if (this.model.date.getDate() >= this.currentDate.getDate()) {
                    this.button1 = this.button2 = this.button3 = this.button4 = false;
                }
            }
        }
        if (this.model.date.getFullYear() == this.currentDate.getFullYear() &&
            this.model.date.getMonth() == this.currentDate.getMonth() &&
            this.model.date.getDate() == this.currentDate.getDate()) {
            if (this.currentDate.getHours() >= 20 && this.currentDate.getMinutes() >= 0) {
                this.button1 = this.button2 = this.button3 = this.button4 = true;
            }
            if (this.currentDate.getHours() >= 18 && this.currentDate.getMinutes() >= 0) {
                this.button2 = this.button3 = this.button4 = true;
            }
            if (this.currentDate.getHours() >= 13 && this.currentDate.getMinutes() >= 0) {
                this.button3 = this.button4 = true;
            }
            if (this.currentDate.getHours() >= 8 && this.currentDate.getMinutes() >= 0) {
                this.button4 = true;
            }
        }
    };
    RemindMeComponent.prototype.today = function () {
        var date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 0, 20, 0, 0);
        if (this.card) {
            this.addReminder(date);
        }
        else {
            this.onChanges.emit(date);
        }
    };
    RemindMeComponent.prototype.tomorrow = function () {
        var date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 1, 8, 0, 0);
        if (this.card) {
            this.addReminder(date);
        }
        else {
            this.onChanges.emit(date);
        }
    };
    RemindMeComponent.prototype.nextWeek = function () {
        var date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 7, 8, 0, 0);
        if (this.card) {
            this.addReminder(date);
        }
        else {
            this.onChanges.emit(date);
        }
    };
    RemindMeComponent.prototype.addReminder = function (date) {
        var _this = this;
        if (this.card) {
            var id = [];
            id.push(this.card.id);
            var body = {
                "reminder": date,
                "noteIdList": id
            };
            this.remindMeService.addUpdateReminder(body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe(function (response) {
                _this.onChanges.emit({ "body": date });
            }, function (error) {
            });
        }
        else {
            this.onChanges.emit(date);
        }
    };
    RemindMeComponent.prototype.timeValidation = function () {
        var regex = /^(2[0-3]|1?[0-9]|0?[1-9]):[0-5][0-9] (AM|PM|pm|am|Pm|pM|Am|aM)$/;
        if (!regex.test(this.model.time)) {
            this.button = false;
        }
        else
            this.button = true;
    };
    RemindMeComponent.prototype.dateValidation = function () {
        var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (!regex.test(this.model.date)) {
            this.button = false;
        }
        else
            this.button = true;
    };
    RemindMeComponent.prototype.addTime = function () {
        var arr = this.model.time.split(' ');
        var arr2 = arr[0].split(':');
        arr2.push(arr[1]);
        var min = Number(arr2[1]);
        var hr = Number(arr2[0]);
        if (arr2[2].toUpperCase() == "PM" && hr < 12) {
            hr += 12;
        }
        var date = new Date(this.model.date.getFullYear(), this.model.date.getMonth(), this.model.date.getDate() + 0, hr, min, 0);
        this.addReminder(date);
    };
    RemindMeComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RemindMeComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RemindMeComponent.prototype, "onChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"])
    ], RemindMeComponent.prototype, "trigger", void 0);
    RemindMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remind-me',
            template: __webpack_require__(/*! ./remind-me.component.html */ "./src/app/component/remind-me/remind-me.component.html"),
            styles: [__webpack_require__(/*! ./remind-me.component.scss */ "./src/app/component/remind-me/remind-me.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"], _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], RemindMeComponent);
    return RemindMeComponent;
}());



/***/ }),

/***/ "./src/app/component/reminder/reminder.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/reminder/reminder.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notes-add (onNewEntry)=refresh($event)></app-notes-add>\n<app-notes-list [notes]=\"reminderArray\" (anyChanges)=\"refresh($event)\" ></app-notes-list>\n<app-loader *ngIf=\"spinnerValue==true\"></app-loader>\n"

/***/ }),

/***/ "./src/app/component/reminder/reminder.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/reminder/reminder.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/reminder/reminder.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/reminder/reminder.component.ts ***!
  \**********************************************************/
/*! exports provided: ReminderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReminderComponent", function() { return ReminderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReminderComponent = /** @class */ (function () {
    function ReminderComponent(reminderService) {
        this.reminderService = reminderService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.notes = [];
        this.reminderArray = [];
        this.arr = [];
        this.spinnerValue = true;
    }
    ReminderComponent.prototype.ngOnInit = function () {
        this.reminders();
    };
    /**
     *
     * @description getting reminder list
     */
    ReminderComponent.prototype.reminders = function () {
        var _this = this;
        this.reminderService.getRemindersLIst()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.notes = [];
            _this.notes = response["data"].data;
            _this.reminderArray = [];
            _this.arr = [];
            for (var i = _this.notes.length; i > 0; i--) {
                _this.reminderArray.push(_this.notes[i - 1]);
            }
            _this.reminderArray.sort(function (a, b) {
                a = new Date(a.reminder[0]);
                b = new Date(b.reminder[0]);
                return b - a;
            });
            _this.spinnerValue = false;
        }, function (error) {
        });
    };
    ReminderComponent.prototype.refresh = function (event) {
        if (event) {
            this.reminders();
        }
    };
    /**
     *
     * @description unsubscribing
     */
    ReminderComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ReminderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reminder',
            template: __webpack_require__(/*! ./reminder.component.html */ "./src/app/component/reminder/reminder.component.html"),
            styles: [__webpack_require__(/*! ./reminder.component.scss */ "./src/app/component/reminder/reminder.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], ReminderComponent);
    return ReminderComponent;
}());



/***/ }),

/***/ "./src/app/component/reset/reset.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/reset/reset.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"5%\">\n  <div fxFlex.lg=\"20%\" fxFlex.md=\"10%\" fxFlex.sm=\"5%\" fxFlex.xs=\"0%\"></div>\n  <div  fxLayout=\"row\" fxFlex.lg=\"70%\">\n    <div fxFlex.lg=\"30%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n\n    <div fxFlex.lg=\"40%\" fxFlex.md=\"50%\" fxFlex.sm=\"60%\" fxFlex.xs=\"100%\">\n      <!-- ****************************matcard start****************************** -->        \n      <mat-card>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n          <div fxLayoutAlign=\"center\" class=userPage_header>\n            <span class=blue>F</span><span class=red>u</span><span class=yellow>n</span>\n            <span class=blue>d</span><span class=green>o</span><span class=red>o</span>\n          </div>\n          <mat-card-title fxLayoutAlign=\"center\"><h4>Reset Password</h4></mat-card-title>\n            \n          <div>\n            <mat-form-field class=full_width>\n              <input  matInput placeholder=\"Password\" name=\"password\" maxlength=\"16\" #password=\"ngModel\"\n              [(ngModel)]=\"model.password\" [type]=\"hide ? 'text' : 'password'\" pattern=\"[a-zA-Z0-9!@#$%^&*]*\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\n            </mat-form-field>\n          </div>\n          <mat-error class=\"error\" *ngIf=\"f.submitted && password.invalid\">\n              <mat-error *ngIf=\"password.errors.required\" >password is required</mat-error>\n          </mat-error>\n          <div>\n            <mat-form-field class=full_width>\n              <input  matInput placeholder=\"Confirm password\" name=\"confpassword\" #confpassword=\"ngModel\" \n              [(ngModel)]=\"model.confpassword\" [type]=\"hide ? 'text' : 'password'\"\n              [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n          </div>\n          <mat-error class=\"error\" *ngIf=\"f.submitted && confpassword.invalid\">\n            <mat-error *ngIf=\"confpassword.errors.required\" >conf password is required</mat-error>\n          </mat-error>\n\n          <div fxLayoutAlign=end><button mat-button class=mat_button type=submit (click)=\"reset()\">Next</button></div>\n        </form>\n      </mat-card>\n      <!-- ****************************matcard end****************************** -->        \n\n    </div>\n\n    <div fxFlex.lg=\"30%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n  </div>\n  <div fxFlex.lg=\"20%\" fxFlex.md=\"10%\" fxFlex.sm=\"5%\" fxFlex.xs=\"0%\"></div>\n</div>"

/***/ }),

/***/ "./src/app/component/reset/reset.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/reset/reset.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/reset/reset.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/reset/reset.component.ts ***!
  \****************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> reset.component.ts
 *
 *  Purpose         : To reset password
 *
 *  @file           : reset.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/






var ResetComponent = /** @class */ (function () {
    function ResetComponent(resetService, snackBar, route, router) {
        this.resetService = resetService;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.model = {
            "password": "",
            "confpassword": ""
        };
        this.id = this.route.snapshot.params.id;
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @description password reset
     */
    ResetComponent.prototype.reset = function () {
        var _this = this;
        /**
         *
         * @description checking the passwords are matching or not
         */
        localStorage.setItem("fundooUserToken", this.id);
        if (this.model.password != this.model.confpassword) {
            this.snackBar.open("failed", "passwords are not matching", {
                duration: 2000,
            });
            return;
        }
        var body = { "newPassword": this.model.password };
        this.resetService.resetPassword(this.getFormUrlEncoded(body))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            /**
             *
             * @description if the reset password is success then it will directly take to login page
             */
            _this.router.navigateByUrl('/login');
        }, function (error) {
            _this.snackBar.open("failed", "failed", {
                duration: 2000,
            });
        });
        localStorage.removeItem("fundooUserToken");
    };
    /**
     *
     * @description converting data to encoded value
     */
    ResetComponent.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    /**
     *
     * @description unsubscribing
     */
    ResetComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/component/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.scss */ "./src/app/component/reset/reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/component/search-notes/search-notes.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/search-notes/search-notes.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notes-list [notes]=\"notesArray\" [searchItem]=message ></app-notes-list>"

/***/ }),

/***/ "./src/app/component/search-notes/search-notes.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/component/search-notes/search-notes.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/search-notes/search-notes.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/search-notes/search-notes.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNotesComponent", function() { return SearchNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchNotesComponent = /** @class */ (function () {
    function SearchNotesComponent(data, searchService) {
        this.data = data;
        this.searchService = searchService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.notes = [];
        this.notesArray = [];
    }
    SearchNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNotes();
        /**
         *
         * @description getting search word
         */
        this.data.currentMessageSearch
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (message) {
            _this.message = message;
        });
    };
    /**
     *
     * @description getting user note list
     */
    SearchNotesComponent.prototype.getNotes = function () {
        var _this = this;
        this.searchService.getNoteList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.notes = response["data"].data;
            _this.notesArray = [];
            for (var i = _this.notes.length; i > 0; i--) {
                if ((_this.notes[i - 1]["isDeleted"] == false) && (_this.notes[i - 1]["isArchived"] == false)) {
                    _this.notesArray.push(_this.notes[i - 1]);
                }
            }
        }, function (error) {
        });
    };
    /**
     *
     * @description unsubscribing
     */
    SearchNotesComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    SearchNotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-notes',
            template: __webpack_require__(/*! ./search-notes.component.html */ "./src/app/component/search-notes/search-notes.component.html"),
            styles: [__webpack_require__(/*! ./search-notes.component.scss */ "./src/app/component/search-notes/search-notes.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_data_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], SearchNotesComponent);
    return SearchNotesComponent;
}());



/***/ }),

/***/ "./src/app/component/shopping-cart/shopping-cart.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/shopping-cart/shopping-cart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=loader><app-loader></app-loader></div>\n<div *ngIf='!loader && cartItem.length==0' fxLayoutAlign=\"center\"><h1>Your Cart is Empty</h1></div>\n<div *ngIf='!loader && cartItem.length!=0' fxLayoutAlign=\"center\">\n\n<div fxLayout=column fxLayoutGap=5% fxFlex fxLayoutAlign=center fxFlex.xl=70 fxFlex.lg=880px fxFlex.md=750px \nfxFlex.sm=100 fxFlex.xs=100>\n  <div></div>\n  <div fxLayout=row fxFlex=100>\n    <div fxFlex.xl=20 fxFlex.lg=20 fxFlex.md=20 fxFlex.sm=40 fxFlex.xs=40\n    fxLayoutAlign=center><div class=fundoo>FundooNotes</div></div>\n    <div fxFlex.xl=30 fxFlex.lg=30 fxFlex.md=30 fxFlex.sm=40 fxFlex.xs=50 fxLayout=column>\n      <div fxLayout=row>\n        <mat-progress-bar *ngIf=shoppingCart class=margin_top10 mode=\"determinate\" value=0></mat-progress-bar>\n        <mat-progress-bar *ngIf=review class=margin_top10 mode=\"determinate\" value=50></mat-progress-bar>\n        <mat-progress-bar *ngIf=placed class=margin_top10 mode=\"determinate\" value=100></mat-progress-bar>\n\n        <mat-icon *ngIf=shoppingCart class=\"icon shoppingCart\">shopping_cart</mat-icon>\n        <mat-icon *ngIf=review class=\"icon review\">shopping_cart</mat-icon>\n        <mat-icon *ngIf=placed class=\"icon placed\">shopping_cart</mat-icon>\n      </div>\n      <div fxLayout=row>\n        <div fxFlex=33 fxLayoutAlign=start class=step class=step>signin</div>\n        <div fxFlex=33 fxLayoutAlign=center [ngClass]=\"placed || review ? 'step' : 'stepNotDone'\" >review</div>\n        <div fxFlex=33 fxLayoutAlign=end [ngClass]=\"placed ? 'step' : 'stepNotDone'\">complete</div>\n      </div>\n    </div>\n  </div>\n  <div>\n\n      <!-- ****************************First Step Checkout start******************************* -->\n      <div *ngIf=shoppingCart fxLayout=column>\n        <div class=margin_15><b>Shopping Cart</b></div>\n        <mat-divider></mat-divider>\n        <div fxLayout='row wrap'class=margin_TB_10>\n          <div class=margin_15 fxFlex.xl=10 fxFlex.lg=10 fxFlex.md=10 fxFlex.sm=10 fxFlex.xs=100>\n            <div class=details>\n              <div>${{cartItem.price}} per month</div>\n              <div> {{product.name}}</div>\n            </div>\n          </div>\n          <div class=margin_15 fxLayout='row' fxLayoutGap=5% fxFlex.xl=50 fxFlex.lg=50 fxFlex.md=50 \n          fxFlex.sm=50 fxFlex.xs=100>\n            <div fxLayout=column>\n              <div class=text_color>{{product.name}} Pack Details</div>\n              <li><small>{{product.description}}</small></li>\n            </div>\n            <div fxLayout=column>\n              <div><small><b>price</b></small></div>\n              <div class=text_color>$ {{cartItem.price}}</div>\n            </div>\n            <div>\n              <div fxLayout=column><small><b>validity</b></small></div>\n              <div class=text_color>per month</div>\n            </div>\n          </div>\n          <div fxLayoutAlign=center class=margin_15 fxFlex.xl=25 fxFlex.lg=25 fxFlex.md=25 fxFlex.sm=25\n          fxFlex.xs=100 fxLayout=column class=box fxLayoutGap=5%>\n            <div></div>\n            <div fxLayoutAlign=center><small>Subtotal(1 item) : ${{cartItem.price}}</small></div>\n            <div fxLayoutAlign=center><button class=button1 (click)=proceed()>Proceed to Checkout</button></div>\n          </div>\n        </div>\n        <mat-divider></mat-divider>\n       <div class=\"margin_15 color\">Subtotal ( 1 item ): ${{cartItem.price}}</div>\n      </div>\n      <!-- ****************************First Step Checkout end******************************* -->\n\n      <!-- **************************Second Step Order Place start**************************** -->\n      <div *ngIf=review fxLayout=column>\n        <div class=margin_15><b>Review your Order</b></div>\n        <mat-divider></mat-divider>\n        <div fxLayout='row wrap'fxLayoutGap=3% class=margin_TB_10>\n          <div class=margin_15 fxFlex.xl=10 fxFlex.lg=10 fxFlex.md=10 fxFlex.sm=100 fxFlex.xs=100>\n            <div class=details>\n              <div>${{cartItem.price}} per month</div>\n              <div> {{product.name}}</div>\n\n            </div>\n          </div>\n          <div class=margin_15 fxLayout='row' fxLayoutGap=5% fxFlex.xl=50 fxFlex.lg=50 fxFlex.md=50\n          fxFlex.sm=100 fxFlex.xs=100>\n            <div fxLayout=column>\n              <div class=text_color>{{product.name}} Pack Details</div>\n              <li><small>{{product.description}}</small></li>\n            </div>\n            <div fxLayout=column>\n              <div class=text_color><b>$ {{cartItem.price}}</b></div>\n              <small>per month</small>\n            </div>\n          </div>\n          <div class=margin_15 fxFlex.xl=25 fxFlex.lg=25 fxFlex.md=25 fxFlex.sm=100 fxFlex.xs=100\n          fxLayout=column class=box fxLayoutGap=5%>\n            <div></div>\n            <div fxLayoutAlign=center><button  class=button1 (click)=place()>Place your Order</button></div>\n            <div fxLayoutAlign=center><small>Subtotal(1 item) : ${{cartItem.price}}</small></div>\n          </div>\n        </div>\n        <mat-divider></mat-divider>\n        <div fxLayout=\"row wrap\" class=margin_15 fxLayoutGap=10%>\n          <div fxFlex.xl=50 fxFlex.lg=40 fxFlex.md=40 fxFlex.sm=100 fxFlex.xs=100>\n            <textarea [(ngModel)]=\"address\" name=\"address\" id=\"address\" cols=\"30\" rows=\"5\"></textarea>\n          </div>\n          <div fxFlex.xl=30 fxFlex.lg=40 fxFlex.md=40 fxFlex.sm=100 fxFlex.xs=100>\n            <div><small>payment method</small></div>\n            <div class=color>Cash on Delivery</div>\n          </div>\n        </div>\n      </div>\n      <!-- **************************Second Step Order Place end**************************** -->\n \n      <!-- **************************Third Step Complete Payment start**************************** -->\n      <div *ngIf=placed fxLayout=column>\n        <div class=margin_15><b>Order List</b></div>\n        <mat-divider></mat-divider>\n        <div fxLayout='row wrap'fxLayoutGap=3% class=margin_TB_10>\n          <div class=margin_15 fxFlex.xl=10 fxFlex.lg=10 fxFlex.md=10 fxFlex.sm=100 fxFlex.xs=100>\n            <div class=details>\n              <div>${{cartItem.price}} per month</div>\n              <div> {{product.name}}</div>\n            </div>\n          </div>\n          <div class=margin_15 fxLayout='row' fxLayoutGap=5% fxFlex.xl=70 fxFlex.lg=70 fxFlex.md=70 \n          fxFlex.sm=100 fxFlex.xs=100>\n            <div fxLayout=column class=description>\n              <div class=text_color>{{product.name}} Pack Details</div>\n              <li><small>{{product.description}}</small></li>\n            </div>\n            <div fxLayout=column>\n              <div class=text_color><b>$ {{cartItem.price}}</b></div>\n              <small>per month</small>\n            </div>\n          </div>\n        </div>\n        <div fxLayoutAlign=end class=text_color>{{status}}</div>\n        <mat-divider></mat-divider>\n      </div>\n      <!-- **************************Third Step Complete Payment end**************************** -->\n\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/component/shopping-cart/shopping-cart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/shopping-cart/shopping-cart.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fundoo {\n  background-color: #fb0;\n  border-radius: 10px;\n  padding: 10px;\n  color: white;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content; }\n\n.transparent {\n  background-color: transparent; }\n\n.margin_TB_10 {\n  margin: 10px 0px 10px 0px; }\n\n@media only screen and (max-width: 699px) {\n  .details {\n    font-size: 12px;\n    padding: 5px;\n    background-color: #757373;\n    color: white;\n    border-radius: 10px;\n    max-width: 100px; }\n  .description {\n    width: 150px; } }\n\n@media only screen and (min-width: 700px) {\n  .details {\n    font-size: 15px;\n    padding: 5px;\n    background-color: #797777;\n    color: white;\n    border-radius: 10px;\n    max-width: 100px; }\n  .description {\n    width: 230px; } }\n\n.box {\n  border: 1px solid #a7a7a7;\n  border-radius: 3px;\n  padding: 10px; }\n\n.text_color {\n  color: #40a1e2;\n  font-size: 12px; }\n\n.step {\n  color: #fb0;\n  font-size: 12px; }\n\n.stepNotDone {\n  color: #928f8f;\n  font-size: 12px; }\n\n.color {\n  color: #1e8ad1; }\n\n.icon {\n  z-index: 9; }\n\n.shoppingCart {\n  margin-left: -102%; }\n\n.review {\n  margin-left: -55%; }\n\n.placed {\n  margin-left: -5%; }\n"

/***/ }),

/***/ "./src/app/component/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/logger/logger.service */ "./src/app/core/services/logger/logger.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService, snackBar) {
        this.shoppingCartService = shoppingCartService;
        this.snackBar = snackBar;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.cartId = localStorage.getItem("productCartId");
        this.product = {};
        this.address = '';
        this.status = '';
        this.item = [];
        this.shoppingCart = true;
        this.review = false;
        this.placed = false;
        this.loader = true;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        this.getMyCart();
    };
    ShoppingCartComponent.prototype.proceed = function () {
        this.shoppingCart = false;
        this.review = true;
        this.placed = false;
    };
    /**
     *
     * @description getting product details
     */
    /**
     *
     * @description getting cart list of user
     */
    ShoppingCartComponent.prototype.getMyCart = function () {
        var _this = this;
        this.shoppingCartService.getmyCart()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _core_services_logger_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"].log("res", response);
            if (response['data'].length != 0) {
                _this.cartItem = response['data'][0];
                _this.product = _this.cartItem['product'];
            }
            else {
                _this.cartItem = [];
            }
            _this.loader = false;
            // if(response['data'].length == 0){
            //   this.cartItem=[];
            //   // this.getCardDetails();
            // }
            // else{
            //   this.shoppingCart=false;
            //   this.review=false;
            //   this.placed=true; 
            //   this.cartItem=response['data'][0];
            //   this.product=this.cartItem['product'];
            //   this.status=response['data'][0].status;
            //   LoggerService.log("product",this.cartItem)
            //   localStorage.removeItem("productCartId");
            // }
        }, function (error) {
        });
    };
    /**
     *
     * @description order place
     */
    ShoppingCartComponent.prototype.place = function () {
        var _this = this;
        /**
         *
         * @description the user cant place order without address
         */
        if (this.address == '') {
            this.snackBar.open("failed", "please enter address", {
                duration: 2000,
            });
            return;
        }
        var body = {
            "cartId": this.cartId,
            "address": this.address
        };
        this.shoppingCartService.placeOrder(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.shoppingCart = false;
            _this.review = false;
            _this.placed = true;
        }, function (error) {
        });
    };
    /**
     *
     * @description unsubscribing
     */
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/component/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/component/shopping-cart/shopping-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/component/signup/signup.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/signup/signup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutGap=\"5%\">\n  <div fxFlex.lg=\"2%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n  <div  fxLayout=\"row\">\n    <div fxFlex.lg=\"27%\" fxFlex.md=\"10%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n\n    <div fxFlex.lg=\"46%\" fxFlex.md=\"80%\" fxFlex.sm=\"100%\" fxFlex.xs=\"100%\">\n\n      <!-- ****************************matcard start****************************** -->        \n      <mat-card>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n          <div><small (click)=goToCart() class=cart>go to cart</small></div>\n          <div fxLayoutAlign=\"center\" class=userPage_header>\n            <span class=blue>F</span><span class=red>u</span><span class=yellow>n</span>\n            <span class=blue>d</span><span class=green>o</span><span class=red>o</span>\n          </div>\n          <mat-card-title><h5>Create your Fundoo Account</h5></mat-card-title>\n\n          <div>\n              <mat-form-field  class=firstInput>\n                <input matInput placeholder=\"First name\" name=\"firstname\" #firstname=\"ngModel\" \n                [(ngModel)]=\"model.firstname\" pattern=\"[a-z ]*\" \n                [ngClass]=\"{ 'is-invalid': f.submitted && firstname.invalid }\" required>\n              </mat-form-field>\n              <mat-form-field class=lastInput>\n                <input matInput placeholder=\"Last name\" name=\"lastname\" #lastname=\"ngModel\" \n                [(ngModel)]=\"model.lastname\" pattern=\"[a-z ]*\" \n                [ngClass]=\"{ 'is-invalid': f.submitted && lastname.invalid }\" required>\n              </mat-form-field>\n          </div>\n              <mat-error *ngIf=\"f.submitted && firstname.invalid\" >\n                <mat-error *ngIf=\"firstname.errors.required\" class=\"error\">firstname is required</mat-error>\n                <mat-error *ngIf=\"firstname.errors.pattern\" class=\"error\">Invalid firstname</mat-error>\n              </mat-error>\n            \n              <mat-error *ngIf=\"f.submitted && lastname.invalid\">\n                <mat-error *ngIf=\"lastname.errors.required\" class=\"error\">lastname is required</mat-error>\n                <mat-error *ngIf=\"lastname.errors.pattern\" class=\"error\">Invalid lastname</mat-error>\n              </mat-error>\n          \n\n          <mat-form-field class=\"email\"> \n            <input matInput placeholder=\"Email Id\" name=\"email\"#email=\"ngModel\" \n            [(ngModel)]=\"model.email\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" \n            [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required >\n          </mat-form-field>\n          <mat-error *ngIf=\"f.submitted && email.invalid\">\n            <mat-error *ngIf=\"email.errors.required\" class=\"error\">email is required</mat-error>\n            <mat-error *ngIf=\"email.errors.pattern\" class=\"error\">Invalid email</mat-error>\n          </mat-error>\n\n          <div>\n            <mat-form-field class=\"firstInput\">\n              <input  matInput placeholder=\"Password\" name=\"password\" maxlength=\"16\" #password=\"ngModel\" \n              [(ngModel)]=\"model.password\" [type]=\"hide ? 'text' : 'password'\" \n              minlength=\"4\"[ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\n            </mat-form-field>\n            <mat-form-field class=\"lastInput\">\n              <input  matInput placeholder=\"Confirm password\" name=\"confpassword\" #confpassword=\"ngModel\" \n              [(ngModel)]=\"model.confpassword\" [type]=\"hide ? 'text' : 'password'\" maxlength=\"16\" \n              [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n          </div>\n          <mat-error class=\"error\" *ngIf=\"f.submitted && (password.invalid || confpassword.invalid)\">\n            <mat-error *ngIf=\"password.errors.required\" >password is required</mat-error>\n            <mat-error *ngIf=\"confpassword.errors.required\" >conf password is required</mat-error>\n          </mat-error>\n\n\n          <div fxLayout=row fxLayoutAlign=center fxLayoutGap=\"10%\">\n              <div  *ngFor=\"let data of card\" class=div>\n              <mat-card  class=notSelected >\n                \n                <div fxFlex=column fxLayoutGap=\"10%\">\n                    <div class=font_20>price: ${{data.price}} per month</div>\n                    <div class=blue>{{data.name}}</div>\n                        <li class=features>${{data.price}}/month</li>\n                        <li class=features>{{data.description}}</li>\n                  </div>\n              </mat-card>\n              <mat-card [ngClass]=\"data.id==cardId ? 'cardSelected' : 'card'\">\n                  <div *ngIf=\"data.id==cardId\" class=add>SELECTED</div>\n                  <div *ngIf=\"data.id!=cardId\" class=add>ADD TO CART</div>\n              </mat-card>\n             \n          </div>\n         \n        </div>\n\n\n          <div class=\"back\" (click)=signin()>Sign in instead</div>\n          <div fxLayoutAlign=\"end\"><button mat-button class=mat_button type=\"submit\" routerLink=\".\"\n            (click)=\"signup()\">Sign Up</button></div>\n\n        </form>\n      </mat-card>\n      <!-- ****************************matcard end****************************** -->        \n\n    </div>\n\n    <div fxFlex.lg=\"27%\" fxFlex.md=\"10%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n  </div>\n  <div fxFlex.lg=\"2%\" fxFlex.md=\"0%\" fxFlex.sm=\"0%\" fxFlex.xs=\"0%\"></div>\n</div>"

/***/ }),

/***/ "./src/app/component/signup/signup.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/signup/signup.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 599px) {\n  .card {\n    width: 124px;\n    margin-top: -111%;\n    padding: 119% 0% 0% 15%;\n    margin-left: 10%;\n    background-color: #acacac;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .cardSelected {\n    width: 124px;\n    margin-top: -111%;\n    padding: 119% 0% 0% 15%;\n    margin-left: 10%;\n    background-color: #fb0;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .notSelected {\n    width: 120px;\n    z-index: 10;\n    height: 200px; }\n  .font_20 {\n    font-size: 15px; }\n  .features {\n    margin-top: 10px;\n    font-size: 9px; }\n  .add {\n    font-size: 10px; } }\n\n@media only screen and (min-width: 600px) {\n  .card {\n    width: 220px;\n    margin-top: -72%;\n    padding: 75% 0% 7% 15%;\n    margin-left: 10%;\n    background-color: #acacac;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .cardSelected {\n    width: 220px;\n    margin-top: -72%;\n    padding: 75% 0% 7% 15%;\n    margin-left: 10%;\n    background-color: #fb0;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex; }\n  .notSelected {\n    width: 220px;\n    z-index: 10;\n    height: 200px; }\n  .font_25 {\n    font-size: 25px; }\n  .font_20 {\n    font-size: 20px; }\n  .features {\n    margin-top: 10px;\n    font-size: 12px; }\n  .add {\n    font-size: 17px; } }\n\n.cart {\n  background-color: #727272;\n  padding: 1%;\n  border-radius: 2px;\n  float: right;\n  color: white;\n  border: #333232;\n  cursor: pointer; }\n\n.example-container {\n  max-width: 250px;\n  width: 100%; }\n\n.email {\n  max-width: 300px;\n  width: 100%; }\n\n.firstInput {\n  max-width: 250px;\n  width: 100%; }\n\n.lastInput {\n  margin: 0px 0px 0px 3px;\n  max-width: 250px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/component/signup/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/data/data.service */ "./src/app/core/services/data/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> signup.component.ts
 *
 *  Purpose         : To signup to a account
 *
 *  @file           : signup.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/







var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService, snackBar, router, dataService) {
        this.signupService = signupService;
        this.snackBar = snackBar;
        this.router = router;
        this.dataService = dataService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.service = "";
        this.model = {
            "firstname": "",
            "lastname": "",
            "email": "",
            "password": "",
            "confpassword": ""
        };
        this.card = [];
        this.cardId = "";
        this.cartId = localStorage.getItem("productCartId");
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getCardDetails();
        this.getService();
    };
    /**
     *
     * @description getting details of cart
     */
    SignupComponent.prototype.getCardDetails = function () {
        var _this = this;
        this.signupService.getCardDetails(this.cartId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.cardId = response["data"].product.id;
        }, function (error) {
        });
    };
    /**
     *
     * @description selecting product
     */
    SignupComponent.prototype.goToCart = function () {
        this.router.navigateByUrl('/card');
    };
    /**
     *
     * @description getting the service cards
     */
    SignupComponent.prototype.getService = function () {
        var _this = this;
        this.signupService.getService()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            for (var i = 0; i < response["data"].data.length; i++) {
                response["data"].data[i].select = false;
                _this.card.push(response["data"].data[i]);
            }
            for (var j = 0; j < _this.card.length; j++) {
                if (_this.card[j].id == _this.cardId)
                    _this.service = _this.card[j].name;
            }
        });
    };
    /**
     *
     * @description user signup
     */
    SignupComponent.prototype.signup = function () {
        var _this = this;
        /**
         *
         * @description checking the details are filled or not
         */
        if (this.model.firstname.length == 0 || this.model.lastname.length == 0 || this.model.email.length == 0 ||
            this.model.password.length == 0 || this.model.confpassword.length == 0) {
            this.snackBar.open("failed", "please fill all the details", {
                duration: 2000,
            });
            return;
        }
        /**
         *
         * @description card selection
         */
        if (this.service.length == 0) {
            this.snackBar.open("card is required", "select a card", {
                duration: 2000,
            });
            return;
        }
        /**
         *
         * @description checking the passwords are matching
         */
        if (this.model.password != this.model.confpassword) {
            this.snackBar.open("failed", "passwords are not matching", {
                duration: 2000,
            });
            return;
        }
        /**
         *
         * @description validation for names and email
         */
        var regexName = /^[a-z]+(([',. -][ a-z])?[a-z]*)*$/;
        var regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (regexName.test(this.model.firstname) == false) {
            this.snackBar.open("failed", "invalid firstname", {
                duration: 2000,
            });
            return;
        }
        if (regexName.test(this.model.lastname) == false) {
            this.snackBar.open("failed", "invalid lastname", {
                duration: 2000,
            });
            return;
        }
        if (regexEmail.test(this.model.email) == false) {
            this.snackBar.open("failed", "invalid email", {
                duration: 2000,
            });
            return;
        }
        var body = {
            "firstName": this.model.firstname,
            "lastName": this.model.lastname,
            "service": this.service,
            "email": this.model.email,
            "password": this.model.password,
            "cartId": this.cartId
        };
        this.signupService.userSignup(body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            /**
             *
             * @description if the registration is success then it will directly take to login page
             */
            _this.router.navigateByUrl('/login');
        }, function (error) {
            _this.snackBar.open("failed", "something bad happened", {
                duration: 2000,
            });
        });
    };
    /**
     *
     * @description already have account
     */
    SignupComponent.prototype.signin = function () {
        this.router.navigateByUrl('/login');
    };
    /**
     *
     * @description unsubscribing
     */
    SignupComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/component/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/component/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/component/trash/trash.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/trash/trash.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-notes-list *ngIf=\"spinnerValue==false\" [notes]=\"trashList\" (anyChanges)=onChange($event) ></app-notes-list>\n<app-loader *ngIf=\"spinnerValue==true\"></app-loader>\n"

/***/ }),

/***/ "./src/app/component/trash/trash.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/trash/trash.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/trash/trash.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/trash/trash.component.ts ***!
  \****************************************************/
/*! exports provided: TrashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrashComponent", function() { return TrashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/notes/notes.service */ "./src/app/core/services/notes/notes.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/******************************************************************************
 *  Execution       :   1. default node         cmd> trash.component.ts
 *
 *  Purpose         : To get list of trashed notes
 *
 *  @file           : trash.component.ts
 *  @author         : simani meher
 *  @version        : 1.0
 *  @since          : 19-10-2018
 *
 ******************************************************************************/




var TrashComponent = /** @class */ (function () {
    function TrashComponent(trashService) {
        this.trashService = trashService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.notes = [];
        this.trashList = [];
        this.spinnerValue = true;
    }
    TrashComponent.prototype.ngOnInit = function () {
        this.getTrashList();
    };
    TrashComponent.prototype.onChange = function (event) {
        if (event) {
            this.getTrashList();
        }
    };
    /**
     *
     * @description getting the trashed notes list
     */
    TrashComponent.prototype.getTrashList = function () {
        var _this = this;
        this.trashService.getTrashNotes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(function (response) {
            _this.notes = response["data"].data;
            _this.trashList = [];
            for (var i = _this.notes.length; i > 0; i--) {
                _this.trashList.push(_this.notes[i - 1]);
            }
            _this.spinnerValue = false;
        }, function (error) {
        });
    };
    /**
     *
     * @description unsubscribing
     */
    TrashComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    TrashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trash',
            template: __webpack_require__(/*! ./trash.component.html */ "./src/app/component/trash/trash.component.html"),
            styles: [__webpack_require__(/*! ./trash.component.scss */ "./src/app/component/trash/trash.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_notes_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], TrashComponent);
    return TrashComponent;
}());



/***/ }),

/***/ "./src/app/core/pipe/search-note.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/core/pipe/search-note.pipe.ts ***!
  \***********************************************/
/*! exports provided: SearchNotePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNotePipe", function() { return SearchNotePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchNotePipe = /** @class */ (function () {
    function SearchNotePipe() {
    }
    SearchNotePipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return (JSON.stringify(item.title).toLowerCase().includes(args) || JSON.stringify(item.description).toLowerCase().includes(args));
        });
    };
    SearchNotePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchNote'
        })
    ], SearchNotePipe);
    return SearchNotePipe;
}());



/***/ }),

/***/ "./src/app/core/pipe/search.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/core/pipe/search.pipe.ts ***!
  \******************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return (JSON.stringify(item).toLowerCase().includes(args));
        });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/core/services/auth/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/auth/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('fundooUserToken')) {
            return true;
        }
        window.location.href = "/login";
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/data/data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/data/data.service.ts ***!
  \****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    // currentMessageCard = this.messageSourceCard.asObservable();
    function DataService() {
        this.messageSourceSearch = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        this.messageSourceLabel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        this.messageSourceReminder = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
        this.viewSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.viewHidden = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        // private messageSourceCard = new BehaviorSubject('default');
        this.currentMessageSearch = this.messageSourceSearch.asObservable();
        this.currentMessageLabel = this.messageSourceLabel.asObservable();
        this.currentMessageView = this.viewSource.asObservable();
        this.currentMessageReminder = this.messageSourceReminder.asObservable();
        this.currentMessageViewHide = this.viewHidden.asObservable();
    }
    // changeMessageCard(message: string) {
    //   this.messageSourceCard.next(message)
    // }
    DataService.prototype.changeMessageSearch = function (message) {
        this.messageSourceSearch.next(message);
    };
    DataService.prototype.changeMessageLabel = function (message) {
        this.messageSourceLabel.next(message);
    };
    DataService.prototype.changeMessageReminder = function (message) {
        this.messageSourceReminder.next(message);
    };
    DataService.prototype.changeView = function (message) {
        this.viewSource.next(message);
    };
    DataService.prototype.hideView = function (message) {
        this.viewHidden.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/error_handler/errors-handler.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/services/error_handler/errors-handler.ts ***!
  \***************************************************************/
/*! exports provided: ErrorsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsHandler", function() { return ErrorsHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorsHandler = /** @class */ (function () {
    function ErrorsHandler() {
    }
    ErrorsHandler.prototype.handleError = function (error) {
        //  if (error instanceof HttpErrorResponse) {
        //     // Server or connection error happened
        //     if (!navigator.onLine) {
        //       // Handle offline error
        //     } else {
        //       // Handle Http Error (error.status === 403, 404...)
        //     }
        //  } else {
        //    // Handle Client Error (Angular Error, ReferenceError...)     
        //  }
        // Log the error anyway
        console.error('ERROR : ', error);
    };
    ErrorsHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorsHandler);
    return ErrorsHandler;
}());



/***/ }),

/***/ "./src/app/core/services/firebase/firebase.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/services/firebase/firebase.service.ts ***!
  \************************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            'messagingSenderId': '263147610417'
        });
        this.messaging = firebase__WEBPACK_IMPORTED_MODULE_1__["messaging"]();
    }
    FirebaseService.prototype.getPermission = function () {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            return _this.messaging.getToken();
        })
            .then(function (token) {
            localStorage.setItem("fundooUserPushToken", token);
        })
            .catch(function (err) {
        });
    };
    FirebaseService.prototype.receiveMessage = function () {
        this.messaging.onMessage(function (payload) {
        });
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/core/services/http/http.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/http/http.service.ts ***!
  \****************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    /**
     *@description post methods
     */
    HttpService.prototype.postData = function (path, body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path, body);
    };
    HttpService.prototype.postDataForJSON = function (path, body) {
        var httpAuthOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path, body, httpAuthOptions);
    };
    HttpService.prototype.postDataForEncoded = function (path, body) {
        var httpAuthOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path, body, httpAuthOptions);
    };
    HttpService.prototype.postDataWithoutToken = function (path, body) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path, body, {});
    };
    /*******************************************************************/
    /**
     *@description delete methods
     */
    HttpService.prototype.deleteData = function (path) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path);
    };
    /*******************************************************************/
    /**
     *@description get methods
     */
    HttpService.prototype.getData = function (path) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path, {});
    };
    HttpService.prototype.getData2 = function (path) {
        var httpAuthOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + path, httpAuthOptions);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/services/intercept/intercept.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/services/intercept/intercept.service.ts ***!
  \**************************************************************/
/*! exports provided: InterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptService", function() { return InterceptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterceptService = /** @class */ (function () {
    function InterceptService() {
    }
    InterceptService.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "" + localStorage.getItem('fundooUserToken')
            }
        });
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            // if (event instanceof HttpResponse) {
            // }
        }, function (error) {
        }));
    };
    ;
    InterceptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InterceptService);
    return InterceptService;
}());



/***/ }),

/***/ "./src/app/core/services/logger/logger.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/logger/logger.service.ts ***!
  \********************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.log = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.log(msg, obj);
    };
    LoggerService.error = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.error(msg, obj);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/notes/notes.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/notes/notes.service.ts ***!
  \******************************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/core/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesService = /** @class */ (function () {
    function NotesService(service) {
        this.service = service;
    }
    /*******************Notes*****************/
    NotesService.prototype.updateNotes = function (body) {
        return this.service.postDataForJSON("/notes/updateNotes", body);
    };
    NotesService.prototype.addNote = function (body) {
        return this.service.postDataForEncoded("/notes/addNotes", body);
    };
    NotesService.prototype.deleteNote = function (body) {
        return this.service.postDataForJSON("/notes/trashNotes", body);
    };
    NotesService.prototype.permanentDeleteNote = function (body) {
        return this.service.postDataForJSON("/notes/deleteForeverNotes", body);
    };
    NotesService.prototype.getNoteList = function () {
        return this.service.getData2("/notes/getNotesList");
    };
    /***********************************************/
    /***************archive***********************/
    NotesService.prototype.archiveNote = function (body) {
        return this.service.postDataForJSON("/notes/archiveNotes", body);
    };
    NotesService.prototype.getArchivedList = function () {
        return this.service.getData2("/notes/getArchiveNotesList");
    };
    /**********************************************/
    /*********************Label********************/
    NotesService.prototype.removeLabelFromNotes = function (cardId, labelId) {
        return this.service.postDataForJSON("/notes/" + cardId + "/addLabelToNotes/" + labelId + "/remove", {});
    };
    NotesService.prototype.addLabelToNotes = function (cardId, labelId) {
        return this.service.postDataForJSON("/notes/" + cardId + "/addLabelToNotes/" + labelId + "/add", {});
    };
    NotesService.prototype.showNoteLabels = function () {
        return this.service.getData2("/noteLabels/getNoteLabelList");
    };
    NotesService.prototype.deleteLabel = function (labelId) {
        return this.service.deleteData("/noteLabels/" + labelId + "/deleteNoteLabel");
    };
    NotesService.prototype.updateLabel = function (labelId, body) {
        return this.service.postDataForJSON("/noteLabels/" + labelId + "/updateNoteLabel", body);
    };
    NotesService.prototype.createLabel = function (body) {
        return this.service.postDataForJSON("/noteLabels", body);
    };
    NotesService.prototype.getNotelistByLabel = function (label) {
        return this.service.postDataForJSON("/notes/getNotesListByLabel/" + label, {});
    };
    /*******************************************/
    /******************CheckList*****************/
    NotesService.prototype.updateCheckList = function (noteId, listId, body) {
        return this.service.postDataForJSON("/notes/" + noteId + "/checklist/" + listId + "/update", body);
    };
    NotesService.prototype.addCheckList = function (noteId, body) {
        return this.service.postDataForJSON("/notes/" + noteId + "/checklist/add", body);
    };
    NotesService.prototype.removeChecklist = function (noteId, listId) {
        return this.service.postDataForJSON("/notes/" + noteId + "/checklist/" + listId + "/remove", {});
    };
    /********************************************/
    NotesService.prototype.cardColorChange = function (body) {
        return this.service.postDataForJSON("/notes/changesColorNotes", body);
    };
    NotesService.prototype.pinChange = function (body) {
        return this.service.postDataForJSON("/notes/pinUnpinNotes", body);
    };
    NotesService.prototype.getTrashNotes = function () {
        return this.service.getData2("/notes/getTrashNotesList");
    };
    NotesService.prototype.addUpdateReminder = function (body) {
        return this.service.postDataForJSON("/notes/addUpdateReminderNotes", body);
    };
    NotesService.prototype.removeReminder = function (body) {
        return this.service.postDataForJSON("/notes/removeReminderNotes", body);
    };
    NotesService.prototype.getRemindersLIst = function () {
        return this.service.getData2("/notes/getReminderNotesList");
    };
    NotesService.prototype.addColaborator = function (body, id) {
        return this.service.postDataForJSON("/notes/" + id + "/AddcollaboratorsNotes", body);
    };
    NotesService.prototype.removeColaborator = function (noteId, userId) {
        return this.service.deleteData("/notes/" + noteId + "/removeCollaboratorsNotes/" + userId);
    };
    NotesService.prototype.getNoteById = function (id) {
        return this.service.getData2("/notes/getNotesDetail/" + id);
    };
    NotesService.prototype.addAQuestion = function (body) {
        return this.service.postDataForJSON("/questionAndAnswerNotes/addQuestionAndAnswer", body);
    };
    NotesService.prototype.addLike = function (body, parentId) {
        return this.service.postDataForJSON("/questionAndAnswerNotes/like/" + parentId, body);
    };
    NotesService.prototype.addReply = function (body, parentId) {
        return this.service.postDataForJSON("/questionAndAnswerNotes/reply/" + parentId, body);
    };
    NotesService.prototype.addrating = function (body, parentId) {
        return this.service.postDataForJSON("/questionAndAnswerNotes/rate/" + parentId, body);
    };
    NotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/core/services/user/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/http.service */ "./src/app/core/services/http/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(service) {
        this.service = service;
    }
    UserService.prototype.forgotPassword = function (body) {
        return this.service.postDataWithoutToken("/user/reset", body);
    };
    UserService.prototype.userLogin = function (body) {
        return this.service.postDataWithoutToken("/user/login", body);
    };
    UserService.prototype.pushLogin = function (body) {
        return this.service.postDataForJSON("/user/registerPushToken", body);
    };
    UserService.prototype.userLogout = function () {
        return this.service.postDataForJSON("/user/logout", {});
    };
    UserService.prototype.addProfileImage = function (body) {
        return this.service.postData('/user/uploadProfileImage', body);
    };
    UserService.prototype.resetPassword = function (body) {
        return this.service.postDataForEncoded("/user/reset-password", body);
    };
    UserService.prototype.getService = function () {
        return this.service.getData("/user/service");
    };
    UserService.prototype.userSignup = function (body) {
        return this.service.postDataWithoutToken("/user/userSignUp", body);
    };
    UserService.prototype.searchUserList = function (body) {
        return this.service.postDataForJSON("/user/searchUserList", body);
    };
    UserService.prototype.addToCart = function (body) {
        return this.service.postDataWithoutToken("/productcarts/addToCart", body);
    };
    UserService.prototype.getCardDetails = function (cartId) {
        return this.service.getData("/productcarts/getCartDetails/" + cartId);
    };
    UserService.prototype.placeOrder = function (body) {
        return this.service.postDataForJSON("/productcarts/placeOrder", body);
    };
    UserService.prototype.getmyCart = function () {
        return this.service.getData("/productcarts/myCart");
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    baseUrl: "https://fundoonotes.incubation.bridgelabz.com/api", 
    Url: "https://fundoonotes.incubation.bridgelabz.com/",
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abc/www/production/fundooNotes-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
