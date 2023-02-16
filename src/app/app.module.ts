import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorSuperiorComponent } from './componentes/contenedor-superior/contenedor-superior.component';
import { ContenedorMedioComponent } from './componentes/contenedor-medio/contenedor-medio.component';
import { ContenedorBajoComponent } from './componentes/contenedor-bajo/contenedor-bajo.component';
import { BarraNavSuperiorComponent } from './componentes/contenido/barra-nav-superior/barra-nav-superior.component';
import { BannerComponent } from './componentes/contenido/banner/banner.component';
import { FotoPerfilComponent } from './componentes/contenido/foto-perfil/foto-perfil.component';
import { AcercaDeComponent } from './componentes/contenido/acerca-de/acerca-de.component';
import { FormacionAcademicaComponent } from './componentes/contenido/formacion-academica/formacion-academica.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { HabilidadesComponent } from './componenetes/contenido/habilidades/habilidades.component';
import { ProgresoComponent } from './componentes/contenido/progreso/progreso.component';
import { CotactosComponent } from './componentes/contenido/cotactos/cotactos.component';
import { RedesSocialesComponent } from './componentes/contenido/redes-sociales/redes-sociales.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorSuperiorComponent,
    ContenedorMedioComponent,
    ContenedorBajoComponent,
    BarraNavSuperiorComponent,
    BannerComponent,
    FotoPerfilComponent,
    AcercaDeComponent,
    FormacionAcademicaComponent,
    ExperienciaLaboralComponent,
    HabilidadesComponent,
    ProgresoComponent,
    CotactosComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
