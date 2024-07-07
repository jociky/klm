import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BookingService } from './booking/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  providers: [BookingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  constructor(private _bookSvc: BookingService) {
  }

  public isError404: boolean = false;
  public isError500: boolean = false;

  public form = new FormGroup({
    bookingRef: new FormControl('PZIGZ3', [Validators.required]),
    familyName: new FormControl('HESP', [Validators.required])
  })

  async onSubmit() {
    this.isError404 = false;
    this.isError500 = false;

    if (!this.form.valid) {
      alert('Error, form is invalid');
      return;
    }

    try {
      const result = await this._bookSvc.getBooking(this.form.value.bookingRef, this.form.value.familyName);

      // todo: add a new route to display data
      alert('Booking found correctly');
    } catch (ex: any) {
      console.log(ex);

      // it might be worthwhile to display backend validation errors here
      // 400: request payload validation error
      // 404: booking not found
      if (ex.status === 404 || ex.status === 400) {
        this.isError404 = true;
      } else {
        // this also contains network error, etc
        
        this.isError500 = true;
      }
    }
  }
}
