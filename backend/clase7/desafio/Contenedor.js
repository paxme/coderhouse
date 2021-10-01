"use strict";
// Este archivo fue generado con tsc
// Dado a complicaciones con usar mi archivo Contenedor.ts de la clase pasada solo lo converti en js
"use strict";
var __assign = (this && this.__assign) || function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var fs = require("fs");
var Contenedor = /** @class */ (function () {
    function Contenedor(name) {
        var _this = this;
        this.save = function (object) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, amount;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!fs.existsSync(this.fileName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getAll()];
                    case 1:
                        _b = (_c.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        _b = [];
                        _c.label = 3;
                    case 3:
                        _a.products = _b;
                        amount = this.products.length;
                        this.products.push(__assign(__assign({}, object), { id: amount + 1 }));
                        return [4 /*yield*/, fs.promises.writeFile(this.fileName, JSON.stringify(this.products, null, 2))];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, amount + 1];
                }
            });
        }); };
        this.update = function (object) { return __awaiter(_this, void 0, void 0, function () {
            var oldProduct, _a, _b, id, rest;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(object === null || object === void 0 ? void 0 : object.id)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.getById(object === null || object === void 0 ? void 0 : object.id)];
                    case 1:
                        oldProduct = _c.sent();
                        if (!oldProduct) return [3 /*break*/, 7];
                        _a = this;
                        if (!fs.existsSync(this.fileName)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getAll()];
                    case 2:
                        _b = (_c.sent());
                        return [3 /*break*/, 4];
                    case 3:
                        _b = [];
                        _c.label = 4;
                    case 4:
                        _a.products = _b;
                        return [4 /*yield*/, this.deleteById(+(oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.id))];
                    case 5:
                        _c.sent();
                        this.products.push(__assign({}, object));
                        return [4 /*yield*/, fs.promises.writeFile(this.fileName, JSON.stringify(this.products, null, 2))];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        id = object.id, rest = __rest(object, ["id"]);
                        return [4 /*yield*/, this.save(__assign({}, rest))];
                    case 8:
                        _c.sent();
                        _c.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        this.getAll = function () { return __awaiter(_this, void 0, void 0, function () {
            var objs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.promises.readFile(this.fileName, "utf-8")];
                    case 1:
                        objs = _a.sent();
                        return [2 /*return*/, objs ? JSON.parse(objs) : this.products];
                }
            });
        }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var objs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        objs = _a.sent();
                        return [2 /*return*/, objs.find(function (obj) { return (obj === null || obj === void 0 ? void 0 : obj.id) === id; })];
                }
            });
        }); };
        this.deleteById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var objs, newObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAll()];
                    case 1:
                        objs = _a.sent();
                        newObject = objs.filter(function (o) { return (o === null || o === void 0 ? void 0 : o.id) !== id; });
                        return [4 /*yield*/, fs.promises.writeFile(this.fileName, JSON.stringify(newObject, null, 2))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.deleteAll = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.promises.writeFile(this.fileName, "", "utf-8")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.fileName = name;
        this.products = [];
    }
    return Contenedor;
}());
