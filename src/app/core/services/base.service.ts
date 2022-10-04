import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { isNullOrUndefined } from 'util';
// import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private urlApiBase = `${environment.baseURL}/`;

  constructor(
    public http: HttpClient
  ) { }

  public realizarPeticionPost(url: string, params?: any): Observable<any> {
    params = JSON.stringify(params);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, params, { headers: headers, withCredentials: true });
  }

  public realizarPeticionPostConBlob(url: string, params?: any): Observable<any> {
    params = JSON.stringify(params);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, params, { headers: headers, responseType: 'blob', withCredentials: true }).pipe(
      catchError(this.cambiarBlobAObjeto)
    );
  }

  public realizarPeticionGetConBlob(url: string, params?: any): Observable<any> {
    params = JSON.stringify(params);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, {params, headers: headers, responseType: 'blob', withCredentials: true }).pipe(
     catchError(this.cambiarBlobAObjeto)
    );
  }

  public realizarPeticionPostWithText(url: string, params: any): Observable<any> {
    params = JSON.stringify(params);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url, params, { headers: headers, withCredentials: true, responseType: 'text' });
  }

  public realizarPeticionPut(url: string, params?: any): Observable<any> {
    params = JSON.stringify(params);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(url, params, { headers: headers, withCredentials: true });
  }

  public realizarPeticionGet(url: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(url, { headers: headers, withCredentials: false });
  }

  public realizarPeticionGetConText(url: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(url, { headers: headers, withCredentials: true, responseType: 'text' });
  }

  public realizarDelete(url: string): Observable<any> {
    return this.http.delete(url, { withCredentials: true });
  }

  // public downloadFile(data: any) {
  //   const blob = new Blob([data], { type: 'application/octet-stream' });
  //   fs.saveAs(blob, 'export' + '-' + new Date().valueOf() + '.xlsx');
  // }

  public descargarDocumento(url: string, id: string ) {
    const a = document.createElement('a');
    a.href = `${url}/${id}`;
    a.download = id;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  public grabarLocalStorage(nombre: string, objeto: Object): void {
    localStorage.setItem(nombre, JSON.stringify(objeto));
  }

  public obtenerLocalStorage(nombre: string): any {
    return JSON.parse(localStorage.getItem(nombre));
  }

  public borrarLocalStorage(nombre: string): void {
    localStorage.removeItem(nombre);
  }

  /** Esta función deserializa un objeto Blob, para transformarlo en un json y poder dar la respuesta de error */
  private cambiarBlobAObjeto(err: any) {

      // if (err instanceof HttpErrorResponse && err.error instanceof Blob && !isNullOrUndefined(err.error.type) && err.error.type.startsWith('application/json') ) {
      //     // https://github.com/angular/angular/issues/19888
      //     // When request of type Blob, the error is also in Blob instead of object of the json data
      //     return new Promise<any>((resolve, reject) => {
      //         let reader = new FileReader();
      //         reader.onload = (e: Event) => {
      //             try {
      //                 const errmsg = JSON.parse((<any>e.target).result);
      //                 reject(new HttpErrorResponse({
      //                     error: errmsg,
      //                     headers: err.headers,
      //                     status: err.status,
      //                     statusText: err.statusText,
      //                     url: err.url
      //                 }));
      //             } catch (e) {
      //                 reject(err);
      //             }
      //         };
      //         reader.onerror = (e) => {
      //             reject(err);
      //         };
      //         reader.readAsText(err.error);
      //     });
      // }
      return throwError(err);

  }

}
