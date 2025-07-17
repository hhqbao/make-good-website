import { NewEnquiryFormGroup } from '../forms/NewEnquiryFormGroup';

export class NewEnquiryDto {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;

  update(formGroup: NewEnquiryFormGroup) {
    this.name = formGroup.name.value;
    this.email = formGroup.email.value;
    this.phone = formGroup.phone.value;
    this.message = formGroup.message.value;
    this.captcha = formGroup.captcha.value;
  }
}
