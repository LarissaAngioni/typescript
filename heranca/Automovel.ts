import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre{

    private _cor: string;
    private _numPortas: number;
    private _placa: string;
    private _marchas: number;


	constructor(capacidade: number, numRodas: number, velocidade: number, cor: string, numPortas: number, placa: string, marchas: number) {
		super(capacidade, numRodas,velocidade);

        this._cor = cor;
		this._numPortas = numPortas;
		this._placa = placa;
		this._marchas = marchas;
	}


	public get cor(): string {
		return this._cor;
	}

	public get numPortas(): number {
		return this._numPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marchas(): number {
		return this._marchas;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numPortas(value: number) {
		this._numPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marchas(value: number) {
		this._marchas = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Cor: ${this._cor}\nNúmero de portas: ${this._numPortas}\nPlaca: ${this._placa}\nMarchas: ${this._marchas}`);  
    }

}
