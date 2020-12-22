import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements  OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input()
  value = 'GrandChild value';

  constructor() {
    console.log('GRANDCHILD Constructor', this.value);
  }

  ngOnInit(): void{
    console.log('GRANDCHILD ngOnInit', this.value);
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('GRANDCHILD ngOnChanges', this.value, changes);
  }

  ngDoCheck(): void{
    console.log('GRANDCHILD ngDoCheck', this.value);
  }

  ngOnDestroy(): void{
    console.log('GRANDCHILD ngOnDestroy', this.value);
  }

  ngAfterContentChecked(): void {
    console.log('GRANDCHILD ngAfterContentChecked', this.value);
  }

  ngAfterContentInit(): void {
    console.log('GRANDCHILD ngAfterContentInit', this.value);
  }

  ngAfterViewChecked(): void {
    console.log('GRANDCHILD ngAfterViewChecked', this.value);
  }

  ngAfterViewInit(): void {
    console.log('GRANDCHILD ngAfterViewInit', this.value);
  }


}
