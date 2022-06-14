import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Movie } from '../../../interfaces/peliculas.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
  ]
})
export class DetalleComponent implements OnInit {

  pelicula!: Movie;

  constructor(private activedRoute: ActivatedRoute, private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.activedRoute.params.pipe(switchMap(( { id }) => 
    this.peliculasService.getPeliculaPorID(id ) ),
    tap(console.log)).subscribe(pelicula => this.pelicula = pelicula);
     

 /*
    this.activedRoute.params.subscribe( ({id}) => {
      console.log(id);
      this.peliculasService.getPeliculaPorID(id).subscribe(pelicula =>{
        console.log(pelicula);
      })
    })
  }*/
  }
}
