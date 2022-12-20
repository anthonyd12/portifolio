let homePag = document.getElementById('inicio');
let projetosPag = document.querySelector("#projetos");
let orcamentoPag = document.getElementById('contato');

let cheackBox = document.querySelector('.close');



function scroll() {
    window.scroll({
        top: document.querySelector("#orcamento")
        .getBoundingClientRect().top,
        left:0,
        behavior: 'smooth'
    })
}
inicioPag.addEventListener(`click`);
projetosPag.addEventListener(`click`);
contatoPag.addEventListener(`click`);


