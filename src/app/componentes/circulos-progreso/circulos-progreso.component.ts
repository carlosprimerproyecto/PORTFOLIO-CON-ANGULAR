import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-circulos-progreso',
  templateUrl: './circulos-progreso.component.html',
  styleUrls: ['./circulos-progreso.component.css']
})
export class CirculosProgresoComponent   {
  
  isDivHidden = true;

  toggleDiv() {
    this.isDivHidden = !this.isDivHidden;
  }

  
  
}
