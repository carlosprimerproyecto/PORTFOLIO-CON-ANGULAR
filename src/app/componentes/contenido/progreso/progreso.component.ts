import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css'],
})
export class ProgresoComponent implements OnInit {
  
  isDivHidden = true;

  toggleDiv() {
    this.isDivHidden = !this.isDivHidden;
  }

  miPortfolio:any;
  propiedades: string[];

  constructor(private portfolioDatos:PortfolioService, private http: HttpClient){
    this.propiedades = [];
  }
  ngOnInit(): void{
    this.portfolioDatos.obtenerDatos().subscribe (data =>{
    console.log(data);
    this.miPortfolio=data;
    this.propiedades = Object.values(this.miPortfolio);
    
    
    });
    }
}
