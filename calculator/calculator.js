const display = document.getElementById("display"),
    buttons = document.querySelectorAll(".calculator button");

let currentInput = "",
    operator = "",
    operand1 = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value >= 0 && value <= 9 || value === ".") {
            currentInput += value;
            display.value = currentInput;

        } else if (value === "C") {
            currentInput = "";
            operator = "";
            operand1 = null;
            display.value = "";

        } else if (value === "=") {
            if (operand1 !== null && operator && currentInput) {
                const operand2 = parseFloat(currentInput);

                switch (operator) {
                    case '+':
                        display.value = operand1 + operand2;
                        break;
                    case '-':
                        display.value = operand1 - operand2;
                        break;
                    case '*':
                        display.value = operand1 * operand2;
                        break;
                    case '/':
                        display.value = operand1 / operand2;
                        break;
                }
            }

            operand1 = null;
            operator = "";
            currentInput = display.value;
        } else {
            if (currentInput) {
                operand1 = parseFloat(currentInput);
                operator = value;
                currentInput = '';
            }
        }
    });
});