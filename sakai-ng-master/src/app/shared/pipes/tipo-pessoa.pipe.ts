import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoPessoa'
})
export class TipoPessoaPipe implements PipeTransform {

    transform(value: boolean): string {
        if (value) {
            return 'Pessoa Física';
        }
        return 'Pessoa Jurídica';
    }

}
