document.getElementById('start').addEventListener('click', function() {
    let num = 0;
    const sT = setInterval(() => {
        num ++
        document.getElementById('time').innerText = num;
        // return num;
        // console.log(num);
        document.getElementById('stop').addEventListener('click', function() {
            // document.getElementById('time').innerText = '';
            if(sT) {
                clearInterval(sT);
            }
        })
        
    }, 1000)
})

document.getElementById('reset').addEventListener('click', function() {
    let num = 0;
    const sT = setInterval(() => {
        document.getElementById('time').innerText = '';
        num ++
        // return num;
        document.getElementById('time').innerText = num;
        // console.log(num);

    }, 1000)
})
