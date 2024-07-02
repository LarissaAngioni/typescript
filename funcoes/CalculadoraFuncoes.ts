import leia = require("readline-sync");

let num1: number;
let num2: number;

num1 = leia.questionFloat("Digite o primeiro numero: ");
num2 = leia.questionFloat("Digite o segundo numero: ");

console.log(`Soma: ${num1} + ${num2} = ${somar(num1,num2)}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtrair(num1,num2)}`);
console.log(`Multiplicação: ${num1} x ${num2} = ${multiplicar(num1, num2)}`);

let resultadoDivisao = dividir(num1,num2);

if(resultadoDivisao){
    console.log(`Divisão: ${num1} / ${num2} = ${dividir(num1,num2)}`);
} else {
    console.log("Não existe divisão por 0!");
}


autor();

function somar(numero1: number, numero2:number): number{
    return numero1 + numero2;
}

function subtrair(numero1:number, numero2:number): number {
    return numero1 - numero2;
}

function multiplicar(numero1:number, numero2:number): number{
    return numero1 * numero2;
}

function dividir(numero1:number, numero2:number): number | null{
    let divisao:number = numero1 / numero2;
    return (divisao !== Infinity ? divisao : null);
}

function autor(): void{
    console.log("Feito por Larissa");
}
