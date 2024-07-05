import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Corredor, Nadador, Ciclista{
    correr(): void {
        console.log("Atleta correndo...");
    }
    nadar(): void {
        console.log("Atleta nadando...");
    }
    pedalar(): void {
        console.log("Atleta pedalando...");
    }
    aquecer(): void {
        console.log("Atleta aquecendo...");
    }
    cansar(): void{
        console.log("Atleta cansado...");
    }

	constructor(nome: string) {
        super(nome);
	}
    trotar(): void {
        console.log("Atleta trotando...");
    }



}
