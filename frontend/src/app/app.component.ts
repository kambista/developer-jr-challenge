import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NotaService } from './service/nota.service';
import { Nota } from './model/nota';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AgregarNotaComponent } from './components/agregar-nota.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService, MessageService]
})
export class AppComponent implements OnInit {
  notas: Nota[] = [];
  ref: DynamicDialogRef | undefined;

  constructor(private notaService: NotaService,
    public dialogService: DialogService,
    public messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getNotas();
  }

  getNotas(): void {
    this.notaService.getNotas()
      .subscribe(
        {
          next: (response) => {
            this.notas = response.data;
          },
          error: (error: any) => { this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.data.message }); },
        }
      );
  }

  eliminarNota(id: number): void {
    this.notaService.deleteNota(id).subscribe({
      next: (response) => {
        this.messageService.add({ key: 'tst', severity: 'success', summary: 'Exito', detail: response.message });
        this.getNotas();
      },
      error: (error: any) => { this.messageService.add({ key: 'tst', severity: 'error', summary: 'Error', detail: error.data.message }); },
    });
  }

  editarNota(id: number): void {
    this.ref = this.dialogService.open(AgregarNotaComponent, {
      data: {
        id: id,
        editar: true
      },
      header: 'Editar Nota',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((nota: Nota) => {
      this.getNotas();
    });
  }

  agregarNota(): void {
    this.ref = this.dialogService.open(AgregarNotaComponent, {
      data: {
        id: 0,
        editar: false
      },
      header: 'Agregar Nota',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((nota: Nota) => {
      this.getNotas();
    });
  }
}
