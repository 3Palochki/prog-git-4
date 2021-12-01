const twitter = document.querySelector('.image2')
const instagramm = document.querySelector('.image1')
const reddit = document.querySelector('.image4')
const facebook = document.querySelector('.image3')

twitter.addEventListener('click', () => {
    window.location = 'https://twitter.com/home'
})

instagramm.addEventListener('click', () => {
    window.location ='https://www.instagram.com/'
})
reddit.addEventListener('click', () => {
    window.location ='https://www.reddit.com/'
})
facebook.addEventListener('click', () => {
    window.location ='https://www.facebook.com/'
})