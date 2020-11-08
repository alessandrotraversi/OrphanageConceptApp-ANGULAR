import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/landing/landing.component';
import { OrphanageComponent } from './views/orphanage/orphanage.component';
import { OrphanageCreateComponent } from './views/orphanage-create/orphanage-create.component';
import { OrphanageMapComponent } from './views/orphanage-map/orphanage-map.component';

// Fontawesome docs for angular apps https://www.npmjs.com/package/@fortawesome/angular-fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OrphanageComponent,
    OrphanageCreateComponent,
    OrphanageMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
