import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { NewEnquiryDto } from '../models/apis/NewEnquiryDto';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private readonly baseUrl: string = `${environment.apiUrl}/Enquiries`;

  sendEnquiryAsync = async (model: NewEnquiryDto): Promise<void> => {
    return await lastValueFrom(this.http.post<void>(this.baseUrl, model));
  };
}
