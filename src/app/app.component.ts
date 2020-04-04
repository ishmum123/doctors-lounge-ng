import {Component} from '@angular/core';
import '../vendor/jitsi/external_api.js';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <br/>
      <input type="text" placeholder="Please Enter Roomname" #roomName>
      <button type="button" (click)="onSubmit(roomName.value, meet)">Submit</button>
      <br/>
      <br/>
      <br/>
      <div id="meet" #meet></div>
    </div>
  `
})
export class AppComponent {

  title = 'Doctor\'s Lounge';
  domain = 'meet.jit.si';
  api: any;

  onSubmit(roomName: string, meet: HTMLDivElement): void {
    this.api = new JitsiMeetExternalAPI(this.domain, {roomName: roomName, width: 700, height: 700, parentNode: meet});
  }
}

