'use strict';
let cookieSales = document.getElementById('location-sales');
let tableElem = document.createElement('table');
cookieSales.appendChild(tableElem);
let cookieForm = document.getElementById('my-form');
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
let tFootEl = document.createElement('tfoot');
tableElem.appendChild(tFootEl);
// got from MDN docs
// function randomGuests(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
let fishCookieSales = [];

function CitySales(city, avgCookies, minCust, maxCust) {
  this.city = city;
  this.avgCookies = avgCookies;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesDaily = [];
  this.cookiesArray = [],

    fishCookieSales.push(this);
}
CitySales.prototype.hrlyGuests = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

};
CitySales.prototype.totalCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
  }
  CitySales.prototype.dailyTotal = function () {
    let sum = 0;
    for (let i = 0; i < this.cookiesArray.length; i++) {
      //console.log(sum);
      sum += this.cookiesArray[i];
      this.cookiesDaily.push(sum);
    }
    return sum;
  };
  CitySales.prototype.render = function () {
    let row2 = document.createElement('tr');
    tableElem.appendChild(row2);

    let th2Elem = document.createElement('th');
    th2Elem.textContent = this.city;
    row2.appendChild(th2Elem);

    for (let i = 0; i < hours.length; i++) {
      let td1Elem = document.createElement('td');
      td1Elem.textContent = `${this.cookiesArray[i]}`;
      row2.appendChild(td1Elem);
    }

    let td3Elem = document.createElement('td');
    td3Elem.textContent = `${this.cookiesDaily[13]}`;
    row2.appendChild(td3Elem);
  };
};

function renderHeader() {
  let tHeadEl = document.createElement('thead');
  tableElem.appendChild(tHeadEl);

  let th1 = document.createElement('th');
  tHeadEl.appendChild(th1);

  for (let i = 0; i < hours.length; i++) {
    let thCol1 = document.createElement('td');
    thCol1.textContent = `${hours[i]}`;
    tHeadEl.appendChild(thCol1);
  }

  let th2Elem = document.createElement('th');
  th2Elem.textContent = 'Total';
  tHeadEl.appendChild(th2Elem);
}

new CitySales('Seattle', 6.3, 23, 65);
new CitySales('Tokyo', 1.2, 3, 24);
new CitySales('Dubai', 3.7, 11, 38);
new CitySales('Paris', 2.3, 20, 38);
new CitySales('Lima', 4.6, 2, 16);

function renderAllCities() {
  for (let i = 0; i < fishCookieSales.length; i++) {
    fishCookieSales[i].totalCookies();
    fishCookieSales[i].dailyTotal();
    fishCookieSales[i].render();
    //console.log(fishCookieSales[i]);
  }
}
renderHeader();
renderAllCities();

function renderFooter() {

  let thFoot = document.createElement('th');
  thFoot.textContent = 'Hourly Total';
  tFootEl.appendChild(thFoot);

  for (let i = 0; i < hours.length; i++) {
    let footCol1 = document.createElement('td');
    footCol1.textContent = `${totalHourly[i]}`;
    tFootEl.appendChild(footCol1);
  }

  let finalData = document.createElement('td');
  finalData.textContent = `${grandTotal[13]}`;
  tFootEl.appendChild(finalData);
}

let totalHourly = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function hourlyTotal() {
  for (let i = 0; i < fishCookieSales.length; i++) {
    let currentCity = fishCookieSales[i];
    for (let j = 0; j < currentCity.cookiesArray.length; j++) {
      totalHourly[j] = totalHourly[j] + currentCity.cookiesArray[j];
    }
  }
}
let grandTotal = [];
function gTotal() {
  let sum = 0;
  for (let i = 0; i < totalHourly.length; i++) {
    sum += totalHourly[i];
    grandTotal.push(sum);
  }
}
hourlyTotal();
gTotal();
renderFooter();

function handleSubmit(event) {
  event.preventDefault();

  let city = event.target.city.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookies = parseFloat(event.target.avgCookies.value);
  let newCitySales = new CitySales(city, avgCookies, minCust, maxCust);
  console.log(fishCookieSales);
  newCitySales.hrlyGuests(minCust, maxCust);
  newCitySales.totalCookies(avgCookies);
  newCitySales.dailyTotal();
  newCitySales.render();
  tFootEl.innerHTML = '';
  totalHourly = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  grandTotal = [];
  hourlyTotal();
  gTotal();
  renderFooter();
  cookieForm.reset();
}
cookieForm.addEventListener('submit', handleSubmit);


//console.log(renderAllCities());


// let cityOneSales = {
//   city: 'Seattle',
//   avgCookies: 6.3,
//   minCust: 23,
//   maxCust: 65,
//   cookiesDaily: [],
//   hrlyGuests: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesArray: [],
//   totalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
//     }
//   },
//   // got from W3docs
//   dailyTotal: function () {
//     let sum = 0;
//     for (let i = 0; i < this.cookiesArray.length; i++) {
//       console.log(sum);
//       sum += this.cookiesArray[i];
//       this.cookiesDaily.push(sum);
//     }
//     return sum;
//   },

//   render: function () {
//     let articleElem = document.createElement('article');
//     cookieSales.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       //console.log(this.cookiesArray[i]);
//       liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let li2Elem = document.createElement('li');
//     li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
//     ulElem.appendChild(li2Elem);
//   }
// };
// cityOneSales.totalCookies();
// cityOneSales.dailyTotal();
// cityOneSales.render();

// console.log(cityOneSales);
// console.log(cityOneSales.hrlyGuests());
// console.log(cityOneSales.dailyTotal());
// console.log(cityOneSales.cookiesDaily);

// let cityTwoSales = {
//   city: 'Tokyo',
//   avgCookies: 1.2,
//   minCust: 3,
//   maxCust: 24,
//   cookiesDaily: [],
//   hrlyGuests: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesArray: [],
//   totalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
//     }
//   },
//   dailyTotal: function () {
//     let sum = 0;
//     for (let i = 0; i < this.cookiesArray.length; i++) {
//       //console.log(sum);
//       sum += this.cookiesArray[i];
//       this.cookiesDaily.push(sum);
//     }
//     return sum;
//   },

//   render: function () {
//     let articleElem = document.createElement('article');
//     cookieSales.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.append(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       //console.log(this.cookiesArray[i]);
//       liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let li2Elem = document.createElement('li');
//     li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
//     ulElem.appendChild(li2Elem);
//   }
// };
// cityTwoSales.totalCookies();
// cityTwoSales.dailyTotal();
// cityTwoSales.render();

// let cityThreeSales = {
//   city: 'Dubai',
//   avgCookies: 3.7,
//   minCust: 11,
//   maxCust: 38,
//   cookiesDaily: [],
//   hrlyGuests: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesArray: [],
//   totalCookies: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
//     }
//   },
//   dailyTotal: function () {
//     let sum = 0;
//     for (let i = 0; i < this.cookiesArray.length; i++) {
//       sum += this.cookiesArray[i];
//       this.cookiesDaily.push(sum);
//     }
//     return sum;
//   },

//   render: function () {
//     let articleElem = document.createElement('article');
//     cookieSales.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.append(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let li2Elem = document.createElement('li');
//     li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
//     ulElem.appendChild(li2Elem);
//   }
// };
// cityThreeSales.totalCookies();
// cityThreeSales.dailyTotal();
// cityThreeSales.render();

// let cityFourSales = {
//   city: 'Paris',
//   avgCookies: 2.3,
//   minCust: 20,
//   maxCust: 38,
//   cookiesDaily: [],
//   hrlyGuests: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesArray: [],
//   totalCookies: function () {
//     let sum = 0;
//     for (let i = 0; i < hours.length; i++) {
//       sum += this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
//     }
//     return sum;
//   },
//   dailyTotal: function () {
//     let sum = 0;
//     for (let i = 0; i < this.cookiesArray.length; i++) {
//       sum += this.cookiesArray[i];
//       this.cookiesDaily.push(sum);
//     }
//     return sum;
//   },

//   render: function () {
//     let articleElem = document.createElement('article');
//     cookieSales.appendChild(articleElem);

//     let h2Elem = document.createElement('article');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.append(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let li2Elem = document.createElement('li');
//     li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
//     ulElem.appendChild(li2Elem);
//   }
// };
// cityFourSales.totalCookies();
// cityFourSales.dailyTotal();
// cityFourSales.render();

// let cityFiveSales = {
//   city: 'Lima',
//   avgCookies: 4.6,
//   minCust: 2,
//   maxCust: 16,
//   cookiesDaily: [],
//   hrlyGuests: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookiesArray: [],
//   totalCookies: function () {
//     let sum = 0;
//     for (let i = 0; i < hours.length; i++) {
//       sum += this.cookiesArray.push(Math.ceil(this.hrlyGuests() * this.avgCookies));
//     }
//     return sum;
//   },
//   dailyTotal: function () {
//     let sum = 0;
//     for (let i = 0; i < this.cookiesArray.length; i++) {
//       sum += this.cookiesArray[i];
//       this.cookiesDaily.push(sum);
//     }
//     return sum;
//   },

//   render: function () {
//     let articleElem = document.createElement('article');
//     cookieSales.appendChild(articleElem);

//     let h2Elem = document.createElement('article');
//     h2Elem.textContent = this.city;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.append(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       let liElem = document.createElement('li');
//       liElem.textContent = `${hours[i]} ${this.cookiesArray[i]} Cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let li2Elem = document.createElement('li');
//     li2Elem.textContent = `Total: ${this.cookiesDaily[13]} Cookies`;
//     ulElem.appendChild(li2Elem);
//   }
// };
// cityFiveSales.totalCookies();
// cityFiveSales.dailyTotal();
// cityFiveSales.render();