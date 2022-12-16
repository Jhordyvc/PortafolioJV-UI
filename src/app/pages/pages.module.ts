import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ComponentModule } from '../component/component.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificateComponent } from './certificate/certificate.component';
import { PrincipalComponent } from './principal/principal.component';
import { SkillComponent } from './skill/skill.component';
import { PortadaComponent } from './portada/portada.component';
import {NgxTypedJsModule} from 'ngx-typed-js';


@NgModule({
  declarations: [AboutComponent, ProjectsComponent, CertificateComponent, PrincipalComponent, SkillComponent, PortadaComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ComponentModule,
    NgxTypedJsModule
  ],exports:[RouterModule,ProjectsComponent, CertificateComponent]
})
export class PagesModule { }
