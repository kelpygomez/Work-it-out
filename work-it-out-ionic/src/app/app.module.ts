import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderPageModule } from 'src/app/components/header/header.module';
import { FooterPageModule } from './components/footer/footer.module';

// Importa ExerciseService
import { ExerciseService } from './services/exercise.service';
import { LoadingSpinnerPageModule } from './components/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HeaderPageModule,
    FooterPageModule,
    LoadingSpinnerPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ExerciseService // Agrega ExerciseService a los providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
