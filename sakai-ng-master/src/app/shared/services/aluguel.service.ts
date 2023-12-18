import {AbstractService} from "./abstract.service";
import {ClienteModel} from "../models/cliente.model";
import {ClienteListModel} from "../models/cliente-list.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../util/page";
import {TipoPessoaEnum} from "../enums/tipo-pessoa.enum";
import {FiltroModel} from "../models/filtro.model";
import {ConcessionariaModel} from "../models/concessionaria.model";
import {ConcessionariaListModel} from "../models/concessionaria-list.model";
import {SelectItem} from "primeng/api";
import {AluguelListModel} from "../models/aluguel-list.model";
import {AluguelModel} from "../models/aluguel.model";

@Injectable({
    providedIn: 'root'
})
export class AluguelService extends AbstractService<AluguelModel, AluguelListModel> {
    constructor(private httpClient: HttpClient) {
        super(httpClient);
    }

    override getEntity(): string {
        return "aluguel";
    }


}
