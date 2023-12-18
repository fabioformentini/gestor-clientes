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
import { CarroFormComponent } from './carro/carro-form/carro-form.component';
import { CarroListComponent } from './carro/carro-list/carro-list.component';
import { AluguelListComponent } from './aluguel/aluguel-list/aluguel-list.component';
import { AluguelFormComponent } from './aluguel/aluguel-form/aluguel-form.component';


@NgModule({
    declarations: [
        ClienteListComponent,
        ClienteFormComponent,
        ConcessionariaFormComponent,
        ConcessionariaListComponent,
        CarroFormComponent,
        CarroListComponent,
        AluguelListComponent,
        AluguelFormComponent,
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
