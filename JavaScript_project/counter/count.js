let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function(event) {
        const style = event.currentTarget.classList
        if(style.contains('dec')) {
            count--;
        }
        else if(style.contains('inc')) {
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0) {
            value.style.color = "green";
        }
        if(count < 0) {
            value.style.color = "red";
        }
        if(count == 0) {
            value.style.color = "#000";
        }

        value.textContent = count
    })
})