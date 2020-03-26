import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {

  private coreUrl: string;

  constructor(private httpClient: HttpClient) {
    this.coreUrl = environment.backendUrl + '/core';
  }

  public getTest(): Observable<any> {
    return this.httpClient.get(this.coreUrl + '/getTest');
  }

}
