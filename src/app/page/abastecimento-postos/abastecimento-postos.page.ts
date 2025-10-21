import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { CalendarPopoverComponent } from '../../components/calendar-popover/calendar-popover.component';

@Component({
  selector: 'app-abastecimento-postos',
  templateUrl: './abastecimento-postos.page.html',
  styleUrls: ['./abastecimento-postos.page.scss'],
  standalone: false
})
export class AbastecimentoPostosPage implements OnInit {

  // Variáveis para armazenar as datas
  dataInicial: string | null = null;
  dataFinal: string | null = null;

  constructor(
    private popoverCtrl: PopoverController,
    private router: Router
  ) { }

  ngOnInit() { }

  // Função para abrir o calendário
  async openCalendar(event: any, fieldName: 'dataInicial' | 'dataFinal') {
    const popover = await this.popoverCtrl.create({
      component: CalendarPopoverComponent,
      event: event,
      backdropDismiss: true,
      translucent: true,
      cssClass: 'calendar-popover'
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();

    if (data && data.date) {
      if (fieldName === 'dataInicial') {
        this.dataInicial = data.date;
      } else if (fieldName === 'dataFinal') {
        this.dataFinal = data.date;
      }
    }
  }

  // Função para formatar a data para exibição
  formatDate(isoString: string | null): string {
    if (!isoString) return '';
    try {
      return format(parseISO(isoString), 'dd/MM/yyyy');
    } catch (error) {
      return '';
    }
  }

  pesquisar() {
    console.log('Navegando para a página de pesquisa de abastecimento em postos...');
    this.router.navigate(['/tabs/abastecimento-postos-pesquisa']);
  }

    novoAbastecimento() {
    console.log('Navegando para a página de edição de abastecimento em postos...');
    this.router.navigate(['/tabs/abastecimento-postos-edicao']);
  }
}