import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string = "http://localhost:8080/movies/";

  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
}
