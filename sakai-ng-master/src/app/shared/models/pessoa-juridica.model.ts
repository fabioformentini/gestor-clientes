import {ClienteModel} from "./cliente.model";

export class PessoaJuridicaModel extends ClienteModel{
    cnpj: string;
    ie: string;

    constructor(cnpj: string, ie: string) {
        super();
        this.cnpj = cnpj;
        this.ie = ie
    }
}
