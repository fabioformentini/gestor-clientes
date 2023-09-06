import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from './components/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './components/cliente-form/cliente-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClienteRoutingModule} from "./cliente-routing.module";
import {PRIMENG_IMPORTS} from "../../shared/primeng-imports";
import {SharedModule} from "../../shared/shared.module";


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
        SharedModule,

    ],
    exports: [
        PRIMENG_IMPORTS
    ],
})
export class ClienteModule {
}
