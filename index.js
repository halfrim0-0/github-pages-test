function calc() {
    let target = document.getElementById("target").value;
    const original = target;

    let answer = target + " = ";
    let i = 2;
    while (target > 1) {
        if (target % i === 0) {
            if (i == original) {
                answer = target + " は素数です"
                break;
            }

            target = target / i;

            if (target != 1) {
                answer += i + " x ";
            } else {
                answer += i;
            }

            i = 2;
        } else {
            i++;
        }
    }

    document.getElementById("answer").textContent = answer;
}

function reset() {
    document.getElementById("answer").textContent = "";
    document.getElementById("target").value = "";
}