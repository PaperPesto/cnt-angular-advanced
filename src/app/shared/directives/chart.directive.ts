import {Directive, ElementRef} from '@angular/core';
import {Chart, registerables} from 'chart.js';

@Directive({
  selector: '[chart]'
})
export class ChartDirective {
  private chart!: Chart;

  constructor(private el: ElementRef<HTMLCanvasElement>) {
    Chart.register(...registerables);

    this.chart =   new Chart(this.el.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
