import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ModulesComponent } from './modules/modules.component';
import { TemplatesComponent } from './templates/templates.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { MapComponent } from './map/map.component';
import { ModalComponent } from './modal/modal.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { MapWidgetComponent } from './map-widget/map-widget.component';
// import { GetApiService } from '../get-api.service';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/admin/modules', pathMatch: 'full'},
      {path: 'modules', component: ModulesComponent},
      {path: 'templates', component: TemplatesComponent},
    ]
  }
];

@NgModule({
  declarations: [
    ModulesComponent,
    AdminLayoutComponent,
    TemplatesComponent,
    MonitoringComponent,
    MapComponent,
    ModalComponent,
    CollapsibleComponent,
    MapWidgetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    // GetApiService,
  ],
})
export class AdminModule { }
