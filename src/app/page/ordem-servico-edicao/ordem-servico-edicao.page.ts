import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-ordem-servico-edicao',
  templateUrl: './ordem-servico-edicao.page.html',
  styleUrls: ['./ordem-servico-edicao.page.scss'],
})
export class OrdemServicoEdicaoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  proximaEtapa() {
    console.log('Botão de próxima etapa clicado!');
    // A linha abaixo está comentada porque a nova página ainda não existe.
    // this.router.navigate(['/tabs/NOME-DA-PROXIMA-PAGINA']);
  }
}