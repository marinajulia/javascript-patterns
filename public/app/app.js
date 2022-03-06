import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import {takeUntil} from './utils/operators.js'
// const ehDivisivel = (divisor, numero) => ! (numero % divisor);
// const ehDivisivelPorDois = ehDivisivel.bind(null,2);

// console.log(ehDivisivelPorDois(10));

const showMessage = () =>console.log("oi");
//3 vezes chamar a função showMessage:
const operation = takeUntil(3, showMessage());

let counter = 10;
while(counter--) operation();

document
    .querySelector('#myButton')
    .onclick = () =>
        service
            .sumItems('2143')
            .then(log)
            .catch(log);