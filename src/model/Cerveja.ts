import { Produto } from "./Produto";



export class Cerveja extends Produto {
  private _categoria: string;

  constructor(id: number, nome: string, categoria: string) {
    super(id, nome);
    this._categoria = categoria;
  }

  get categoria() { return this._categoria; }
  set categoria(cat: string) { this._categoria = cat; }

  tipo(): string {
    return "Cerveja";
  }
}
