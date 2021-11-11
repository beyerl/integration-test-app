(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+oTD":
    /*!******************************************************************!*\
      !*** ./src/app/constants/test-data/wapi-integrationV2-export.ts ***!
      \******************************************************************/

    /*! exports provided: IntegrationV2ExportData */

    /***/
    function oTD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntegrationV2ExportData", function () {
        return IntegrationV2ExportData;
      });

      var IntegrationV2ExportData = {
        guid: {
          catalogItemKeyType: 'guid',
          catalogItemKey: '628397de-d8d9-415c-a9fe-80313e5b7f47',
          integrationKey: 'CC86E7CE-7E4D-45FE-A098-A58EF95F321E',
          url: 'https://localhost:44900/integration/v2/export/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?exportFormat=101&integrationKey=CC86E7CE-7E4D-45FE-A098-A58EF95F321E'
        },
        legacyPositionId: {
          catalogItemKeyType: 'legacyPositionId',
          catalogItemKey: '8',
          integrationKey: 'CC86E7CE-7E4D-45FE-A098-A58EF95F321E',
          url: 'https://localhost:44900/integration/v2/export/legacyPositionId/8?exportFormat=101&integrationKey=CC86E7CE-7E4D-45FE-A098-A58EF95F321E'
        },
        refnr: {
          catalogItemKeyType: 'refnr',
          catalogItemKey: 'CDD4FA66AFAE3477D4B17F8F29760E0D',
          integrationKey: '9d8d2f25-635b-4293-b23e-56354510ad53',
          url: 'https://localhost:44900/integration/v2/export/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?exportFormat=101&integrationKey=9d8d2f25-635b-4293-b23e-56354510ad53'
        },
        anr: {
          catalogItemKeyType: 'anr',
          catalogItemKey: '70005278',
          integrationKey: '2BA562E7-997D-4346-A8F8-FC30C47071EB',
          url: 'https://localhost:44900/integration/v2/export/anr/70005278?exportFormat=101&integrationKey=2BA562E7-997D-4346-A8F8-FC30C47071EB'
        }
      };
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
      /*! C:\repos\integration-test\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3EUf":
    /*!*************************************************************************!*\
      !*** ./src/app/constants/test-data/wapi-integrationV2-export-dialog.ts ***!
      \*************************************************************************/

    /*! exports provided: IntegrationV2ExportDialogData */

    /***/
    function EUf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntegrationV2ExportDialogData", function () {
        return IntegrationV2ExportDialogData;
      });

      var IntegrationV2ExportDialogData = {
        guid: {
          "catalogItemKeyType": "guid",
          "catalogItemKey": "628397de-d8d9-415c-a9fe-80313e5b7f47",
          "integrationKey": "4D95054B-5A73-4FF5-B3E0-F521471CA664",
          "url": "https://localhost:44900/integration/v2/exportDialog/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?integrationKey=4D95054B-5A73-4FF5-B3E0-F521471CA664"
        },
        legacyPositionId: {
          "catalogItemKeyType": "legacyPositionId",
          "catalogItemKey": "8",
          "integrationKey": "4D95054B-5A73-4FF5-B3E0-F521471CA664",
          "url": "https://localhost:44900/integration/v2/exportDialog/legacyPositionId/8?integrationKey=4D95054B-5A73-4FF5-B3E0-F521471CA664"
        },
        refnr: {
          "catalogItemKeyType": "refnr",
          "catalogItemKey": "CDD4FA66AFAE3477D4B17F8F29760E0D",
          "integrationKey": "6EF97EE5-F330-411B-949A-CB039464F15A",
          "url": "https://localhost:44900/integration/v2/exportDialog/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?integrationKey=6EF97EE5-F330-411B-949A-CB039464F15A"
        },
        anr: {
          "catalogItemKeyType": "anr",
          "catalogItemKey": "70005278",
          "integrationKey": "5d38d4cb-7c7f-40b2-856e-afdd0ab1f687",
          "url": "https://localhost:44900/integration/v2/exportDialog/anr/70005278?integrationKey=5d38d4cb-7c7f-40b2-856e-afdd0ab1f687"
        }
      };
      /***/
    },

    /***/
    "4TER":
    /*!*******************************************************************!*\
      !*** ./src/app/view-logic/endpoint-nav/endpoint-nav.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EndpointNavComponent */

    /***/
    function TER(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndpointNavComponent", function () {
        return EndpointNavComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_endpoint_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./endpoint-nav.component.html */
      "I6gM");
      /* harmony import */


      var _endpoint_nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./endpoint-nav.component.css */
      "C7LK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_constants_test_data_wapi_integrationV2_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/constants/test-data/wapi-integrationV2-catalog */
      "qaMt");
      /* harmony import */


      var src_app_constants_test_data_wapi_integrationV2_catalog_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/constants/test-data/wapi-integrationV2-catalog-item */
      "yeB7");
      /* harmony import */


      var src_app_constants_test_data_wapi_integrationV2_export__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/constants/test-data/wapi-integrationV2-export */
      "+oTD");
      /* harmony import */


      var src_app_constants_test_data_wapi_integrationV2_export_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/constants/test-data/wapi-integrationV2-export-dialog */
      "3EUf");
      /* harmony import */


      var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/helpers/utils */
      "BGy5");
      /* harmony import */


      var src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/endpoint.models */
      "dSH7");
      /* harmony import */


      var src_app_services_environment_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/environment.model */
      "B9W6");
      /* harmony import */


      var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/services/environment.service */
      "qmmW");

      var EndpointNavComponent = /*#__PURE__*/function () {
        function EndpointNavComponent(environmentService, router) {
          var _this = this;

          _classCallCheck(this, EndpointNavComponent);

          this.environmentService = environmentService;
          this.router = router;
          this.dropdowns = [{
            title: "Katalog-Integration",
            isCollapsed: true,
            btnClass: "bg-light",
            items: this.getDropdownItems(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].Catalog)
          }, {
            title: "Positions-Integration",
            isCollapsed: true,
            btnClass: "bg-light",
            link: "/catalog-item-test",
            items: this.getDropdownItems(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].CatalogItem)
          }, {
            title: "Export-Dialog-Integration",
            isCollapsed: true,
            btnClass: "bg-light",
            link: "/export-dialog-test",
            items: this.getDropdownItems(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].ExportDialog)
          }, {
            title: "Direkter Export",
            isCollapsed: true,
            btnClass: "bg-light",
            link: "/direct-export-test",
            items: this.getDropdownItems(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].DirectExport)
          }, {
            title: "Environment",
            isCollapsed: true,
            btnClass: "bg-primary",
            items: Object.keys(src_app_services_environment_model__WEBPACK_IMPORTED_MODULE_11__["Environment"]).map(function (key) {
              return {
                key: key,
                title: src_app_services_environment_model__WEBPACK_IMPORTED_MODULE_11__["Environment"][key].title,
                onClick: function onClick(key) {
                  return _this.onEnvironmentClick(key);
                }
              };
            })
          }];
          this.currentEnvironment = src_app_services_environment_model__WEBPACK_IMPORTED_MODULE_11__["Environment"].localhost;

          this.onDropdownItemClick = function (integrationType, usecase) {
            _this.router.navigateByUrl("/".concat(integrationType, "/").concat(usecase));
          };

          this.onEnvironmentClick = function (key) {
            if (!key) return;

            _this.environmentService.set(src_app_services_environment_model__WEBPACK_IMPORTED_MODULE_11__["Environment"][key]);
          };
        }

        _createClass(EndpointNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.environmentSubscription = this.environmentService.getAsObservable().subscribe(function (environment) {
              return _this2.currentEnvironment = environment;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.environmentSubscription.unsubscribe();
          }
        }, {
          key: "getDropdownItems",
          value: function getDropdownItems(integrationType) {
            switch (integrationType) {
              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].Catalog:
                {
                  return this.processGetDropdownItems(src_app_constants_test_data_wapi_integrationV2_catalog__WEBPACK_IMPORTED_MODULE_5__["IntegrationV2CatalogData"], integrationType);
                }

              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].CatalogItem:
                {
                  return this.processGetDropdownItems(src_app_constants_test_data_wapi_integrationV2_catalog_item__WEBPACK_IMPORTED_MODULE_6__["IntegrationV2CatalogItemData"], integrationType);
                }

              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].ExportDialog:
                {
                  return this.processGetDropdownItems(src_app_constants_test_data_wapi_integrationV2_export_dialog__WEBPACK_IMPORTED_MODULE_8__["IntegrationV2ExportDialogData"], integrationType);
                }

              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_10__["IIntegrationType"].DirectExport:
                {
                  return this.processGetDropdownItems(src_app_constants_test_data_wapi_integrationV2_export__WEBPACK_IMPORTED_MODULE_7__["IntegrationV2ExportData"], integrationType);
                }
            }
          }
        }, {
          key: "processGetDropdownItems",
          value: function processGetDropdownItems(testData, integrationType) {
            var _this3 = this;

            return Object.keys(testData).map(function (key) {
              return {
                key: key,
                title: Object(src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["firstLetterToUpper"])(key),
                onClick: function onClick(key) {
                  _this3.onDropdownItemClick(integrationType, key);
                }
              };
            });
          }
        }]);

        return EndpointNavComponent;
      }();

      EndpointNavComponent.ctorParameters = function () {
        return [{
          type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_12__["EnvironmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      EndpointNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-endpoint-nav',
        template: _raw_loader_endpoint_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_endpoint_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EndpointNavComponent);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */";
      /***/
    },

    /***/
    "AdMs":
    /*!*******************************************!*\
      !*** ./src/app/services/usecase.model.ts ***!
      \*******************************************/

    /*! exports provided: IUsecase */

    /***/
    function AdMs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IUsecase", function () {
        return IUsecase;
      });

      var IUsecase;

      (function (IUsecase) {
        IUsecase["Default"] = "default";
        IUsecase["Search"] = "search";
        IUsecase["Guid"] = "guid";
        IUsecase["LegacyPositionId"] = "legacyPositionId";
        IUsecase["Anr"] = "anr";
        IUsecase["Refnr"] = "refnr";
      })(IUsecase || (IUsecase = {}));
      /***/

    },

    /***/
    "B9W6":
    /*!***********************************************!*\
      !*** ./src/app/services/environment.model.ts ***!
      \***********************************************/

    /*! exports provided: Environment */

    /***/
    function B9W6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Environment", function () {
        return Environment;
      });

      var Environment = {
        localhost: {
          title: "Localhost",
          domain: "https://localhost:44900"
        },
        localhostIE: {
          title: "LocalhostIE",
          domain: "https://localhost:44950"
        },
        dev: {
          title: "Dev",
          domain: "https://dev.ade.adesystem.net"
        },
        qs: {
          title: "Qs",
          domain: "https://qs.ade.adesystem.net"
        },
        prod: {
          title: "Prod",
          domain: "https://beta.ausschreiben.de"
        }
      };
      /***/
    },

    /***/
    "BGy5":
    /*!**********************************!*\
      !*** ./src/app/helpers/utils.ts ***!
      \**********************************/

    /*! exports provided: isNullishOrEmptyString, firstLetterToUpper */

    /***/
    function BGy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNullishOrEmptyString", function () {
        return isNullishOrEmptyString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "firstLetterToUpper", function () {
        return firstLetterToUpper;
      });

      var isNullishOrEmptyString = function isNullishOrEmptyString(value) {
        return value === null || typeof value === 'undefined' || value === '';
      };

      var firstLetterToUpper = function firstLetterToUpper(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      };
      /***/

    },

    /***/
    "C7LK":
    /*!********************************************************************!*\
      !*** ./src/app/view-logic/endpoint-nav/endpoint-nav.component.css ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function C7LK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRwb2ludC1uYXYuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "DIg/":
    /*!********************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function DIg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "E+pt":
    /*!*************************************!*\
      !*** ./src/app/constants/config.ts ***!
      \*************************************/

    /*! exports provided: ApiUrlSegment */

    /***/
    function EPt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiUrlSegment", function () {
        return ApiUrlSegment;
      });

      var ApiUrlSegment = "integration/v2";
      /***/
    },

    /***/
    "FeNy":
    /*!************************************************************!*\
      !*** ./src/app/view-logic/endpoint/endpoint.component.css ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function FeNy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\r\n    height: 100%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6ImVuZHBvaW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxufSJdfQ== */";
      /***/
    },

    /***/
    "I6gM":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-logic/endpoint-nav/endpoint-nav.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I6gM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-navbar [brandName]=\"currentEnvironment?.title\" [dropdowns]=\"dropdowns\"></app-navbar>";
      /***/
    },

    /***/
    "Klhu":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-logic/endpoint/endpoint.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Klhu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"h-100 d-flex flex-column\">\r\n    <div class=\"flex-grow-1\">\r\n        URL: {{getIframeSrc(endpoint)}}\r\n    </div>\r\n    <app-iframe class=\"h-100\" *ngIf=\"getDoesIntegrationTypeRequireIframe(endpoint.integrationType); else link\"\r\n        [iframeSrc]=\"getIframeSrc(endpoint)\">\r\n    </app-iframe>\r\n    <ng-template #link>\r\n        <a [href]=\"getIframeSrc(endpoint)\">Download</a>\r\n    </ng-template>\r\n</div>";
      /***/
    },

    /***/
    "S6fu":
    /*!***********************************************************!*\
      !*** ./src/app/view-logic/endpoint/endpoint.component.ts ***!
      \***********************************************************/

    /*! exports provided: EndpointComponent */

    /***/
    function S6fu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndpointComponent", function () {
        return EndpointComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_endpoint_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./endpoint.component.html */
      "Klhu");
      /* harmony import */


      var _endpoint_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./endpoint.component.css */
      "FeNy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/environment.service */
      "qmmW");
      /* harmony import */


      var src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/endpoint.models */
      "dSH7");
      /* harmony import */


      var src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/endpoint.service */
      "mnBg");
      /* harmony import */


      var src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/helpers/utils */
      "BGy5");

      var EndpointComponent = /*#__PURE__*/function () {
        function EndpointComponent(environmentService, route, endpointService) {
          _classCallCheck(this, EndpointComponent);

          this.environmentService = environmentService;
          this.route = route;
          this.endpointService = endpointService;
        }

        _createClass(EndpointComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var environment$ = this.environmentService.getAsObservable();
            var route$ = this.route.params;
            this.endpointSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([environment$, route$]).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  environment = _ref2[0],
                  route = _ref2[1];

              return _this4.endpoint = _this4.endpointService.getEndpoint(environment, route.integrationType, route.usecase);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.endpointSubscription.unsubscribe();
          }
        }, {
          key: "getIframeSrc",
          value: function getIframeSrc(endpoint) {
            switch (endpoint.integrationType) {
              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].Catalog:
                return !Object(src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isNullishOrEmptyString"])(endpoint.catalogItemKeyType) ? "".concat(endpoint.domain, "/").concat(endpoint.apiUrlSegment, "/").concat(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].Catalog, "/").concat(endpoint.catalogKey, "/").concat(endpoint.catalogItemKeyType, "/").concat(endpoint.catalogItemKey, "?integrationKey=").concat(endpoint.integrationKey) : !Object(src_app_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["isNullishOrEmptyString"])(endpoint.searchTerm) ? "".concat(endpoint.domain, "/").concat(endpoint.apiUrlSegment, "/").concat(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].Catalog, "/").concat(endpoint.catalogKey, "/search?searchTerm=").concat(endpoint.searchTerm, "&integrationKey=").concat(endpoint.integrationKey) : "".concat(endpoint.domain, "/").concat(endpoint.apiUrlSegment, "/").concat(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].Catalog, "/").concat(endpoint.catalogKey, "?integrationKey=").concat(endpoint.integrationKey);

              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].CatalogItem:
                return "".concat(endpoint.domain, "/").concat(endpoint.apiUrlSegment, "/").concat(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].CatalogItem, "/").concat(endpoint.catalogItemKeyType, "/").concat(endpoint.catalogItemKey, "?integrationKey=").concat(endpoint.integrationKey);

              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].ExportDialog:
                return "".concat(endpoint.domain, "/").concat(endpoint.apiUrlSegment, "/").concat(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].ExportDialog, "/").concat(endpoint.catalogItemKeyType, "/").concat(endpoint.catalogItemKey, "?integrationKey=").concat(endpoint.integrationKey);

              case src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].DirectExport:
                return "".concat(endpoint.domain, "/").concat(endpoint.apiUrlSegment, "/").concat(src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].DirectExport, "/").concat(endpoint.catalogItemKeyType, "/").concat(endpoint.catalogItemKey, "?integrationKey=").concat(endpoint.integrationKey, "&exportFormat=").concat(endpoint.exportFormat);

              default:
                throw new Error("Enum argument out of range for integrationtype ".concat(endpoint.integrationType));
            }
          }
        }, {
          key: "getDoesIntegrationTypeRequireIframe",
          value: function getDoesIntegrationTypeRequireIframe(integrationType) {
            return [src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].Catalog, src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].CatalogItem, src_app_services_endpoint_models__WEBPACK_IMPORTED_MODULE_7__["IIntegrationType"].ExportDialog].includes(integrationType);
          }
        }]);

        return EndpointComponent;
      }();

      EndpointComponent.ctorParameters = function () {
        return [{
          type: src_app_services_environment_service__WEBPACK_IMPORTED_MODULE_6__["EnvironmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_endpoint_service__WEBPACK_IMPORTED_MODULE_8__["EndpointService"]
        }];
      };

      EndpointComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-endpoint',
        template: _raw_loader_endpoint_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_endpoint_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EndpointComponent);
      /***/
    },

    /***/
    "S6iF":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function S6iF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"navbar-brand\">{{brandName}}</div>\n    <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\n        aria-controls=\"navbarCollapse\"><span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <hr>\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" [collapse]=\"isCollapsed\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item dropdown px-1\" dropdown #dropdown=\"bs-dropdown\" *ngFor=\"let dropdown of dropdowns; index as i\">\n                <button [id]=\"dropdown.title+'-button'\" dropdownToggle type=\"button\" class=\"btn {{dropdown.btnClass}} dropdown-toggle\"\n                    aria-controls=\"dropdown-basic\" (click)=\"onToggleDropdown(i)\">{{dropdown.title}}<span class=\"caret\"></span>\n                </button>\n                <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                    <li role=\"menuitem\" *ngFor=\"let item of dropdown.items\">\n                        <a class=\"dropdown-item\" (click)=\"item.onClick(item.key)\">{{item.title}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'my-app',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"h-100 d-flex flex-column\">\n    <app-endpoint-nav class=\"flex-grow-1\"></app-endpoint-nav>\n    <router-outlet></router-outlet>\n</div>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "+Cnu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/iframe/iframe.component */
      "xKbg");
      /* harmony import */


      var _view_logic_endpoint_endpoint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./view-logic/endpoint/endpoint.component */
      "S6fu");
      /* harmony import */


      var _view_logic_endpoint_nav_endpoint_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./view-logic/endpoint-nav/endpoint-nav.component */
      "4TER");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _components_iframe_iframe_component__WEBPACK_IMPORTED_MODULE_11__["IframeComponent"], _view_logic_endpoint_endpoint_component__WEBPACK_IMPORTED_MODULE_12__["EndpointComponent"], _view_logic_endpoint_nav_endpoint_nav_component__WEBPACK_IMPORTED_MODULE_13__["EndpointNavComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"],
          useValue: '/'
        }]
      })], AppModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
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
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "dSH7":
    /*!*********************************************!*\
      !*** ./src/app/services/endpoint.models.ts ***!
      \*********************************************/

    /*! exports provided: IIntegrationType */

    /***/
    function dSH7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IIntegrationType", function () {
        return IIntegrationType;
      });

      var IIntegrationType;

      (function (IIntegrationType) {
        IIntegrationType["Catalog"] = "catalog";
        IIntegrationType["CatalogItem"] = "catalogItem";
        IIntegrationType["ExportDialog"] = "exportDialog";
        IIntegrationType["DirectExport"] = "export";
      })(IIntegrationType || (IIntegrationType = {}));
      /***/

    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "S6iF");
      /* harmony import */


      var _navbar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.css */
      "DIg/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);

          this.isCollapsed = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log(this.dropdownElements);
          }
        }, {
          key: "onToggleDropdown",
          value: function onToggleDropdown(clickedIndex) {
            for (var i = 0; i < this.dropdownElements.length; i++) {
              if (i === clickedIndex) continue;
              this.dropdownElements.get(i).isOpen = false;
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [];
      };

      NavbarComponent.propDecorators = {
        brandName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dropdowns: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dropdownElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ["dropdown"]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "keim":
    /*!********************************************************!*\
      !*** ./src/app/components/iframe/iframe.component.css ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function keim(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZnJhbWUuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    "mnBg":
    /*!**********************************************!*\
      !*** ./src/app/services/endpoint.service.ts ***!
      \**********************************************/

    /*! exports provided: EndpointService */

    /***/
    function mnBg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EndpointService", function () {
        return EndpointService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _constants_test_data_wapi_integrationV2_catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constants/test-data/wapi-integrationV2-catalog */
      "qaMt");
      /* harmony import */


      var _constants_test_data_wapi_integrationV2_catalog_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constants/test-data/wapi-integrationV2-catalog-item */
      "yeB7");
      /* harmony import */


      var _constants_test_data_wapi_integrationV2_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants/test-data/wapi-integrationV2-export */
      "+oTD");
      /* harmony import */


      var _constants_test_data_wapi_integrationV2_export_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../constants/test-data/wapi-integrationV2-export-dialog */
      "3EUf");
      /* harmony import */


      var _endpoint_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./endpoint.models */
      "dSH7");
      /* harmony import */


      var _constants_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../constants/config */
      "E+pt");

      var EndpointService = /*#__PURE__*/function () {
        function EndpointService() {
          _classCallCheck(this, EndpointService);
        }

        _createClass(EndpointService, [{
          key: "getEndpoint",
          value: function getEndpoint(environment, integrationType, usecase) {
            var testData = this.getTestData(integrationType, usecase);
            if (!testData) throw new Error("Testdata not found for integrationtype ".concat(integrationType, " and usecase ").concat(usecase));

            switch (integrationType) {
              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].Catalog:
                return {
                  domain: environment.domain,
                  integrationKey: testData.integrationKey,
                  apiUrlSegment: _constants_config__WEBPACK_IMPORTED_MODULE_7__["ApiUrlSegment"],
                  integrationType: integrationType,
                  catalogKey: testData.catalogKey,
                  catalogItemKeyType: testData.catalogItemKeyType,
                  catalogItemKey: testData.catalogItemKey,
                  searchTerm: testData.searchTerm
                };

              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].CatalogItem:
              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].ExportDialog:
                {
                  return {
                    domain: environment.domain,
                    integrationKey: testData.integrationKey,
                    apiUrlSegment: _constants_config__WEBPACK_IMPORTED_MODULE_7__["ApiUrlSegment"],
                    integrationType: integrationType,
                    catalogItemKeyType: testData.catalogItemKeyType,
                    catalogItemKey: testData.catalogItemKey
                  };
                }

              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].DirectExport:
                {
                  return {
                    domain: environment.domain,
                    integrationKey: testData.integrationKey,
                    apiUrlSegment: _constants_config__WEBPACK_IMPORTED_MODULE_7__["ApiUrlSegment"],
                    integrationType: integrationType,
                    catalogItemKeyType: testData.catalogItemKeyType,
                    catalogItemKey: testData.catalogItemKey,
                    exportFormat: "101"
                  };
                }

              default:
                throw new Error("Enum argument out of range for integrationtype ".concat(integrationType, " and usecase ").concat(usecase));
            }
          }
        }, {
          key: "getTestData",
          value: function getTestData(integrationType, usecase) {
            switch (integrationType) {
              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].Catalog:
                return _constants_test_data_wapi_integrationV2_catalog__WEBPACK_IMPORTED_MODULE_2__["IntegrationV2CatalogData"][usecase];

              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].CatalogItem:
                return _constants_test_data_wapi_integrationV2_catalog_item__WEBPACK_IMPORTED_MODULE_3__["IntegrationV2CatalogItemData"][usecase];

              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].ExportDialog:
                return _constants_test_data_wapi_integrationV2_export_dialog__WEBPACK_IMPORTED_MODULE_5__["IntegrationV2ExportDialogData"][usecase];

              case _endpoint_models__WEBPACK_IMPORTED_MODULE_6__["IIntegrationType"].DirectExport:
                return _constants_test_data_wapi_integrationV2_export__WEBPACK_IMPORTED_MODULE_4__["IntegrationV2ExportData"][usecase];

              default:
                throw new Error("Enum argument out of range for integrationtype ".concat(integrationType, " and usecase ").concat(usecase));
            }
          }
        }]);

        return EndpointService;
      }();

      EndpointService.ctorParameters = function () {
        return [];
      };

      EndpointService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EndpointService);
      /***/
    },

    /***/
    "qaMt":
    /*!*******************************************************************!*\
      !*** ./src/app/constants/test-data/wapi-integrationV2-catalog.ts ***!
      \*******************************************************************/

    /*! exports provided: IntegrationV2CatalogData */

    /***/
    function qaMt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntegrationV2CatalogData", function () {
        return IntegrationV2CatalogData;
      });

      var IntegrationV2CatalogData = {
        "default": {
          catalogKey: 'ade_next',
          catalogItemKeyType: '',
          catalogItemKey: '',
          searchTerm: '',
          integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
          url: 'https://localhost:44900/integration/v2/catalog/ade_next?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548'
        },
        search: {
          catalogKey: 'ade_next',
          catalogItemKeyType: '',
          catalogItemKey: '',
          searchTerm: 'FENSTER',
          integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
          url: 'https://localhost:44900/integration/v2/catalog/ade_next/search?searchTerm=FENSTER&integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548'
        },
        guid: {
          catalogKey: 'ade_next',
          catalogItemKeyType: 'guid',
          catalogItemKey: '628397de-d8d9-415c-a9fe-80313e5b7f47',
          searchTerm: '',
          integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
          url: 'https://localhost:44900/integration/v2/catalog/ade_next/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548'
        },
        legacyPositionId: {
          catalogKey: 'ade_next',
          catalogItemKeyType: 'legacyPositionId',
          catalogItemKey: '8',
          searchTerm: '',
          integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
          url: 'https://localhost:44900/integration/v2/catalog/ade_next/legacyPositionId/8?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548'
        },
        refnr: {
          catalogKey: 'lignatur',
          catalogItemKeyType: 'refnr',
          catalogItemKey: 'CDD4FA66AFAE3477D4B17F8F29760E0D',
          searchTerm: '',
          integrationKey: 'bcbbb642-9404-456a-9c12-711f39d8b3ff',
          url: 'https://localhost:44900/integration/v2/catalog/lignatur/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?integrationKey=bcbbb642-9404-456a-9c12-711f39d8b3ff'
        },
        anr: {
          catalogKey: 'cleanroom',
          catalogItemKeyType: 'anr',
          catalogItemKey: '70005278',
          searchTerm: '',
          integrationKey: 'BEA6CB45-D64B-4758-BE58-713A3C21C88C',
          url: 'https://localhost:44900/integration/v2/catalog/cleanroom/anr/70005278?integrationKey=BEA6CB45-D64B-4758-BE58-713A3C21C88C'
        }
      };
      /***/
    },

    /***/
    "qguy":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/iframe/iframe.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function qguy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<iframe class=\"h-100 w-100 border\" name=\"position\" frameBorder=\"0\" allow=\"fullscreen; clipboard-read; clipboard-write\"\n    [src]=\"sanitizedIFrameSrc\"></iframe>";
      /***/
    },

    /***/
    "qmmW":
    /*!*************************************************!*\
      !*** ./src/app/services/environment.service.ts ***!
      \*************************************************/

    /*! exports provided: EnvironmentService */

    /***/
    function qmmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnvironmentService", function () {
        return EnvironmentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "41Ph");
      /* harmony import */


      var _environment_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environment.model */
      "B9W6");

      var EnvironmentService = /*#__PURE__*/function () {
        function EnvironmentService() {
          _classCallCheck(this, EnvironmentService);

          this.currentEnvironment = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_environment_model__WEBPACK_IMPORTED_MODULE_3__["Environment"].localhost);
        }

        _createClass(EnvironmentService, [{
          key: "set",
          value: function set(value) {
            this.currentEnvironment.next(value);
          }
        }, {
          key: "getAsObservable",
          value: function getAsObservable() {
            return this.currentEnvironment.asObservable();
          }
        }]);

        return EnvironmentService;
      }();

      EnvironmentService.ctorParameters = function () {
        return [];
      };

      EnvironmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EnvironmentService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_endpoint_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/endpoint.models */
      "dSH7");
      /* harmony import */


      var _services_usecase_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/usecase.model */
      "AdMs");
      /* harmony import */


      var _view_logic_endpoint_endpoint_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./view-logic/endpoint/endpoint.component */
      "S6fu");

      var routes = [{
        path: ':integrationType/:usecase',
        component: _view_logic_endpoint_endpoint_component__WEBPACK_IMPORTED_MODULE_5__["EndpointComponent"]
      }, {
        path: '',
        redirectTo: "".concat(_services_endpoint_models__WEBPACK_IMPORTED_MODULE_3__["IIntegrationType"].Catalog, "/").concat(_services_usecase_model__WEBPACK_IMPORTED_MODULE_4__["IUsecase"].Default),
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: "".concat(_services_endpoint_models__WEBPACK_IMPORTED_MODULE_3__["IIntegrationType"].Catalog, "/").concat(_services_usecase_model__WEBPACK_IMPORTED_MODULE_4__["IUsecase"].Default)
      }]; // configures NgModule imports and exports

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xKbg":
    /*!*******************************************************!*\
      !*** ./src/app/components/iframe/iframe.component.ts ***!
      \*******************************************************/

    /*! exports provided: IframeComponent */

    /***/
    function xKbg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IframeComponent", function () {
        return IframeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./iframe.component.html */
      "qguy");
      /* harmony import */


      var _iframe_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./iframe.component.css */
      "keim");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var IframeComponent = /*#__PURE__*/function () {
        function IframeComponent(sanitizer) {
          _classCallCheck(this, IframeComponent);

          this.sanitizer = sanitizer;
        }

        _createClass(IframeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.sanitizedIFrameSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeSrc);
          }
        }]);

        return IframeComponent;
      }();

      IframeComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      };

      IframeComponent.propDecorators = {
        iframeSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      IframeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-iframe',
        template: _raw_loader_iframe_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_iframe_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IframeComponent);
      /***/
    },

    /***/
    "yeB7":
    /*!************************************************************************!*\
      !*** ./src/app/constants/test-data/wapi-integrationV2-catalog-item.ts ***!
      \************************************************************************/

    /*! exports provided: IntegrationV2CatalogItemData */

    /***/
    function yeB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntegrationV2CatalogItemData", function () {
        return IntegrationV2CatalogItemData;
      });

      var IntegrationV2CatalogItemData = {
        guid: {
          catalogItemKeyType: 'guid',
          catalogItemKey: '628397de-d8d9-415c-a9fe-80313e5b7f47',
          integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
          url: 'https://localhost:44900/integration/v2/catalogItem/guid/628397de-d8d9-415c-a9fe-80313e5b7f47?integrationKey=0B591F54-0BB6-44EF-8BAB-D94DC184C548'
        },
        legacyPositionId: {
          catalogItemKeyType: 'legacyPositionId',
          catalogItemKey: '8',
          integrationKey: '0B591F54-0BB6-44EF-8BAB-D94DC184C548',
          url: 'https://localhost:44900/integration/v2/catalogItem/legacyPositionId/8?integrationKey=DFA008BB-E1C9-4E0B-A5E9-48F78853D7A1'
        },
        refnr: {
          catalogItemKeyType: 'refnr',
          catalogItemKey: 'CDD4FA66AFAE3477D4B17F8F29760E0D',
          integrationKey: '50747C95-F939-401D-B8A2-C04E2F7D0E65',
          url: 'https://localhost:44900/integration/v2/catalogItem/refnr/CDD4FA66AFAE3477D4B17F8F29760E0D?integrationKey=50747C95-F939-401D-B8A2-C04E2F7D0E65'
        },
        anr: {
          catalogItemKeyType: 'anr',
          catalogItemKey: '70005278',
          integrationKey: 'BEA6CB45-D64B-4758-BE58-713A3C21C88C',
          url: 'https://localhost:44900/integration/v2/catalogItem/anr/70005278?integrationKey=BEA6CB45-D64B-4758-BE58-713A3C21C88C'
        }
      };
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map