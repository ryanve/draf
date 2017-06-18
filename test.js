!function(root) {
  const draf = root.draf

  function wasteful(stamp) {
    let previous = document.querySelector('ul[hidden]')
    if (previous) document.body.removeChild(previous)
    let ul = document.createElement('ul')
    ul.hidden = true
    if (stamp) ul.dataset.frame = stamp
    ul.dataset.created = performance.now()
    for (let i = 0; i < 888; i++) ul.innerHTML += '<li>' + i + '</li>'
    document.body.appendChild(ul)
    ul.dataset.inserted = performance.now()
  }

  const handlers = {
    janky: function() {
      this.classList.toggle('zoomed')
      wasteful()
    },
    reactive: function() {
      this.classList.toggle('zoomed')
      draf(wasteful)
    }
  }

  document.addEventListener('click', function(e) {
    var target = e.target
    var method = target.dataset.click
    if (!method) return
    console.group(e.type)
    console.dir(e)
    if (handlers.hasOwnProperty(method)) {
      console.group('render')
      console.info('started')
      handlers[method].call(target)
      console.info('called')
      console.groupEnd()
    }
    console.groupEnd()
  })
}(this);
