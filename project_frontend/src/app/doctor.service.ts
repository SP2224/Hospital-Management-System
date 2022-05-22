import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorModel } from './doctor-model';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = "http://localhost:8080/api/v1/doc_info";
  constructor(private http: HttpClient) { }

  getDoctorsList(): Observable<DoctorModel[]>{
    return this.http.get<DoctorModel[]>(`${this.baseURL}`);
  }
  getDoctorById(id: number): Observable<DoctorModel[]>{
    return this.http.get<DoctorModel[]>(`${this.baseURL}/${id}`);
  }
  
}
