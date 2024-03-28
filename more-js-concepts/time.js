console.log(1);
setTimeout(() => {
    console.log(2)
}, 4000);
setTimeout(number, 2000);
console.log(3);

function number(){
    console.log(4);
};
let num = 0;
const intervalId = setInterval(() => {
    // console.log(++num);
    num ++
    // console.log(num);
    if(num === 10) {
        clearInterval(intervalId);
    }
}, 1000);
