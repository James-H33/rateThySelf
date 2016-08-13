require('../sass/main.sass');

'use strict';

window.addEventListener('load', greeter);

function greeter() {
    console.log('Welcome to rateThySelf');
}


const PageView = {
    init: function() {
        this.cacheDOM();
        this.bindEvents();
    },
    cacheDOM: function() {
        this.$ratingsDisplay = document.querySelector('.ratings-display');
        this.$pageDownBtn    = document.querySelector('.page-down');
        this.$pageUpBtn      = document.querySelector('.page-up');
    },
    bindEvents: function() {
        this.$pageDownBtn.addEventListener('click', this.slidePageView.bind(this));
        this.$pageUpBtn.addEventListener('click', this.slidePageView.bind(this));
    },
    slidePageView: function() {
        this.$ratingsDisplay.classList.toggle('active-view');
    }

}

PageView.init();
