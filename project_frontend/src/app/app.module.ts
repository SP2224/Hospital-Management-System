import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DoctorlistsComponent } from './doctorlists/doctorlists.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientlistsComponent } from './patientlists/patientlists.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { FormsModule } from '@angular/forms';
import { PatientinformationComponent } from './patientinformation/patientinformation.component';
import { AccesseverythingComponent } from './accesseverything/accesseverything.component';
import {MatSelectModule} from '@angular/material/select';
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';
import { ShowdocinfoComponent } from './showdocinfo/showdocinfo.component';
import { RoughComponent } from './rough/rough.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { PrescriptionComponent } from './prescription/prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorlistsComponent,
    PatientlistsComponent,
    HomepageComponent,
    AddpatientComponent,
    PatientinformationComponent,
    AccesseverythingComponent,
    ShowdocinfoComponent,
    RoughComponent,
    PrescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    DropDownListModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
