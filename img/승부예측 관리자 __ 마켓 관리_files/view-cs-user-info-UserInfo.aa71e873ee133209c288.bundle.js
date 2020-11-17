(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-cs-user-info-UserInfo"],{

/***/ "./src/components/cs/user/userInfo/List.tsx":
/*!**************************************************!*\
  !*** ./src/components/cs/user/userInfo/List.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _helpers_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/i18n */ "./src/helpers/i18n.ts");
/* harmony import */ var _const_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @const/index */ "./src/const/index.ts");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/common/Header */ "./src/components/common/Header.tsx");








var UserInfoList = function (_a) {
    var loading = _a.loading, data = _a.data;
    var columns = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
        return [
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.no'),
                dataIndex: 'no',
                width: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].NO_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].NO_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.hangameId'),
                dataIndex: 'memberId',
                width: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].ID_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].ID_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.gamebaseNumber'),
                dataIndex: 'userId',
                width: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].GAMEBASE_NUMBER_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].GAMEBASE_NUMBER_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.SBNickname'),
                dataIndex: 'nickName',
                width: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].NICKNAME_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].NICKNAME_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.identificationNumber'),
                dataIndex: 'ci',
                width: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].CI_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].CI_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('button.detail'),
                width: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].LINK_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].LINK_ALIGN,
                render: function (record) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "/cs/user/info/detail/" + record.userId },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Button"], { icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["EyeOutlined"], null) }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('button.detail'))));
                }
            }
        ];
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_Header__WEBPACK_IMPORTED_MODULE_7__["default"], { tag: "h2", label: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('view.cs.user.userInfo.listTitle') }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Table"], { bordered: true, tableLayout: "fixed", scroll: { x: _const_index__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_TABLE"].SCROLL_X_WIDTH }, columns: columns, rowKey: function (record) { return record.userId; }, dataSource: data.list, pagination: false, loading: loading })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(UserInfoList));


/***/ }),

/***/ "./src/components/cs/user/userInfo/SearchForm.tsx":
/*!********************************************************!*\
  !*** ./src/components/cs/user/userInfo/SearchForm.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/i18n */ "./src/helpers/i18n.ts");
/* harmony import */ var _const_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @const/index */ "./src/const/index.ts");
/* harmony import */ var _helpers_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @helpers/date */ "./src/helpers/date.ts");
/* harmony import */ var _components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/common/DetailTable */ "./src/components/common/DetailTable.tsx");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/common/Header */ "./src/components/common/Header.tsx");
/* harmony import */ var _components_common_DateRangeSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/common/DateRangeSelect */ "./src/components/common/DateRangeSelect.tsx");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};













var UserInfoSearchForm = function (_a) {
    var initFormValue = _a.initFormValue, initMeta = _a.initMeta, loading = _a.loading, onSearch = _a.onSearch, onChangeDateRangeType = _a.onChangeDateRangeType;
    var _b = __read(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm(), 1), form = _b[0];
    // 로컬 스토어
    var localStore = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useLocalStore"])(function () {
        return {
            disableDatePicker: true
        };
    });
    // 검색 폼이 변경된 경우 초기 폼 값을 변경
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var id = initFormValue.id, idType = initFormValue.idType, startTime = initFormValue.startTime, endTime = initFormValue.endTime;
        var dateRange = [];
        if (startTime) {
            dateRange = [moment__WEBPACK_IMPORTED_MODULE_4___default()(startTime), moment__WEBPACK_IMPORTED_MODULE_4___default()(endTime)];
        }
        form.setFieldsValue({
            id: id,
            idType: idType,
            dateRange: dateRange
        });
    }, [initFormValue, form]);
    // 검색 유효성 통과
    var onFinish = function (values) {
        var idType = values.idType, id = values.id, dateRange = values.dateRange;
        var payload = { idType: idType, id: id };
        if (dateRange) {
            var _a = __read(dateRange, 2), startTime = _a[0], endTime = _a[1];
            if (startTime) {
                payload.startTime = Object(_helpers_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedMomentDate"])(startTime);
                payload.endTime = Object(_helpers_date__WEBPACK_IMPORTED_MODULE_7__["getFormattedMomentDate"])(endTime);
            }
        }
        onSearch(payload);
    };
    // 날짜 기간 변경
    var handleChangeRange = function (value) {
        localStore.disableDatePicker = value !== 'user';
        switch (value) {
            case 'user':
                break;
            case _const_index__WEBPACK_IMPORTED_MODULE_6__["SEARCH_DATE_RANGE"].DEFAULT:
                form.setFieldsValue({ dateRange: [] });
                break;
            default:
                form.setFieldsValue({ dateRange: [moment__WEBPACK_IMPORTED_MODULE_4___default()().add(Number(value), 'day'), moment__WEBPACK_IMPORTED_MODULE_4___default()()] });
        }
        onChangeDateRangeType(value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_Header__WEBPACK_IMPORTED_MODULE_9__["default"], { tag: "h2", label: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.searchFormTitle') }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"], { layout: "inline", form: form, initialValues: initFormValue, onFinish: onFinish },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTable"], { cols: ['100px', 'auto'] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTbody"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTr"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTh"], null, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.type')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTd"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: "idType", className: 'f-form-inline' },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, { disabled: loading },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], { value: 0 }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.gamebaseNumber')),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], { value: 1 }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.userNickname')),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], { value: 2 }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.hangameId')))),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: 'id', className: 'f-form-inline', rules: [{ required: true, message: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('message.requiredField', { fieldName: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.type') }) }] },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"], { disabled: loading })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTr"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTh"], null, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('word.period')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTd"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DateRangeSelect__WEBPACK_IMPORTED_MODULE_10__["default"], { initValue: initMeta.dateRangeType, onChange: handleChangeRange, disabled: loading }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: "dateRange", className: 'f-form-inline' },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["DatePicker"].RangePicker, { disabled: localStore.disableDatePicker || loading })))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_8__["FTableControl"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "primary", htmlType: "submit", loading: loading, disabled: loading, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], null) }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_5__["t"])('button.search'))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(UserInfoSearchForm));


/***/ }),

/***/ "./src/views/cs/user/info/UserInfo.tsx":
/*!*********************************************!*\
  !*** ./src/views/cs/user/info/UserInfo.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hooks/store */ "./src/hooks/store.ts");
/* harmony import */ var _const_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @const/index */ "./src/const/index.ts");
/* harmony import */ var _helpers_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/search */ "./src/helpers/search.ts");
/* harmony import */ var _components_cs_user_userInfo_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/cs/user/userInfo/SearchForm */ "./src/components/cs/user/userInfo/SearchForm.tsx");
/* harmony import */ var _components_cs_user_userInfo_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/cs/user/userInfo/List */ "./src/components/cs/user/userInfo/List.tsx");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var UserInfoPage = function () {
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    // 스토어 기능 가져오기
    var fetchUserInfo = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_3__["useStore"])().csUserService.dispatch.fetchUserInfo;
    // 로컬 스토어 - 검색 > 기본값
    var getSearchStoreInitValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        return {
            loading: false,
            meta: {
                dateRangeType: _const_index__WEBPACK_IMPORTED_MODULE_4__["SEARCH_DATE_RANGE"].DEFAULT
            },
            params: {
                idType: 0,
                id: '',
                startTime: '',
                endTime: ''
            }
        };
    }, []);
    // 로컬 스토어 - 검색
    var searchStore = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useLocalStore"])(function () {
        return __assign(__assign({}, getSearchStoreInitValue()), { reset: function () {
                Object.assign(searchStore, getSearchStoreInitValue());
            } });
    });
    // 로컬 스토어 - 리스트 > 기본값
    var getlistStoreInitValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        return {
            list: []
        };
    }, []);
    // 로컬 스토어 - 리스트
    var listStore = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["useLocalStore"])(function () {
        return __assign(__assign({}, getlistStoreInitValue()), { reset: function () {
                Object.assign(listStore, getlistStoreInitValue());
            } });
    });
    // 목록 가져오기
    var fetchList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, id, idType, startTime, endTime, payload, res, list;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    searchStore.loading = true;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 3, 4]);
                    _a = searchStore.params, id = _a.id, idType = _a.idType, startTime = _a.startTime, endTime = _a.endTime;
                    payload = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_5__["omitEmptySearchPayload"])({
                        id: id,
                        idType: idType,
                        startTime: startTime,
                        endTime: endTime
                    });
                    return [4 /*yield*/, fetchUserInfo(payload)];
                case 2:
                    res = _b.sent();
                    if (res) {
                        list = res.list;
                        listStore.list = list;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    searchStore.loading = false;
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [listStore, searchStore, fetchUserInfo]);
    // update
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // 검색 조건이 존재하는 경우에만 검색
        if (location.search) {
            var _a = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_5__["getSearchParamsObject"])(location.search, {
                toNumberKeys: ['idType']
            }), id = _a.id, idType = _a.idType, startTime = _a.startTime, endTime = _a.endTime, dateRangeType = _a.dateRangeType;
            searchStore.meta.dateRangeType = dateRangeType;
            searchStore.params = {
                id: id,
                idType: idType,
                startTime: startTime,
                endTime: endTime
            };
            fetchList();
        }
        else {
            searchStore.reset();
            listStore.reset();
        }
    }, [fetchList, location, searchStore, listStore]);
    // 검색
    var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            query = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_5__["createQueryString"])(__assign(__assign({}, params), searchStore.meta));
            history.push("" + location.pathname + query);
            return [2 /*return*/];
        });
    }); }, [history, location, searchStore]);
    // 날짜 범위 타입 변경
    var handleChangeDateRangeType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
        searchStore.meta.dateRangeType = value;
    }, [searchStore]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_cs_user_userInfo_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], { initFormValue: searchStore.params, initMeta: searchStore.meta, loading: searchStore.loading, onSearch: handleSearch, onChangeDateRangeType: handleChangeDateRangeType }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_cs_user_userInfo_List__WEBPACK_IMPORTED_MODULE_7__["default"], { loading: searchStore.loading, data: listStore })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(UserInfoPage));


/***/ })

}]);
//# sourceMappingURL=view-cs-user-info-UserInfo.aa71e873ee133209c288.bundle.js.map