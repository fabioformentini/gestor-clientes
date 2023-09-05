import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClienteModel} from "../../../../model/cliente.model";
import {TelefoneModel} from "../../../../model/telefone.model";

class Column {
}

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit{
    listaTelefones: TelefoneModel[] = [];
    telefone: TelefoneModel;
    tipoDocumento = 'CPF';
    form: FormGroup
    cliente: ClienteModel;
    cols!: Column[];

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
            cpfOrCnpj: [null],
            rgOrIe: [null],
            dataCadastro: [null],
            status: [null],
            telefone: [null],
            listaTelefones: [null],
        });
    }

    salvarCliente() {
        this.cliente = this.form.getRawValue();
        this.cliente.listaTelefones = this.listaTelefones;
        console.log(this.cliente);
    }

    addTelefone() {
        this.telefone = new TelefoneModel();
        this.telefone.numero = this.form.get('telefone').value;
        this.listaTelefones.push(this.telefone)
    }
}
