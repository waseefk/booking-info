import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child && child.firstChild) {
            child = child.firstChild;
          }
          return child;
        }),
        filter(
          (route: ActivatedRoute | null): route is ActivatedRoute =>
            route !== null
        ),
        map((route: ActivatedRoute) => route.snapshot.data)
      )
      .subscribe((data) => {
        this.title = data['title'];
      });
  }

  get showBackIcon(): boolean {
    return this.router.url.startsWith('/booking');
  }
}
