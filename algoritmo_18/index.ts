const x = <HTMLSelectElement>document.querySelector("#n1");
const res = <HTMLSelectElement>document.querySelector(".res");

let result: number = 0;
res!.innerText = "0";
x.focus();

// funçao
const soma = (): void => {
    result = parseInt(x.value) + 1;
    if (result) {
        res!.innerText = `${result}`;
    } else {
        res!.innerText = "0";
    }
};

x?.addEventListener("input", soma);
