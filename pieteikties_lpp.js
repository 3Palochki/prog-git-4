const section = document.querySelectorAll('.section') 
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const section3 = document.querySelector('.section3')
const section4 = document.querySelector('.section4')
const section5 = document.querySelector('.section5')
const button = document.querySelector('.button1')
const button1 = document.querySelector('.button2')
const button2 = document.querySelector('.button3')
const button3 = document.querySelector('.button4')
const button4 = document.querySelector('.button5')
const button5 = document.querySelector('.button6')
const button7 = document.querySelector('.button7')
const button8 = document.querySelector('.button8')
const button9 = document.querySelector('.button9')
const button10 = document.querySelector('.button10')
const button11 = document.querySelector('.button11')
const button12 = document.querySelector('.button12')
const button13 = document.querySelector('.button13')
const button14 = document.querySelector('.button14')
const th = document.querySelectorAll('.th')

// console.log(section,section1,section2,section3,section4,section5,button,button1,button2,button3,button4,button5)



button13.addEventListener('click', () =>{
    window.location = 'file:///Users/ankit/Desktop/PROG-1-GIT/Praktiskais%20darbs/Galvena%CC%84%20lapa/galvena%CC%84_lpp.html'
})

button.addEventListener('click', () => {
    var elems=document.getElementsByClassName('section');
    for(var i=0; i<elems.length; i++)elems[i].style.display='block'; 
    button1.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    button13.style.display = 'none'
    th.forEach(th => {
        th.addEventListener('click', () => {
            th.style.backgroundColor = 'darksalmon';   
            button7.style.display = `block`        
        });   
    })
})
button1.addEventListener('click', () => {
    section1.style.display = 'block'
    button.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    button13.style.display = 'none'
    th.forEach(th => {
        th.addEventListener('click', () => {
            th.style.backgroundColor = 'darksalmon';
            button8.style.display = `block`        
        });   
    })
   
})
button2.addEventListener('click', () => {
    section2.style.display = 'block'
    button1.style.display = 'none'
    button.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    button13.style.display = 'none'
    th.forEach(th => {
        th.addEventListener('click', () => {
            th.style.backgroundColor = 'darksalmon';
            button9.style.display = `block`        
        });   
    })
})
button3.addEventListener('click', () => {
    section3.style.display = 'block'
    button1.style.display = 'none'
    button2.style.display = 'none'
    button.style.display = 'none'
    button4.style.display = 'none'
    button5.style.display = 'none'
    button13.style.display = 'none'
    th.forEach(th => {
        th.addEventListener('click', () => {
            th.style.backgroundColor = 'darksalmon';
            button10.style.display = `block`        
        });   
    })
})
button4.addEventListener('click', () => {
    section4.style.display = 'block'
    button1.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button.style.display = 'none'
    button5.style.display = 'none'
    button13.style.display = 'none'
    th.forEach(th => {
        th.addEventListener('click', () => {
            th.style.backgroundColor = 'darksalmon';
            button11.style.display = `block`        
        });   
    })
})
button5.addEventListener('click', () => {
    section5.style.display = 'block'
    button1.style.display = 'none'
    button2.style.display = 'none'
    button3.style.display = 'none'
    button4.style.display = 'none'
    button.style.display = 'none'
    button13.style.display = 'none'
    th.forEach(th => {
        th.addEventListener('click', () => {
            th.style.backgroundColor = 'darksalmon';
            button12.style.display = `block`        
        });   
    })
})

button7.addEventListener('click', () => {
    alert('Tu esi reģistrējies uz šo laiku!! Patīkamas pirkšanas!')
})
button8.addEventListener('click', () => {
    alert('Tu esi reģistrējies uz šo laiku!! Patīkamas pirkšanas!')
})
button9.addEventListener('click', () => {
    alert('Tu esi reģistrējies uz šo laiku!! Patīkamas pirkšanas!')
})
button10.addEventListener('click', () => {
    alert('Tu esi reģistrējies uz šo laiku!! Patīkamas pirkšanas!')
})
button11.addEventListener('click', () => {
    alert('Tu esi reģistrējies uz šo laiku!! Patīkamas pirkšanas!')
})
button12.addEventListener('click', () => {
    alert('Tu esi reģistrējies uz šo laiku!! Patīkamas pirkšanas!')
})
 



