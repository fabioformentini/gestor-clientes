import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClienteModel} from "../../../../shared/models/cliente.model";
import {TelefoneModel} from "../../../../shared/models/telefone.model";
import {TipoPessoaEnum} from "../../../../shared/enums/tipo-pessoa.enum";
import {StatusEnum} from "../../../../shared/enums/status.enum";

class Column {
}

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
    listaTelefones: TelefoneModel[] = [];
    telefone: TelefoneModel;
    tipoPessoa: typeof TipoPessoaEnum = TipoPessoaEnum;
    form: FormGroup
    cliente: ClienteModel;
    cols!: Column[];
    tiposPessoaOptions = TipoPessoaEnum.selectItem;
    status = StatusEnum.selectItem;

    constructor(private fb: FormBuilder) {
        this.definirFormulario();
    }

    ngOnInit() {
        this.cols = [
            {field: 'numero', header: 'Número', text: true},
            {field: 'acoes', header: 'Ações'},
        ];
    }

    private definirFormulario() {
        this.form = this.fb.group({
            id: [null],
            nome: [null],
            tipo: [null],
            cpfOrCnpj: [{value: null, disabled: true}],
            rgOrIe: [{value: null, disabled: true}],
            dataCadastro: [null],
            status: [null],
            telefone: [null],
            listaTelefones: [null],
        });
    }

    salvarCliente() {
        this.cliente = this.form.getRawValue();
        this.cliente.listaTelefones = this.listaTelefones;
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
}
