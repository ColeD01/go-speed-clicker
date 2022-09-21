var clickCountDisplay = document.getElementById("click-count")
var clickCount = 0


document.body.addEventListener("click", function() {
    clickCount += 1 
    clickCountDisplay.textContent = clickCount
    // console.log(clickCount) 
    localStorage.setItem("savedCC",JSON.stringify(clickCount))
    return clickCountDisplay
});







// document.body.addEventListener("refresh", function() {
//     var savedCC = localStorage.getItem("savedCC");
//     clickCountDisplay.textContent = savedCC
//     return clickCountDisplay
// })