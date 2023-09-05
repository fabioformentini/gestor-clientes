import {SelectItem} from "../models/select-item";

export class StatusEnum {
    static ATIVO = 0;
    static INATIVO = 1;

    static selectItem: SelectItem[] = [
        {label: 'Ativo', value: StatusEnum.ATIVO},
        {label: 'Inativo', value: StatusEnum.INATIVO}
    ]
}
