import {SelectItem} from "../models/select-item";

export class StatusEnum {
    static ATIVO = true;
    static INATIVO = false;

    static selectItem: SelectItem[] = [
        {label: 'Ativo', value: StatusEnum.ATIVO},
        {label: 'Inativo', value: StatusEnum.INATIVO}
    ]
}
