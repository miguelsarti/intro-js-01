function aume() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA + numB;

    document.getElementById("result").innerText = result;
}

function reset() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA - numB;

    document.getElementById("result").innerText = result;
}

function dimi() {
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA * numB;

    document.getElementById("result").innerText = result;
}