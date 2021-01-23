import setup from './setup'
import Utils from '../utils'

function test(sorts) {
  setup()
  describe('sorts', () => {
    for (let key in sorts) {
      it(`${key} sort should work`, () => {
        const array = Utils.getRandomIntegers({ count: 100 })
        const sort = sorts[key]
        sort(array)
        assert.isTrue(Utils.isSorted(array))
      })
    }
  })
  mocha.run()
}
const d = new Date();
const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
import(`../everyday/${date}`).then(test)
