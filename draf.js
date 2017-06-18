!function(root) {

  function draf(cb) {
    return requestAnimationFrame(function() {
      requestAnimationFrame(cb)
    })
  }

  function now(cb) {
    cb(0)
    return 0
  }

  var api = typeof requestAnimationFrame == 'undefined' ? now : draf
  if (typeof module != 'undefined' && module.exports) module.exports = api
  else root.draf = api

}(this);
