import { Component, OnInit } from '@angular/core';
import { Nota } from '../model/nota';
import { NotaService } from '../service/nota.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
    selector: 'app-root',
    templateUrl: './agregar-nota.component.html',
    providers: [MessageService, DynamicDialogRef]
})
export class AgregarNotaComponent implements OnInit {
    nota: Nota = new Nota(0, '', '');
    editar: boolean = false;

    constructor(
        private notaService: NotaService,
        private messageService: MessageService,
        private config: DynamicDialogConfig,
        public ref: DynamicDialogRef) {
        this.editar = this.config.data.editar;
        this.nota.id = this.config.data.id;
    }

    ngOnInit(): void {
        if (this.editar) {
            this.notaService.getNotaById(this.nota.id).subscribe({
                next: (response) => {
                    if (response.data) {
                        this.nota = response.data;
                    } else {
                        this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: "Nota not found" });
                    }
                },
                error: (error: any) => { this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.data.message }); },
            });
        }
    }

    grabarNota(): void {
        if (this.editar) {
            this.editarNota()
        }
        else {
            this.agregarNota();
        }
    }

    editarNota(): void {
        this.notaService.updateNota(this.nota, this.nota.id).subscribe({
            next: (response) => {
                this.messageService.add({ key: 'tst', severity: 'success', summary: 'Exito', detail: response.message });
                this.ref.close(this.nota);
            },
            error: (error: any) => { this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.data.message }); },
        });
    }

    agregarNota(): void {
        this.notaService.addNota(this.nota).subscribe({
            next: (response) => {
                this.messageService.add({ key: 'tst', severity: 'success', summary: 'Exito', detail: response.message });
                this.ref.close(this.nota);
            },
            error: (error: any) => { this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.data.message }); },
        });
    }
}
