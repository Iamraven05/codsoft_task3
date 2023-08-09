document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            
            if (buttonText === "C") {
                currentInput = "";
                display.textContent = "0";
            } else if (buttonText === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                    display.textContent = currentInput;
                } catch (error) {
                    display.textContent = "Error";
                }
            } else {
                currentInput += buttonText;
                display.textContent = currentInput;
            }
        });
    });
});
