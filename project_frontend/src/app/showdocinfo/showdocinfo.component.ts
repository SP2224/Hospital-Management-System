import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../doctor-model';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-showdocinfo',
  templateUrl: './showdocinfo.component.html',
  styleUrls: ['./showdocinfo.component.css']
})
export class ShowdocinfoComponent implements OnInit {
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
