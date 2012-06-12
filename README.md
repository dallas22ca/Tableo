Tableo
======

Lightweight jQuery plugin for adding a filter to a table

To use, make sure you have included the latest version jQuery.
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
```

Include tableo.jquery.js in your application and reference it.
```
<script src="/path/to/tableo.jquery.js" type="text/javascript"></script>
```

Then, add the "tableo" class to your table (or any other class you choose to use that's referenced in your javascript).
```
<table class="tableo">
</table>
```

Finally, add the 
```
$(document).ready(function(){
	$(".tableo").tableo();
});
```

## What does the plugin do?
I