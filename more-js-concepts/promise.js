const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    if(num < 5) {
        resolve('solve 1-4');
    }
    else {
        reject('not ok 6-10');
    }
});

getData
    .then(data => console.log(data))
    .catch(err => console.log(err))