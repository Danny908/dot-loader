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
        dotColor: 'red',  //Change loader color.
        speed: 400,       //Change speed animation.
        animation: 'zoom' //Change loader aniamtion.
    });
</script>
```

# Settings
Option | Type | Default | Other values | Description
------ | ---- | ------- | ------------ | -----------
dotNum | int | 5 | Any positive number. | Modify num of dots on loader.
dotColor | string | Any color (solid, hex, rgba, gradient, transparent). | 'white' | Modify loader color.
dotOpacity | int | 1 | Any number from 0 to 1. | Modify loader opacity.
backColor | string | Any color (solid, hex, rgba, gradient, transparent). | 'black' | Modify loader background color.
backOpacity | int | Any number from 0 to 1. | 0.6 | Modify loader background opacity.
speed | int | 300 | Any positive number. | Modify animation speed in milliseconds.
style | string | 'circle' | 'circle', 'square' | Modify shape of loader.
animation | string | 'fade' | 'none', 'fade', 'jump', 'zoom', 'rotate' | Modify loader animation.

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