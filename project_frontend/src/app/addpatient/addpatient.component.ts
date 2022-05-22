import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorModel } from '../doctor-model';
import { PatientModel } from '../patient-model';
import { PatientService } from '../patient.service';
import { DoctorService } from '../doctor.service';



@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent implements OnInit {


  patient: PatientModel = new PatientModel();

  doctors!:DoctorModel[];
  //selectVal: string ="";

  constructor(private doctorService: DoctorService,
              private patientService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe((data: DoctorModel[])=>{
      this.doctors = data;
    })
  }

  savepatient(){
    this.patientService.addpatient(this.patient).subscribe(data=>
      {
        console.log(data);
        this.goToPatientList();
      },
      error => console.log(error));
  }

  goToPatientList(){
    this.router.navigate(['/api/v1/patients_info']);
  }


  onSubmit(){
    console.log(this.patient);
    this.savepatient();
  
  }
  goBack(){
    this.router.navigate(['patients_info']);
  }

}
