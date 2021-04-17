const cntDiv = document.querySelector(".cnt");
const plusBtns = document.querySelectorAll(".fa-plus");
const minusBtns = document.querySelectorAll(".fa-minus");




plusBtns.forEach(function(plusBtn){
    const bigDiv = plusBtn.parentElement.parentElement;
    const lastDiv = bigDiv.children[3];
        plusBtn.addEventListener("click", function(e){
        lastDiv.classList.add("open");
    });
});


minusBtns.forEach(function(minusBtn){
    const bigDiv = minusBtn.parentElement.parentElement;
    const lastDiv = bigDiv.children[3];
        minusBtn.addEventListener("click", function(e){
        lastDiv.classList.remove("open");
    });
});

