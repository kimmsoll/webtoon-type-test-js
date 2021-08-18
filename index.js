const buttons = document.querySelectorAll("button");
const firstQ = document.querySelector("#q--first");
const secondQ = document.querySelector("#q--second");
const finalQ = document.querySelector("#q--final");
const cartoonTitle = document.querySelector("#cartoon__title");
const cartoonImg = document.querySelector("#cartoon__img");
const description = document.querySelector("#description");
const synopsis = document.querySelector("#synopsis");
const goToWatchBtn = document.querySelector("#button--watch");

let result = [];

const onClick = (e) => {
    if (e.target.dataset.num) {
        result.push(e.target.dataset.num);
        localStorage.setItem("key", result);
    }
    if (result.length === 1) {
        firstQ.style.display = "none";
        secondQ.style.display = "flex";
    } else if (result.length === 2) {
        firstQ.style.display = "none";
        secondQ.style.display = "none";
        finalQ.style.display = "flex";
    } else if (result.length === 3) {
        location.replace("https://webtoon-type-test.netlify.app/result.html");
    }
};

const showResult = (num) => {
    cartoonImg.innerHTML = `<img src="imgs/${num}.png" id="result__image">`;
    cartoonTitle.innerText = cartoons[num].title;
    description.innerText = cartoons[num].description;
    synopsis.innerText = cartoons[num].synopsis;
};

const goToWatchWebtoon = (num) => {
    goToWatchBtn.addEventListener("click", () => {
        location.replace(cartoons[num].link);
    });
};

if(location.href === "https://webtoon-type-test.netlify.app/result.html"){
    let resultNum = localStorage.getItem("key").split(",");
    resultNum = resultNum.reduce((pre,cur)=>pre+cur);
    showResult(resultNum);
    goToWatchWebtoon(resultNum);
}

buttons.forEach((btn)=>btn.addEventListener("click", onClick));