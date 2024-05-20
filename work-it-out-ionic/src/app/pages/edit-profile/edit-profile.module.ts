import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilePageRoutingModule } from './edit-profile-routing.module';

import { EditProfilePage } from './edit-profile.page';
import { FooterPageModule } from 'src/app/components/footer/footer.module';
import { FooterPage } from 'src/app/components/footer/footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilePageRoutingModule
    ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
