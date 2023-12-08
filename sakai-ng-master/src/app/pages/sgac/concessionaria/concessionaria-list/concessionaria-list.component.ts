import {Component} from '@angular/core';
import {Column} from "../../../../shared/models/colum.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConcessionariaService} from "../../../../shared/services/concessionaria.service";
import {FiltroModel} from "../../../../shared/models/filtro.model";
import {ConcessionariaListModel} from "../../../../shared/models/concessionaria-list.model";
import {ClienteListModel} from "../../../../shared/models/cliente-list.model";
import {ClienteFormComponent} from "../../cliente/cliente-form/cliente-form.component";
import {ConcessionariaFormComponent} from "../concessionaria-form/concessionaria-form.component";

@Component({
    selector: 'app-concessionaria-list',
    templateUrl: './concessionaria-list.component.html',
    styleUrls: ['./concessionaria-list.component.scss'],
    providers: [DialogService, ConfirmationService, MessageService]
})
export class ConcessionariaListComponent {
    cols!: Column[];
    ref: DynamicDialogRef | undefined;
    concessionarias: ConcessionariaListModel[];

    constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        public dialogService: DialogService,
        public service: ConcessionariaService) {
    }

    ngOnInit() {
        this.construirColunasListagem();
        this.buscarConcessionarias();
    }

    private construirColunasListagem() {
        this.cols = [
            {field: 'nome', header: 'Nome', text: true},
            {field: 'endereco', header: 'Endereço', text: true},
            {field: 'acoes', header: 'Ações'}
        ];
    }

    private buscarConcessionarias() {
        this.service.findAll().subscribe((value) => {
            this.concessionarias = value;
        })
    }

    novaConcessionaria() {
        this.ref = this.dialogService.open(ConcessionariaFormComponent,
            {
                header: 'Novo Cliente',
                width: '35%',
                data: {acao: ''}
            });
        this.ref.onClose.subscribe((concessionaria) => {
            if (concessionaria) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'A concessionária ' + concessionaria.nome + ' foi cadastrada com sucesso!'
                })
                this.buscarConcessionarias()
            }
        });
    }

    handleAcao(row: ClienteListModel, acao: string) {
        this.service.findById(row.id).subscribe((value) => {
            this.ref = this.dialogService.open(ConcessionariaFormComponent,
                {
                    header: 'Formulário Concessionária',
                    width: '35%',
                    data: {concessionaria: value, acao: acao}
                });
            this.ref.onClose.subscribe((concessionaria) => {
                if (concessionaria) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'A concessionaria ' + concessionaria.nome + ' foi editado com sucesso!'
                    })
                    this.buscarConcessionarias()
                }
            });
        })
    }

    excluirConcessionaria(id: number) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir o registro?',
            header: 'Confirmação de Exclusão',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Sim',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.service.delete(id).subscribe(() => {
                    this.buscarConcessionarias();
                })
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmação',
                    detail: 'Concessionária inativada!'
                });
            }
        });
    }


}
