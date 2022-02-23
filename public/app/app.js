import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';

// const ehDivisivel = (divisor, numero) => ! (numero % divisor);
// const ehDivisivelPorDois = ehDivisivel.bind(null,2);

// console.log(ehDivisivelPorDois(10));


document
    .querySelector('#myButton')
    .onclick = () =>
        service
            .sumItems('2143')
            .then(log)
            .catch(log);