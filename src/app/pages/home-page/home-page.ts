import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage {
  constructor() {};

ngOnInit(){
  console.log(`ngOnInit: Runs once the component is initialized.`); }

ngDoCheck(){
  console.log(`ngDoCheck: Runs every time this component is checked for changes.`); }

ngAfterContentInit(){
  console.log(`ngAfterContentInit: Runs once after the component's content has been initialized.`); }

ngAfterContentChecked(){
  console.log(`ngAfterContentChecked: Runs every time this component content has been checked for changes.`); }

ngAfterViewInit(){
  console.log(`ngAfterViewInit: Runs once after the component's view has been initialized.`); }

ngAfterViewChecked(){
  console.log(`ngAfterViewChecked: Runs every time the component's view has been checked for changes.`); }
}
