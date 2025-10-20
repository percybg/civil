import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-ordem-servico-nova-foto',
  templateUrl: './ordem-servico-nova-foto.page.html',
  styleUrls: ['./ordem-servico-nova-foto.page.scss'],
})
export class OrdemServicoNovaFotoPage implements OnInit {

  fotoPath: string | null = null;

  constructor() { }

  ngOnInit() {
  }

  localizarFoto() {
    console.log('Botão Localizar Foto clicado!');
    this.fotoPath = 'https://via.placeholder.com/360x171.png/e0e0e0/555?text=Foto+Localizada';
  }

  confirmarInclusao() {
    console.log('Botão Confirmar Inclusão clicado!');
  }
}