/* globals $, define, window, brackets, jQuery */

(function ($) {
    $.each(['show', 'hide'], function (i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function () {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);

define(function (require, exports, module) {

    // Brackets modules
    var ExtensionUtils  = brackets.getModule("utils/ExtensionUtils");

    // Load CSS
    ExtensionUtils.loadStyleSheet(module, "styles/style.css");

    // Move menu bar on left edge of window
    var $titlebar   = $("#titlebar"),
        $sidebar    = $("#sidebar");

    // Update titlebar position on resize of sidebar
    $sidebar
    .on("show", function() {
        if ($sidebar.is(":visible")) {
            $titlebar.css("margin-left", $sidebar.width() * -1);
        }
    })
    .on("hide", function() {
        window.setTimeout(function() {
            if (!$sidebar.is(":visible")) {
                $titlebar.css("margin-left", 0);
            }
        }, 200);
    })
    .find(".horz-resizer")
    .mousedown(function() {
        $(window).mousemove(function() {
            if ($sidebar.is(":visible")) {
                $titlebar.css("margin-left", $sidebar.width() * -1);
            }
        });
    })
    .mouseup(function() {
        $(window).unbind("mousemove");
    });

});
