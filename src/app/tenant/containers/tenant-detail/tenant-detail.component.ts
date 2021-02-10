import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant.interface';
import {
  Selector,
  TenantDetailService,
} from '../../services/tenant-detail.service';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss'],
})
export class TenantDetailComponent {
  loading: Observable<boolean>;
  tenant: Observable<Tenant>;

  constructor(private tenantDetailService: TenantDetailService) {
    this.loading = this.tenantDetailService.select(Selector.Loading);
    this.tenant = this.tenantDetailService.select(Selector.Tenant);
  }

  save(tenant: Tenant): void {
    this.tenantDetailService.save(tenant);
  }
}
