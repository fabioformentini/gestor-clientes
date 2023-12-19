import {Component, OnInit} from '@angular/core';
import {ConcessionariaModel} from "../../../../shared/models/concessionaria.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AluguelModel} from "../../../../shared/models/aluguel.model";
import {ConcessionariaService} from "../../../../shared/services/concessionaria.service";
import {MessageService, SelectItem} from "primeng/api";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {AluguelService} from "../../../../shared/services/aluguel.service";
import {CarroService} from "../../../../shared/services/carro.service";
import {ClienteService} from "../../../../shared/services/cliente.service";

@Component({
    selector: 'app-aluguel-form',
    templateUrl: './aluguel-form.component.html',
    styleUrls: ['./aluguel-form.component.scss']
})
export class AluguelFormComponent implements OnInit {

    aluguel: AluguelModel;
    form: FormGroup;
    isEdit: boolean;
    isVisualizar: boolean
    clienteOptions: SelectItem[];
    carroOptions: SelectItem[];
    currentDate: Date = new Date();

    constructor(private fb: FormBuilder,
                private service: AluguelService,
                private messageService: MessageService,
                public dialogService: DialogService,
                private dialogConfig: DynamicDialogConfig,
                public ref: DynamicDialogRef,
                private carroService: CarroService,
                private clienteService: ClienteService) {
        this.definirFormulario();
    }

    ngOnInit(): void {
        this.verificarAcao()
        this.buscarCarros();
        this.buscarClientes();
    }

    private definirFormulario() {
        this.form = this.fb.group({
            id: [null],
            idCliente: [null, [Validators.required]],
            idCarro: [null, [Validators.required]],
            dataLocacao: [this.currentDate, [Validators.required]],
            dataDevolucao: [null, [Validators.required]],
        });
    }

    private verificarAcao(){
        if (this.dialogConfig.data.acao == 'visualizar'){
            this.form.disable();
            this.isVisualizar = true;
        }
        if (this.dialogConfig.data.acao == 'editar'){
            this.form.enable();
            this.isEdit = true;
        }
        this.renderizarDadosAluguel();
    }

    private renderizarDadosAluguel() {
        const aluguelEncontrado = this.dialogConfig.data.aluguel;
        if (!aluguelEncontrado) {
            return;
        }
        aluguelEncontrado.dataLocacao = new Date(aluguelEncontrado.dataLocacao);
        aluguelEncontrado.dataDevolucao = new Date(aluguelEncontrado.dataDevolucao);
        this.form.patchValue(aluguelEncontrado);
    }

    salvarAluguel() {
        const aluguel = this.form.getRawValue();
        this.service.insert(aluguel).subscribe( value => {
            this.fecharDialog(value)
        })
    }

    fecharDialog(aluguelSalvo?: AluguelModel) {
        this.ref.close(aluguelSalvo);
    }

    private buscarCarros() {
        this.carroService.findCarrosDropdown(this.form.get("id").value).subscribe(value => {
            this.carroOptions = value;
        })
    }

    private buscarClientes() {
        this.clienteService.findClientesDropdown().subscribe(value => {
            this.clienteOptions = value;
        })
    }
}
