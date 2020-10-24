import {Cliente} from "./Cliente.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"


const diretor = new Diretor ("Humberto", 10000, 12345678);
const gerente = new Gerente ("Geraldo", 4000, 1458624566);

const estaLogado = SistemaAutenticacao.login(diretor, "123");
console.log(estaLogado);