import { Component, OnInit } from '@angular/core';
import {DoctorModel} from '../doctor-model'

import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-doctorlists',
  templateUrl: './doctorlists.component.html',
  styleUrls: ['./doctorlists.component.css']
})
export class DoctorlistsComponent implements OnInit {

  doctors!: DoctorModel[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
   this.getDoctors();
  }
  private getDoctors(){
    this.doctorService.getDoctorsList().subscribe(data => {
      this.doctors = data;
    });
  }

}
