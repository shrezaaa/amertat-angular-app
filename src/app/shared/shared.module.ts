import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { MaterialModule } from "./material.module";
import { SimpleCoverComponent } from "./components/simple-cover/simple-cover.component";
import { CommonModule } from "@angular/common";
import { PopularDestinationComponent } from "./components/popular-destination/popular-destination.component";
import { DoctorsCardComponent } from "./components/doctors-card/doctors-card.component";
import { WavesModule, ButtonsModule } from "angular-bootstrap-md";
import { ClinicsCardComponent } from "./components/clinics-card/clinics-card.component";
import { HospitalsCardComponent } from "./components/hospitals-card/hospitals-card.component";
import { CitiesCardComponent } from "./components/cities-card/cities-card.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CarouselModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [
    SimpleCoverComponent,
    PopularDestinationComponent,
    DoctorsCardComponent,
    ClinicsCardComponent,
    HospitalsCardComponent,
    CitiesCardComponent,
    CarouselComponent,
  ],
  imports: [
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule,
    CommonModule,
    WavesModule,
    ButtonsModule,
    CarouselModule,
  ],
  exports: [
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    MaterialModule,
    SimpleCoverComponent,
    PopularDestinationComponent,
    DoctorsCardComponent,
    ClinicsCardComponent,
    HospitalsCardComponent,
    CitiesCardComponent,
    CarouselComponent,
  ],
})
export class SharedModule {}
