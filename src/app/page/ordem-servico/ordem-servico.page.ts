import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { CalendarPopoverComponent } from '../../components/calendar-popover/calendar-popover.component';

@Component({
  standalone: false,
  selector: 'app-ordem-servico',
  templateUrl: './ordem-servico.page.html',
  styleUrls: ['./ordem-servico.page.scss'],
})
export class OrdemServicoPage {

  dataAberturaInicial: string | null = null;
  dataAberturaFinal: string | null = null;
  dataConclusaoInicial: string | null = null;
  dataConclusaoFinal: string | null = null;

  constructor(private popoverCtrl: PopoverController) { }

  async openCalendar(event: any, fieldName: string) {
    const popover = await this.popoverCtrl.create({
      component: CalendarPopoverComponent,
      event: event, // O popover aparecerá ancorado ao elemento clicado
      backdropDismiss: true, // Fecha ao clicar fora
      translucent: true,
      cssClass: 'calendar-popover' // Classe para estilização opcional
    });

    await popover.present();

    // Aguarda o popover ser fechado
    const { data } = await popover.onDidDismiss();

    // Se uma data foi retornada, atualiza o campo correto
    if (data && data.date) {
      switch (fieldName) {
        case 'aberturaInicial': this.dataAberturaInicial = data.date; break;
        case 'aberturaFinal': this.dataAberturaFinal = data.date; break;
        case 'conclusaoInicial': this.dataConclusaoInicial = data.date; break;
        case 'conclusaoFinal': this.dataConclusaoFinal = data.date; break;
      }
    }
  }

  formatDate(isoString: string | null): string {
    if (!isoString) return '';
    try {
      return format(parseISO(isoString), 'dd/MM/yyyy');
    } catch (error) {
      return '';
    }
  }
}