import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  color = 'green';

  constructor() {}

  ngOnInit(): void {}

  setColor(newColor: string) {
    this.color = newColor;
  }
}
