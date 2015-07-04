;
(function($) {

    'use strict';

    $.timeLimit = function(options) {

        var
            settings = $.extend({
                timeout: 60000,
                messages: 3,
                title: 'Atenção!!',
                message: 'Por favor, para continuar navegando efetue o <a href="/register">registro</a> em nosso fórum.',
                closeMessage: 'Fechar',
                redirect: '/register',
                theme: 'asphalt',
                display: 5
            }, options),

            themes = {
                river: ['#3498DB', '#2980B9'],
                turquoise: ['#1ABC9C', '#16A085'],
                emerald: ['#2ECC71', '#27AE60'],
                amethyst: ['#9B59B6', '#8E44AD'],
                asphalt: ['#34495E', '#2C3E50'],
                summer: ['#F1C40F', '#F39C12'],
                carrot: ['#E67E22', '#D35400'],
                alizarin: ['#E74C3C', '#C0392B'],
                concrete: ['#95A5A6', '#7F8C8D']
            },

            init = {
                bind: function() {
                    setInterval(function() {
                        if(!$('#time-limit').length){
                            if(settings.display > 0) {
                                init.showMessage();
                                settings.display--;
                            }
                            else {
                                init.redirectUser();
                            }
                        }
                    }, settings.timeout);
                },

                showMessage: function() {
                    $(document.body).append(function() {
                        return(
                            '<section id="time-limit">' +
                            '   <div id="wrap-time-limit">' +
                            '   <div>' +
                            '       <h2>' + settings.title + '</h2>' +
                            '       <p>' + settings.message + '</p>' +
                            '       <button id="close-time-limit">' + settings.closeMessage + '</button>' +
                            '   </div>' +
                            '   </div>' +
                            '</section>');
                    }).on('click', '#time-limit button', function() {
                        init.hide();
                    });

                    init.styles();
                },

                styles: function() {
                    $('#time-limit #wrap-time-limit').css('border-top-color', themes[settings.theme][1]);
                    $('#time-limit button').css('background-color',  themes[settings.theme][1]);
                    $('#time-limit h2').css('color', themes[settings.theme][1]);
                    $('#time-limit p').css('color',  themes[settings.theme][0]);
                    $('#time-limit a').css('color',  themes[settings.theme][1]);

                    $('#time-limit').fadeIn(function() {
                        $(this).find('#wrap-time-limit').center().addClass('active');
                    });
                },

                hide: function() {
                    $('#time-limit').fadeOut(function() {
                        $(this).remove();
                    });
                },

                isLogged: function() {
                    return _userdata.session_logged_in;
                },

                redirectUser: function() {
                    return window.location.replace(settings.redirect);
                }
            };

        init.bind();
    };

    $.fn.center = function () {
        this.css('position', 'absolute');
        this.css('top', Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + 'px');
        this.css('left', Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + 'px');

        return this;
    }

})(jQuery);
