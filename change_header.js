(function($) {
  'use strict';

  $.SetHeaderClass = function ($el, $selected) {
    if ($selected.length > 0) {
      $selected.removeClass("selected");
      $selected.addClass("normal");
    }
    $el.addClass("selected");
  };
  $.fn.setHeaderClass = function ($selected) {
    return new $.SetHeaderClass(this, $selected);
  };

  $(function () {
    $(".normal").setHeaderClass($(".selected"));
  });
}(jQuery));
