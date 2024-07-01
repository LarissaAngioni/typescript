import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

let num: number = leia.questionInt("Digite o numero a ser encontrado: ");

if (numeros.indexOf(num) == -1){
    console.log(`O número ${num} não foi encontrado!`);
} else {
    console.log(`O número ${num} está localizado na posição: ${numeros.indexOf(num)}`);
}
