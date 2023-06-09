function calc() {
    let target = document.getElementById("target").value;
    const original = target;

    if (isValid(target)) {
        document.getElementById("error").textContent = "";
    } else {
        document.getElementById("error").textContent = "2以上10億以下の整数を入力してください";
        return;
    }

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

function isValid(target) {
    if (isNaN(target)) {
        return false;
    } else if (!Number.isInteger(Number(target))) {
        return false;
    } else if (target < 2 || 10000000000 < target) {
        return false;
    }
    return true;
}

function reset() {
    document.getElementById("answer").textContent = "数字を入力してください";
    document.getElementById("error").textContent = "";
    document.getElementById("target").value = "";
}