import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ModulesComponent } from './modules/modules.component';
import { TemplatesComponent } from './templates/templates.component';

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
  ],
  imports: [
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminModule { }
