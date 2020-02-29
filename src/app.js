import 'bootstrap';
import './scss/style.scss'
import $ from 'jquery';

$( document ).ready(function() {
    $('.collapse').collapse()

    $( ".skills-button" ).click(function() {
        console.log("clicked");
    });

    $('#skillsAccordion').on('hidden.bs.collapse', function () {
        console.log("closed from accordian");
        console.log($(this));
      })
});