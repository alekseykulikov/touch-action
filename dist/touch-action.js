(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.touchAction = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}]},{},[1])(1)
});