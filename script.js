// let kun = new Date();
// console.log(kun);


// function salom() {
// console.log("Salom");
// }


// setTimeout(salom,5000)
// setInterval(salom,5000)


const hour = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")


let presentTime = new Date();
let soat = presentTime.getHours();
let minut = presentTime.getMinutes();
let sekund = presentTime.getSeconds();



hour.textContent = soat;
min.textContent = minut;
sec.textContent = sekund;

function clock() {
    if (+sec.textContent == 60) {
        min.textContent = +min.textContent + 1;
        sec.textContent = 0
    } if (+min.textContent == 60) {
        hour.textContent = +hour.textContent + 1;
        min.textContent = 0
    }
    sec.textContent++
}

setInterval(clock, 1000)







