import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent  implements OnInit, AfterViewInit {
  title = "Animated Count";

  nums: Array<number> = [25, 76, 48];

  @ViewChild("oneItem", {static: true}) oneItem: any;
  @ViewChildren("count") count: QueryList<any>;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.animateCount();
  }

  animateCount() {
    let _this = this;

    let single = this.oneItem.nativeElement.innerHTML;

    this.counterFunc(single, this.oneItem, 7000);

    this.count.forEach(item => {
      _this.counterFunc(item.nativeElement.innerHTML, item, 2000);
    });
  }

  counterFunc(end: number, element: any, duration: number) {
    let range, current: number, step, timer;

    range = end - 0;
    current = 0;
    step = Math.abs(Math.floor(duration / range));

    timer = setInterval(() => {
      current += 1;
      element.nativeElement.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
  }
}
