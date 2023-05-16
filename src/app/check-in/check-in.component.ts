import { Component, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';
import { CheckInService } from './check-in.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent {
  @Input() title!: string;
  bookingCode: string = '';
  familyName: string = '';
  bookingData: any = null;
  errorMessage: string = '';

  constructor(
    private apollo: Apollo,
    private router: Router,
    private checkInService: CheckInService
  ) {}

  ngOnInit(): void {}

  verifyLogon(): void {
    if (!this.bookingData) {
      this.errorMessage = 'Invalid booking code.';
      return;
    }

    let passenger =
      this.bookingData.booking.passengers.lastName === this.familyName;

    if (!passenger) {
      this.errorMessage = 'Invalid family name.';
    } else {
      this.errorMessage = '';
      this.router.navigate(['/booking', this.bookingCode]);
    }
  }

  // onSubmit(event: Event): void {
  //   event.preventDefault();
  //   this.checkInService.getLoginData(this.bookingCode).subscribe((result) => {
  //     if (result.data) {
  //       this.bookingData = result.data;
  //       this.verifyLogon();
  //     } else {
  //       alert('invalid booking');
  //     }
  //   });
  // }
  onSubmit(event: Event): void {
    event.preventDefault();
    this.checkInService.getLoginData(this.bookingCode).subscribe({
      next: (result) => {
        if (result.data) {
          this.bookingData = result.data;
          this.verifyLogon();
        } else {
          alert('Invalid booking');
        }
      },
      error: (error) => {
        if (error.message.includes('Booking with code')) {
          alert('Booking not found');
        } else {
          alert('An error occurred');
        }
      },
    });
  }
}
