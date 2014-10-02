$(document).ready(function(){
    var divarrow  = $('.divarrow'),
        overlay = $('.rounded.absolute'),
        menu = $('.slide-menu');

    $(document).on('scroll', function(){
        if ($(document).scrollTop() > 1000){
            divarrow.removeClass('hidden');
        }
        else {
            if (!divarrow.hasClass('hidden')) {
                divarrow.addClass('hidden');
            }
        }
    });
    divarrow.on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    overlay.on('mouseover', function(e){
        e.stopPropagation();
        $(this).animate('slow').removeClass('overlay');
    });
    overlay.on('mouseout', function(e){
        e.stopPropagation();
        $(this).addClass('overlay');
    });
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
    $('.main-menu-trigger').on('click', function(){
        if (menu.hasClass('menu-open')) {
            menu.removeClass('menu-open');
        }
        else {
            menu.addClass('menu-open');
        }
    })
});
//