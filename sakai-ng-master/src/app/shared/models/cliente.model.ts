import {TelefoneModel} from "./telefone.model";

export class ClienteModel{
    id: number;
    nome: string;
    tipo: boolean;
    dataCadastro: Date;
    status: boolean;
    listaTelefones: TelefoneModel[];
}
