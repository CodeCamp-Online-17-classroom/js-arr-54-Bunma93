// write code here
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let nameCount = names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
}, {});

console.log(nameCount);