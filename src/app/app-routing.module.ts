import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CirculosProgresoComponent } from './componentes/contenido/circulos-progreso/circulos-progreso.component';
import { ExperienciaLaboralComponent } from './componentes/contenido/experiencia-laboral/experiencia-laboral.component';
import { FormacionAcademicaComponent } from './componentes/contenido/formacion-academica/formacion-academica.component';
import { ProgresoComponent } from './componentes/contenido/progreso/progreso.component';
import { RedesSocialesComponent } from './componentes/contenido/redes-sociales/redes-sociales.component';
import { ProyectosComponent } from './componentes/contenido/proyectos/proyectos.component';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { VacioComponent } from './vacio/vacio.component';
const routes: Routes = [

  { path: '', component: PortfolioComponent  },
  { path: 'vacio', component: VacioComponent },
 
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'laboral', component: ExperienciaLaboralComponent },
  { path: 'tecnologias', component: ProgresoComponent },
  {path:'habilidades', component: CirculosProgresoComponent},
  {path:'formacion', component: FormacionAcademicaComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'actividades', component: RedesSocialesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
