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
  title = 'frontend';

  constructor(private _bookSvc: BookingService) {
  }

  public form = new FormGroup({
    bookingRef: new FormControl('', [Validators.required]),
    familyName: new FormControl('', [Validators.required])
  })

  async onSubmit() {
    if (!this.form.valid) {
      alert('Error, form is invalid');
      return;
    }

    try {
      const result = await this._bookSvc.getBooking(this.form.value.bookingRef, this.form.value.familyName);
      alert(result);
    } catch (ex: any) {
      alert(ex.message);
    }
  }
}
