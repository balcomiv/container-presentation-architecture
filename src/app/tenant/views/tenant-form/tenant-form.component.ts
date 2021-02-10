import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tenant } from '../../interfaces/tenant.interface';

@Component({
  selector: 'app-tenant-form',
  templateUrl: './tenant-form.component.html',
  styleUrls: ['./tenant-form.component.scss'],
})
export class TenantFormComponent implements OnInit, OnChanges {
  @Input() loading: boolean | null = null;

  @Input() set tenant(tenant: Tenant | null) {
    if (tenant) {
      this.tenantForm.setValue(tenant);
      this._tenant = tenant;
    }
  }

  get tenant(): Tenant | null {
    return this._tenant;
  }

  @Output() submitForm = new EventEmitter<Tenant>();

  tenantForm: FormGroup;

  private _tenant: Tenant | null = null;

  constructor(private fb: FormBuilder) {
    this.tenantForm = this.fb.group({
      firstName: [null],
      lastName: [null],
    });

    /*
      //  One can also choose not to inject formBuilder and build it explicitly like this...
      this.tenantForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      });
    */
  }

  ngOnInit(): void {
    /*
      Initializing the formGroup in ngOnInit() is not a bad practice,
      as it will actually be required if you want your form to be
      initialized with values that depend (directly or indirectly) from
      your component @Input()s.

      Todd Motto also does it this way https://ultimatecourses.com/blog/angular-2-forms-reactive

      I may consider passing the form down from container as an input if I were needing to wait on inputs etc. to
      build form here.
    */

    const val = this.tenantForm.value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.tenant) {
    //   Not strongly typed. See README.md (Typed Version of SimpleChanges)
    //   const tenant = changes.tenant.currentValue;
    //   this.tenantForm.setValue(changes.tenant.currentValue);
    // }
  }

  onSubmit(): void {
    this.submitForm.emit(this.tenantForm.value);
  }
}
