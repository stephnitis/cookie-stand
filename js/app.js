'use strict';
let cookieSales = document.getElementById('location-sales');
console.log(cookieSales);
let hours = ['6AM:', '7AM:', '8AM:', '9AM:', '10AM:', '11AM:', '12PM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:', '6PM:', '7PM:'];

// got from MDN docs
// function randomGuests(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

let cityOneSales = {
  city: 'Seattle',
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
  // got from W3docs
  dailyTotal: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesArray.length; i++) {
      console.log(sum);
      sum += this.cookiesArray[i];
    }
    return sum;
  },

  render: function () {
    let articleElem = document.createElement('article');
    cookieSales.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.cookiesArray[i]);
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }

  }
};
cityOneSales.totalCookies();
cityOneSales.render();

//console.log(cityOneSales.hrlyGuests());
//console.log(cityOneSales);
//console.log(cityOneSales.dailyTotal());

let cityTwoSales = {
  city: 'Tokyo',
  avgCookies: 1.2,
  minCust: 3,
  maxCust: 24,
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
    for (let i = 0; i < this.cookiesArray.length; i++) {
      console.log(sum);
      sum += this.cookiesArray[i];
    }
    return sum;
  },

  render: function () {
    let articleElem = document.createElement('article');
    cookieSales.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      console.log(this.cookiesArray[i]);
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
  }
};
cityTwoSales.totalCookies();
cityTwoSales.render();