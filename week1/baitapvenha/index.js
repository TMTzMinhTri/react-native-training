window.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById('guessButton');
    let randomNumber = Math.round(Math.random() * 10)
    var notify = document.getElementById("message")
    let input = document.getElementById("number")

    input.addEventListener('focus', () => {
        notify.classList.remove("alert", "alert-danger")
        notify.classList.remove("alert", "alert-success")
        notify.innerHTML = ""
        input.value=""
    })

    button.addEventListener('click', function () {
        let userGuess = parseInt(document.getElementById('number').value)
        let noti, status;
        if (userGuess < randomNumber) {
            noti = "Sorry your guess is too low"
            status = false
        }
        else if (userGuess > randomNumber) {
            noti = "Sorry your guess is too high",
                status = false
        }
        else {
            noti = " Congratulations!! You guessed correctly",
                status = true
        }
        render(noti, status)
    })
    const render = (noti, status) => {
        if (status == false) {
            notify.innerHTML = noti
            notify.classList.add("alert", "alert-danger")
        } else {
            notify.innerHTML = noti
            notify.classList.add("alert", "alert-success")
        }
    }
})
