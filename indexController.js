$(window).scroll(function() {
var scrollTop = $(this).scrollTop();
$(".fade").each(function() {
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    if (objectBottom < scrollTop) { 
    if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
    } else { 
    if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
    }
});
})