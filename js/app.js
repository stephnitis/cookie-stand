'use strict';
let cookieSales = document.getElementById('location-sales');
console.log(cookieSales);
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// got from MDN docs
// function randomGuests(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

let Seattle = {
  avgCookies: 6.3,
  minCust: 23,
  maxCust: 65,
  hrlyGuests: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesArray: [],
  totalCookies: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
    }
  },
  dailyTotal: function () {
    let sum = 0;
    for (let i = 0; i < hours.length; i++) {
      sum += this.cookiesArray[i],
    }
  },
};

Seattle.totalCookies();
console.log(Seattle.avgCookies);
console.log(Seattle.hrlyGuests());
console.log(Seattle);
console.log(Seattle.dailyTotal());

// render: function(){
//   let articleElem = document.createElement('article');
// }