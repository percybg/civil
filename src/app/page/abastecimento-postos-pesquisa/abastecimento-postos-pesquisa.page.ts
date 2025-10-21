import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abastecimento-postos-pesquisa',
  templateUrl: './abastecimento-postos-pesquisa.page.html',
  styleUrls: ['./abastecimento-postos-pesquisa.page.scss'],
  standalone: false
})
export class AbastecimentoPostosPesquisaPage implements OnInit {

  resultados: any[] = [];

  constructor() { }

  ngOnInit() {
    this.resultados = [
      {
        fornecedor: 'ALELO INSTITUIÇÃO PAGEMTNO S/A',
        equipamento: 'VETERO87',
        voucher: '6314',
        data: '99/99/9999',
        observacao: 'GALÃO RESERVA'
      },
      {
        fornecedor: 'POSTO IPIRANGA CENTRO',
        equipamento: 'CAMINHÃO PIPA',
        voucher: '7852',
        data: '15/10/2025',
        observacao: 'COMPLETAR TANQUE'
      }
    ];
  }
}