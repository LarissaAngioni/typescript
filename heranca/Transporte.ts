export class Transporte{
//classe precisa ter o mesmo nome do arquivo

    private _capacidade: number;


	constructor(capacidade: number) {
		this._capacidade = capacidade;
	}


	public get capacidade(): number {
		return this._capacidade;
	}

	public set capacidade(value: number) {
		this._capacidade = value;
	}

    public visualizar(){
        console.log(`Dados do Meio de Transporte`);
        console.log(`Capacidade: ${this._capacidade}`);
    }
}
