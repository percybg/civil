import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abastecimento-proprio-pesquisa',
  templateUrl: './abastecimento-proprio-pesquisa.page.html',
  styleUrls: ['./abastecimento-proprio-pesquisa.page.scss'],
  standalone: false
})
export class AbastecimentoProprioPesquisaPage implements OnInit {

  resultados: any[] = [];

  constructor() { }

  ngOnInit() {
    this.resultados = [
      {
        numeroRequisicao: '13763',
        status: 'Não concluida',
        empreendimento: '900',
        equipamento: 'fdjskf jksdjf',
        bombaBico: 'bombar/Bico: 3 | Tanque itaquá',
        destino: 'EQ | Equipamento',
        data: '99/99/9999',
        observacao: 'CAM. BASCULANTE GBP-3859'
      },
      {
        numeroRequisicao: '13764',
        status: 'Concluida',
        empreendimento: '901',
        equipamento: 'Trator de esteira D6',
        bombaBico: 'bombar/Bico: 1 | Tanque principal',
        destino: 'EQ | Equipamento',
        data: '15/10/2025',
        observacao: 'CAMINHÃO PIPA MERCEDES'
      }
    ];
  }
}