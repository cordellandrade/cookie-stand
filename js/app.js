'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    name: 'Seattle',
    minCustomerPerHour: 23,
    maxCustomerPerHour: 65,
    aveCookiesSoldPerHour: 6.5,
    cookiesSoldPerHourArray: [],
    dailyStoreTotal: 0,
    randomCookiePerHour: function() {
        return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour + 1) + this.minCustomerPerHour);
    },

    calCookiesSoldPerHour: function() {
        let randomCustomerPerhour = this.randomCookiePerHour();
        // console.log(randomCustomerPerhour);
        for (let i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.randomCookiePerHour() * this.aveCookiesSoldPerHour);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
            // console.log(this.dailyStoreTotal);
        }


    },
    render: function() {
        this.calCookiesSoldPerHour();

    },
};

seattle.render();

let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
};

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
};

let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,

};

let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6
};