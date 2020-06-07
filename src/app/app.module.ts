import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OfferComponent } from './offer/offer.component';
import { CoachesComponent } from './coaches/coaches.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { EditHeaderComponent } from './edit-header/edit-header.component';
import { LoaderComponent } from './loader/loader.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    OfferComponent,
    CoachesComponent,
    FooterComponent,
    AuthModalComponent,
    OurServicesComponent,
    EditHeaderComponent,
    LoaderComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
