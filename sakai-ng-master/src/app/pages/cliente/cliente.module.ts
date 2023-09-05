import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from './components/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClienteRoutingModule} from "./cliente-routing.module";
import {MaskTelefonePipe} from "../../pipes/mask-telefone.pipe";
import {PRIMENG_IMPORTS} from "../../shared/primeng-imports";


@NgModule({
    declarations: [
        ClienteListComponent,
        ClienteFormComponent,
    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        ReactiveFormsModule,
        PRIMENG_IMPORTS,

    ],
    exports: [
        PRIMENG_IMPORTS
    ],
})
export class ClienteModule {
}
