import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";
import {Column} from "../../../../shared/models/colum.model";
import {ClienteListModel} from "../../../../shared/models/cliente-list.model";
import {ClienteService} from "../../../../shared/services/cliente.service";
import {ClienteModel} from "../../../../shared/models/cliente.model";
import {StatusEnum} from "../../../../shared/enums/status.enum";
import {FiltroModel} from "../../../../shared/models/filtro.model";
import {ConfirmationService, ConfirmEventType, MessageService} from "primeng/api";

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss'],
    providers: [DialogService, ConfirmationService, MessageService]
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

    constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        public dialogService: DialogService,
        public service: ClienteService) {
    }

    ngOnInit() {
        this.cols = [
            {field: 'nome', header: 'Nome', text: true},
            {field: 'tipo', header: 'Tipo Pessoa'},
            {field: 'cpfOrCnpj', header: 'CPF/CNPJ', text: true},
            {field: 'rgOrIe', header: 'RG/IE', text: true},
            {field: 'status', header: 'Status'},
            {field: 'acoes', header: 'Ações'}
        ];
        this.buscarClientes(this.filtro);
    }

    novoCliente() {
        this.ref = this.dialogService.open(ClienteFormComponent,
            {
                header: 'Novo Cliente',
                width: '35%',
                data: {acao: ''}
            });
        this.ref.onClose.subscribe((cliente) => {
            if (cliente) {
                this.messageService.add({severity: 'success', summary: 'Success', detail: 'O cliente ' + cliente.nome + 'foi cadastrado com sucesso!'})
                this.buscarClientes(this.filtro)
            }
        });
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
                    header: 'Formulário Cliente',
                    width: '35%',
                    data: {cliente: value, acao: acao}
                });
        })

    }

    excluirCliente(id: number) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir o registro?',
            header: 'Confirmação de Exclusão',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Sim',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.service.delete(id).subscribe(() => {
                    this.buscarClientes(this.filtro);
                })
                this.messageService.add({ severity: 'info', summary: 'Confirmação', detail: 'Cliente inativado!' });
            }
        });
    }
}
