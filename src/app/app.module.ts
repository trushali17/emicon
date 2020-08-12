import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { AdvComponent } from './pages/dashboard/adv/adv.component';
import { AnimationssComponent } from './pages/dashboard/animationss/animationss.component';
import { AppdevComponent } from './pages/dashboard/appdev/appdev.component';
import { CareerComponent } from './pages/dashboard/career/career.component';
import { CeComponent } from './pages/dashboard/ce/ce.component';
import { ContactusComponent } from './pages/dashboard/contactus/contactus.component';
import { CrComponent } from './pages/dashboard/cr/cr.component';
import { DigitalmarketingComponent } from './pages/dashboard/digitalmarketing/digitalmarketing.component';
import { EpmComponent } from './pages/dashboard/epm/epm.component';
import { ErpComponent } from './pages/dashboard/erp/erp.component';
import { HcmComponent } from './pages/dashboard/hcm/hcm.component';
import { IndexpageComponent } from './pages/dashboard/indexpage/indexpage.component';
import { OracleservicesComponent } from './pages/dashboard/oracleservices/oracleservices.component';
import { OurclientsComponent } from './pages/dashboard/ourclients/ourclients.component';
import { OurfeaturesComponent } from './pages/dashboard/ourfeatures/ourfeatures.component';
import { ScmComponent } from './pages/dashboard/scm/scm.component';
import { SecondpageComponent } from './pages/dashboard/secondpage/secondpage.component';
import { ServicessComponent } from './pages/dashboard/servicess/servicess.component';
import { SolutionsComponent } from './pages/dashboard/solutions/solutions.component';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SolutionComponent } from './solution/solution.component';
import { WebdevComponent } from './pages/dashboard/webdev/webdev.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    AboutComponent,
    AdvComponent,
    AnimationssComponent,
    AppdevComponent,
    CareerComponent,
    CeComponent,
    ContactusComponent,
    CrComponent,
    DigitalmarketingComponent,
    EpmComponent,
    ErpComponent,
    HcmComponent,
    IndexpageComponent,
    OracleservicesComponent,
    OurclientsComponent,
    OurfeaturesComponent,
    ScmComponent,
    SecondpageComponent,
    ServicessComponent,
    SolutionsComponent,
    SolutionComponent,
    WebdevComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    FormsModule,
    CarouselModule,
    AngularFullpageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
