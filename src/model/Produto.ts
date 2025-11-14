export abstract class Produto {
  protected _id: number;
  protected _nome: string;

  constructor(id: number, nome: string) {
    this._id = id;
    this._nome = nome;
  }

  get id() { return this._id; }
  get nome() { return this._nome; }
  set nome(novoNome: string) { this._nome = novoNome; }

  abstract tipo(): string; 
}

