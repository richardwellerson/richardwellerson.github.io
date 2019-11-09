let textColor = document.getElementById('font')
let backgroundColor = document.getElementById('background')
let smallFont = document.querySelector('.small-font')
let largeFont = document.querySelector('.large-font')
let lessSpace = document.querySelector('.small-text-spacing')
let mostSpace = document.querySelector('.large-text-spacing')
let fontFamily = document.querySelectorAll('option')
let articleParagraphs = document.querySelectorAll('article p')


const changeColor = () => {
    for (let i = 0; i < articleParagraphs.length; i++) {
        articleParagraphs[i].style.color = localStorage.color
        textColor.addEventListener('input', () => {
            localStorage.setItem('color', textColor.value)
            articleParagraphs[i].style.color = localStorage.color
        })
        articleParagraphs[i].style.backgroundColor = localStorage.background
        backgroundColor.addEventListener('input', () => {
            localStorage.setItem('background', backgroundColor.value)
            articleParagraphs[i].style.backgroundColor = localStorage.background
            
        })
    }
}

const buttonSize = () => {
    for(let x = 0; x < articleParagraphs.length; x++){
        let fontSizeValue = articleParagraphs[x].style.fontSize
        console.log(fontSizeValue)
    }
}

buttonSize()
changeColor()
