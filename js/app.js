'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

// got from MDN docs
function randomGuests(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let Seattle = {
  avgCookies: 6.3,
  hrlyCookies: hrlyGuests * avgCookies,
  hrlyGuests: randomGuests(23, 65),
 
}
function cookiesPerhr() {
for(let i = 0; i< this.hours.length; i++);
total = '${hrlyCookies} at [i]';
}
console.log(Seattle.avgCookies);
console.log(Seattle.hrlyCookies);
console.log(Seattle.hrlyGuests);
console.log(total);