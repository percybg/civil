import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbastecimentoPostosPageRoutingModule } from './abastecimento-postos-routing.module';

import { AbastecimentoPostosPage } from './abastecimento-postos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbastecimentoPostosPageRoutingModule
  ],
  declarations: [AbastecimentoPostosPage]
})
export class AbastecimentoPostosPageModule {}
