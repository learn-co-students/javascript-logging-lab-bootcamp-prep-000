jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})

console.error("HALP")
console.log("I would be a logger.")
console.warn("You got this.")
