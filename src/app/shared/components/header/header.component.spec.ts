import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { axe } from 'jest-axe';
import { Router } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);

    expect(results).toHaveNoViolations();
  });

  it('should call toggleMenu and close menu', () => {
    component.opened = true;
    component.toggleMenu();
    expect(component.opened).toBeFalsy();
  });

  it('should call toggleMenu and open menu', () => {
    component.opened = false;
    component.toggleMenu();
    expect(component.opened).toBeTruthy();
  });

  it('should call redirectTo and close menu', () => {
    const spyRouter = jest
      .spyOn(Router.prototype, 'navigateByUrl')
      .mockResolvedValue(true);

    component.redirectTo('contact');

    expect(component.opened).toBeFalsy();
    expect(spyRouter).toHaveBeenCalledWith('contact');
  });
});
