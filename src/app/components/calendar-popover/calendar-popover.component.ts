import { Component, ViewChild } from '@angular/core';
import { IonDatetime, PopoverController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-calendar-popover',
  templateUrl: './calendar-popover.component.html',
  styleUrls: ['./calendar-popover.component.scss'],
})
export class CalendarPopoverComponent {

  @ViewChild('datetime') datetime!: IonDatetime;

  constructor(private popoverCtrl: PopoverController) { }
  onDayClick() {
 
    setTimeout(() => {
      const selectedDate = this.datetime.value;

      if (selectedDate) {
   
        this.popoverCtrl.dismiss({ date: selectedDate });
      }
    }, 10);
  }
}