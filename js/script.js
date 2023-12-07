const btn = document.getElementById('btn-top');
btn.addEventListener("click", function () {
    window.scrollTo(0,0);
})

document.addEventListener("scroll", ocult);

function ocult() {
    if(window.scrollY > 10) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
}

ocult();


/* Efeito de diminuição do header após scroll*/
window.addEventListener("scroll", function() {
    let header = this.document.querySelector('#header');
    //adc dinamicamente uma classe no header
    header.classList.toggle('scrolling', window.scrollY > 0);
})


/* Menu mobile*/
const menuDiv = document.querySelector('.menu-mobile');
const btnAnimation = document.getElementById('btn-menu');

menuDiv.addEventListener('click', animationMenu);
    
function animationMenu() {
    menuDiv.classList.toggle('open');
    btnAnimation.classList.toggle('active');

}

/*const button = document.querySelectorAll('.read-more');

button.addEventListener('click', function() {
    console.log("BUtaooo")
    const card = document.querySelectorAll('.carousel-item');
    card.classList.toggle('active-card');

    if (card.classList.contains('active-card')) {
        return this.button.textContent = 'Leia menos';
    }

    button.textContent = 'Leia mais';
});*/

// Selecione todos os botões com a classe .read-more
const buttons = document.querySelectorAll('.read-more');

// Adicione um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.parentElement; // Encontre o elemento de conteúdo pai deste botão
        card.classList.toggle('active-card');

        if (card.classList.contains('active-card')) {
            this.textContent = 'Leia menos';
        } else {
            this.textContent = 'Leia mais';
        }
    });
});