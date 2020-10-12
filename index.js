import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Humberto", 11122233309);

const contaCorrenteHumberto = new ContaCorrente(cliente1, 1001);

contaCorrenteHumberto.depositar(500);
contaCorrenteHumberto.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);


console.log(contaPoupanca);
console.log(contaCorrenteHumberto)