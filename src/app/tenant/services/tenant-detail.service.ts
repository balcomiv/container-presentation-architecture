import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Tenant } from '../interfaces/tenant.interface';

export interface State {
  loading: boolean;
  tenant: Tenant;
}

export enum Selector {
  Loading = 'loading',
  Tenant = 'tenant',
}

const state: State = {
  loading: false,
  tenant: {
    firstName: 'Benedict',
    lastName: 'Cumberbatch',
  },
};

@Injectable()
export class TenantDetailService {
  private subject = new BehaviorSubject<State>(state);
  store = this.subject.asObservable().pipe(distinctUntilChanged());

  select<T>(name: Selector): Observable<T> {
    return this.store.pipe(pluck(name.toString()));
  }

  save(tenant: Tenant): void {
    //  Simulate long running load from API
    this.subject.next({ ...this.subject.value, loading: true });

    setTimeout(() => {
      this.subject.next({ loading: false, tenant: { ...tenant } });
    }, 1000);
  }
}

// export class TenantDetailService {
//   loading: Observable<boolean>;
//   tenant: Observable<Tenant>;

//   private _needNewTenantData = new BehaviorSubject<void>(undefined);
//   private _loadingSubj = new BehaviorSubject<boolean>(true);

//   constructor(private apiService: ApiService) {
//     this.loading = this._loadingSubj.asObservable();

//     this.tenant = this._needNewTenantData.pipe(
//       switchMap(() => {
//         return this.apiService.getTenant();
//       }),
//       tap(() => this._loadingSubj.next(false))
//     );
//   }

//   save(tenant: Tenant): void {
//     this._loadingSubj.next(true);
//     this.apiService.saveTenant(tenant).subscribe(() => {
//       this._needNewTenantData.next(undefined);
//     });
//   }
// }
