import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

interface Event {
  id: number;
  type: 'instructor' | 'evaluator' | 'FTI' | 'Draft';
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './calendar-grid.component.html',
  styleUrls: ['./calendar-grid.component.scss']
})
export class CalendarGridComponent {
  days = Array.from(Array(30).keys());


  @Input() events: Event[] = []

  eventRange(day: number, event: Event): boolean {
    return (event.startDate.getDate() <= day) && (day <= event.endDate.getDate())
  }

  isEventDate(day: number, date: Date): boolean {
    return day === date.getDate();
  }

}
