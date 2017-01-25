const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it(console.error("HALP!"), done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled(console.error("HALP!"))
      console.error.restore()
      done()
    })
  })

  it(console.log("Please ENTER PIN NUMBER"), done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled(console.log("Please ENTER PIN NUMBER"))
      console.log.restore()
      done()
    })
  })

  it(console.warn("Wrong PIN! Please Re-Enter it!"), done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled(console.warn("Wrong PIN! Please Re-Enter it!"))
      console.warn.restore()
      done()
    })
  })
})
