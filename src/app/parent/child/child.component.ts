import {
  Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild
} from '@angular/core';
import {GrandChildComponent} from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements  OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input()
  value = 'Initial value';

  @ViewChild(GrandChildComponent) grandChild: GrandChildComponent;

  constructor() {
    console.log('CHILD Constructor', this.value, this.grandChild);
  }

  ngOnInit(): void{
    console.log('CHILD ngOnInit', this.value, this.grandChild);
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('CHILD ngOnChanges', this.value, changes, this.grandChild);
  }

  ngDoCheck(): void{
    console.log('CHILD ngDoCheck', this.value, this.grandChild);
  }

  ngOnDestroy(): void{
    console.log('CHILD ngOnDestroy', this.value, this.grandChild);
  }

  ngAfterContentChecked(): void {
    console.log('CHILD ngAfterContentChecked', this.value, this.grandChild);
  }

  ngAfterContentInit(): void {
    console.log('CHILD ngAfterContentInit', this.value, this.grandChild);
  }

  ngAfterViewInit(): void {
    console.log('CHILD ngAfterViewInit', this.value, this.grandChild, this.grandChild.value);
  }

  ngAfterViewChecked(): void {
    console.log('CHILD ngAfterViewChecked', this.value, this.grandChild);
  }

}
