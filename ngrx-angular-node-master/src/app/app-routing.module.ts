import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }, 
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) }, 
  { path: 'performance', loadChildren: () => import('./track-record/track-record.module').then(m => m.TrackRecordModule) }, 
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) }, 
  { path: 'membership', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) }
];
  // ,{ path: 'service', loadChildren: () => import('./service/service.module').then(m => m.ServiceModule) }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
