export class Nota {
  id: number;
  name: string;
  contenido: string;

  constructor(id: number, name: string, contenido: string) {
    this.id = id;
    this.name = name;
    this.contenido = contenido;
  }
}
