import { Component } from '@angular/core';
import {ConcessionariaModel} from "../../../../shared/models/concessionaria.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarroModel} from "../../../../shared/models/carro.model";
import {ConcessionariaService} from "../../../../shared/services/concessionaria.service";
import {MessageService, SelectItem} from "primeng/api";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CarroService} from "../../../../shared/services/carro.service";

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.scss']
})
export class CarroFormComponent {

    carro: CarroModel;
    form: FormGroup;
    isEdit: boolean;
    isVisualizar: boolean
    concessionariasOptions: SelectItem[];

    constructor( private fb: FormBuilder,
                 private service: CarroService,
                 private concessionariaService: ConcessionariaService,
                 private messageService: MessageService,
                 public dialogService: DialogService,
                 private dialogConfig: DynamicDialogConfig,
                 public ref: DynamicDialogRef) {
        this.definirFormulario();
    }

    ngOnInit(): void {
        this.verificarAcao()
        this.buscarConcessionarias();
    }

    private definirFormulario() {
        this.form = this.fb.group({
            id: [null],
            placa: [null, [Validators.required]],
            modelo: [null, [Validators.required]],
            ano: [null, [Validators.required]],
            idConcessionaria: [null, [Validators.required]]
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
        this.renderizarDadosCarro();
    }

    private renderizarDadosCarro() {
        const carroEncontrado = this.dialogConfig.data.carro;
        if (!carroEncontrado) {
            return;
        }
        this.form.patchValue(carroEncontrado);
    }

    salvarCarro() {
        const carro = this.form.getRawValue();
        this.service.insert(carro).subscribe( value => {
            this.fecharDialog(value)
        })
    }

    fecharDialog(carroSalvo?: CarroModel) {
        this.ref.close(carroSalvo);
    }

    private buscarConcessionarias() {
        this.concessionariaService.findConcessionariasDropdown().subscribe(value => {
            this.concessionariasOptions = value;
        })
    }
}
