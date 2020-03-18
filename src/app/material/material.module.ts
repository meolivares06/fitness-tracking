import { NgModule } from '@angular/core';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  exports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule],
  imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule]
})
export class MaterialModule {}
