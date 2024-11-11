console.log("main");

const args = process.argv;

//console.log(args)


const x = args[2];
console.log(x);


const y = args[3];



const z = x / (y + x);

//console.log(z + "%");
console.log(z)


const parcentage = z.toFixed(3);
console.log(parcentage * 100 + "%");
