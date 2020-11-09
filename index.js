var date = new Date("2018-07-05T13:00:00")
    /*console.log(date)






    date.setFullYear(2018)
    console.log(date.getUTCDay())
    console.log(date.getDate())
    console.log(date.getFullYear())
    console.log(date.getMonth() + 1)
    console.log(date.toString())
    console.log(date.toUTCString())
    console.log(date.toJSON())

    

*/


function refrechTime() {
    var tempactuel = document.getElementById("temp-actuel")
    var d = new Date()
    if (d.getSeconds() < 10) {
        tempactuel.innerHTML = d.getHours() + " : " + d.getMinutes() + " : 0" + d.getSeconds()
    } else if (d.getMinutes() < 10) {
        tempactuel.innerHTML = d.getHours() + " : 0" + d.getMinutes() + " : " + d.getSeconds()
    } else if (d.getSeconds() < 10 && d.getSeconds() < 10) {
        tempactuel.innerHTML = d.getHours() + " : 0" + d.getMinutes() + " : 0" + d.getSeconds()
    } else {
        tempactuel.innerHTML = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds()
    }
}



refrechTime()
var compteur = setInterval(refrechTime, 1000)

document.getElementById("stop").addEventListener('click', function() {
    clearInterval(compteur)
})

document.getElementById("start").addEventListener('click', function() {

    refrechTime()
    compteur = setInterval(refrechTime, 1000)

})

setTimeout(function() {
    console.log("salut ")
}, 3000)