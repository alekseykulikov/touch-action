
/**
 * Set `touch-action` to `document.body` when supported
 * or load FastClick from CDN and use it as Polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
 *
 * @param {Object} [opts]
 *        {String} src - link to fastclick
 *        {String} val - value of touchAction property
 */

module.exports = function touchAction(opts) {
  var s
  if (!opts) opts = {}
  if (!opts.src) opts.src = 'https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js'
  if (!opts.val) opts.val = 'manipulation'

  if ('touchAction' in document.body.style) {
    document.body.style.touchAction = opts.val
  } else {
    s = document.createElement('script')
    s.src = opts.src
    s.async = true
    s.onload = function onload() {
      window.FastClick.attach(document.body)
    }
    document.body.appendChild(s)
  }
}
