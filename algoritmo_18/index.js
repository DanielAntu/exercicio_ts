"use strict";
const x = document.querySelector("#n1");
const res = document.querySelector(".res");
let result = 0;
res.innerText = "0";
x.focus();
// funçao
const soma = () => {
    result = parseInt(x.value) + 1;
    if (result) {
        res.innerText = `${result}`;
    }
    else {
        res.innerText = "0";
    }
};
x === null || x === void 0 ? void 0 : x.addEventListener("input", soma);
