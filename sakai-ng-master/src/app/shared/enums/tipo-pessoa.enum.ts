import {SelectItem} from "../models/select-item";

export class TipoPessoaEnum{
    static PESSOA_FISICA = true;
    static PESSOA_JURIDICA = false;
    static selectItem: SelectItem[] = [
        {label: 'Pessoa Física', value: TipoPessoaEnum.PESSOA_FISICA},
        {label: 'Pessoa Jurídica', value: TipoPessoaEnum.PESSOA_JURIDICA}
    ]
}
