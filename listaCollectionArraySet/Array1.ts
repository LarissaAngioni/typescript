import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for(let i = 0; i < 5; i++)
    cores.push(leia.question("Digite uma cor: "));

console.log(`\nLista de todas as cores:\n${cores}`);
console.log(`\nLista de cores ordenadas:\n${cores.sort()}`);
