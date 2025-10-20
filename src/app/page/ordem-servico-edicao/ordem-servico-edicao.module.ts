import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrdemServicoEdicaoPageRoutingModule } from './ordem-servico-edicao-routing.module';
import { OrdemServicoEdicaoPage } from './ordem-servico-edicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdemServicoEdicaoPageRoutingModule
  ],
  declarations: [OrdemServicoEdicaoPage]
})
export class OrdemServicoEdicaoPageModule {}