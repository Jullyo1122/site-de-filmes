function logar(){
    event.preventDefault();

    const verificarEmail = document.getElementById("campo-de-email");
    const verificarSenha = document.getElementById("campo-de-senha");

    if(verificarEmail.value === ""|| verificarSenha.value === "" ){
        alert("Por favor insira os dados!");
    } else if(verificarEmail.value === "jullyo@gmail.com" && verificarSenha.value === "spider-man123#"){
        window.location = "index.html";
    } else{
        alert("Acesso negado!")
    }
}