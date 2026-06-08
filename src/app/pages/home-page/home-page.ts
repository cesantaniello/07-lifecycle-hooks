import { afterNextRender, afterEveryRender, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage {
  traditionalProperty = 'This is a traditional property.';
  signalProperty = signal('This is a signal property.');

  changeTraditionalProperty() {
    this.traditionalProperty = 'Updated traditional property.';
  }

  changeSignalProperty() {
    this.signalProperty.set('Updated signal property.');
  }

  constructor() {};

  basicEffect = effect((onCleanup) => {
    console.log(`basicEffect: Runs once when the component is initialized and every time any of its dependencies change.`);
    onCleanup(() => {
      console.log(`basicEffect: Cleanup function called.`);
    });
  });

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

  ngOnDestroy(){
    console.log(`ngOnDestroy: Runs once just before the component is destroyed.`); }

  afterNextRenderEffect = afterNextRender(() => {
    console.log(`afterNextRenderEffect: Runs once after the next render of the component.`); });

  afterRenderEffect = afterEveryRender(() => {
    console.log(`afterRender: Runs every time the component is rendered.`); });
}
