import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesseverythingComponent } from './accesseverything/accesseverything.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import {DoctorlistsComponent} from './doctorlists/doctorlists.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PatientinformationComponent } from './patientinformation/patientinformation.component';
import { PatientlistsComponent } from './patientlists/patientlists.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { RoughComponent } from './rough/rough.component';
import { ShowdocinfoComponent } from './showdocinfo/showdocinfo.component';

const routes: Routes = [
  {path:"doctors_info", component: DoctorlistsComponent},
  {path:"patients_info", component: PatientlistsComponent},
  {path:"", component: HomepageComponent},
  {path:"addpatient", component: AddpatientComponent},
  {path:"checkpatientinfo", component: PatientinformationComponent},
  {path:"accesseverything", component: AccesseverythingComponent},
  {path:"showdocinfo",component: ShowdocinfoComponent},
  {path:"rough",component:RoughComponent},
  {path:"presc",component:PrescriptionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
