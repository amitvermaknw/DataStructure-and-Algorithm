//Debounce concept in javascript
//< button id = "myBtn" > click me</button>
const debounce = (fn, delayed) => {
    let funTimeoutId;
    return function (...arg) {
        if (funTimeoutId) {
            clearTimeout(funTimeoutId);
        }
        funTimeoutId = setTimeout(() => {
            fn(...arg)
        }, delayed)
    }
}
document.getElementById("myBtn").addEventListener("click", debounce(() => {
    console.log("clicked me")
}, 2000))