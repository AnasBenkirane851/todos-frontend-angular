import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from "@angular/material/sort";




@NgModule({
  declarations: [

  ],
  imports: [
    MatSortModule
  ],
  exports: [
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
