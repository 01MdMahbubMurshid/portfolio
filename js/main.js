$(document).ready(function(){
// Magnific Popup Active
$(".project-popup").magnificPopup({
    type: "image",
    gallery: {
        enabled: true,
      },
});

//Counter Active
$(".counterup").counterUp({
    delay: 50,
    time: 5000
});
});