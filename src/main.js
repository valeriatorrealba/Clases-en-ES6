import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

let impuesto1 = new Impuestos(10000, 500);
let cliente1 = new Cliente('Valeria', impuesto1);
let resultado = cliente1.calcularImpuesto();
console.log(cliente1);
//console.log(impuesto1);
//console.log("Total:",resultado);
console.log ( `Total: ${resultado}`);


