import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";
import {Column} from "../../../../shared/models/colum.model";
import {ClienteListModel} from "../../../../shared/models/cliente-list.model";
import {ClienteService} from "../../../../shared/services/cliente.service";
import {ClienteModel} from "../../../../shared/models/cliente.model";

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss'],
    providers: [DialogService]
})

export class ClienteListComponent {

    cols!: Column[];
    ref: DynamicDialogRef | undefined;
    display: boolean = false;
    clientes: any;

    cliente: ClienteModel

    constructor(public dialogService: DialogService, public service: ClienteService) {
    }

    ngOnInit() {
        this.cols = [
            {field: 'nome', header: 'Nome', text: true},
            {field: 'tipo', header: 'Tipo Pessoa', text: true},
            {field: 'cpfOrCnpj', header: 'CPF/CNPJ', text: true},
            {field: 'rgOrIe', header: 'RG/IE', text: true},
            {field: 'status', header: 'Status', text: true},
            {header: 'Ações'}
        ];
        // this.clientes = [
        //     {
        //         id: 1,
        //         nome: 'João Silva',
        //         tipo: true,
        //         cpfOrCnpj: '123.456.789-00',
        //         rgOrIe: '98765432',
        //         status: true,
        //     },
        //     {
        //         id: 2,
        //         nome: 'Empresa ABC',
        //         tipo: false,
        //         cpfOrCnpj: '12.345.678/0001-90',
        //         rgOrIe: '98765432-1',
        //         status: true,
        //     }]
        this.buscarClientes();
    }

    novoCliente() {
        this.ref = this.dialogService.open(ClienteFormComponent,
            {
                header: 'Novo Cliente',
                width: '35%'
            })
    }

    private buscarClientes() {
        this.service.search().subscribe((value) => {
            this.clientes = value.content;
        })
    }

    private buscarPorId(id: number) {
        this.service.findById(id).subscribe((response) => {
            this.cliente = response;
        })
    }
}
