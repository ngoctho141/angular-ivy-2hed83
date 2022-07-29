import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonIntersectionService {

  jsonFiles = []

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get('assets/gabler-thermoform/i18n/app').subscribe(data => {
      this.jsonFiles.push(data);
    });
  }
}
