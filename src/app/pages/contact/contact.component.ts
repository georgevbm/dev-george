import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);

  formContact!: FormGroup;

  ngOnInit() {
    this.formContact = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(2),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  getErrorControl(controlName: string): boolean {
    return (
      (this.formContact.controls[controlName].errors &&
        this.formContact.controls[controlName].touched) ??
      false
    );
  }

  send() {
    console.log('Enviar clicado!');
  }
}
