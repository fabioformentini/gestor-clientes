import {AbstractService} from "./abstract.service";
import {ClienteModel} from "../models/cliente.model";
import {ClienteListModel} from "../models/cliente-list.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../util/page";

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

    search(): Observable<Page<ClienteListModel[]>>{
        return this.http.post<Page<ClienteListModel[]>>(this.resourceUrl,
            {params: 'page', 'size': 10})
    }

}
