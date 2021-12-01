const reģistrācija = document.querySelector('.button1')
const pieteikšanas = document.querySelector('.button')
const lidl = document.querySelector('.Lidl-Logo')

pieteikšanas.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Praktiskais%20darbs/Pieteikties%20lapa/pieteikties_lpp.html';
});
reģistrācija.addEventListener('click',() =>{
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Praktiskais%20darbs/Pastasti%20draugam/pastasti_draugam.html'
})
lidl.addEventListener('click',() =>{
    window.location='https://www.lidl.lv/lv'
})
