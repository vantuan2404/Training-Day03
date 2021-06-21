import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Intern-Day03';
  time = "2020-06-24T09:00:00.000Z";

  foods = [
    {
      id: 1,
      name: 'Tomato',
      price: 5
    },
    {
      id: 2,
      name: 'Apple',
      price: 7
    },
    {
      id: 3,
      name: 'Banana',
      price: 10
    },
    {
      id: 4,
      name: 'Orange',
      price: 14
    }
  ]
}
