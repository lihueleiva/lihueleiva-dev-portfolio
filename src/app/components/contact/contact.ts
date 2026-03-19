import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formStatus: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formStatus = 'Enviando...';

    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    try {
      emailjs.init('ZN2LKQC1W3ZcgrA1b');
      await emailjs.send('service_hzrvi2m', 'template_e4qxoaf', templateParams);
      this.formStatus = '¡Mensaje enviado con éxito!';
      this.contactForm.reset();
    } catch (error) {
      console.error('Error al enviar el email:', error);
      this.formStatus = 'Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.';
    }
  }

  closeStatusMessage(): void {
    this.formStatus = '';
  }
}
