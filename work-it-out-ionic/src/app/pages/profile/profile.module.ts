import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { FooterPageModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    FooterPageModule,
  ],
  declarations: [ProfilePage],
  exports: [
    ReactiveFormsModule
  ]
})
export class ProfilePageModule {}
