import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { VisionComponent } from './Components/vision/vision.component';
import { KnowUSComponent } from './Components/know-us/know-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactUsNowComponent } from './Components/contact-us-now/contact-us-now.component';
import { AgricultureComponent } from './Components/OurServices/agriculture/agriculture.component';
import { DeliveryComponent } from './Components/OurServices/delivery/delivery.component';
import { SurveillanceComponent } from './Components/OurServices/surveillance/surveillance.component';
import { MH1FComponent } from './Components/products-pages/mh1-f/mh1-f.component';
import { MH1FAComponent } from './Components/products-pages/mh1-fa/mh1-fa.component';
import { MH1DComponent } from './Components/products-pages/mh1-d/mh1-d.component';
import { MH1sComponent } from './Components/products-pages/mh1s/mh1s.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    VisionComponent,
    KnowUSComponent,
    FooterComponent,
    ContactUsNowComponent,
    AgricultureComponent,
    DeliveryComponent,
    SurveillanceComponent,
    MH1FComponent,
    MH1FAComponent,
    MH1DComponent,
    MH1sComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgbModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
