import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";


const t1: Transporte = new Transporte(4);

//t1.visualizar();

const tr1: Terrestre = new Terrestre(5, 4, 250);

//tr1.visualizar();

const a1: Automovel = new Automovel(5, 4, 250, "Prata", 4, "abc-1234", 6);

a1.visualizar();
