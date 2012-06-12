Tableo.jquery.js
======

####Pronounced Table-Oh. Lightweight jQuery plugin for adding a filter to a table.

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
It wraps your table in a wrapper called `tableo_wrapper`, then prepends a simple search box that prepends a live filter of the table on keyup. In other words:

```
<div class="tableo_wrapper">
	<input class="tableo_search" placeholder="Search..." type="text" value="">
	<table class="tableo">
		...
	</table>
</div>
```

Or in a more visual sense:

![Unstyled table](https://github.com/dallas22ca/Tableo/raw/master/unstyled.png)


## What does tableo.jquery.js NOT do?
It does not provide ANY styling whatsoever - that's up to you using `.tableo`, `.tableo_wrapper`, and `.tableo_search`.

If you did style it, it could look something like:

![Styled table](https://github.com/dallas22ca/Tableo/raw/master/styled.png)