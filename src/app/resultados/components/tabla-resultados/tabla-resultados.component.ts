import { Component} from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from '../../../services/peliculas.service';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styles: [
  ]
})
export class TablaResultadosComponent {
  disableSelect = new FormControl(false);
   termino: string= ''
   peliculas: Movie[] = [];
   i: number=0;
   MostrarFiltro:boolean= false;

  constructor(private peliculasService: PeliculasService) { }

  

  buscar(){
    this.peliculasService.buscarPelicula( this.termino ).subscribe( (peliculas) => {
      console.log(peliculas);
      this.peliculas[this.i] = peliculas;
      this.i++;
    
    },
      (err)=> { 
      console.log('Error por algun motivo');
      this.peliculas= [];
    });

    
          
  }
  
  


  mostrarFiltros(){
    console.log('Se ha pulsado el boton');
    const verEstado= this.MostrarFiltro;
    if(verEstado == false){
      this.MostrarFiltro= true;
    }else{
    this.MostrarFiltro= false;
    }
   

  }

  agregar(){

  }

  /*modificar(){
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }*/
}
