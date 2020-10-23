// Scss Files Compile
const style = require('../scss/app.scss');

// Libraries
import Swiper from 'swiper';
require('tailwindcss/defaultConfig');
require('tailwindcss/defaultTheme');
require('tailwindcss/resolveConfig');


// App
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const app = {
        init : function() {
            this.afterInit();
            this.eventListeners();
        },

        afterInit : function() {
            this.slider('.slider');
        },

        slider : function(element) {
            new Swiper(element, {
                slidesPerView: 'auto',
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        },

        eventListeners : function() {
            const self = this;
        }
    }

    app.init();
});