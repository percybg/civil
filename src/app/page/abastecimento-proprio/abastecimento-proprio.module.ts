import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AbastecimentoProprioPageRoutingModule } from './abastecimento-proprio-routing.module';
import { AbastecimentoProprioPage } from './abastecimento-proprio.page';

// 1. IMPORTAR O MÓDULO DO COMPONENTE DE CALENDÁRIO
import { CalendarPopoverComponentModule } from '../../components/calendar-popover/calendar-popover.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbastecimentoProprioPageRoutingModule,
    // 2. ADICIONAR O MÓDULO AOS IMPORTS
    CalendarPopoverComponentModule
  ],
  declarations: [AbastecimentoProprioPage]
})
export class AbastecimentoProprioPageModule {}