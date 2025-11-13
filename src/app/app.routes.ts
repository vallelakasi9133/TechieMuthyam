import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';  // Add this import

import { Jobs } from './pages/jobs/jobs';
import { Referrals } from './pages/referrals/referrals';
import { CompanyPortal } from './pages/company-portal/company-portal';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { FrontendRoadmap } from './frontend-roadmap/frontend-roadmap';
import { FrontEndInterviewQA } from './front-end-interview-qa/front-end-interview-qa';
import { Backendqa } from './questiosection/backendqa/backendqa';
import { Devopsqa } from './questiosection/devopsqa/devopsqa';
import { Datascienceqa } from './questiosection/datascienceqa/datascienceqa';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'jobs', component: Jobs },
  { path: 'referrals', component: Referrals },
  { path: 'company-portal', component: CompanyPortal },
  { path: 'contact', component: Contact },
  { path: 'front-endroadmap', component: FrontendRoadmap },
  { path: 'front-end-Interview&Anwsers', component: FrontEndInterviewQA },
  { path: 'backendq', component: Backendqa },
  { path: 'deveopsqa', component: Devopsqa },
  { path: 'datascienceqa', component: Datascienceqa },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]  // Add this line
})
export class AppRoutingModule { }
