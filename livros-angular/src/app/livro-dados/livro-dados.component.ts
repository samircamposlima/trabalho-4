import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent  implements OnInit{
  opcoes: any[] = [];
  titulo: string = '';
  resumo: string = '';
  autores: string = '';
  codEditora:  any;
  livro: any;
  

  constructor(
    private controleLivro: ControleLivrosService,
    private controleEditora: ControleEditoraService,
    private router: Router
  ) {
    
  }
  ngOnInit(): void {
    this.opcoes = this.controleEditora.getEditoras().map(editora => ({
      value: editora.codEditora,
      text: editora.nome
    }));
    this.livro = this.controleEditora.getEditoras();
   
  }

  tratarCombo(event: any) {
    this.codEditora = Number(event.target.value);
  }

  incluir() {
    const livro = {
      codigo: 0, // Você pode definir o código conforme necessário
      titulo: this.titulo,
      resumo: this.resumo,
      autores: this.autores.split('\n'),
      
      codEditora: +this.codEditora,
    };
    
    this.controleLivro.incluir(livro);
    this.controleEditora.getNomeEditora(livro.codEditora)
    this.router.navigate(['']); // Navegue de volta para a página inicial
  }
}