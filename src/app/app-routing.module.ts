import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in/check-in.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';

const routes: Routes = [
  {
    path: 'check-in',
    data: { title: 'Check-In' },
    component: CheckInComponent,
  },
  {
    path: 'booking',
    data: { title: 'Booking Info' },
    component: BookingInfoComponent,
  },

  { path: '', redirectTo: '/check-in', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
