"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuestos["default"](10000, 500);
var cliente1 = new _cliente["default"]('Valeria', impuesto1);
var resultado = cliente1.calcularImpuesto();
console.log(cliente1);
//console.log(impuesto1);
//console.log("Total:",resultado);
console.log("Total: ".concat(resultado));