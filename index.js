// CODE BELOW FOR NAVBAR
let menu = document.getElementById("menu")
let nav3 = document.getElementById("nav3")
menu.addEventListener("click", () => {
    if (nav3.style.display == "" | nav3.style.display == "none") {
        nav3.style.display = "flex"
    } else {
        nav3.style.display = "none"
    }
})

var t1 = gsap.timeline()

t1.from(".text h4,.text h2,.text h3", {
    x: -500,
    opacity: 0,
    duration: 0.9,
    delay: 0.4,
    stagger: 0.5
})
// t1.from(".container img",{
//     scale:1.5,
//     opacity:0,
//     duration:0.3,

// })


var tablinks = document.querySelectorAll(".tab-links")
var tabcontents = document.querySelectorAll(".tab-containts")
let skill = document.getElementById("Skills")
let education = document.getElementById("education")

education.style.display = "none";
const a = (Array.from(tablinks));
tablinks.forEach((child) => {
    child.addEventListener("click", () => {
        if (child.innerText == "Skills") {
            console.log("skils");
            education.style.display = "none";
            skill.style.display = "flex";
            a[0].classList.add("activelink")
            a[1].classList.remove("activelink")


        } else {
            console.log("edu");
            skill.style.display = "none";
            education.style.display = "flex";
            a[1].classList.add("activelink")
            a[0].classList.remove("activelink")
        }
    })
})

let navList = document.querySelectorAll(".navList")
navList.forEach((child) => {
    child.addEventListener("click", () => {
        nav3.style.display = "none"
    })
})