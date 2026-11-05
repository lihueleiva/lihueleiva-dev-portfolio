import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent implements OnInit {
  public readonly i18n: I18nService = inject(I18nService);
  contactForm!: FormGroup;
  formStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  async sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.formStatus = 'sending';

    const templateParams = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    try {
      emailjs.init('ZN2LKQC1W3ZcgrA1b');
      await emailjs.send('service_hzrvi2m', 'template_e4qxoaf', templateParams);
      this.formStatus = 'success';
      this.contactForm.reset();
    } catch (error) {
      console.error('Error al enviar el email:', error);
      this.formStatus = 'error';
    }
  }

  closeStatusMessage(): void {
    this.formStatus = 'idle';
  }
}
