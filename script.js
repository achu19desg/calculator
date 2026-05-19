
const display = document.querySelector("#display")

const buttons = document.querySelectorAll("button")

let calculation = ""

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.textContent

        // Clear All
        if (value === "AC") {

            calculation = ""
            display.value = ""

        }

        // Delete Last Character
        else if (value === "DE") {

            calculation = calculation.slice(0, -1)
            display.value = calculation

        }

        // Calculate Result
        else if (value === "=") {

            try {

                calculation = eval(calculation).toString()

                display.value = calculation

            }

            catch {

                display.value = "Error"

                calculation = ""

            }

        }

        // Percentage
        else if (value === "%") {

            try {

                calculation = (
                    eval(calculation) / 100
                ).toString()

                display.value = calculation

            }

            catch {

                display.value = "Error"

                calculation = ""

            }

        }

        // Prevent multiple operators
        else {

            const lastChar = calculation.slice(-1)

            const operators = ["+", "-", "*", "/", "%"]

            if (
                operators.includes(lastChar) &&
                operators.includes(value)
            ) {
                return
            }

            calculation += value

            display.value = calculation

        }

    })

})