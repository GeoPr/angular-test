import { Component } from '@angular/core';

export interface IItem {
  id: number;
  title: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isContentVisible = false;
  v: string = 'default value';
  v2: string = '';
  title = 'angular-test';
  myProp = 'smthng from the prop';
  arr: IItem[] = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    date: new Date(),
  }));
  obj = {
    asd: 'asd',
    bla: 'bla',
  };
  onClick() {
    console.log('clicked');
    this.title = 'changed title';
  }
  onChange(e: any) {
    const value = e.target.value;
    this.v = value;
  }
  onChangeWithRef(value: string) {
    this.v2 = value;
  }
}
