import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PRIMENG_IMPORTS} from "./primeng-imports";
import {MaskTelefonePipe} from "./pipes/mask-telefone.pipe";


@NgModule({
    declarations: [
        MaskTelefonePipe
    ],
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,
        FormsModule

    ],
    exports: [
        PRIMENG_IMPORTS,
        MaskTelefonePipe,
        FormsModule
    ]
})
export class SharedModule { }
