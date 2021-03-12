var hamburgerMenu = $('.hamburger-menu');
var hamburgerIconClose = $('.header-container i');
var hamburgerIcon = $('.hamburger-icon');

$(document).ready(function() {
    hamburgerIcon.click(function(){
        hamburgerMenu.show();
    });

    hamburgerIconClose.click(function(){
        hamburgerMenu.hide();
    })
});

