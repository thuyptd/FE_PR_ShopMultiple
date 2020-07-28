(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/notes/Notes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Notes',
  data: function data() {
    return {
      items: [],

      /*
      fields: [
        {key: 'author'},
        {key: 'title'},
        {key: 'content'},
        {key: 'applies_to_date'},
        {key: 'status'},
        {key: 'note_type'},
        {key: 'show'},
        {key: 'edit'},
        {key: 'delete'}
      ],
      */
      fields: ['author', 'title', 'content', 'applies_to_date', 'status', 'note_type', 'show', 'edit', 'delete'],
      currentPage: 1,
      perPage: 5,
      totalRows: 0,
      you: null,
      message: '',
      showMessage: false,
      dismissSecs: 7,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  computed: {},
  methods: {
    getRowCount: function getRowCount(items) {
      return items.length;
    },
    noteLink: function noteLink(id) {
      return "notes/".concat(id.toString());
    },
    editLink: function editLink(id) {
      return "notes/".concat(id.toString(), "/edit");
    },
    showNote: function showNote(id) {
      var noteLink = this.noteLink(id);
      this.$router.push({
        path: noteLink
      });
    },
    editNote: function editNote(id) {
      var editLink = this.editLink(id);
      this.$router.push({
        path: editLink
      });
    },
    deleteNote: function deleteNote(id) {
      var self = this;
      var noteId = id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/notes/' + id + '?token=' + localStorage.getItem("api_token"), {
        _method: 'DELETE'
      }).then(function (response) {
        self.message = 'Successfully deleted note.';
        self.showAlert();
        self.getNotes();
      })["catch"](function (error) {
        console.log(error);
        self.$router.push({
          path: '/login'
        });
      });
    },
    createNote: function createNote() {
      this.$router.push({
        path: 'notes/create'
      });
    },
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert: function showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    getNotes: function getNotes() {
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/notes?token=' + localStorage.getItem("api_token")).then(function (response) {
        self.items = response.data;
      })["catch"](function (error) {
        console.log(error);
        self.$router.push({
          path: '/login'
        });
      });
    }
  },
  mounted: function mounted() {
    this.getNotes();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.card-body[data-v-3fdf29e4] table > tbody > tr > td {\r\n  cursor: pointer;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=template&id=3fdf29e4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/views/notes/Notes.vue?vue&type=template&id=3fdf29e4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { col: "12", xl: "12" } },
        [
          _c(
            "transition",
            { attrs: { name: "slide" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CButton",
                        {
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.createNote()
                            }
                          }
                        },
                        [_vm._v("Create Note")]
                      ),
                      _vm._v(" "),
                      _c(
                        "CAlert",
                        {
                          attrs: {
                            show: _vm.dismissCountDown,
                            color: "primary",
                            fade: ""
                          },
                          on: {
                            "update:show": function($event) {
                              _vm.dismissCountDown = $event
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n            (" +
                              _vm._s(_vm.dismissCountDown) +
                              ") " +
                              _vm._s(_vm.message) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("CDataTable", {
                        attrs: {
                          hover: "",
                          items: _vm.items,
                          fields: _vm.fields,
                          "items-per-page": 10,
                          pagination: ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "author",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("td", [
                                  _c("strong", [_vm._v(_vm._s(item.author))])
                                ])
                              ]
                            }
                          },
                          {
                            key: "title",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("td", [
                                  _c("strong", [_vm._v(_vm._s(item.title))])
                                ])
                              ]
                            }
                          },
                          {
                            key: "content",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("td", [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.content) +
                                      "\n              "
                                  )
                                ])
                              ]
                            }
                          },
                          {
                            key: "applies_to_date",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("td", [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(item.applies_to_date) +
                                      "\n              "
                                  )
                                ])
                              ]
                            }
                          },
                          {
                            key: "status",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "CBadge",
                                      { attrs: { color: item.status_class } },
                                      [_vm._v(_vm._s(item.status))]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "note_type",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("td", [
                                  _c("strong", [_vm._v(_vm._s(item.note_type))])
                                ])
                              ]
                            }
                          },
                          {
                            key: "show",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: { color: "primary" },
                                        on: {
                                          click: function($event) {
                                            return _vm.showNote(item.id)
                                          }
                                        }
                                      },
                                      [_vm._v("Show")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "edit",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        attrs: { color: "primary" },
                                        on: {
                                          click: function($event) {
                                            return _vm.editNote(item.id)
                                          }
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          },
                          {
                            key: "delete",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "td",
                                  [
                                    _vm.you != item.id
                                      ? _c(
                                          "CButton",
                                          {
                                            attrs: { color: "danger" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteNote(item.id)
                                              }
                                            }
                                          },
                                          [_vm._v("Delete")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/views/notes/Notes.vue":
/*!**************************************************!*\
  !*** ./resources/js/admin/views/notes/Notes.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notes_vue_vue_type_template_id_3fdf29e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notes.vue?vue&type=template&id=3fdf29e4&scoped=true& */ "./resources/js/admin/views/notes/Notes.vue?vue&type=template&id=3fdf29e4&scoped=true&");
/* harmony import */ var _Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notes.vue?vue&type=script&lang=js& */ "./resources/js/admin/views/notes/Notes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css& */ "./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notes_vue_vue_type_template_id_3fdf29e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notes_vue_vue_type_template_id_3fdf29e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fdf29e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/views/notes/Notes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/views/notes/Notes.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/views/notes/Notes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=style&index=0&id=3fdf29e4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_style_index_0_id_3fdf29e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/admin/views/notes/Notes.vue?vue&type=template&id=3fdf29e4&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/admin/views/notes/Notes.vue?vue&type=template&id=3fdf29e4&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_template_id_3fdf29e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Notes.vue?vue&type=template&id=3fdf29e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/views/notes/Notes.vue?vue&type=template&id=3fdf29e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_template_id_3fdf29e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notes_vue_vue_type_template_id_3fdf29e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);