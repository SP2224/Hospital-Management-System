import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../doctor-model';
import { DoctorService } from '../doctor.service';
import { PatientModel } from '../patient-model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-accesseverything',
  templateUrl: './accesseverything.component.html',
  styleUrls: ['./accesseverything.component.css']
})
export class AccesseverythingComponent implements OnInit {
  doctors!: DoctorModel[];
  //docSelected!: Number;
  id!: number;
  putDoctorId!: number;
  //doctor: DoctorModel = new Doctor();
 // patient: PatientModel = new Patient();
  constructor(private doctorService: DoctorService,private patientService: PatientService,) { }

  ngOnInit(): void {
   this.getDoctors();
   //this.docSelected;
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
      
      //console.log(this.doctors);
    });
  }
  onSubmit(){
    //console.log(this.patient);
    //this.savePatient();
   }
 
   showDoctor(){
    this.doctorService.getDoctorById(this.putDoctorId).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
    
  }
  viewProfile(id: number){
   // console.log(this.doctors);
    this.showDoctor();
  }
}
