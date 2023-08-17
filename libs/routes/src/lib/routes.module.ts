import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterModule, Route } from '@angular/router';
import { routesRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesRoutes), RouterModule],
})
export class RoutesModule {}
