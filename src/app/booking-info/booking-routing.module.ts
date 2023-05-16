import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingInfoComponent } from './booking-info.component';

const routes: Routes = [
  {
    path: 'booking/:bookingCode',
    data: { title: 'Booking Info' },
    component: BookingInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
