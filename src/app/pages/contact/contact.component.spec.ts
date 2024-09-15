import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { axe } from 'jest-axe';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { throwError } from 'rxjs';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getErrorControl with return false', () => {
    component.formContact.controls['name'].setErrors(null);
    const result = component.getErrorControl('name');

    expect(result).toBeFalsy();
  });

  it('should call send - success', async () => {
    const spyHttp = jest
      .spyOn(HttpClient.prototype, 'post')
      .mockReturnValue(throwError({ status: 200 }));

    component.send();

    expect(spyHttp).toHaveBeenCalled();
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);

    expect(results).toHaveNoViolations();
  });
});
