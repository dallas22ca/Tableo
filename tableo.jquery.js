/*
Copyright (C) 2012 Dallas Read.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

(function($) {
	return $.fn.tableo = function(options) {
		return this.each(function() {
		  $(this).find("tr:visible:odd").addClass("odd");
		  $(this).wrap("<div class='tableo_wrapper'></div>");
		  $('<input class="tableo_search" placeholder="Search..." style="float: right; " type="text" value="" />').prependTo($(this).parents(".tableo_wrapper"));
		  $(".tableo_search").live("keyup", function() {
				var q;
				q = $(this).val().toLowerCase();
				$(this).parents(".tableo_wrapper").find("tr").not("thead tr").each(function() {
					var content;
					content = $(this).text().toLowerCase();
					if (content.indexOf(q) !== -1) {
						return $(this).show();
					} else {
						return $(this).hide();
					}
				});
				$(this).parents(".tableo_wrapper").find("tr").removeClass("odd");
				return $(this).parents(".tableo_wrapper").find("tr:visible:odd").addClass("odd");
		  });
		  return $(".tableo tr").bind({
				"mouseenter": function() {
				  return $(this).find("td").addClass("hover");
				},
				"mouseleave": function() {
				  return $(this).find("td").removeClass("hover");
				}
		  });
		});
	};
})(jQuery);