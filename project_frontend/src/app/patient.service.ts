import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientModel } from './patient-model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/v1/patients_info";
  constructor(private http: HttpClient) { }

  getPatientsList(): Observable<PatientModel[]>{
    return this.http.get<PatientModel[]>(`${this.baseURL}`);
  }

  addpatient(patient: PatientModel): Observable<Object>{
    return this.http.post(`${this.baseURL}`,patient);
  }
}
