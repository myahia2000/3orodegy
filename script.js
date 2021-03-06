// control the auto refresh rate -> 1000 = 1 second
var refreshRate = 10000; // 10 seconds


// Automatically reload the browser
setInterval(function() {
   window.location.reload();
}, refreshRate);

// Hide the images on load
$('#chicago').hide();

// Get a random image from Unsplash and fade it in on load
$('#chicago').css({
  // serves a random image from this collection on Unsplash.com
  //'background-image' : 'url(https://source.unsplash.com/collection/495468/1600x900)'
   //  'background-image' : 'url(https://source.unsplash.com/collection/137627)'
     'background-image' : 'url(https://source.unsplash.com/1600x900/?nature,china,building)'
   
}).fadeIn(10);
