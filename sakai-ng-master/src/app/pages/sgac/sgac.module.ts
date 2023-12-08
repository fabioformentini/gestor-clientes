import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from './cliente/cliente-list/cliente-list.component';
import {ClienteFormComponent} from './cliente/cliente-form/cliente-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SgacRoutingModule} from "./sgac-routing.module";
import {PRIMENG_IMPORTS} from "../../shared/primeng-imports";
import {SharedModule} from "../../shared/shared.module";
import { ConcessionariaFormComponent } from './concessionaria/concessionaria-form/concessionaria-form.component';
import { ConcessionariaListComponent } from './concessionaria/concessionaria-list/concessionaria-list.component';


@NgModule({
    declarations: [
        ClienteListComponent,
        ClienteFormComponent,
        ConcessionariaFormComponent,
        ConcessionariaListComponent,
    ],
    imports: [
        CommonModule,
        SgacRoutingModule,
        ReactiveFormsModule,
        PRIMENG_IMPORTS,
        SharedModule,

    ],
    exports: [
        PRIMENG_IMPORTS
    ],
})
export class SgacModule {
}
