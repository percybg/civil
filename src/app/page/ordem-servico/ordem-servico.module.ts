import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarPopoverComponent } from '../../components/calendar-popover/calendar-popover.component';
import { IonicModule } from '@ionic/angular';
import { OrdemServicoPageRoutingModule } from './ordem-servico-routing.module';
import { OrdemServicoPage } from './ordem-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemServicoPageRoutingModule
    
  ],
    declarations: [OrdemServicoPage, CalendarPopoverComponent]
})
export class OrdemServicoPageModule {}