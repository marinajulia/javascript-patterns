export const partialize = (fn, ...args) => fn.bind(null, ...args);
//fazendo da direita para a esquerda
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), value)
//fazendo da esquerda para a direita
export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) => fn(previousValue), value)

export const takeUntil = (times, fn) =>
    () => {
        if(times-- > 0) fn();
    }
