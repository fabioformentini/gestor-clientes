import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {PRIMENG_IMPORTS} from "./primeng-imports";
import {MaskTelefonePipe} from "../pipes/mask-telefone.pipe";


@NgModule({
    declarations: [
        MaskTelefonePipe
    ],
    imports: [
        PRIMENG_IMPORTS,
        ReactiveFormsModule,

    ],
    exports: [
        PRIMENG_IMPORTS,
        MaskTelefonePipe
    ]
})
export class SharedModule { }
