const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  index calls console.error("HALP!"), done => {
    const spy = expect.spyOn(console.error).andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

console.log("Added to log"), done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.log to have been called')
      console.log.restore()
      done()
    })
  })

console.warn("warning"), done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
