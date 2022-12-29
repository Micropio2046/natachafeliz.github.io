function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;


    if (user == "Natacha" && password == "chacarita") {
        window.location = "regalo.html";
    } else {
        alert("Datos Incorrectos")
    }
}