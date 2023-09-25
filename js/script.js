// get reference for all doms elements
const body = document.querySelector("body");
let hourHand = document.querySelector(".hours");
let minHand = document.querySelector(".minutes");
let secHand = document.querySelector(".seconds");
let modeSwitch = document.querySelector('.mode-switch')

// load the localstrage mode
if (localStorage.getItem("mode") === "Dark") {
    body.classList.add("dark-mode")
    modeSwitch.textContent = "Light Mode"
}

// change mode
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    const isDark = body.classList.contains('dark-mode')
    console.log(isDark)
    // change button text
    modeSwitch.textContent = isDark ? "Light Mode" : "Dark mode"

    // add to localstorage
    localStorage.setItem("mode", isDark ? "Dark" : "Light")
})


// update time 
const updataTime = () => {
    let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 365;

    // rotate the clock hands to the appropriate degree
    secHand.style.transform = `rotate(${secToDeg}deg)`;
    minHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// call update time every seconds
setInterval(updataTime, 1000)
updataTime()