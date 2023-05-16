import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';
import { ActivatedRoute } from '@angular/router';

const GET_BOOKING = gql`
  query GetBooking {
    bookingData {
      bookingCode
      contactDetails {
        address
      }
      itinerary {
        type
        connections {
          id
          duration
          origin {
            IATACode
            name
          }
        }
      }
      passengers {
        id
        firstName
        lastName
      }
    }
  }
`;

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.scss'],
})
export class BookingInfoComponent {
  booking: any;
  openPanel!: ExpansionPanelComponent;

  constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const bookingCode = params.get('bookingCode');

      this.apollo
        .watchQuery({
          query: GET_BOOKING,
          variables: {
            bookingCode,
          },
        })
        .valueChanges.subscribe((result) => {
          let bookingResult: any = result.data;
          this.booking = bookingResult.bookingData;
        });
    });
  }

  panelExpanded(panel: ExpansionPanelComponent) {
    if (this.openPanel && this.openPanel !== panel) {
      this.openPanel.expanded = false;
    }
    this.openPanel = panel;
  }
}
