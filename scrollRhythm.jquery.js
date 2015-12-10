/*!
 * scrollRhythm
 *
 * @author: Aaron Arney <aaron.arney@ocular-rhythm.com>
 */
(function($) {

  $.fn.scrollRhythm = function(options) {

    var options = $.extend({
      buttonID: 'js-totop',
      buttonClasses: 'small round raised button success totop',
      speed: 500,
      height: 800,
      icon: 'arrow-up.svg'
    }, options);

    // Create the button element
    $button = $('<button></button>')
                .addClass(options.buttonClasses)
                .attr('id', options.buttonID)
                .hide(); // to prevent the button from initially displaying

    // Create the icon image element
    $icon = $('<img />')
              .addClass('totop-icon')
              .attr('src', options.icon);

    // Toss the icon inside the button
    $button.html($icon);

    // Place the button on the document
    $('body').append($button);

    // Listen to the scroll and show/hide the button depending on the set scroll height
    $(document).scroll( function() {
      ($that.scrollTop() > options.height ? $button.stop().show() : $button.stop().hide());
    });

    // Click handler for the scroll button
    $button.on('click', function() {
      $("html, body").animate(
        { scrollTop: 0 }, options.speed, function() { 
          $button.stop().hide(); 
        }
      );
      return false; 
    });
  }

}(jQuery));
