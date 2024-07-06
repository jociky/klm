import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BookingService } from './booking/booking.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  providers: [BookingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  constructor(private _bookSvc: BookingService) {
  }

  public form = new FormGroup({
    bookingRef: new FormControl('PZIGZ3', [Validators.required]),
    familyName: new FormControl('HESP', [Validators.required])
  })

  async onSubmit() {
    if (!this.form.valid) {
      alert('Error, form is invalid');
      return;
    }

    try {
      const result = await this._bookSvc.getBooking(this.form.value.bookingRef, this.form.value.familyName);
      alert('Booking found correctly');
    } catch (ex: any) {
      alert(ex.message);
    }
  }
}
