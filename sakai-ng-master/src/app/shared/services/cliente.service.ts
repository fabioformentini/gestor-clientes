import {AbstractService} from "./abstract.service";
import {ClienteModel} from "../models/cliente.model";
import {ClienteListModel} from "../models/cliente-list.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../util/page";
import {TipoPessoaEnum} from "../enums/tipo-pessoa.enum";
import {FiltroModel} from "../models/filtro.model";

@Injectable({
    providedIn: 'root'
})
export class ClienteService extends AbstractService<ClienteModel, ClienteListModel> {
    constructor(private httpClient: HttpClient) {
        super(httpClient);
    }

    override getEntity(): string {
        return "cliente";
    }

    buscarClientes(filtro: FiltroModel): Observable<any>{
        return this.http.post<Page<ClienteListModel[]>>(this.resourceUrl + '/buscar', filtro)
    }

    salvarCliente(cliente: ClienteModel, tipoCliente: boolean): Observable<ClienteModel> {
        let rotaTipo: string;
        tipoCliente == TipoPessoaEnum.PESSOA_FISICA ? rotaTipo = '/pf' : rotaTipo = '/pj';
        return this.http.post<ClienteModel>(this.resourceUrl + rotaTipo, cliente);
    }

    buscarPorId(id: number, tipoCliente: boolean): Observable<any> {
        let rotaTipo: string;
        tipoCliente == TipoPessoaEnum.PESSOA_FISICA ? rotaTipo = '/pf/' : rotaTipo = '/pj/';
        return this.http.get(`${this.resourceUrl}${rotaTipo}${id}`)
    }

}
