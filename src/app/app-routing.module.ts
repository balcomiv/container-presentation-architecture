import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantDetailComponent } from './tenant/containers/tenant-detail/tenant-detail.component';

const routes: Routes = [{ path: '**', component: TenantDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
