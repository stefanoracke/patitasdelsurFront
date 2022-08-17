import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home-components/navbar/navbar.component';
import { FooterComponent } from './home-components/footer/footer.component';
import { ContactComponent } from './home-components/contact/contact.component';
import { DonationsComponent } from './home-components/donations/donations.component';
import { HistoryComponent } from './home-components/history/history.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HomeLayoutComponent } from './home-components/home-layout/home-layout.component';
import { AdoptaComponent } from './adopta/adopta.component';
import { ProvisorioComponent } from './provisorio/provisorio.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    DonationsComponent,
    HistoryComponent,
    HomeLayoutComponent,
    AdoptaComponent,
    ProvisorioComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PublicRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
