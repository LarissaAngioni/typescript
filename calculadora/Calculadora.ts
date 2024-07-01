import leia = require("readline-sync");

let num1: number;
let num2: number;

num1 = leia.questionFloat("Digite o primeiro numero: ");
num2 = leia.questionFloat("Digite o segundo numero: ");

console.log(`Soma: ${num1} + ${num2} = ${num1 + num2}`);
console.log(`Subtração: ${num1} - ${num2} = ${num1 - num2}`);
console.log(`Multiplicação: ${num1} x ${num2} = ${num1 * num2}`);
console.log(`Divisão: ${num1} / ${num2} = ${num1 / num2}`);
