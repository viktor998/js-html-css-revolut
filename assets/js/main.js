var containerFeatures =$('.container-features');
var containerFeaturesXs =$('.container-features-xs');
var linkHover = $('a.link-hover');
var linkHoverXs = $('a.link-hover-xs');
var hamburger = $('.nav-bar-xs i');
var navBarXs = $('.nav-bar-xs');
var cross = $('.hamburger-dropdown i');
var hamburgerDropdown = $('.hamburger-dropdown');
var linksDropdown = $('.links-drop');

$(document).ready(function() {
    mouseHover();
    mouseClick();
    mouseClickXs();
    
});

function mouseHover(){
    linkHover.mouseenter(function(){
        $(this).next().addClass('active');
        console.log('ok');
        
    });

    containerFeatures.mouseleave(function(){
        linkHover.next().removeClass('active');
        
    });
};

function mouseClick(){
    hamburger.click(function(){
        hamburgerDropdown.addClass('active');
        linksDropdown.addClass('links-active');
        navBarXs.hide();
    })
    cross.click(function(){
        linksDropdown.removeClass('links-active');
        navBarXs.show();
    })
}

function mouseClickXs(){
    linkHoverXs.click(function(){
        $(this).next().toggleClass('active');
        
    });
};