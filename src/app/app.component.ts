import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  days: any;
  hr: any;
  min: any;
  sc: any;

  ngOnInit() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 8); // Add 10 days to the current date

    setInterval(() => {
      const currentDate = new Date();
      const timeLeft = targetDate.getTime() - currentDate.getTime();
      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hr = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      this.sc = Math.floor((timeLeft % (1000 * 60)) / 1000);
    }, 1000);
  }


}
