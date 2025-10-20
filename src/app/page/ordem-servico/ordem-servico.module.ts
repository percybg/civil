import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdemServicoPageRoutingModule } from './ordem-servico-routing.module';
import { OrdemServicoPage } from './ordem-servico.page';
// 1. IMPORTAR O NOVO MÓDULO DO COMPONENTE
import { CalendarPopoverComponentModule } from '../../components/calendar-popover/calendar-popover.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemServicoPageRoutingModule,
    // 2. ADICIONAR O MÓDULO AOS IMPORTS
    CalendarPopoverComponentModule
  ],
  // 3. REMOVER O COMPONENTE DAS DECLARAÇÕES
  declarations: [OrdemServicoPage]
})
export class OrdemServicoPageModule {}