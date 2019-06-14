(function ($) {

    'use strict';


    var txt = $('.move-text');

    $('.move-title').click(function () {
        if ($(this).className === 'show') {
            // showText();
        } else {
            // hideText();
        }
    });


    function hideText() {
        $(this).className.add('show');
        txt.hide(300);
    }

    function showText(e) {
        $(this).className.remove('show');
        txt.show(300);
    }

})(jQuery);