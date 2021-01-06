import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';
import { Tenant } from '../interfaces/tenant.interface';

@Injectable({
  providedIn: 'root',
})
export class TenantDetailService {
  loading: Observable<boolean>;
  tenant: Observable<Tenant>;

  private _needNewTenantData = new BehaviorSubject<void>(undefined);
  private _loadingSubj = new BehaviorSubject<boolean>(true);

  constructor(private apiService: ApiService) {
    this.loading = this._loadingSubj.asObservable();

    this.tenant = this._needNewTenantData.pipe(
      switchMap(() => {
        return this.apiService.getTenant();
      }),
      tap(() => this._loadingSubj.next(false))
    );
  }

  save(tenant: Tenant): void {
    this._loadingSubj.next(true);
    this.apiService.saveTenant(tenant).subscribe(() => {
      this._needNewTenantData.next(undefined);
    });
  }
}
