import { Injectable } from '@angular/core';
import { Editora } from '../app/editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Editora[] = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Pearson'),
    new Editora(3, 'Addison Wesley'),
  ];

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }
}

