function greeting() {


    let userName = prompt("enter you name")
    let age = prompt("Enter your age")

    let greetMsg = document.getElementById("greet");

    if (age >= 18) {
        greetMsg.innerHTML = `Welcome ${userName}, you are eligible`
    }
    else if (age > 4 && age < 18) {
        greetMsg.innerHTML = `Sorry! your age is ${age}, You are not eligible`
    }
    else (
        greetMsg.innerHTML = "enter again"
    )


}