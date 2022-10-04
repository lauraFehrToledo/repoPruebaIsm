import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends BaseService {

  public userLogged: string = '';
  public rolUser: string = '';
  public request_type: string = '';
  public rewiev_status: string = '';
  
  private urlApi = `${environment.baseURL}`;

  constructor(
      public http: HttpClient
  ) {
      super(http);
  }

  public getPrueba(): Observable<any> {
    const url = `${this.urlApi}pruebaFront/lista`;

    return this.realizarPeticionGet(url);
  }

  
}
