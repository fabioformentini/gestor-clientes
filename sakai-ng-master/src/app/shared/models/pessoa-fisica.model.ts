import {ClienteModel} from "./cliente.model";

export class PessoaFisicaModel extends ClienteModel{
    cpf: string;
    rg: string;

    constructor(cpf: string, rg: string) {
        super();
        this.cpf = cpf;
        this.rg = rg
    }
}
