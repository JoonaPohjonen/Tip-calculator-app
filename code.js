let persent = 0;
let bill = 0;
let people = 0;

let billInput = document.getElementById("bill");
let billDiv = document.getElementById("billDiv");

let peopleInput = document.getElementById("people");
let peopleDiv = document.getElementById("peopleDiv");

/*--\/--Set the amount for bill and people--\/--*/
function change() {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;

    count(bill, people);
}
/*--/\--Set the amount for bill and people--/\--*/

/*--\/--Calculations and setting the end values--\/--*/
function count (bill, people) {
    if(bill > 0 && people > 0 && persent > 0) {
        let tip = (bill / people) * persent;
        let total = (bill / people) + tip;
        document.getElementById("tipAmount").value = "$" + tip.toFixed(2);
        document.getElementById("totalAmount").value = "$" + total.toFixed(2);
    }
}
/*--/\--Calculations and setting the end values--/\--*/

/*--\/--Set the tip percentage--\/--*/
function set5 () {
    persent = 0.05;
    change();
}

function set10 () {
    persent = 0.1;
    change();
}

function set15 () {
    persent = 0.15;
    change();
}

function set25 () {
    persent = 0.25;
    change();
}

function set50 () {
    persent = 0.5;
    change();
}

function setCustom() {
    persent = document.getElementById("custom").value * 0.01;
    change();
}
/*--/\--Set the tip percentage--/\--*/

/*--\/--Reset all values--\/--*/
function reset () {
    persent = 0;
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("tipAmount").value = "";
    document.getElementById("totalAmount").value = "";
}
/*--/\--Reset all values--/\--*/

/*--\/--changing CSS styles based on focus--\/--*/
function focused () {
    if(bill > 0) {
        billInput.classList.add("inputFocusBlue");
        billInput.classList.remove("inputFocusRed");

        billDiv.classList.add("letThereBeBlue");
        billDiv.classList.remove("letThereBeRed");
    } else {
        billInput.classList.add("inputFocusRed");
        billInput.classList.remove("inputFocusBlue");

        billDiv.classList.add("letThereBeRed");
        billDiv.classList.remove("letThereBeBlue");
    }
}

function blurred () {
    billInput.classList.remove("inputFocusBlue");
    billInput.classList.remove("inputFocusRed");
    billDiv.classList.remove("letThereBeBlue");
    billDiv.classList.remove("letThereBeRed");
}

function focusedBottom () {
    if(people > 0) {
        peopleInput.classList.add("inputFocusBlue");
        peopleInput.classList.remove("inputFocusRed");

        peopleDiv.classList.add("letThereBeBlue");
        peopleDiv.classList.remove("letThereBeRed");
    } else {
        peopleInput.classList.add("inputFocusRed");
        peopleInput.classList.remove("inputFocusBlue");

        peopleDiv.classList.add("letThereBeRed");
        peopleDiv.classList.remove("letThereBeBlue");
    }
}

function blurredBottom () {
    peopleInput.classList.remove("inputFocusBlue");
    peopleInput.classList.remove("inputFocusRed");
    peopleDiv.classList.remove("letThereBeBlue");
    peopleDiv.classList.remove("letThereBeRed");
}

function borderChange () {
    bill = document.getElementById("bill").value;

    if(bill > 0) {
        billInput.classList.add("inputFocusBlue");
        billInput.classList.remove("inputFocusRed");

        billDiv.classList.add("letThereBeBlue");
        billDiv.classList.remove("letThereBeRed");
    } else {
        billInput.classList.add("inputFocusRed");
        billInput.classList.remove("inputFocusBlue");

        billDiv.classList.add("letThereBeRed");
        billDiv.classList.remove("letThereBeBlue");
    }
}

function borderChangeBottom () {
    people = document.getElementById("people").value;
    
    if(people > 0) {
        peopleInput.classList.add("inputFocusBlue");
        peopleInput.classList.remove("inputFocusRed");

        peopleDiv.classList.add("letThereBeBlue");
        peopleDiv.classList.remove("letThereBeRed");
    } else {
        peopleInput.classList.add("inputFocusRed");
        peopleInput.classList.remove("inputFocusBlue");

        peopleDiv.classList.add("letThereBeRed");
        peopleDiv.classList.remove("letThereBeBlue");
    }
}
/*--/\--changing CSS styles based on focus and blur--/\--*/