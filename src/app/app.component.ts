import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

   MODES: Array<string> = ['push'];
   modeNum = 0;
   opened = true;
   loggedIn: boolean;
   showMyContainer = true;


// tslint:disable-next-line:typedef
public toggleSidenav() {
  this.opened = !this.opened;
  this.modeNum++;

  if (this.modeNum === this.MODES.length) {
    this.modeNum = 0;
  }
}

public toggleMode(): void {
  this.modeNum++;

  if (this.modeNum === this.MODES.length) {
    this.modeNum = 0;
  }
}
}
