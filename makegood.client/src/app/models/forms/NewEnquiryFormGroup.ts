import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export class NewEnquiryFormGroup extends FormGroup {
  get name(): AbstractControl {
    return this.get('name');
  }

  get email(): AbstractControl {
    return this.get('email');
  }

  get phone(): AbstractControl {
    return this.get('phone');
  }

  get message(): AbstractControl {
    return this.get('message');
  }

  get captcha(): AbstractControl {
    return this.get('captcha');
  }

  constructor() {
    super({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      phone: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
      captcha: new FormControl(null, [Validators.required]),
    });
  }
}
