# eveCharacter jQuery Popover

This is just a quick jQuery plugin written in CoffeeScript that poll the EveOnline API to retrieve Character Information (Corporation, Alliance) and display it in a [Twitter's Bootstrap](http://twitter.github.com/bootstrap/) Popover.

Feel free to modify the code for your own need if you want to display more informations.

## Documentation

### Dependencies

It uses [Twitter's Bootstrap](http://twitter.github.com/bootstrap/) Popover.

### Example

![Example Image](http://i.minus.com/jbwgwSIBJAfJbb.png)

### Usage

Include bootstrap.min.css and bootstrap.min.js in your webpage then :

```javascript
$('span.evecharacter').on('mouseenter', function(){
    $(this).eveCharacter();
});
```

### Browser Support

Since eveCharacter uses [Twitter's Bootstrap](http://twitter.github.com/bootstrap/) to display the popover, browser support should be the same as with it, that means, most of them.

## Licence

Licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).

## Credits

eveCharacter uses CCP's EveOnline API. Thanks a lot to them for this awesome game !

## The Author

I'm a French guy passionate about web development ! Feel free to get in touch with me.