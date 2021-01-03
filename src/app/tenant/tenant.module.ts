import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TenantDetailComponent } from './containers/tenant-detail/tenant-detail.component';
import { TenantFormComponent } from './views/tenant-form/tenant-form.component';

@NgModule({
  declarations: [TenantDetailComponent, TenantFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TenantModule {}
