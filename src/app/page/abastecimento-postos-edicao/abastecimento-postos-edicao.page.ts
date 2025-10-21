import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { CalendarPopoverComponent } from '../../components/calendar-popover/calendar-popover.component';

@Component({
  selector: 'app-abastecimento-postos-edicao',
  templateUrl: './abastecimento-postos-edicao.page.html',
  styleUrls: ['./abastecimento-postos-edicao.page.scss'],
  standalone: false
})
export class AbastecimentoPostosEdicaoPage implements OnInit {

  dtRetirada: string | null = null;
  hodometroData: string | null = null;
  nCtlPostoData: string | null = null;

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async openCalendar(event: any, fieldName: string) {
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
      switch (fieldName) {
        case 'dtRetirada': this.dtRetirada = data.date; break;
        case 'hodometroData': this.hodometroData = data.date; break;
        case 'nCtlPostoData': this.nCtlPostoData = data.date; break;
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