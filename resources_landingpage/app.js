function scale() {
    var maxWidth = $(window).width();
    if (maxWidth > 1920) {
        $('#body').width('100%');
        $('#body').height('100%');
    } else {
        $('#body').width('1920');
        $('#body').height('980');
    }
    $('#body').css('transform', 'scale(' + (maxWidth / 1920) + ')');
}

function scaleNav() {
    var maxWidth = $(window).width();
    $('.left-nav').css('transform', 'scale(' + (maxWidth / 1920) + ')');
    $('.left-nav').css('top', '0px');
}

$(document).ready(function() {
    $(document).on('click', 'a[href^=\\#]', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        console.log($(target).offset().top)
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 1, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });

    // generateNum();

    scale();
    scaleNav();
    $(window).on('resize', function() {
        scale();
        scaleNav();
    });

    $('#sidebar-btn-close').click(function () {
        if ($('#fixed-menu-sidebar').hasClass('hide')) {
            $('#fixed-menu-sidebar').removeClass('hide');
        } else {
            $('#fixed-menu-sidebar').addClass('hide');
        }
    })



    $('#btn-show-modal-register').click(function () {
        if ($('#modal-register').hasClass('show')) {
            $('#modal-register').removeClass('show');
        } else {
            $('#modal-register').addClass('show');
        }
    })
	
    $('#btn-show-modal-register1').click(function () {
        if ($('#modal-register').hasClass('show')) {
            $('#modal-register').removeClass('show');
        } else {
            $('#modal-register').addClass('show');
        }
    })
  $('#btn-show-modal-register2').click(function () {
        if ($('#modal-register').hasClass('show')) {
            $('#modal-register').removeClass('show');
        } else {
            $('#modal-register').addClass('show');
        }
    })
  $('#btn-show-modal-register3').click(function () {
        if ($('#modal-register').hasClass('show')) {
            $('#modal-register').removeClass('show');
        } else {
            $('#modal-register').addClass('show');
        }
    })

    $('#overlay-modal').click(function () {
        if ($('#modal-register').hasClass('show')) {
            $('#modal-register').removeClass('show');
        } else {
            $('#modal-register').addClass('show');
        }
    })

    $('#btn-close-modal').click(function () {
        if ($('#modal-register').hasClass('show')) {
            $('#modal-register').removeClass('show');
        } else {
            $('#modal-register').addClass('show');
        }
    })

});

 