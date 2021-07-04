//          Exemplo 

// no seu arquivo .html adicione um script de uma CDN exemplo: jquery
//  <script src= "https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
// lembre-se ao utilizar jquery, adicione o arquivo acima em primeiro lugar, e depois esse arquivo js;

if(typeof $ === 'undefined'){ // verificar se jquery via CDN não foi carregado, então carregar do seu servidor local
  let scriptJq = document.createElement("SCRIPT");
  scriptJq.type = 'text/javascript';
  scriptJq.src = "http://localhost/exemplo/app/Assets/jquery/jquery-3.5.1.slim.min.js";
  document.body.appendChild(scriptJq);
  
}
// adicionar CDN do Bootstrap dinamicamente ou qualquer outra!

let bootstrapJs = document.createElement("SCRIPT");
    bootstrapJs.type = 'text/javascript';
    bootstrapJs.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js";// local do seu arquivo;
    bootstrapJs.integrity = "sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns";
    bootstrapJs.setAttribute('crossorigin', "anonymous");
    document.body.appendChild(bootstrapJs);

  document.body.onload = carregarBootstrap; // ao terminar de carregar o documento execute essa função
 
function carregarBootstrap(){

  if(typeof($.fn.modal) === 'undefined'){ // verificar se o bootstrap JS via CDN não foi carregado, então carregar do seu servidor local
    let localBootstrap = document.createElement("SCRIPT");
    localBootstrap.type = 'text/javascript';
    localBootstrap.src = "http://localhost/exemplo/app/Assets/bootstrap/js/bootstrap.bundle.min.js"; // local do seu arquivo;
    document.body.appendChild(localBootstrap);
    
  }
 
}

