import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
  ],exports:[RouterModule,MenuComponent]
})
export class ComponentModule { }
