import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { ContactMethod } from '../models/layouts/ContactMethod';
import { OurService } from '../models/layouts/OurService';

@Injectable({ providedIn: 'root' })
export class LayoutDataService {
  private http = inject(HttpClient);

  openMobileMenu = false;

  getOurServicesAsync = async (): Promise<OurService[]> => {
    return await lastValueFrom(
      this.http
        .get<OurService[]>('/data/our-services.json')
        .pipe(map((response) => plainToInstance(OurService, response)))
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
