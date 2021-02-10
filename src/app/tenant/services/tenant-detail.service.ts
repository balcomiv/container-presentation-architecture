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
    this.subject.next({
      loading: true,
      tenant: { ...this.subject.value.tenant },
    });

    //  Simulate long running load from API
    setTimeout(() => {
      this.subject.next({ loading: false, tenant: { ...tenant } });
    }, 1000);
  }
}
