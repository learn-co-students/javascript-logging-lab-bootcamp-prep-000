jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})

console.error("HALP")
