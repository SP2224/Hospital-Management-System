import { Component, OnInit } from '@angular/core';
import { PatientModel } from '../patient-model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patientlists',
  templateUrl: './patientlists.component.html',
  styleUrls: ['./patientlists.component.css']
})
export class PatientlistsComponent implements OnInit {

  patients: PatientModel[] = [];
  name!: string;
  searchText:any;
  router: any;
  
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients();
   }
   private getPatients(){
     this.patientService.getPatientsList().subscribe(data => {
       this.patients = data;
     });
   }
   goBack(){
    this.router.navigate(['patients_info']);
  }
   
}


