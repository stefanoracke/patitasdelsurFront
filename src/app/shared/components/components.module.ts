import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HuellitasComponent } from './huellitas/huellitas.component';
import { RedesComponent } from './redes/redes.component';
import { HuellaComponent } from './huella/huella.component';
import { ArrowComponent } from './arrow/arrow.component';
import { ManitosComponent } from './manitos/manitos.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    HuellitasComponent,
    RedesComponent,
    HuellaComponent,
    ArrowComponent,
    ManitosComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HuellitasComponent,
    HuellaComponent,
    ArrowComponent,
    ManitosComponent,
    SidenavComponent
  ]
})
export class ComponentsModule { }
