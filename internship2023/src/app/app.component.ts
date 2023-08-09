import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'intro',
    id: 'my app',
    '(click)': 'onClick()',
  },
})
export class AppComponent {
  title = 'internship2023';

  // @HostBinding('class') appClass = 'intro';
  // @HostBinding('id') appId = 'my app';

  // @HostListener('click') onClick() {
  //   console.log('welecom to first cutom event')
  // }

  onClick() {
    console.log('welecom to first cutom event');
  }
}
