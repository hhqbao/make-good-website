import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ContactMethod } from '../../models/layouts/ContactMethod';
import { RecaptchaComponent, RecaptchaModule } from 'ng-recaptcha';
import { LayoutDataService } from '../../services/layout-data.service';
import { ApiService } from '../../services/api.service';
import { NewEnquiryFormGroup } from '../../models/forms/NewEnquiryFormGroup';
import { ReactiveFormsModule } from '@angular/forms';
import { NewEnquiryDto } from '../../models/apis/NewEnquiryDto';

@Component({
  selector: 'app-contact-section',
  templateUrl: 'contact-section.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule],
})
export class ContactSectionComponent implements OnInit {
  @ViewChild('captcha') captcha: RecaptchaComponent;

  private dataService = inject(LayoutDataService);
  private apiService = inject(ApiService);

  isInitialized = false;
  enquiryFormSubmitted = false;
  isSubmitting = false;
  submissionDone = false;

  methods: ContactMethod[] = [];
  enquiryForm: NewEnquiryFormGroup;

  ngOnInit() {
    this.initializeComponent();
  }

  initializeComponent = async () => {
    this.methods = await this.dataService.getContactMethodsAsync();

    this.enquiryForm = new NewEnquiryFormGroup();

    this.isInitialized = true;
  };

  onCaptchaResolved = (captcha: any) => {
    this.enquiryForm.captcha.patchValue(captcha);
  };

  onEnquiryFormSubmit = async () => {
    this.enquiryFormSubmitted = true;

    if (this.enquiryForm.invalid) return;

    try {
      this.isSubmitting = true;

      this.enquiryForm.disable();

      const model = new NewEnquiryDto();
      model.update(this.enquiryForm);

      await this.apiService.sendEnquiryAsync(model);
    } catch (error) {
      console.log(error);
    } finally {
      this.submissionDone = true;
      this.enquiryFormSubmitted = false;
      this.enquiryForm.reset();
      this.captcha.reset();
    }
  };
}
