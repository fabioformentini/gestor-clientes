import {Component, OnInit} from '@angular/core';
import {Column} from "../../../../shared/models/colum.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {AluguelFormComponent} from "../aluguel-form/aluguel-form.component";
import {AluguelListModel} from "../../../../shared/models/aluguel-list.model";
import {AluguelService} from "../../../../shared/services/aluguel.service";

@Component({
    selector: 'app-aluguel-list',
    templateUrl: './aluguel-list.component.html',
    styleUrls: ['./aluguel-list.component.scss'],
    providers: [DialogService, ConfirmationService, MessageService]

})
export class AluguelListComponent implements OnInit {
    cols!: Column[];
    ref: DynamicDialogRef | undefined;
    alugueis: AluguelListModel[];

    constructor(
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        public dialogService: DialogService,
        public service: AluguelService) {
    }

    ngOnInit() {
        this.construirColunasListagem();
        this.buscarAlugueis();
    }

    private construirColunasListagem() {
        this.cols = [
            {field: 'nomeCliente', header: 'Cliente', text: true},
            {field: 'placaCarro', header: 'Carro', text: true},
            {field: 'dataLocacao', header: 'Data de locação', text: true},
            {field: 'dataDevolucao', header: 'Data de devolução', text: true},
            {field: 'acoes', header: 'Ações'}
        ];
    }

    private buscarAlugueis() {
        this.service.findAll().subscribe((value) => {
            this.alugueis = value;
        })
    }

    novoAluguel() {
        this.ref = this.dialogService.open(AluguelFormComponent,
            {
                header: 'Novo Aluguel',
                width: '35%',
                data: {acao: ''}
            });
        this.ref.onClose.subscribe((aluguel) => {
            if (aluguel) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'O aluguel foi cadastrado com sucesso!'
                })
                this.buscarAlugueis()
            }
        });
    }

    handleAcao(row: AluguelListModel, acao: string) {
        this.service.findById(row.id).subscribe((value) => {
            this.ref = this.dialogService.open(AluguelFormComponent,
                {
                    header: 'Formulário Aluguel',
                    width: '35%',
                    data: {aluguel: value, acao: acao}
                });
            this.ref.onClose.subscribe((aluguel) => {
                if (aluguel) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'O aluguel foi editado com sucesso!'
                    })
                    this.buscarAlugueis()
                }
            });
        })
    }

    excluirAluguel(id: number) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir o registro?',
            header: 'Confirmação de Exclusão',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Sim',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.service.delete(id).subscribe(() => {
                    this.buscarAlugueis();
                })
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmação',
                    detail: 'Aluguel inativado!'
                });
            }
        });
    }


}
