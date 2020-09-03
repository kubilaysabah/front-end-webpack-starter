// Libraries
const $ = require('jquery');
import slick from 'slick-carousel';
import 'popper.js';
import 'bootstrap';

const theme = {
    init: function () {
        this.afterInit();
        this.eventListeners();
    },

    afterInit: function () {
        this.slider('[data-selector="slider"]');
    },

    slider : function(element) {
        $(element).slick({
            autoplay: true,
            autoplaySpeed: 2000,
        });
    },

    eventListeners: function () {
        // Listener Functions
    }
}

document.addEventListener("DOMContentLoaded", function () {
    theme.init();
});