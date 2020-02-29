import 'bootstrap';
import './scss/style.scss'
import $ from 'jquery';

let last = null;

$( document ).ready(function() {
    $('.collapse').collapse()

    $( ".skills-button" ).click(function() {
        if(last) {
            last.classList.remove("fa-rotate-180");
        }
        if(last && last == $(this)[0].children[0].children[1].children[0]) {
            last = null;
        }
        else {
            last = $(this)[0].children[0].children[1].children[0];
            last.classList.add("fa-rotate-180");
        }
        console.log("clicked");
    });

});