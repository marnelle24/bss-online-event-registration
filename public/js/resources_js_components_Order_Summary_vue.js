"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Order_Summary_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Summary.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Summary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    if (!this.$store.state.order.length) this.$router.push({
      name: 'order.checkout'
    });
  },
  methods: {
    cartLineTotal: function cartLineTotal(item) {
      var amount = item.price * item.pivot.quantity;
      amount = amount / 100;
      return amount.toLocaleString('en-SG', {
        style: 'currency',
        currency: 'SGD'
      });
    }
  },
  computed: {
    order: function order() {
      return this.$store.state.order;
    },
    orderQuantity: function orderQuantity() {
      return this.$store.state.order.events.reduce(function (acc, item) {
        return acc + item.pivot.quantity;
      }, 0);
    },
    orderTotal: function orderTotal() {
      var amount = this.$store.state.order.events.reduce(function (acc, item) {
        return acc + item.price * item.pivot.quantity;
      }, 0);
      amount = amount / 100;
      return amount.toLocaleString('en-SG', {
        style: 'currency',
        currency: 'SGD'
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Order/Summary.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Order/Summary.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary_vue_vue_type_template_id_4fc286ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=4fc286ea& */ "./resources/js/components/Order/Summary.vue?vue&type=template&id=4fc286ea&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/components/Order/Summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Summary_vue_vue_type_template_id_4fc286ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _Summary_vue_vue_type_template_id_4fc286ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Order/Summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Order/Summary.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Order/Summary.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Order/Summary.vue?vue&type=template&id=4fc286ea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Order/Summary.vue?vue&type=template&id=4fc286ea& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_4fc286ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_4fc286ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_4fc286ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=template&id=4fc286ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Summary.vue?vue&type=template&id=4fc286ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Summary.vue?vue&type=template&id=4fc286ea&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Order/Summary.vue?vue&type=template&id=4fc286ea& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-full" }, [
    this.$store.state.order.length
      ? _c(
          "div",
          { staticClass: "lg:w-2/3 w-full mx-auto mt-8 overflow-auto" },
          [
            _c("h2", {
              staticClass:
                "text-sm title-font text-gray-500 tracking-widest my-10",
              domProps: {
                textContent: _vm._s(
                  "Transaction ID: " + _vm.order.transaction_id
                ),
              },
            }),
            _vm._v(" "),
            _c(
              "h4",
              {
                staticClass:
                  "text-gray-900 text-2xl title-font font-medium mb-4",
              },
              [_vm._v("Thank you for your purchase")]
            ),
            _vm._v(" "),
            _c(
              "table",
              {
                staticClass:
                  "rounded-lg bg-white divide-y divide-gray-300 overflow-hidden w-full",
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.order.events, function (item) {
                      return _c(
                        "tr",
                        {
                          key: item.id,
                          staticClass: "border-b-2 border-gray-200",
                        },
                        [
                          _c("td", {
                            staticClass: "p-4",
                            domProps: { textContent: _vm._s(item.title) },
                          }),
                          _vm._v(" "),
                          _c("td", {
                            staticClass: "p-4",
                            domProps: {
                              textContent: _vm._s(item.pivot.quantity),
                            },
                          }),
                          _vm._v(" "),
                          _c("td", {
                            staticClass: "p-4",
                            domProps: {
                              textContent: _vm._s(_vm.cartLineTotal(item)),
                            },
                          }),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("tr", { staticClass: "border-t-2 bg-gray-100" }, [
                      _c("td", { staticClass: "p-4 font-bold text-left" }, [
                        _vm._v("Total Amount"),
                      ]),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "p-4 font-bold text-left",
                        domProps: { textContent: _vm._s(_vm.orderQuantity) },
                      }),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "p-4 font-bold text-left",
                        domProps: { textContent: _vm._s(_vm.orderTotal) },
                      }),
                    ]),
                  ],
                  2
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "rounded-full bg-green-600 text-white py-2 px-4 mt-8 hover:bg-green-700",
              },
              [_vm._v("Print Receipt")]
            ),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left",
          },
          [_vm._v("Item")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left",
          },
          [_vm._v("Quantity")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-4 tracking-wide font-medium text-gray-900 text-sm bg-gray-200 text-left",
          },
          [_vm._v("Price")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);