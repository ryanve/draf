# `draf`
### double `requestAnimationFrame` (double RAF) as an [npm package](https://www.npmjs.com/package/draf)

```
npm install draf
```

## [use case](https://youtu.be/mmq-KVeO-uU?t=14m0s)

Double RAF is useful for ensuring that animations start before expensive rendering is done. It helps provide smoother user experience by making animations feel reactive. Normal rendering would block the animation from starting. With double RAF as shown here the rendering function safely runs in the main thread after the animation has already started.

```js
const draf = require('draf')
const startAnimating = element => element.classList.add('animating')
const renderNextView = function() {/* ... */}
let button = document.createElement('button')

button.addEventListener('click', function() {
  startAnimating(this)
  draf(renderNextView)
})
```

## `draf(callback)`

- returns the request ID from the first `requestAnimationFrame`
- callback receives the `DOMHighResTimeStamp` number from the second `requestAnimationFrame`

```js
draf(function(stamp) {
  console.log(stamp)
})
```
