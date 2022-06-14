import { NgModule  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './resultados/components/detalle/detalle.component';
import { TablaResultadosComponent } from './resultados/components/tabla-resultados/tabla-resultados.component';

const routes: Routes = [


    {
      path: '',
       component: TablaResultadosComponent,
       pathMatch: 'full'
      },
      {
        path: 'detalle/:id',
         component: DetalleComponent
        },
        {
          path: '**',
          redirectTo: ''
        }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
