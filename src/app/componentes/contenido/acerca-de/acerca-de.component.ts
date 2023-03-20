import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  miPortfolio:any

        constructor(private portfolioDatos:PortfolioService){
        }
    ngOnInit(): void{
this.portfolioDatos.obtenerDatos().subscribe (data =>{
console.log(data);

this.miPortfolio=data;

});
    }



  isDivHidden = true;

  toggleDiv() {
    this.isDivHidden = !this.isDivHidden;
  }

 
 
  
}
