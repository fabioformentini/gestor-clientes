import {SelectItem} from "../models/select-item";

export class TipoPessoaEnum{
    static PESSOA_FISICA = 0;
    static PESSOA_JURIDICA = 1;
    static selectItem: SelectItem[] = [
        {label: 'Pessoa Física', value: TipoPessoaEnum.PESSOA_FISICA},
        {label: 'Pessoa Jurídica', value: TipoPessoaEnum.PESSOA_JURIDICA}
    ]
}
