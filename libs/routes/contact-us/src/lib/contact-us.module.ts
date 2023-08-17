import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContectUsComponent } from './contect-us.component';
import { Route, RouterModule } from '@angular/router';

export const contactUsRoutes: Route[] = [
  { path: '', component: ContectUsComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(contactUsRoutes)],
  declarations: [ContectUsComponent],
})
export class ContactUsModule {}
