//          Exemplo
// no seu arquivo .html adicione uma CDN exemplo: bootstrap css
//  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
// Após ter adicionado a linha acima, adicione esse arquivo js;

// teste para verifcar se está funcionando as classes do bootstrap.
let test = document.createElement("div")
test.className = "hidden d-none"

document.head.appendChild(test)
let cssLoaded = window.getComputedStyle(test).display === "none"
document.head.removeChild(test)

if (!cssLoaded) { // verificar se o css bootstrap via CDN não foi carregado, então carregar do seu servidor local
    let link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "http://localhost/exemplo/app/Assets/bootstrap/css/bootstrap.css"; // local do arquivo.

    document.head.appendChild(link);
}

