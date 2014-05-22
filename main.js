/* globals $, define, window, brackets */
define(function (require, exports, module) {

    // Brackets modules
    var ExtensionUtils  = brackets.getModule("utils/ExtensionUtils");

    // Load CSS
    ExtensionUtils.loadStyleSheet(module, "styles/darkbar.css");

    // Move menu bar on left edge of window
    var $titlebar   = $("#titlebar"),
        $sidebar    = $("#sidebar");

    $sidebar
        .find(".horz-resizer")
        .mousedown(function() {
            $(window).mousemove(function() {
                $titlebar.css("margin-left", $sidebar.width() * -1);
            });
        })
        .mouseup(function() {
            $(window).unbind("mousemove");
        });

});
