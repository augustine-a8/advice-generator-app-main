const advice_number = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const refresh_advice_btn = document.querySelector(".svg-btn");

getAdvice();

refresh_advice_btn.addEventListener("click", getAdvice);

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            advice_number.innerHTML = data.slip.id;
            advice.innerHTML = data.slip.advice;
        });
}
