import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorSuperiorComponent } from './componentes/contenedor-superior/contenedor-superior.component';

import { ContenedorBajoComponent } from './componentes/contenedor-bajo/contenedor-bajo.component';
import { BarraNavSuperiorComponent } from './componentes/contenido/barra-nav-superior/barra-nav-superior.component';
import { BannerComponent } from './componentes/contenido/banner/banner.component';
import { FotoPerfilComponent } from './componentes/contenido/foto-perfil/foto-perfil.component';
import { AcercaDeComponent } from './componentes/contenido/acerca-de/acerca-de.component';
import { FormacionAcademicaComponent } from './componentes/contenido/formacion-academica/formacion-academica.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';

import { ProgresoComponent } from './componentes/contenido/progreso/progreso.component';

import { RedesSocialesComponent } from './componentes/contenido/redes-sociales/redes-sociales.component';
import { FormContactoComponent } from './componentes/form-contacto/form-contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CirculosProgresoComponent } from './componentes/circulos-progreso/circulos-progreso.component';
import { ProyectosComponent } from './contenido/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LysproduccionesComponent } from './lysproducciones/lysproducciones.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VacioComponent } from './vacio/vacio.component';


@NgModule({
  declarations: [
    AppComponent,
    ContenedorSuperiorComponent,

    ContenedorBajoComponent,
    BarraNavSuperiorComponent,
    BannerComponent,
    FotoPerfilComponent,
    AcercaDeComponent,
    FormacionAcademicaComponent,
    ExperienciaLaboralComponent,
    
    ProgresoComponent,
   
    RedesSocialesComponent,
    FormContactoComponent,
    CirculosProgresoComponent,
    ProyectosComponent,
    FooterComponent,
    InicioComponent,
    LysproduccionesComponent,
    PortfolioComponent,
    VacioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    NgCircleProgressModule.forRoot({
   
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
