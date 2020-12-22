import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantDetailComponent } from './containers/tenant-detail/tenant-detail.component';
import { TenantFormComponent } from './views/tenant-form/tenant-form.component';



@NgModule({
  declarations: [TenantDetailComponent, TenantFormComponent],
  imports: [
    CommonModule
  ]
})
export class TenantModule { }
