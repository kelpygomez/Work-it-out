import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { LoadingSpinnerPageModule } from 'src/app/components/loading-spinner/loading-spinner.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    LoadingSpinnerPageModule
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
