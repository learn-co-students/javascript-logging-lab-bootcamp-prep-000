jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
})

console.console.error("HALP!");

console.log("I would be a logger.")// get it?

console.log("I would be a logger.");
console.log("I would be a logger.");

console.warn("I would be a logger.");