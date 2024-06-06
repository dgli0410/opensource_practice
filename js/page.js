//footer show//

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        var documentHeight = $(document).height();
        var windowHeight = $(window).height();
        var footerHeight = $("footer").outerHeight();

        if (scrollDistance + windowHeight >= documentHeight) {
            $("footer").addClass("show");
        } else {
            $("footer").removeClass("show");
        }
    });
});