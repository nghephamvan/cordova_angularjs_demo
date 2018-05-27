import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';

  ngOnInit() {
    document.addEventListener("deviceready", function () {
      alert('Hello world');
    }, false);
  }
}
