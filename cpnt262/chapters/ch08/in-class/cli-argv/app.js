console.log('Hello world!');
console.log(process.argv);
console.log(`Hello ${process.argv[2]}`)

const args = process.argv.slice(2)

console.log(args);
console.log(`Hello ${args[1]}`)
