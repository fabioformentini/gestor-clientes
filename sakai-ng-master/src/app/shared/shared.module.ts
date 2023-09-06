import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PRIMENG_IMPORTS} from "./primeng-imports";
import {MaskTelefonePipe} from "./pipes/mask-telefone.pipe";
import { TipoPessoaPipe } from './pipes/tipo-pessoa.pipe';
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
    declarations: [
        MaskTelefonePipe,
        TipoPessoaPipe,
        StatusPipe
    ],
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,
        FormsModule

    ],
    exports: [
        PRIMENG_IMPORTS,
        MaskTelefonePipe,
        FormsModule,
        StatusPipe,
        TipoPessoaPipe
    ]
})
export class SharedModule { }
