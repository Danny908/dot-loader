# dotLoader.js
A simple but efficient Jquery Loader.

# Setup
Add the css file in your ```<head>```
```html
<link rel="stylesheet" href=".../dotLoader.css">
```

Add .js library before your closing ```<body>```tag:
```html
<script src=".../dotLoader.js"></script>
```
# Usage
**Basic Usage**

_Default option loader._
```html
<script>
    $('your-element').dot();
</script>
```
**Advance Usage**

_Custom option loader._
```html
<script>
    $('your-element').dot({
        dotNum: 6,        //Change num of dots on loader.
        dotColor: 'red|blue|white',  //Toggle loader color.
        speed: 400,       //Change speed animation.
        animation: 'zoom' //Change loader animation.
    });
</script>
```

# Settings
Option | Type | Default | Other values | Description
------ | ---- | ------- | ------------ | -----------
dotNum | int | 5 | Any positive number. | Modify number of dots on loader.
dotColor | string | Any color (solid, hex, rgba, gradient, transparent). | 'white' | Modify loader color (Multiple color add a pipe _'|'_ between colors).
dotSize | int | 10 | Any positive number. | Modify loader size in pixels.
backColor | string |  'rgba(0, 0, 0, 0.5)' | Any color (solid, hex, rgba, gradient, transparent). | Modify loader background color.
speed | int | 300 | Any positive number. | Modify animation speed in milliseconds.
style | string | 'circle' | 'circle', 'square' | Modify shape of loader.
animation | string | 'fade' | 'none', 'fade', 'jump', 'zoom', 'rotate' | Modify loader animation.
border | boolean | false | true, false | Enable / Disable border property.
borderColor | string |'transparent' | Any color (solid, hex, rgba, transparent). | Modify border color.
borderSize | 0 | int | Any positive number. | Modify border width in pixels.
borderStyle | string | 'solid' | 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' | Modify border style.


# Events
Close loader when data has been loaded.
```html
<script>
    $('your-element').trigger('loaded');
</script>
```
#Browser Support
dotLoader works on modern browsers such as Chrome and Firefox, dotLoader need to be tested on IE & Safari.

# Dependencies
Jquery 3.1.1

# License
Copyright (c) 2016 Daniel Torres

Licensed under the MIT license.
