(function ( $ ) { //wrapper to be compatible with other JS libraries
  $.fn.decimalDigitify = function() {
    //on key up we will (possibly) change the value
    this.keyup(function() {
      //get field's value and number of decimals from attributes
      var field = $(this);
      var num = field.val();
      var decimals = parseInt(field.attr("decimaldigits"));

      //remove decimal(s) and spaces
      num = num.replace(/[^0-9]/g,"");

      //check expected number of decimals and number length
      if(decimals > 0 && num.length > decimals) {
        //find location for decimal
        var position = num.length - decimals;

        //add decimal at appropriate location
        num = num.substr(0, position) + "." + num.substr(position);
      }

      //update field
      field.val(num);
    });

    //support chaining calls
    return this;
  }
}(jQuery));
