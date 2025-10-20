import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interface para definir a estrutura de um objeto de foto
export interface Foto {
  filepath: string;
  webviewPath?: string;
}

@Component({
  standalone: false,
  selector: 'app-ordem-servico-defeitos',
  templateUrl: './ordem-servico-defeitos.page.html',
  styleUrls: ['./ordem-servico-defeitos.page.scss'],
})
export class OrdemServicoDefeitosPage implements OnInit {

  segmentoAtivo: string = 'defeitos';
  public fotos: Foto[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.fotos = [
    ];
  }

  segmentoMudou(event: any) {
    this.segmentoAtivo = event.detail.value;
  }

  tirarFoto() {
    console.log('Botão Nova Foto clicado! Navegando...');
    // A LÓGICA DE NAVEGAÇÃO FOI ADICIONADA DE VOLTA
    this.router.navigate(['/tabs/ordem-servico-nova-foto']);
  }
}