/*
          ___           ___   ____                                 ___
         |   |         |   | |    |                               |   |
         |   |      ___|   |_|__  |                               |   |
         |   |     |____    ____| |                               |   |   ____     __  __ (_)   
     ____|   |  _____  |   | |    |         _____    ______   ____|   | /      \  |  |/ /  __  ______
    /  ___   | /  _  \ |   | |    |_____   /  _  \  /  _ | | /  ___   ||   (_) |  |  / /  |  |/  ___| 
   |  (___)  ||  (_)  ||   | |           ||  (_)  ||  (_)| ||  (___)  ||   –––/__ |  |    |  |\__   \
    \________| \_____/ |___| |___________| \_____/  \____|_| \________| \________||__|(_) |  | ___\  \
                                                                                      _   /  /|______/
    Version: 1.1.1                                                                  / /__/  /
    Author: Daniel Torres                                                          /______ /  
    Repo: https://github.com/Danny908/dotLoader.js
    Issues: https://github.com/Danny908/dotLoader.js/issues
*/
(function( $ ) {
    $.fn.dot = function( options ){
        var _settings = $.extend({
            dotNum: 5,
            dotColor: 'white',
            dotSize: 10,
            backColor: 'rgba(0, 0, 0, 0.5)',
            speed: 300,
            style: 'circle',
            animation: 'fade',
            border: false,
            borderColor: 'transparent',
            borderSize: 0,
            borderStyle: 'solid'
        }, options);

        var _dot = '', _template, _style, _border;

        for(var a = 0; a < _settings.dotNum; a++) {
            _dot += `<div class='dot'></div>`; 
        }

        _border = (_settings.border === false ? 'none' : `${_settings.borderSize}px ${_settings.borderStyle} ${_settings.borderColor} `);

        _template =
        `
        <div class='loader-container'>
            <div class='loader'>
                ${_dot}
            </div>
        </div>
        `;
        _style = (_settings.style === 'circle' ? '50%' : '0%');
        
        $(this).css('position', 'relative');
        $(this).append(_template);

        $('.loader-container').css({
            'background': _settings.backColor
        });

        $('.dot').css({
            'width':                    `${_settings.dotSize}px`,
            'height':                   `${_settings.dotSize}px`,
            'background':               _settings.dotColor,
            'border-radius':            _style,
            'border':                   _border
        });

        setInterval(function(){
            var selector = $('.loader').children().eq(counter);
            switch(_settings.animation){
                case 'none':
                    break;
                case 'fade':
                    selector.fadeOut(300).fadeIn(300);
                    break;
                case 'jump':
                    selector.animate({marginBottom: `${_settings.dotSize*1.5}px`}, 300).animate({marginBottom: '0px'}, 300);
                    break;
                case 'zoom':
                    selector.animate({width: `${_settings.dotSize*1.5}px`,height: `${_settings.dotSize*1.5}px`}, 300);
                    selector.animate({width: `${_settings.dotSize}px`,height: `${_settings.dotSize}px`}, 300);
                    break;
                case 'rotate':
                    $('.dot').css({'transform': `rotate(${counter * (360 / _settings.dotNum)}deg`});
                    break;
            }
            counter = (counter === _settings.dotNum-1 ? 0 : counter+= 1);
        }, _settings.speed, counter = 0);

        $(this).on('loaded', function(){
            $('.loader-container').remove();
        }); 
    };
}( jQuery ));