import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class YamlDataService {
  constructor(private http: HttpClient) {}
  public fetchYaml(fileName) {
    return this.http.get(`/assets/${fileName}`, { responseType: 'text' });
  }
}
