var button1 = document.getElementById('1')
var button2 = document.getElementById('2')
var button3 = document.getElementById('3')

button1.addEventListener('click', redirectToCocomo)
button2.addEventListener('click', redirectToCocomo2)
button3.addEventListener('click', redirectToCoqualmo)


function redirectToCocomo() {
    window.location.href = "calculator/cocomo.html"

}
function redirectToCocomo2() {
    window.location.href = "calculator/cocomo2.html"

}
function redirectToCoqualmo() {
    window.location.href = "calculator/coqualmo.html"

}

