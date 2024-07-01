import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let num: number = leia.questionInt("Digite o numero procurado: ")

if (numeros.has(num) === false){
    console.log(`O número ${num} não foi encontrado!`);
} else {
    console.log(`O número ${num} foi encontrado!`);
}
