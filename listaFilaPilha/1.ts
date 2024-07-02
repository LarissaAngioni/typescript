import { Queue } from "../interface/Queue";
import leia = require('readline-sync');

const fila = new Queue<string>();
let opcao:number; 

do{
    console.log("\n-------------Menu-------------");
    console.log("------------------------------");
    console.log("1 - Adicionar cliente na fila");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Retirar cliente da fila");
    console.log("0 - Sair");
    console.log("------------------------------");

    opcao = leia.questionInt("Digite a opcao desejada: ")

    switch (opcao) {
        case 1:
            fila.enqueue(leia.question("\nDigite o nome do cliente: "));
            console.log("\nCliente adicionado!");
            console.log("\nFila:"); 
            fila.printQueue();
            break;
        case 2:
            if(fila.isEmpty() === true){
                console.log("\nA fila está vazia!");
            } else {
                console.log("\nFila:"); 
                fila.printQueue()
            }
            break;
        case 3:
            if(fila.isEmpty() === true){
                console.log("\nA fila está vazia!");
            } else {
                console.log(`\nO(a) Cliente ${fila.dequeue()} foi chamado(a)!`);
                console.log("\nFila:"); 
                fila.printQueue();
                
            }
            break;
        case 0:
            console.log("\nPrograma finalizado!");
            break;
        default:
            console.log("\nOpção inválida!");
            break;
    }    
} while(opcao != 0);
