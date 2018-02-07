$(window).scroll(function() {
  if ($(this).scrollTop() > 1300) {
    $(".bar").removeClass("white").addClass("black");
  } else {
    $(".bar").removeClass("black").addClass("white");
  }
});

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}