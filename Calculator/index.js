//Calculator class program

const display = document.getElementById("display")


//Initialize appendToDisplay function
function appendToDisplay(input) {
    display.value += input;
}


//Initialize clearDisplay function
function clearDisplay() {

    display.value = "";
}

//Initialize calculate function
function calculate() {

    try {

        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}