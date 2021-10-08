"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contenedor = void 0;
const fs = __importStar(require("fs"));
class Contenedor {
    constructor(name) {
        this.save = (object) => __awaiter(this, void 0, void 0, function* () {
            this.products = fs.existsSync(this.fileName) ? (yield this.getAll()) : [];
            const amount = this.products.length;
            this.products.push(Object.assign(Object.assign({}, object), { id: amount + 1 }));
            yield fs.promises.writeFile(this.fileName, JSON.stringify(this.products, null, 2));
            return amount + 1;
        });
        this.update = (object) => __awaiter(this, void 0, void 0, function* () {
            if (object === null || object === void 0 ? void 0 : object.id) {
                const oldProduct = yield this.getById(object === null || object === void 0 ? void 0 : object.id);
                if (oldProduct) {
                    this.products = fs.existsSync(this.fileName) ? (yield this.getAll()) : [];
                    yield this.deleteById(+(oldProduct === null || oldProduct === void 0 ? void 0 : oldProduct.id));
                    this.products.push(Object.assign({}, object));
                    yield fs.promises.writeFile(this.fileName, JSON.stringify(this.products, null, 2));
                }
                else {
                    const { id } = object, rest = __rest(object, ["id"]);
                    yield this.save(Object.assign({}, rest));
                }
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const objs = yield fs.promises.readFile(this.fileName, "utf-8");
            return objs ? JSON.parse(objs) : this.products;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const objs = yield this.getAll();
            return objs.find(obj => (obj === null || obj === void 0 ? void 0 : obj.id) === id);
        });
        this.deleteById = (id) => __awaiter(this, void 0, void 0, function* () {
            const objs = yield this.getAll();
            const newObject = objs.filter(o => (o === null || o === void 0 ? void 0 : o.id) !== id);
            yield fs.promises.writeFile(this.fileName, JSON.stringify(newObject, null, 2));
        });
        this.deleteAll = () => __awaiter(this, void 0, void 0, function* () {
            yield fs.promises.writeFile(this.fileName, "", "utf-8");
        });
        this.fileName = name;
        this.products = [];
    }
}
exports.Contenedor = Contenedor;
//# sourceMappingURL=Contenedor.js.map