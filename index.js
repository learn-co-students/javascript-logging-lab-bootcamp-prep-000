const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('index', () => {
  // there's stuff in here, too
})

it('calls console.error()', () => {
  // this is where the tests are!
})

jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})

console.error("HALP!")
console.log("I would be a logger.")
console.warn("Might not want to do that")
