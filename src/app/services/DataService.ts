import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Filter } from '../utils/Filter';
@Injectable()
export abstract class DataService<T> {

  protected BASE_URL = environment.BASE_URL+ '/api/v1';
  protected moduleName: string;
  
  public http: HttpClient;
  public notificationService: MatSnackBar;

  constructor(injector: Injector, moduleName: string) {
    this.http = injector.get(HttpClient);
    this.notificationService = injector.get(MatSnackBar);
    this.moduleName = moduleName;
  }

  getDataFiltered(filters: Filter[]): Observable<T[]> {
    let filterQuery = Filter.encodeFilters(filters);
    return this.http
      .get<T[]>(`${this.BASE_URL}/${this.moduleName}?${filterQuery}`)
      .pipe(
        catchError((error) => {
          this.notificationService.open(error.error.message, 'Aceptar');
          throw error;
        })
      );
  }

  getData(): Observable<T[]> {
    return this.http.get<T[]>(`${this.BASE_URL}/${this.moduleName}`).pipe(
      catchError((error) => {
        this.notificationService.open(error.error.message, 'Aceptar');
        throw error;
      })
    );
  }

  getDataById(id): Observable<T> {
    return this.http.get<T>(`${this.BASE_URL}/${this.moduleName}/${id}`);
  }

  saveData(data: T, id: string): Observable<void> {
    return this.http
      .put<void>(`${this.BASE_URL}/${this.moduleName}/${id}`, data)
      .pipe(
        catchError((error) => {
          this.notificationService.open(error.error.message, 'Aceptar');
          throw error;
        })
      );
  }

  deleteData(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.BASE_URL}/${this.moduleName}/${id}`)
      .pipe(
        catchError((error) => {
          this.notificationService.open(error.error.message, 'Aceptar');
          throw error;
        })
      );
  }
}