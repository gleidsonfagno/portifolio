window.addEventListener('scroll', function() {
    var elemento = document.getElementById('seuElemento');
    var posicao = elemento.getBoundingClientRect();
  
    // Verifica se o elemento está na janela de visualização
    if(posicao.top < window.innerHeight && posicao.bottom >= 0) {
      elemento.classList.add('visivel');
    } else {
      elemento.classList.remove('visivel');
    }
  });
  