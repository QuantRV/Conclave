var i0 = document.querySelector('.i0');
var i1 = document.querySelector('.i1');
var i2 = document.querySelector('.i2');
var i3 = document.querySelector('.i3');
var i4 = document.querySelector('.i4');
var i5 = document.querySelector('.i5');
var textBox = document.querySelector('.textBox')
var textBox0 = document.querySelector('.textBox0')
var textBox1 = document.querySelector('.textBox1')
var textBox2 = document.querySelector('.textBox2')
var textBox3 = document.querySelector('.textBox3')
var textBox4 = document.querySelector('.textBox4')
var textBox5 = document.querySelector('.textBox5')
var sideBox0 = document.querySelector('.sideBox0')
var sideBox1 = document.querySelector('.sideBox1')
var sideBox2 = document.querySelector('.sideBox2')
var sideBox3 = document.querySelector('.sideBox3')
var sideBox4 = document.querySelector('.sideBox4')
var sideBox5 = document.querySelector('.sideBox5')

let flag = 0
let width = screen.width;
// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (width > 800 && flag === 0) {
        i0.style.animation = 'none';
        i1.style.animation = 'none';
        i2.style.animation = 'none';
        i3.style.animation = 'none';
        i4.style.animation = 'none';
        i5.style.animation = 'none';
        textBox.style.display = 'none';
        textBox1.style.animation = 'none';
        textBox2.style.animation = 'none';
        textBox3.style.animation = 'none';
        textBox4.style.animation = 'none';
        textBox5.style.animation = 'none';
        textBox0.style.animation = 'none';
        if (scroll > 350 ) {
            flag = 1
            i0.style.animation = 'a0 1s forwards';
            i1.style.animation = 'a1 1.5s forwards';
            i2.style.animation = 'a2 2s forwards';
            i3.style.animation = 'a3 2.5s forwards';
            i4.style.animation = 'a4 3s forwards';
            i5.style.animation = 'a5 3.5s forwards';
            setTimeout(() => {
                textBox0.style.display = 'flex'
                textBox0.style.animation = 'fadeInRight0 3s forwards'
            }, 3500);
            setTimeout(() => {
                textBox1.style.display = 'flex'
                textBox1.style.animation = 'fadeInRight1 3s forwards'
            }, 4000);
            setTimeout(() => {
                textBox2.style.display = 'flex'
                textBox2.style.animation = 'fadeInRight2 3s forwards'
            }, 4500);
            setTimeout(() => {
                textBox3.style.display = 'flex'
                textBox3.style.animation = 'fadeInRight3 3s forwards'
            }, 5000);
            setTimeout(() => {
                textBox4.style.display = 'flex'
                textBox4.style.animation = 'fadeInRight4 3s forwards'
            }, 5500);
            setTimeout(() => {
                textBox5.style.display = 'flex'
                textBox5.style.animation = 'fadeInRight5 3s forwards'
            }, 6000)
        }
    }
    else {

    }

}