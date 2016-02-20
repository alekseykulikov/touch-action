# touch-action

> Disable 300ms delay on mobile using CSS touch-action or asynchronously download FastClick as polyfill.

[![](https://img.shields.io/npm/v/touch-action.svg)](https://npmjs.org/package/touch-action)

[CSS touch-action property](http://caniuse.com/#search=touch-action) allows eliminate the 300ms delay between a physical tap and the firing of a click event on mobile browsers. It's supported by all major browsers including Safari 9.3.
Therefore, there's no reason to always use [FastClick](https://github.com/ftlabs/fastclick) and include it to javascript bundle.

This library is just [17 lines of code](./index.js) and 14x smaller than FastClick (2.68Kb vs 0.2Kb). It checks support of CSS `touch-action`, and sets `touch-action: manipulation` to document body. When `touch-action` property is not supported, it asynchronously downloads [FastClick](https://github.com/ftlabs/fastclick) from CDN and use `FastClick.attach(document.body)` as polyfill.

This module is inspired by [gajus's gist](https://gist.github.com/gajus/bbf06ea2e37047b01e70).

## Installation

    npm install touch-action --save
    bower install touch-action

Standalone version available as [dist/touch-action.min.js](./dist/touch-action.min.js).

```html
<script src="touch-action.min.js"></script>
<script>window.touchAction()</script>
```

## Example

```js
import touchAction from 'touch-action'

// use default behavior and download FastClick from CDN when needed
// https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js
touchAction()

// use your own copy of FastClick
touchAction({ src: '/assets/fastclick.min.js' })
```

## touchAction(opts)

Init `touch-action` or download and attach `FastClick`.

Available options:
- `src` - custom path to fastclick (default: https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js)
- `val` - specify [custom](https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action) touch-action value, but be careful, since FastClick enables only `manipulation` (default: `manipulation`)

## License

[MIT]('./LICENSE')
