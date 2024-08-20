import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { axe } from 'jest-axe';
import { Router } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
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

  it('should called goToGithub', () => {
    const spyWindow = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.goToGithub();

    expect(spyWindow).toHaveBeenCalledWith(
      'https://github.com/georgevbm',
      '_blank'
    );
  });

  it('should called goToLinkedIn', () => {
    const spyWindow = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.goToLinkedIn();

    expect(spyWindow).toHaveBeenCalledWith(
      'https://www.linkedin.com/in/george-victor-branco-mota/',
      '_blank'
    );
  });

  it('should called goToWhatsApp', () => {
    const spyWindow = jest.spyOn(window, 'open').mockImplementation(() => null);
    component.goToWhatsApp();

    expect(spyWindow).toHaveBeenCalledWith('https://w.app/devgeorge', '_blank');
  });

  it('should called goToContact', () => {
    const spyRouter = jest.spyOn(Router.prototype, 'navigateByUrl');
    component.goToContact();

    expect(spyRouter).toHaveBeenCalledWith('/contact');
  });
});
