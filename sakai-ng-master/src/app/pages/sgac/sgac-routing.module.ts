import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClienteListComponent} from "./cliente/cliente-list/cliente-list.component";
import {ConcessionariaListComponent} from "./concessionaria/concessionaria-list/concessionaria-list.component";
import {CarroListComponent} from "./carro/carro-list/carro-list.component";
import {AluguelListComponent} from "./aluguel/aluguel-list/aluguel-list.component";

const routes: Routes = [{path: '', component: ClienteListComponent},
    {path: 'concessionaria', component: ConcessionariaListComponent},
    {path: 'carro', component: CarroListComponent},
    {path: 'aluguel', component: AluguelListComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SgacRoutingModule {
}