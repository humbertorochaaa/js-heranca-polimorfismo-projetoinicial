export class Conta{
    constructor(cliente, tipo, saldoInicial,agencia){
        this._cliente = cliente;
        this._agencia = agencia;
        this._tipo = tipo;
        this._saldo = saldoInicial;
        
        
        
       
    }

    sacar(valor) {
        let  taxa = 1
        if (this._tipo =="corrente"){
            taxa = 1.1; 
        }
        if (this._tipo =="empresarial"){
            taxa = 1.15; 
        }
        if (this._tipo =="salario"){
            taxa = 1.05; 
        }
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}