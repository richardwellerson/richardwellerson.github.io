let smallFont = document.querySelector('.small-font')
let largeFont = document.querySelector('.large-font')
let textColor = document.getElementById('font')
let articleParagraphs = document.querySelectorAll('article p')

function changeTextColor() {
    for(let i = 0; i < articleParagraphs.length; i++) {
        articleParagraphs[i].style.color = localStorage.color
        textColor.addEventListener('input', () => {
            localStorage.setItem('color', textColor.value)
            articleParagraphs[i].style.color = localStorage.color
        })  
    }
}

changeTextColor()
