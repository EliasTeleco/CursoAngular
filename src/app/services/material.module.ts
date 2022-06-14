import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
 
    imports: [
      
    ], exports:[
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatSelectModule,
    ]
  })
  export class MaterialModule { }
  