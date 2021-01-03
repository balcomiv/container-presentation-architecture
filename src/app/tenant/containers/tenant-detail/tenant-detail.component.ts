import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tenant } from '../../interfaces/tenant.interface';
import { TenantDetailService } from '../../services/tenant-detail.service';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss'],
})
export class TenantDetailComponent implements OnInit {
  loading: Observable<boolean>;
  tenant: Observable<Tenant>;

  constructor(private tenantDetailService: TenantDetailService) {
    this.loading = this.tenantDetailService.loading;
    this.tenant = this.tenantDetailService.tenant;
  }

  ngOnInit(): void {}

  save(tenant: Tenant): void {
    this.tenantDetailService.save(tenant);
  }
}
