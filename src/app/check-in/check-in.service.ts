import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class CheckInService {
  constructor(private apollo: Apollo) {}

  getLoginData(bookingCode: string) {
    const GET_BOOKING = gql`
      query GetBooking($bookingCode: String!) {
        booking(bookingCode: $bookingCode) {
          bookingCode
          passengers {
            lastName
          }
        }
      }
    `;
    return this.apollo.watchQuery({
      query: GET_BOOKING,
      variables: {
        bookingCode,
      },
    }).valueChanges;
  }
}
