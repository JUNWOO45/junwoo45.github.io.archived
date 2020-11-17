(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-game-market-List"],{

/***/ "./src/components/game/market/List.tsx":
/*!*********************************************!*\
  !*** ./src/components/game/market/List.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _helpers_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/i18n */ "./src/helpers/i18n.ts");
/* harmony import */ var _const_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @const/index */ "./src/const/index.ts");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/common/Header */ "./src/components/common/Header.tsx");
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








var MarketList = function (_a) {
    var loading = _a.loading, listData = _a.listData, onChangePage = _a.onChangePage, onUseToggleMarketItems = _a.onUseToggleMarketItems;
    var _b = __read(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].useForm(), 1), form = _b[0];
    // 로컬 스토어 - 리스트
    var listStore = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["useLocalStore"])(function () {
        return {
            list: [],
            prevDataMapper: {},
            resetList: function () {
                form.resetFields();
                listStore.list = listData.list.map(function (item) {
                    return item.exportData();
                });
                listData.list.forEach(function (item) {
                    return (listStore.prevDataMapper[item.serialNo] = item);
                });
            }
        };
    });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        listStore.resetList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listData.list]);
    var childList = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return new Array(6).fill(null).map(function (_, index) {
            return {
                title: "" + Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.id') + (index + 1),
                dataIndex: 'cantCombineMarketId',
                width: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].UID_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].UID_ALIGN,
                render: function (text, record) {
                    var _a, _b;
                    return ((_b = (_a = record.cantCombineMarketId) === null || _a === void 0 ? void 0 : _a.split(',')) === null || _b === void 0 ? void 0 : _b[index]) || '-';
                }
            };
        });
    }, []);
    var columns = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        return [
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.no'),
                dataIndex: 'no',
                width: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].NO_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].NO_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.market'),
                dataIndex: 'bettingType',
                width: 80,
                align: 'center'
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.sportId'),
                dataIndex: 'sportId',
                width: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].ID_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].ID_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.marketId'),
                dataIndex: 'marketId',
                width: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].ID_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].ID_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.marketName'),
                dataIndex: 'marketName',
                width: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].NICKNAME_WIDTH,
                align: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].NICKNAME_ALIGN
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.marketUsageStatus'),
                width: 120,
                align: 'center',
                render: function (text, record) {
                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, { name: "seq__" + record.serialNo + "__usageMarket", initialValue: record.isUse, valuePropName: "checked" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], { size: "default", unCheckedChildren: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('code.onOrOff.0'), checkedChildren: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('code.onOrOff.1'), disabled: loading })));
                }
            },
            {
                title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.nonDuplicateIds'),
                children: childList
            }
        ];
    }, [childList, loading]);
    var handleTableChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (pagination) {
        onChangePage(pagination.current, pagination.pageSize);
    }, [onChangePage]);
    var handleUseToggleMarketItems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        antd__WEBPACK_IMPORTED_MODULE_1__["Modal"].confirm({
            title: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.save'),
            icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], null),
            content: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('message.askSave'),
            okText: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('button.save'),
            cancelText: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('button.cancel'),
            onOk: function () {
                var useList = [];
                var unUseList = [];
                var changedList = [];
                // const prevData: {
                //   [key: number]: any;
                // } = {};
                // listData.list.forEach((item) => {
                //   prevData[item.serialNo] = item;
                // });
                Object.entries(form.getFieldsValue()).forEach(function (_a) {
                    var _b = __read(_a, 2), formName = _b[0], value = _b[1];
                    var id = Number(formName.split('__')[1]);
                    if (listStore.prevDataMapper[id].isUse != value) {
                        console.log('바뀐 데이터 : ', listStore.prevDataMapper[id], listStore.prevDataMapper[id].isUse, '->', value);
                        changedList.push({
                            cantCombineMarketId: listStore.prevDataMapper[id].cantCombineMarketId,
                            isUse: value === true ? 1 : 0,
                            serialNo: listStore.prevDataMapper[id].serialNo
                        });
                    }
                    // if (prevData[id].isUse != value) {
                    //   changedList.push({
                    //     cantCombineMarketId: prevData[id].cantCombineMarketId,
                    //     isUse: value === true ? 1 : 0,
                    //     serialNo: prevData[id].serialNo
                    //   });
                    // }
                });
                console.log('changedList :::: ', changedList);
                onUseToggleMarketItems(useList, unUseList);
            }
        });
    }, [form, onUseToggleMarketItems]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_Header__WEBPACK_IMPORTED_MODULE_6__["default"], { tag: "h2", label: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('view.game.market.listTitle') },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Button"], { type: "primary", disabled: listData.list.length === 0 || loading, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], null), onClick: handleUseToggleMarketItems }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('button.save')),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Button"], { disabled: listData.list.length === 0 || loading, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RollbackOutlined"], null), onClick: listStore.resetList }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('button.cancelEdit')))),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Form"], { form: form, layout: "inline" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Table"], { bordered: true, tableLayout: "fixed", scroll: { x: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_TABLE"].SCROLL_X_WIDTH }, columns: columns, rowKey: function (record) { return record.serialNo; }, dataSource: listStore.list, pagination: __assign(__assign({}, listData.pagination), { current: listData.pagination.current }), loading: loading, onChange: handleTableChange }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(MarketList));


/***/ }),

/***/ "./src/components/game/market/SearchForm.tsx":
/*!***************************************************!*\
  !*** ./src/components/game/market/SearchForm.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _helpers_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/i18n */ "./src/helpers/i18n.ts");
/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/common/Header */ "./src/components/common/Header.tsx");
/* harmony import */ var _components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/common/DetailTable */ "./src/components/common/DetailTable.tsx");
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








var MarketSearchForm = function (_a) {
    var initFormValue = _a.initFormValue, loading = _a.loading, onSearch = _a.onSearch;
    var _b = __read(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].useForm(), 1), form = _b[0];
    // 검색 폼이 변경된 경우 초기 폼 값을 변경
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var bettingType = initFormValue.bettingType, sort = initFormValue.sort, usageMarket = initFormValue.usageMarket;
        form.setFieldsValue({
            bettingType: bettingType,
            sort: sort,
            usageMarket: usageMarket
        });
    }, [initFormValue, form]);
    // 검색 유효성 통과
    var onFinish = function (values) {
        var bettingType = values.bettingType, sort = values.sort, usageMarket = values.usageMarket;
        var payload = { bettingType: bettingType, sort: sort, usageMarket: usageMarket };
        onSearch(payload);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_Header__WEBPACK_IMPORTED_MODULE_5__["default"], { tag: "h2", label: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.searchFormTitle') }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"], { layout: "inline", form: form, initialValues: initFormValue, onFinish: onFinish },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTable"], { cols: ['100px', 'auto'] },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTbody"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTr"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTh"], null, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.market')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTd"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: "bettingType", className: 'f-form-inline', rules: [
                                    {
                                        type: 'string',
                                        required: true,
                                        message: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('message.requiredField', { fieldName: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])("word.market") })
                                    }
                                ] },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, { disabled: loading }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["getBundleCodeList"])('gameMarketType').map(function (_a) {
                                    var code = _a.code, text = _a.text;
                                    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"], { value: code, key: code }, text));
                                }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTr"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTh"], null, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.sort')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTd"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: "sort", className: 'f-form-inline', style: { width: '120px' } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"], { disabled: loading },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, { value: "" }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.select')),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, { value: 'id,asc' }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.dynamicOrderField.asc', { fieldName: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.id') })),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, { value: 'id,desc' }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.dynamicOrderField.desc', { fieldName: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.id') })))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTr"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTh"], null, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.marketUsageStatus')),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTd"], null,
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: "usageMarket", className: 'f-form-inline', style: { width: '120px' } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"], { disabled: loading },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, { value: "" }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('word.select')),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, { value: 'code.onOrOff.0' }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('code.onOrOff.0')),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option, { value: 'code.onOrOff.1' }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('code.onOrOff.1')))))))),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_common_DetailTable__WEBPACK_IMPORTED_MODULE_6__["FTableControl"], null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: "primary", htmlType: "submit", loading: loading, disabled: loading, icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], null) }, Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_4__["t"])('button.search'))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(MarketSearchForm));


/***/ }),

/***/ "./src/views/game/market/List.tsx":
/*!****************************************!*\
  !*** ./src/views/game/market/List.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/i18n */ "./src/helpers/i18n.ts");
/* harmony import */ var _hooks_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hooks/store */ "./src/hooks/store.ts");
/* harmony import */ var _const_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @const/index */ "./src/const/index.ts");
/* harmony import */ var _helpers_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/search */ "./src/helpers/search.ts");
/* harmony import */ var _helpers_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @helpers/notification */ "./src/helpers/notification.ts");
/* harmony import */ var _components_game_market_SearchForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/game/market/SearchForm */ "./src/components/game/market/SearchForm.tsx");
/* harmony import */ var _components_game_market_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/game/market/List */ "./src/components/game/market/List.tsx");
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











var MarketList = function () {
    var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
    // 스토어 기능 가져오기
    var _a = Object(_hooks_store__WEBPACK_IMPORTED_MODULE_4__["useStore"])().gameService.dispatch, fetchMarketList = _a.fetchMarketList, updateMarketUseItems = _a.updateMarketUseItems;
    // 로컬 스토어 - 검색 > 기본값
    var getSearchStoreInitValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        return {
            loading: false,
            params: {
                bettingType: 'sport',
                sort: '',
                usageMarket: ''
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
            list: [],
            isUpdating: false,
            pagination: {
                current: 1,
                pageSize: _const_index__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_PER_SIZE"]
            }
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
        var _a, current, pageSize, _b, bettingType, sort, usageMarket, payload, res, list, total;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    searchStore.loading = true;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 3, 4]);
                    _a = listStore.pagination, current = _a.current, pageSize = _a.pageSize;
                    _b = searchStore.params, bettingType = _b.bettingType, sort = _b.sort, usageMarket = _b.usageMarket;
                    payload = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_6__["omitEmptySearchPayload"])({
                        current: current,
                        pageSize: pageSize,
                        bettingType: bettingType,
                        sort: sort,
                        usageMarket: usageMarket
                    });
                    return [4 /*yield*/, fetchMarketList(bettingType, payload)];
                case 2:
                    res = _c.sent();
                    if (res) {
                        list = res.list, total = res.total;
                        listStore.list = list;
                        listStore.pagination = __assign(__assign({}, listStore.pagination), { total: total });
                    }
                    return [3 /*break*/, 4];
                case 3:
                    searchStore.loading = false;
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); }, [fetchMarketList, listStore, searchStore]);
    // update
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        // 검색 조건이 존재하는 경우에만 검색
        if (location.search) {
            var _a = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_6__["getSearchParamsObject"])(location.search, {
                toNumberKeys: ['current', 'pageSize']
            }), bettingType = _a.bettingType, sort = _a.sort, usageMarket = _a.usageMarket, current = _a.current, pageSize = _a.pageSize;
            searchStore.params = {
                bettingType: bettingType,
                sort: sort,
                usageMarket: usageMarket
            };
            listStore.pagination = __assign(__assign({}, listStore.pagination), { current: current,
                pageSize: pageSize });
            fetchList();
        }
        else {
            searchStore.reset();
            listStore.reset();
        }
    }, [fetchList, searchStore, listStore, location]);
    // 검색
    var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            query = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_6__["createQueryString"])(__assign(__assign(__assign({}, params), listStore.pagination), { current: 1 }));
            history.push("" + location.pathname + query);
            return [2 /*return*/];
        });
    }); }, [history, listStore, location]);
    //  페이징 변경
    var handleChangePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (current, pageSize) {
        var query = Object(_helpers_search__WEBPACK_IMPORTED_MODULE_6__["createQueryString"])(__assign(__assign(__assign({}, searchStore.params), listStore.pagination), { current: current,
            pageSize: pageSize }));
        history.push("" + location.pathname + query);
    }, [history, location, listStore, searchStore]);
    // 마켓 사용여부 설정
    var handleUseToggleMarketItems = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (useItems, unUseItems) { return __awaiter(void 0, void 0, void 0, function () {
        var res, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    searchStore.loading = true;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    return [4 /*yield*/, updateMarketUseItems(useItems, unUseItems)];
                case 2:
                    res = _a.sent();
                    if (!res) return [3 /*break*/, 4];
                    // 성공
                    Object(_helpers_notification__WEBPACK_IMPORTED_MODULE_7__["openNotification"])({
                        type: 'success',
                        description: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_3__["t"])('message.saveSuccessfully')
                    });
                    return [4 /*yield*/, fetchList()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_1 = _a.sent();
                    // 성공
                    Object(_helpers_notification__WEBPACK_IMPORTED_MODULE_7__["openNotification"])({
                        type: 'error',
                        description: Object(_helpers_i18n__WEBPACK_IMPORTED_MODULE_3__["t"])('message.failed')
                    });
                    return [3 /*break*/, 7];
                case 6:
                    searchStore.loading = false;
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); }, [fetchList, searchStore, updateMarketUseItems]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_game_market_SearchForm__WEBPACK_IMPORTED_MODULE_8__["default"], { initFormValue: searchStore.params, loading: searchStore.loading, onSearch: handleSearch }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_game_market_List__WEBPACK_IMPORTED_MODULE_9__["default"], { loading: searchStore.loading, listData: listStore, onChangePage: handleChangePage, onUseToggleMarketItems: handleUseToggleMarketItems })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(MarketList));


/***/ })

}]);
//# sourceMappingURL=view-game-market-List.aa71e873ee133209c288.bundle.js.map