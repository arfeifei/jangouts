/*
 * Copyright (C) 2015 SUSE Linux
 *
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE.txt file for details.
 */

import { Component, OnInit } from "@angular/core";
import { Router, Event, NavigationStart, NavigationError } from "@angular/router";

import { SigninFormComponent } from "./user";
import { RoomComponent, RoomService } from "./room";
import { FooterComponent } from "./footer";

@Component({
  selector: "jh-jangouts",
  template: `
    <div class="container-fluid container-no-padding">
      <!-- Routed views go here -->
      <router-outlet></router-outlet>
    </div>

    <jh-footer></jh-footer>
  `,
  entryComponents: [
    SigninFormComponent,
    RoomComponent,
    FooterComponent
  ]
})
export class AppComponent implements OnInit {

constructor(
              private roomService: RoomService,
              private router: Router) {}

  public ngOnInit(): void {
    this.setRouterEvents();
  }

  private setRouterEvents(): void {
    this.router.events.subscribe((event: Event): void => {
      if (event instanceof NavigationStart) {
        this.roomService.leave(); // before changing state, cleanup feeds
      } else if (event instanceof NavigationError) {
        this.router.navigate(["/sign_in"]);
      }
    });
  }

}
