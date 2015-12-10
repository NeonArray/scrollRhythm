# scrollRhythm
A minimal jQuery plugin that adds a scroll to top button to the bottom right of the document.
I use Foundation 6 with this plugin, therefore some of the base classes that style the button may 
be missing if you use this with another framework. 


## Usage
Include the script after jQuery on any page you want to use it.
`<script src="scrollRhythm.jquery.js"></script>`
Then copy the CSS inside `scrollRhythm.css` and toss it into your primary CSS file. 
Lastly, call the plugin
`$(document).scrollRhythm();`

## Notes
The CSS is not prefixed and there has been minimal effort to test cross browser thus far. This
was quickly written for conceptual intentions, but I do plan to continually improve it
over time.
