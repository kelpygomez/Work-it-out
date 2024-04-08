import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEditPageRoutingModule } from './profile-edit-routing.module';

import { ProfileEditPage } from './profile-edit.page';
import { FooterPageModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileEditPageRoutingModule,
    FooterPageModule,
  ],
  declarations: [ProfileEditPage],
  exports: [
    ReactiveFormsModule
  ]
})
export class ProfileEditPageModule {}
