import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Tenant } from '../tenant/interfaces/tenant.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private databaseTenant: Tenant = {
    firstName: 'Benedict',
    lastName: 'Cumberbatch',
  };

  constructor() {}

  /**
   * Mocks retrieval of Tenant from API
   */
  getTenant(): Observable<Tenant> {
    console.log('===> Simulating Tenant API request');

    //  delay to simulate asynchronicity
    return of(this.databaseTenant).pipe(delay(1000));
  }

  saveTenant(tenant: Tenant): Observable<{}> {
    //  delay to simulate asynchronicity
    return of({}).pipe(
      delay(500),
      tap(() => {
        this.databaseTenant = tenant;
        console.log('===> Tenant Saved!');
      })
    );
  }
}
