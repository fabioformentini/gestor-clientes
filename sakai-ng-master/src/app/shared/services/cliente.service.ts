import {AbstractService} from "./abstract.service";
import {ClienteModel} from "../models/cliente.model";
import {ClienteListModel} from "../models/cliente-list.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

class Page<T> {
}

@Injectable({
    providedIn: 'root'
})
export class ClienteService extends AbstractService<ClienteModel, ClienteListModel> {
    constructor(private httpClient: HttpClient) {
        super(httpClient);
    }

    override getEntity(): string {
        return "clientes";
    }

    search(): Observable<Page<ClienteListModel>>{
        return this.http.post<Page<ClienteListModel>>(this.resourceUrl + '/search',
            {params: 'page', 'size': 10})
    }

}
