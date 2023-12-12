import {Component, OnInit} from '@angular/core';
import {Column} from "../../../../shared/models/colum.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {CarroFormComponent} from "../carro-form/carro-form.component";
import {CarroListModel} from "../../../../shared/models/carro-list.model";
import {CarroService} from "../../../../shared/services/carro.service";

@Component({
    selector: 'app-carro-list',
    templateUrl: './carro-list.component.html',
    styleUrls: ['./carro-list.component.scss'],
    providers: [DialogService, ConfirmationService, MessageService]
})
export class CarroListComponent implements OnInit {
    cols!: Column[];
    ref: DynamicDialogRef | undefined;
    carros: CarroListModel[];


    constructor( private confirmationService: ConfirmationService,
                 private messageService: MessageService,
                 public dialogService: DialogService,
                 public service: CarroService) {
    }

    ngOnInit(): void {
        this.construirColunasListagem();
        this.buscarCarros();
    }

    private construirColunasListagem() {
        this.cols = [
            {field: 'placa', header: 'Placa', text: true},
            {field: 'modelo', header: 'Modelo', text: true},
            {field: 'ano', header: 'Ano', text: true},
            {field: 'nomeConcessionaria', header: 'Concessionária', text: true},
            {field: 'acoes', header: 'Ações'}
        ];
    }

    private buscarCarros() {
        this.service.findAll().subscribe((value) => {
            this.carros = value;
        })
    }

    novoCarro() {
        this.ref = this.dialogService.open(CarroFormComponent,
            {
                header: 'Novo Carro',
                width: '35%',
                data: {acao: ''}
            });
        this.ref.onClose.subscribe((carro) => {
            if (carro) {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'O carro ' + carro.nome + ' foi cadastrado com sucesso!'
                })
                this.buscarCarros()
            }
        });
    }

    handleAcao(row: CarroListModel, acao: string) {
        this.service.findById(row.id).subscribe((value) => {
            this.ref = this.dialogService.open(CarroFormComponent,
                {
                    header: 'Formulário Carro',
                    width: '35%',
                    data: {carro: value, acao: acao}
                });
            this.ref.onClose.subscribe((carro) => {
                if (carro) {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'O carro ' + carro.nome + ' foi editado com sucesso!'
                    })
                    this.buscarCarros()
                }
            });
        })
    }

    excluirCarro(id: number) {
        this.confirmationService.confirm({
            message: 'Tem certeza que deseja excluir o registro?',
            header: 'Confirmação de Exclusão',
            icon: 'pi pi-info-circle',
            acceptLabel: 'Sim',
            rejectLabel: 'Cancelar',
            accept: () => {
                this.service.delete(id).subscribe(() => {
                    this.buscarCarros();
                })
                this.messageService.add({
                    severity: 'info',
                    summary: 'Confirmação',
                    detail: 'Carro inativado!'
                });
            }
        });
    }


}
