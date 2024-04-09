import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderPageModule } from 'src/app/components/header/header.module';
import { FooterPageModule } from './components/footer/footer.module';
import { AuthInterceptor } from '../../auth.interceptor';
// Importa ExerciseService
import { ExerciseService } from './services/exercise.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HeaderPageModule,
    FooterPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ExerciseService, // Agrega ExerciseService a los providers,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
