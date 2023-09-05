import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'maskTelefone'
})
export class MaskTelefonePipe implements PipeTransform {

    transform(value: string): string {
        if (!value) {
            return '';
        }
        const formattedPhoneNumber = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        return formattedPhoneNumber;
    }

}
