$("#buttona").click(function () {
    window.location.assign("index.html")
})
$("#login").click(function () {
    window.location.assign("sign.html")
})


let myArr
if (!localStorage.getItem('users'))
    myArr = [];
else myArr = JSON.parse(localStorage.getItem('users'))

$('#signin').submit(function() {
    if ($('#username').val() == null) {
        alert("username is required")

    }

    let myUser = {
        username: $('#username').val(),
        number: $('#telefon').val(),
        password: $('#password').val(),
        name: $('#ad').val()
    }

    myArr.push(myUser)
    localStorage.setItem('users', JSON.stringify(myArr))
    alert("Succesfully")
})