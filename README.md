Tableo.jquery.js
======

####Pronounced Table-Oh. Lightweight jQuery plugin for adding a filter to a table.

## Quick Start

To use, make sure you have included the latest version jQuery.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
```

Include `tableo.jquery.js` in your application and reference it.
```
<script src="/path/to/tableo.jquery.js" type="text/javascript"></script>
```
OR
```
<script src="https://raw.github.com/dallas22ca/Tableo/master/tableo.jquery.js" type="text/javascript"></script>
```

Then, add the `tableo` class to your table (or any other class you choose to use that's referenced in your javascript). The search box will filter all `<td>` tags, so it's best to put your headers in `<th>` tags.
```
<table class="tableo">
	<tr>
		<th></th>
	</tr>
	<tr>
		<td></td>
	</tr>
</table>
```

Finally, add the 
```
$(document).ready(function(){
	$(".tableo").tableo();
});
```

## What does tableo.jquery.js do?
It wraps your `<table>`, `<ul>`, or `<li>` in a wrapper called `tableo_wrapper`, then prepends a simple search box gives you a live filter of the `<table>`, `<ul>`, or `<li>` on keyup. You can also pass in options for 1-click filters. In other words, the HTML generated looks something like this:

```
<div class="tableo_wrapper">
	<ul class="tableo_filters">
		...
	</ul>
	<input class="tableo_search" placeholder="Search..." type="text" value="">
	<table class="tableo">
		...
	</table>
</div>
```

In a visual sense, here is the default implementation on a `<table>`:

![Unstyled table](https://github.com/dallas22ca/Tableo/raw/master/unstyled.png)


Here is a styled implementation with filters on a `<ul>`:

![Filtered table](https://github.com/dallas22ca/Tableo/raw/master/filters.png)


## What options does tableo.jquery.js give me?

```
$(document).ready(function(){
	$(".tableo").tableo({
		searchAttributes: [ // Elements in the children (<tr> or <li>) that are to be searched
			[".status", "alt"], // This line will search for the alt tag of an element with a class of "status"
			[".subject", "text"], // This line will search through the text of an element with a class of "subject"
			[".excerpt", "html"] // You can read any attribute on an element, plus "html" or "text"
		],
		filters: ["All", "Sent", "Scheduled", "Draft"], // An array of the filters
		defaultFilter: "Toronto" // The name of the filter that is set when loaded,
		filterShowAll: "All", // The name of the filter that shows all records,
		filterAttributes: [ // Attributes in the child (<tr> or <li>) that the filters search through
			[".status", "alt"]
		]
	});
});
```


## What are the defaults of tableo.jquery.js?

```
$(document).ready(function(){
	$(".tableo").tableo({
		searchAttributes: [], // Searches through entire child's (`<li>` or `<tr>`) text
		filters: [], // No filters will be shown
		defaultFilter: "", // Has no effect because there are no filters set by default
		filterShowAll: "", // Has no effect because there are no filters set by default
		filterAttributes: [] // Has no effect because there are no filters set by default
	});
});


## What does tableo.jquery.js NOT do?
Tableo.jquery.js *is not* case sensitive.

It also does not provide ANY styling whatsoever - that's up to you using `.tableo`, `.tableo_wrapper`, and `.tableo_search`.

If you did style it, it could look something like:

![Styled table](https://github.com/dallas22ca/Tableo/raw/master/styled.png)