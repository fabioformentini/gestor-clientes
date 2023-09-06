import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {TelefoneModel} from "../../../../shared/models/telefone.model";
import {TipoPessoaEnum} from "../../../../shared/enums/tipo-pessoa.enum";
import {StatusEnum} from "../../../../shared/enums/status.enum";
import {ClienteService} from "../../../../shared/services/cliente.service";
import { MessageService } from 'primeng/api';
import {Column} from "../../../../shared/models/colum.model";
import {PessoaFisicaModel} from "../../../../shared/models/pessoa-fisica.model";
import {PessoaJuridicaModel} from "../../../../shared/models/pessoa-juridica.model";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.scss'],
    providers: [MessageService]
})
export class ClienteFormComponent implements OnInit {
    listaTelefones: TelefoneModel[] = [];
    telefone: TelefoneModel;
    tipoPessoa: typeof TipoPessoaEnum = TipoPessoaEnum;
    form: FormGroup
    cliente: any;
    cols!: Column[];
    tiposPessoaOptions = TipoPessoaEnum.selectItem;
    status = StatusEnum.selectItem;
    isEdit: boolean;
    isVisualizar: boolean

    constructor(
        private fb: FormBuilder,
        private service: ClienteService,
        private messageService: MessageService,
        public dialogService: DialogService,
        private config: DynamicDialogConfig,
        public ref: DynamicDialogRef) {
        this.definirFormulario();
    }

    ngOnInit() {
        this.cols = [
            {field: 'numero', header: 'Número', text: true},
            {field: 'acoes', header: 'Ações'},
        ];
        this.verificarAcao()
    }

    private verificarAcao(){
        if (this.config.data.acao == 'visualizar'){
            this.form.disable();
            this.isVisualizar = true;
        }
        if (this.config.data.acao == 'editar'){
            this.form.enable();
            this.isEdit = true;
        }
        this.renderizarDadosCliente();
    }

    private renderizarDadosCliente() {
        const clienteEncontrado = this.config.data.cliente;
        if (!clienteEncontrado) {
            return
        }
        clienteEncontrado.dataCadastro = new Date(clienteEncontrado.dataCadastro)
        if (clienteEncontrado.tipo == TipoPessoaEnum.PESSOA_FISICA) {
            this.setDadosFormPf(clienteEncontrado);
        }
        if (clienteEncontrado.tipo == TipoPessoaEnum.PESSOA_JURIDICA) {
            this.setDadosFormPj(clienteEncontrado);
        }
    }

    private setDadosFormPj(clienteEncontrado) {
        this.form.patchValue(clienteEncontrado)
        this.form.get('cpfOrCnpj').setValue(clienteEncontrado.cnpj)
        this.form.get('rgOrIe').setValue(clienteEncontrado.ie)
        this.listaTelefones = clienteEncontrado.telefones;
    }

    private setDadosFormPf(clienteEncontrado) {
        this.form.patchValue(clienteEncontrado)
        this.form.get('cpfOrCnpj').setValue(clienteEncontrado.cpf)
        this.form.get('rgOrIe').setValue(clienteEncontrado.rg)
        this.listaTelefones = clienteEncontrado.telefones;
    }

    private definirFormulario() {
        this.form = this.fb.group({
            id: [null],
            nome: [null, [Validators.required]],
            tipo: [null, [Validators.required]],
            cpfOrCnpj: [{value: null, disabled: true}, [Validators.required]],
            rgOrIe: [{value: null, disabled: true}],
            dataCadastro: [null],
            status: [null],
            telefone: [null]
        });
    }

    salvarCliente() {
        if(this.form.get('tipo').value == TipoPessoaEnum.PESSOA_FISICA) {
            this.converterModelPf();
        }
        if (this.form.get('tipo').value == TipoPessoaEnum.PESSOA_JURIDICA){
            this.converterModelPj();
        }
        this.cliente.telefones = this.listaTelefones;
        this.service.salvarCliente(this.cliente, this.form.get('tipo').value).subscribe(value => {
            this.fecharDialog(value);
        }, (error) => {
            this.form.get('cpfOrCnpj').setErrors({'invalid': true});
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        })
    }

    private converterModelPj() {
        this.cliente = new PessoaJuridicaModel(this.form.get('cpfOrCnpj').value, this.form.get('rgOrIe').value)
        this.cliente = this.form.getRawValue();
        this.cliente.cnpj = this.cliente.cpfOrCnpj;
        this.cliente.ie = this.cliente.rgOrIe;
    }

    private converterModelPf() {
        this.cliente = new PessoaFisicaModel(this.form.get('cpfOrCnpj').value, this.form.get('rgOrIe').value)
        this.cliente = this.form.getRawValue();
        this.cliente.cpf = this.cliente.cpfOrCnpj;
        this.cliente.rg = this.cliente.rgOrIe;
    }

    addTelefone() {
        this.telefone = new TelefoneModel();
        this.telefone.numero = this.form.get('telefone').value;
        this.listaTelefones.push(this.telefone)
    }

    handleTipoPessoa() {
        this.form.get('cpfOrCnpj').enable();
        this.form.get('rgOrIe').enable();
    }

    fecharDialog(clienteSalvo?: any) {
        this.ref.close(clienteSalvo)
    }

    excluirTelefone(rowData: any) {
        const index = this.listaTelefones.findIndex(obj => obj.numero == rowData.numero);
        this.listaTelefones.splice(index, 1);
    }
}
