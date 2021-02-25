import { Component, Input, OnInit } from '@angular/core';
import { IItem } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() arr: IItem[] = [];
  isMounted: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isMounted = true;
    }, 3000);
    console.log('mounted');
  }

  remove(id: number) {
    this.arr = this.arr.filter((item) => item.id !== id);
  }
}
