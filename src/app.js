import 'bootstrap';
import './scss/style.scss'
import $ from 'jquery';

let last = null;

$( document ).ready(function() {
    $('.collapse').collapse()

    $( ".skills-button" ).click(function() {
        console.log($(this));
        console.log("clicked");
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        console.log("closed from accordian");
        last.toggleClass()
        console.log($(this));
    })


});