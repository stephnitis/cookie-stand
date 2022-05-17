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
  cookiesDaily: [],
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
      this.cookiesDaily.push(sum);
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
      //console.log(this.cookiesArray[i]);
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let li2Elem = document.createElement('li');
    li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
    ulElem.appendChild(li2Elem);
  }
};
cityOneSales.totalCookies();
cityOneSales.dailyTotal();
cityOneSales.render();

console.log(cityOneSales);
console.log(cityOneSales.hrlyGuests());
console.log(cityOneSales.dailyTotal());
console.log(cityOneSales.cookiesDaily);

let cityTwoSales = {
  city: 'Tokyo',
  avgCookies: 1.2,
  minCust: 3,
  maxCust: 24,
  cookiesDaily: [],
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
      //console.log(sum);
      sum += this.cookiesArray[i];
      this.cookiesDaily.push(sum);
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
      //console.log(this.cookiesArray[i]);
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let li2Elem = document.createElement('li');
    li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
    ulElem.appendChild(li2Elem);
  }
};
cityTwoSales.totalCookies();
cityTwoSales.dailyTotal();
cityTwoSales.render();

let cityThreeSales = {
  city: 'Dubai',
  avgCookies: 3.7,
  minCust: 11,
  maxCust: 38,
  cookiesDaily: [],
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
      sum += this.cookiesArray[i];
      this.cookiesDaily.push(sum);
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
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let li2Elem = document.createElement('li');
    li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
    ulElem.appendChild(li2Elem);
  }
};
cityThreeSales.totalCookies();
cityThreeSales.dailyTotal();
cityThreeSales.render();

let cityFourSales = {
  city: 'Paris',
  avgCookies: 2.3,
  minCust: 20,
  maxCust: 38,
  cookiesDaily: [],
  hrlyGuests: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesArray: [],
  totalCookies: function () {
    let sum = 0;
    for (let i = 0; i < hours.length; i++) {
      sum += this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
    }
    return sum;
  },
  dailyTotal: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesArray.length; i++) {
      sum += this.cookiesArray[i];
      this.cookiesDaily.push(sum);
    }
    return sum;
  },

  render: function () {
    let articleElem = document.createElement('article');
    cookieSales.appendChild(articleElem);

    let h2Elem = document.createElement('article');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let li2Elem = document.createElement('li');
    li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
    ulElem.appendChild(li2Elem);
  }
};
cityFourSales.totalCookies();
cityFourSales.dailyTotal();
cityFourSales.render();

let cityFiveSales = {
  city: 'Lima',
  avgCookies: 4.6,
  minCust: 2,
  maxCust: 16,
  cookiesDaily: [],
  hrlyGuests: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesArray: [],
  totalCookies: function () {
    let sum = 0;
    for (let i = 0; i < hours.length; i++) {
      sum += this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
    }
    return sum;
  },
  dailyTotal: function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesArray.length; i++) {
      sum += this.cookiesArray[i];
      this.cookiesDaily.push(sum);
    }
    return sum;
  },

  render: function () {
    let articleElem = document.createElement('article');
    cookieSales.appendChild(articleElem);

    let h2Elem = document.createElement('article');
    h2Elem.textContent = this.city;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.append(ulElem);

    for (let i = 0; i < hours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
      ulElem.appendChild(liElem);
    }
    let li2Elem = document.createElement('li');
    li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
    ulElem.appendChild(li2Elem);
  }
};
cityFiveSales.totalCookies();
cityFiveSales.dailyTotal();
cityFiveSales.render();