import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent implements OnInit {
 
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  goBack(){
    this.router.navigate(['patients_info']);
  }
 
}
