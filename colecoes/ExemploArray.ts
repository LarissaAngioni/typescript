import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(7);
numeros.push(5);
numeros.push(3);
numeros.push(1);
numeros.push(7);

// numeros.push(leia.questionFloat("Digite um numero: "));

numeros.unshift(30, 40, 64, 3.5);

console.table(numeros);

console.log(`A posição do elemento 5 é: ${numeros.indexOf(5)}`);
console.log(`A posição do elemento 50 é: ${numeros.indexOf(50)}`);
console.log(`A posição do elemento 7 é: ${numeros.indexOf(7)}`);

console.log(`Existe no array o elemento 5? ${numeros.includes(5)}`);
console.log(`Existe no array o elemento 50? ${numeros.includes(50)}`);

numeros[numeros.indexOf(7)] = 10;
console.table(numeros);

numeros.splice(numeros.indexOf(10), 1);
console.table(numeros);
