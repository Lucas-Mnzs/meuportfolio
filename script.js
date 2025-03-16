ScrollReveal().reveal(".skill", {
  delay: 300,
  reset: true,
  distance: "50px",
  origin: "bottom",
});

ScrollReveal().reveal(".swiper", {
  delay: 300,
  reset: true,
  distance: "50px",
  origin: "bottom",
});

var typed = new Typed("#desc", {
  strings: [
    "Desenvolvedor Full Stack",
    "Especialista em Sistemas Web",
    "Criador de Soluções Digitais",
    "Apaixonado por Tecnologia",
  ],
  typeSpeed: 30, // Velocidade da digitação
  backSpeed: 30, // Velocidade ao apagar
  loop: true, // Fica repetindo
});

document.getElementById("ano-atual").textContent = new Date().getFullYear();

let isMenuOpen = false; // Variável para controlar o estado do menu (aberto ou fechado)

$("#menu").on("click", function () {
  if (isMenuOpen) {
    // Se o menu estiver aberto, volta para a imagem inicial
    $("#menu").attr(
      "src",
      "imagens/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
    );
    $("#opc").removeClass("show"); // Remove a classe 'show' para esconder o menu
  } else {
    // Se o menu estiver fechado, muda para a imagem de "fechar"
    $("#menu").attr(
      "src",
      "imagens/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
    );
    $("#opc").addClass("show"); // Adiciona a classe 'show' para exibir o menu
  }
  // Alterna o estado do menu
  isMenuOpen = !isMenuOpen;
});
