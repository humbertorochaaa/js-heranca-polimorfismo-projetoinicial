import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Humberto", 11122233309);


const contaCorrenteHumberto = new Conta(cliente1,"Corrente",89,1001);
contaCorrenteHumberto.depositar(500);
contaCorrenteHumberto.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);






console.log (contaPoupanca);
console.log(contaCorrenteHumberto);