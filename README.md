decimalize-jquery-plugin
========================

jQuery plugin to automatically add a decimal to an INPUT field. 

For example, you could typ 186 to get 1.86, or 1853 to get 185.3 

To use:
1. Include jQuery
1. Include the plugin code
1. Add an attribute `decimaldigits='[number of digits to place after decimal]'` to each input tag you want to use it with. The value must be at least 1.
1. Call the plugin on the relevant fields, like this: `$("input[decimaldigits]").decimalDigitify();`
