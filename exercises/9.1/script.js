let smallFont = document.querySelector('.small-font')
let largeFont = document.querySelector('.large-font')
let textColor = document.getElementById('font')
let articleParagraphs = document.querySelectorAll('article p')

function changeTextColor() {
    for(let i = 0; i < articleParagraphs.length; i++) {
        textColor.addEventListener('input', () => {
            localStorage.setItem('color', textColor.value)
            articleParagraphs[i].style.color = localStorage.color
        })
    }
}

changeTextColor()


// (function () {
    // const selectNimbus = document.querySelector(".nimbus")
    // const paragraphToGrow = document.querySelectorAll(".grow-paragraph")
    // selectNimbus.addEventListener("click", () => selectNimbus.style.animationPlayState = "running")
    // selectNimbus.addEventListener("dblclick", () => selectNimbus.style.animationPlayState = "paused")
    // for(let i = 0; i < paragraphToGrow.length; i++) {
        // paragraphToGrow[i].addEventListener('click', () => paragraphToGrow[i].style.animationPlayState = "running")
    // }
// }())
