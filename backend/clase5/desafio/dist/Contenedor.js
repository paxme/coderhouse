var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
class Contenedor {
    constructor(name) {
        this.save = (object) => __awaiter(this, void 0, void 0, function* () {
            this.products = fs.existsSync(this.fileName) ? (yield this.getAll()) : [];
            const amount = this.products.length;
            this.products.push(Object.assign(Object.assign({}, object), { id: amount + 1 }));
            yield fs.promises.writeFile(this.fileName, JSON.stringify(this.products, null, 2));
            return amount + 1;
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
module.exports = Contenedor;
//# sourceMappingURL=Contenedor.js.map