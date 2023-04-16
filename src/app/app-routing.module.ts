import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { VisionComponent } from './Components/vision/vision.component';
import { KnowUSComponent } from './Components/know-us/know-us.component';
import { ContactUsNowComponent } from './Components/contact-us-now/contact-us-now.component';
import { AgricultureComponent } from './Components/OurServices/agriculture/agriculture.component';
import { DeliveryComponent } from './Components/OurServices/delivery/delivery.component';
import { SurveillanceComponent } from './Components/OurServices/surveillance/surveillance.component';
import { MH1FAComponent } from './Components/products-pages/mh1-fa/mh1-fa.component';
import { MH1FComponent } from './Components/products-pages/mh1-f/mh1-f.component';
import { MH1DComponent } from './Components/products-pages/mh1-d/mh1-d.component';
import { MH1sComponent } from './Components/products-pages/mh1s/mh1s.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:VisionComponent,
    path:'vision'
  },
  {
    component:KnowUSComponent,
    path:'knowUs'
  },
  {
    path:'agriculture',
    children: [
      {
        // rendering mane page as child page so whenever you click on another
        // link it change whole page 
        // this technique is called as "how to change whole page in nested routing in angular"
        component:AgricultureComponent,
        path:''
      },
      {
        component:MH1FComponent,
        path:"mn1f"
      },
      {
        component:MH1FAComponent,
        path:"mh1fa"
      },
    ]
  },
  {
    path:'delivery',
    children:[
      {
        component:DeliveryComponent,
        path:''
      },
      {
        component:MH1DComponent,
        path:"mh1d"
      }
    ]
  },
  {
    path:'surveillance',
    children:[
      {
        component:SurveillanceComponent,
        path:""
      },
      {
        component:MH1sComponent,
        path:"mh1s"
      }
    ]
  },
  {
    component:ContactUsNowComponent,
    path:"contact"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
