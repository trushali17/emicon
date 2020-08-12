import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/dashboard/about/about.component';
import { ContactusComponent } from './pages/dashboard/contactus/contactus.component';
import { AdvComponent } from './pages/dashboard/adv/adv.component';
import { DigitalmarketingComponent } from './pages/dashboard/digitalmarketing/digitalmarketing.component';
import { OracleservicesComponent } from './pages/dashboard/oracleservices/oracleservices.component';
import { AppdevComponent } from './pages/dashboard/appdev/appdev.component';
import { AnimationssComponent } from './pages/dashboard/animationss/animationss.component';
import { ErpComponent } from './pages/dashboard/erp/erp.component';
import { HcmComponent } from './pages/dashboard/hcm/hcm.component';
import { ScmComponent } from './pages/dashboard/scm/scm.component';
import { CeComponent } from './pages/dashboard/ce/ce.component';
import { EpmComponent } from './pages/dashboard/epm/epm.component';
import { CareerComponent } from './pages/dashboard/career/career.component';
import { SolutionComponent } from './solution/solution.component';
import { WebdevComponent } from './pages/dashboard/webdev/webdev.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactusComponent},
  {path: 'analytics-and-data-visualization',component:AdvComponent},
  {path: 'digital-marketing',component:DigitalmarketingComponent},
  {path: 'app-development',component:AppdevComponent},
  {path: 'oracle-services', component:OracleservicesComponent},
  {path: 'animation-services', component:AnimationssComponent},
  {path:'erp', component: ErpComponent},
  {path:'hcm',component:HcmComponent},
  {path:'scm',component:ScmComponent},
  {path:'ce',component:CeComponent},
  {path:'epm',component:EpmComponent},
  {path:'career',component:CareerComponent},
  {path:'solutions',component:SolutionComponent},
  {path:'web-development',component:WebdevComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
