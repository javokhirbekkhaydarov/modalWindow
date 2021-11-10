const modal1  =  document.querySelector(".button")
const modal2  =  document.querySelector(".button2")
const modal3  =  document.querySelector(".button3")
const modalWindow  =  document.querySelector(".modal")
const container  =  document.querySelector(".container")
const modalshow = document.querySelector(".modal")
const exit = document.querySelector(".exit")



modal1.addEventListener("click", function () {
    modalshow.style.display = "block" 
    modalshow.style.overflowY = "hidden"
    container.style.filter = "blur(1px)"
    
})

modal2.addEventListener("click", function () {
    modalshow.style.display = "block" 
    modalshow.style.overflowY = "hidden"
    container.style.filter = "blur(1px)"
    
})
modal3.addEventListener("click", function () {
    modalshow.style.display = "block" 
    modalshow.style.overflowY = "hidden"
    container.style.filter = "blur(1px)"
    
})

window.addEventListener("keydown", function (i) {
    if(i.keyCode == 27) {
        modalshow.style.display = "none"
        container.style.filter = "blur(0px)"
    }
})

exit.addEventListener("click", function() {
    modalshow.style.display = "none"
    container.style.filter = "blur(0px)"
    
})

modalWindow.addEventListener("click", function() {
    modalshow.style.display = "none"
    container.style.filter = "blur(0px)"
    
})
