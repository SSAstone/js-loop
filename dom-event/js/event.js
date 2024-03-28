function makeRed() {
    document.body.style.backgroundColor = 'red';
};

const greenBtn = document.getElementById('make-green');
greenBtn.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green';
};

const blueBtn = document.getElementById('make-blue');
blueBtn.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
};

const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink'
};

const purpleBtn = document.getElementById('make-purple');
purpleBtn.addEventListener('click', function makePurple() {
    document.body.style.backgroundColor = 'purple'
});

document.getElementById('make-goldenrod').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod'
});