import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Slogan } from '../models/layouts/Slogan';
import { lastValueFrom, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { Process } from '../models/layouts/Process';
import { Testimonial } from '../models/layouts/Testimonial';
import { ContactMethod } from '../models/layouts/ContactMethod';

@Injectable({ providedIn: 'root' })
export class LayoutDataService {
  private http = inject(HttpClient);

  getSlogansAsync = async (): Promise<Slogan[]> => {
    return await lastValueFrom(
      this.http
        .get<Slogan[]>('/data/slogans.json')
        .pipe(map((response) => plainToInstance(Slogan, response)))
    );
  };

  getTestimonialsAsync = async (): Promise<Testimonial[]> => {
    return await lastValueFrom(
      this.http
        .get<Testimonial[]>('/data/testimonials.json')
        .pipe(map((response) => plainToInstance(Testimonial, response)))
    );
  };

  getProcessesAsync = async (): Promise<Process[]> => {
    return await lastValueFrom(
      this.http
        .get<Process[]>('/data/processes.json')
        .pipe(map((response) => plainToInstance(Process, response)))
    );
  };

  getContactMethodsAsync = async (): Promise<ContactMethod[]> => {
    return await lastValueFrom(
      this.http
        .get<ContactMethod[]>('/data/contact-methods.json')
        .pipe(map((response) => plainToInstance(ContactMethod, response)))
    );
  };
}
