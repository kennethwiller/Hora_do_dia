
function carregarFoto() {
    
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');
    
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerHTML = `Agora são ${hora} horas`;
  

    if (hora > 0 && hora < 12) {
        imagem.src = './img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18) {
        imagem.src = './img/tarde.jpg'
        document.body.style.background = 'rgba(253, 191, 104, 1)'
    } else {
        imagem.src = './img/noite.jpg'
        document.body.style.background = 'rgba(38, 55, 66, 1)'
    }
}