import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title implements OnChanges{
  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in this) {
      const inputValues = this[propName];
    }}
}
