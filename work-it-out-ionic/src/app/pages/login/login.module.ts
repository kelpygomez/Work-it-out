import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerPageModule } from 'src/app/components/loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    LoadingSpinnerPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
