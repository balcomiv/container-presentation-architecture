import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TenantDetailComponent } from './containers/tenant-detail/tenant-detail.component';
import { TenantDetailService } from './services/tenant-detail.service';
import { TenantFormComponent } from './views/tenant-form/tenant-form.component';

@NgModule({
  declarations: [TenantDetailComponent, TenantFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [TenantDetailService],
})
export class TenantModule {}
