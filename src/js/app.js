"use strict";

// Scss Files Compile
require('../scss/app.scss');

// Imports
import $ from 'jquery';

// Import Libraries
const app = {
    init : function() {
        this.eventListeners();
    },

    eventListeners : function() {
        $('[data-selector="alert-button"]').click(function(){
            alert("Welcome to webpack starter pack!");
        });
    }
};

// App
document.addEventListener('DOMContentLoaded', app.init());