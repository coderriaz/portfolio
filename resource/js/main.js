// mixitup START
var mixer = mixitup('.grid-latest-work-container');
//mixitup end

//scrollify for smooth scroll START
$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash: false,
      scrollSpeed: 900,
    });
  });
//scrollify for smooth scroll END

//hambarger menu start
function openMenu() {
    document.getElementById('navbar').style.height=("100vh");
}
function closeMenu() {
  document.getElementById('navbar').style.height=("0%");
}
//hambarger menu start

//smooth scroll start
$(function(){
  $('.menu-item a,.scroll-down a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this,'href')).offset().top
    },1000);
    return false;
  });
});
//smooth scroll start