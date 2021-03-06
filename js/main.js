$(document).ready(function() {

    // Logo
    var $logo = $('#logo');
    if (location.href.indexOf("#") != -1) {
        if (location.href.substr(location.href.indexOf("#")) != '#about') {
            $logo.show();
        }
    }

    // Show logo
    $('#tab-container .tab a').click(function() {
        $logo.slideDown('fast');
    });
    // Hide logo
    $logo.slideUp('fast');
    $('#tab-about').click(function() {});

    function animMeter() {
        $(".meter > span").each(function() {
            $(this)
                .data("origWidth", $(this).width())
                .width(0)
                .animate({
                    width: $(this).data("origWidth")
                }, 600);
        });
    }
    animMeter();

    $('#tab-container').easytabs({
        animate: false,
        updateHash: true,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 200,
        tabActiveClass: 'active'
    }).bind('easytabs:midTransition', function(event, $clicked, $targetPanel) {
        if ($targetPanel.selector == '#resume') {
            animMeter();
        }
    });
});
