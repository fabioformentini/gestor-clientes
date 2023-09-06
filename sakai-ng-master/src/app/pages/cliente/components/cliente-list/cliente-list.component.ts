import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";
import {Column} from "../../../../shared/models/colum.model";
import {ClienteListModel} from "../../../../shared/models/cliente-list.model";
import {ClienteService} from "../../../../shared/services/cliente.service";
import {ClienteModel} from "../../../../shared/models/cliente.model";
import {StatusEnum} from "../../../../shared/enums/status.enum";
import {FiltroModel} from "../../../../shared/models/filtro.model";

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
    filtroOn = false;
    filtro: FiltroModel = new FiltroModel();
    status = StatusEnum.selectItem;

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
        this.buscarClientes(this.filtro);
    }

    novoCliente() {
        this.ref = this.dialogService.open(ClienteFormComponent,
            {
                header: 'Novo Cliente',
                width: '35%'
            });
        this.ref.onDestroy.subscribe(value => {
            console.log(value)
        })
    }

    private buscarClientes(filtro: FiltroModel) {
        this.service.buscarClientes(filtro).subscribe((value) => {
            this.clientes = value.content;
        })
    }

    private buscarPorId(id: number) {
        this.service.findById(id).subscribe((response) => {
            this.cliente = response;
        })
    }

    filtrarClientes() {
        this.buscarClientes(this.filtro);
    }

    handleAcao(row: ClienteListModel, acao: string) {
        this.service.buscarPorId(row.id, row.tipo).subscribe((value) => {
            this.ref = this.dialogService.open(ClienteFormComponent,
                {
                    header: 'Novo Cliente',
                    width: '35%',
                    data: {cliente: value, acao: acao}
                });
        })

    }
}
