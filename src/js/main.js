import styles from './../css/main.css';


// NOTE: TO use Jquery, just call the modules you want
var $ = require('jquery/src/core');
// require('jquery/src/core/init');
//  require('jquery/src/manipulation');

// OR, use all of them
 var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');
function resize_video() {
    var header = $('body > header');
    var video = $('.hero-video');
    var height = header.height();
    var width = header.width();
    video.height(height);
    video.width(width);
}
$( document ).ready(function() {
    resize_video()
    
    $('body > header').css({'background-image':'none'})
});
window.onresize = function() {
    resize_video()
}