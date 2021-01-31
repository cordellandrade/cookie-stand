'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cookieTable = document.getElementById('cookie-table');

function Store(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesSoldPerHourArray = [];
    this.dailyStoreTotal = 0;
    this.randomCustomerPerhour = function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };

    this.calCookiesSoldPerHour = function() {
        for (let i = 0; i < hours.length; i++) {
            let cookiesPerHour = Math.ceil(this.randomCustomerPerHour() * this.avg);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
        }
    }

    this.render = function() {
        this.calCookiesSoldPerHour();
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = this.name;
        tr.appendChild(td);

        for (let i = 0; i < hours.length; i++) {
            let td = document.createElement('td');
            td.textContent = this.cookiesSoldPerHourArray[i];
            tr.appendChild(td);
        }

        td = document.createElement('td');
        td.textContent = this.dailyStoreTotal;
        tr.appendChild(td);
        cookieTable.appendChild(tr);
    }
}

function renderHeader() {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++) {
        th = document.createElement('th');
        th.textContent = hours[i];
        tr.appendChild(th);
    }

    th = document.createElement('th');
    th.textContent = 'Total';
    tr.appendChild(th);

    cookieTable.appendChild(tr);
}


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();