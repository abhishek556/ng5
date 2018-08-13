import { Component } from '@angular/core';//imports

@Component({ //component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //bussiness logic
  title = 'app';
}
