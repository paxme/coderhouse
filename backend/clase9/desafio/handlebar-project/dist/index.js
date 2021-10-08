"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const Contenedor_1 = require("./Contenedor");
const PORT = 8080;
const app = (0, express_1.default)();
const c = new Contenedor_1.Contenedor('productos.txt');
const multer = require('multer');
let storage = multer.diskStorage({
    destination: (_, a, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, "_coder_" + file.originalname);
    }
});
let upload = multer({ storage });
app.engine('handlebars', (0, express_handlebars_1.default)({
    extname: '.hbs',
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index',
}));
app.set('view engine', 'hbs');
app.get("/productos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield c.getAll();
    res.render('main', { products: products });
}));
// POST
app.post('/productos', upload.single("thumbnail"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    let file = req.file;
    if (!file) {
        res.send({ message: "error al subir arcivo" });
        return;
    }
    const product = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.file.filename
    };
    const id = yield c.save(product);
    res.json({
        body: `created product with id: ${id}`
    });
}));
app.listen(PORT, () => {
    console.log("server is up on port 8080");
});
//# sourceMappingURL=index.js.map