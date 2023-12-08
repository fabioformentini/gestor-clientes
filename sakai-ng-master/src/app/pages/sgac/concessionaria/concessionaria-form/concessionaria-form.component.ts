import {Component, OnInit} from '@angular/core';
import {ConcessionariaModel} from "../../../../shared/models/concessionaria.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConcessionariaService} from "../../../../shared/services/concessionaria.service";

@Component({
  selector: 'app-concessionaria-form',
  templateUrl: './concessionaria-form.component.html',
  styleUrls: ['./concessionaria-form.component.scss']
})
export class ConcessionariaFormComponent implements OnInit{

    concessionaria: ConcessionariaModel;
    form: FormGroup;
    isEdit: boolean;
    isVisualizar: boolean


    constructor( private fb: FormBuilder,
                 private service: ConcessionariaService,
                 private messageService: MessageService,
                 public dialogService: DialogService,
                 private dialogConfig: DynamicDialogConfig,
                 public ref: DynamicDialogRef) {
        this.definirFormulario();
    }

    ngOnInit(): void {
        this.verificarAcao()
    }

    private definirFormulario() {
        this.form = this.fb.group({
            id: [null],
            nome: [null, [Validators.required]],
            endereco: [null, [Validators.required]]
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
        this.renderizarDadosConcessionaria();
    }

    private renderizarDadosConcessionaria() {
        const concessionariaEncontrada = this.dialogConfig.data.concessionaria;
        if (!concessionariaEncontrada) {
            return;
        }
        this.form.patchValue(concessionariaEncontrada);
    }

    salvarConcessionaria() {
        const concessionaria = this.form.getRawValue();
        this.service.insert(concessionaria).subscribe( value => {
            this.fecharDialog(value)
        })
    }

    fecharDialog(concessionariaSalva?: ConcessionariaModel) {
        this.ref.close(concessionariaSalva);
    }


}
