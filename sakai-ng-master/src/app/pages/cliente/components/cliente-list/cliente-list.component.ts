import {Component} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ClienteFormComponent} from "../cliente-form/cliente-form.component";

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss'],
    providers: [DialogService]
})

export class ClienteListComponent {
    products: any = [
        {code: 1, name: 'Teste', category: 'Categoria', quantity: 15}
    ];

    cols!: Column[];
    ref: DynamicDialogRef | undefined;
    display: boolean = false;

    constructor(public dialogService: DialogService) {
    }

    ngOnInit() {

    }

    novoCliente() {
        this.ref = this.dialogService.open(ClienteFormComponent,
            {
                header: 'Novo Cliente',
                width: '35%'
            })
    }
}
