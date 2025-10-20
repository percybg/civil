import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdemServicoEdicaoPageRoutingModule } from './ordem-servico-edicao-routing.module';
import { OrdemServicoEdicaoPage } from './ordem-servico-edicao.page';
// 1. IMPORTAR O NOVO MÓDULO DO COMPONENTE
import { CalendarPopoverComponentModule } from '../../components/calendar-popover/calendar-popover.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemServicoEdicaoPageRoutingModule,
    // 2. ADICIONAR O MÓDULO AOS IMPORTS
    CalendarPopoverComponentModule
  ],
  // 3. REMOVER O COMPONENTE DAS DECLARAÇÕES
  declarations: [OrdemServicoEdicaoPage]
})
export class OrdemServicoEdicaoPageModule {}