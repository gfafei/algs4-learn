import 'chai/chai.js'
import 'mocha/mocha.js'
import 'mocha/mocha.css'

const setup = function () {
  const el = document.createElement('div')
  el.id = 'mocha'
  document.body.appendChild(el)
  mocha.setup('bdd')
  mocha.checkLeaks()

  window.assert = chai.assert
}

export default setup
