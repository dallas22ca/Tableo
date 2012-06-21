
/*
Copyright (C) 2012 Dallas Read.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


(function() {

  (function($) {
    return $.fn.tableo = function(options) {
      options = $.extend({
        defaultFilter: "",
        filterShowAll: "",
        searchAttributes: [],
        filters: [],
        filterAttributes: [],
        debug: false
      }, options);
      return this.each(function() {
        var Search, filter, filters_html, id, select_filter, _i, _len, _ref;
        id = $(this).attr("id");
        $(this).find("tr:visible:odd").addClass("odd");
        $(this).wrap("<div id=\"tableo_wrapper_" + id + "\" class='tableo_wrapper'></div>");
        $('<input class="tableo_search" placeholder="Search..." type="text" value="" />').prependTo($(this).parents(".tableo_wrapper"));
        if (options.filters.length) {
          filters_html = "<ul class=\"tableo_filters\">";
          _ref = options.filters;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            filter = _ref[_i];
            if (filter === options.defaultFilter) {
              select_filter = "selected";
            } else {
              select_filter = "";
            }
            filters_html += "<li class=\"tableo_filter\"><a href=\"#\" data-filter=\"" + (filter.toLowerCase()) + "\" class=\"" + select_filter + "\">" + filter + "</a></li>";
          }
          filters_html += "</ul>";
          $(filters_html).prependTo($(this).parents(".tableo_wrapper"));
        }
        $(".tableo_search").live("keyup", function() {
          id = $(this).parents(".tableo_wrapper").attr("id");
          return Search(id);
        });
        $(this).find("tr, li").live({
          "mouseenter": function() {
            return $(this).find("td").addClass("hover");
          },
          "mouseleave": function() {
            return $(this).find("td").removeClass("hover");
          }
        });
        $(".tableo_filter").live("click", function() {
          id = $(this).parents(".tableo_wrapper").attr("id");
          $(".tableo_filter a").removeClass("selected");
          $(this).find("a").addClass("selected");
          Search(id);
          return false;
        });
        Search = function(id) {
          var q;
          q = $("#" + id + " .tableo_search").val().toLowerCase();
          if ($("#" + id + " .tableo_filter .selected").length) {
            filter = $("#" + id + " .tableo_filter .selected").data("filter").toLowerCase();
          } else {
            filter = false;
          }
          $("#" + id).find("tr, li").not("thead tr, .tableo_filter").each(function() {
            var attr, content, filtered, show_by_content, show_by_filters, _j, _k, _len1, _len2, _ref1, _ref2;
            if (!options.filterAttributes.length) {
              filtered = $(this).text().toLowerCase();
            } else {
              filtered = "";
              _ref1 = options.filterAttributes;
              for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
                attr = _ref1[_j];
                if (attr[1] === "text") {
                  filtered += $(this).text();
                } else if (attr[1] === "html") {
                  filtered += $(this).html();
                } else {
                  filtered += $(this).find(attr[0]).attr(attr[1]);
                }
              }
            }
            if (!options.searchAttributes.length) {
              content = $.trim($(this).text().toLowerCase());
            } else {
              content = "";
              _ref2 = options.searchAttributes;
              for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
                attr = _ref2[_k];
                if (attr[1] === "text") {
                  content += $(this).text();
                } else if (attr[1] === "html") {
                  content += $(this).html();
                } else {
                  content += $(this).find(attr[0]).attr(attr[1]);
                }
              }
            }
            if (content.toLowerCase().indexOf(q) !== -1 || q === "") {
              show_by_content = true;
            } else {
              show_by_content = false;
            }
            if ((filter && (filter === options.filterShowAll.toLowerCase()) || (filtered.toLowerCase().indexOf(filter) !== -1)) || (!filter)) {
              show_by_filters = true;
            } else {
              show_by_filters = false;
            }
            if (show_by_content && show_by_filters) {
              return $(this).show();
            } else {
              return $(this).hide();
            }
          });
          $("#" + id).find("tr").removeClass("odd");
          return $("#" + id).find("tr:visible:odd").addClass("odd");
        };
        return Search("tableo_wrapper_" + id);
        /*
        			
        			<a href="" id="search_helper">
        				<%= image_tag("search.png", :class => "search_img") %>
        				<p class="cancel">x</p>
        			</a>
        			
        			$("#search").live "keyup", (e) ->
        				code = (if e.keyCode then e.keyCode else e.which)
        				if code is 40
        					if $(".sidebar_list .hover").length
        						$(".sidebar_list .hover").removeClass("hover").parents("li").nextAll("li:visible").eq(0).find("a").addClass "hover"
        					else
        						$(".message:visible:first").find("a").addClass "hover"
        				else if code is 38
        					$(".sidebar_list .hover").removeClass("hover").parents("li").prevAll("li:visible").eq(0).find("a").addClass "hover"
        				else if code is 13
        					$(".message a.hover").click()
        				else
        					$.fn.Search()
        				false
        */

      });
    };
  })(jQuery);

}).call(this);