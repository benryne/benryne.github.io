import 'bootstrap';
import './scss/style.scss'
import $ from 'jquery';

$( document ).ready(function() {
    $('.collapse').collapse()

    $( ".skills-button" ).click(function() {
        console.log("clicked");
    });
});