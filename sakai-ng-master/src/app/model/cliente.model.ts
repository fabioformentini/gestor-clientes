import {TelefoneModel} from "./telefone.model";

export class ClienteModel{
    id: number;
    nome: string;
    tipo: string;
    cpfOrCnpj: string;
    rgOrIe: string;
    dataCadastro: Date;
    status: boolean;
    listaTelefones: TelefoneModel[];
}
