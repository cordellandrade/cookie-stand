'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var seattleUl = document.getElementById('seattle');
var tokyoUl = document.getElementById('tokyo');
var dubaiUl = document.getElementById('dubai');
var parisUl = document.getElementById('paris');
var limaUl = document.getElementById('lima');


let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.5,
    cookiesSoldPerHourArray: [],
    dailyStoreTotal: 0,
    randomCookiePerHour: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calCookiesSoldPerHour: function() {
        let randomCustomerPerhour = this.randomCookiePerHour();
        // console.log(randomCustomerPerhour);
        for (let i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.randomCookiePerHour() * this.avg);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
            // console.log(this.dailyStoreTotal);
        }


    },
    render: function() {
        this.calCookiesSoldPerHour();
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
            seattleUl.appendChild(li);
        }
        li = document.createElement('li');
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        seattleUl.appendChild(li);
    }


};

seattle.render();

let tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesSoldPerHourArray: [],
    dailyStoreTotal: 0,
    randomCookiePerHour: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calCookiesSoldPerHour: function() {
        let randomCustomerPerhour = this.randomCookiePerHour();
        // console.log(randomCustomerPerhour);
        for (let i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.randomCookiePerHour() * this.avg);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
            // console.log(this.dailyStoreTotal);
        }


    },
    render: function() {
        this.calCookiesSoldPerHour();
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
            tokyoUl.appendChild(li);
        }
        li = document.createElement('li');
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        tokyoUl.appendChild(li);
    }


};

tokyo.render();

let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesSoldPerHourArray: [],
    dailyStoreTotal: 0,
    randomCookiePerHour: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calCookiesSoldPerHour: function() {
        let randomCustomerPerhour = this.randomCookiePerHour();
        // console.log(randomCustomerPerhour);
        for (let i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.randomCookiePerHour() * this.avg);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
            // console.log(this.dailyStoreTotal);
        }


    },
    render: function() {
        this.calCookiesSoldPerHour();
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
            dubaiUl.appendChild(li);
        }
        li = document.createElement('li');
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        dubaiUl.appendChild(li);
    }


};

dubai.render();

let paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesSoldPerHourArray: [],
    dailyStoreTotal: 0,
    randomCookiePerHour: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calCookiesSoldPerHour: function() {
        let randomCustomerPerhour = this.randomCookiePerHour();
        // console.log(randomCustomerPerhour);
        for (let i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.randomCookiePerHour() * this.avg);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
            // console.log(this.dailyStoreTotal);
        }


    },
    render: function() {
        this.calCookiesSoldPerHour();
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
            parisUl.appendChild(li);
        }
        li = document.createElement('li');
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        parisUl.appendChild(li);
    }


};

paris.render();

let lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesSoldPerHourArray: [],
    dailyStoreTotal: 0,
    randomCookiePerHour: function() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },

    calCookiesSoldPerHour: function() {
        let randomCustomerPerhour = this.randomCookiePerHour();
        // console.log(randomCustomerPerhour);
        for (let i = 0; i < hours.length; i++) {
            var cookiesPerHour = Math.ceil(this.randomCookiePerHour() * this.avg);
            this.cookiesSoldPerHourArray.push(cookiesPerHour);
            this.dailyStoreTotal += cookiesPerHour;
            // console.log(this.dailyStoreTotal);
        }


    },
    render: function() {
        this.calCookiesSoldPerHour();
        for (var i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
            limaUl.appendChild(li);
        }
        li = document.createElement('li');
        li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
        limaUl.appendChild(li);
    }


};

lima.render();