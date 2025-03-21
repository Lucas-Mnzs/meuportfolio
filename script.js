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

ScrollReveal().reveal("#sobre", {
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

window.addEventListener("load", function () {
  setTimeout(function () {
    const div = document.getElementById("descer");
    div.style.display = "block"; // Torna a div visível
    setTimeout(() => {
      div.style.opacity = 1; // Torna a div gradualmente visível
    }, 50); // Delay muito pequeno para permitir que a transição comece
  }, 3000); // 3000 milissegundos = 3 segundos
});

$(document).on("scroll", function () {
  const div = document.getElementById("descer");
  const header = document.querySelector("#cabecalho");
  const opc = document.querySelector("#opc");
  if (window.scrollY > 0) {
    div.style.display = "none";
    div.style.opacity = 0;
    header.style.padding = "5px";
    opc.style.top = "58px";
    opc.style.height = "calc(100% - 58px)";
  } else {
    div.style.display = "block";
    setTimeout(() => {
      div.style.opacity = 1;
    }, 50);
    header.style.padding = "10px";
    opc.style.top = "68px";
    opc.style.height = "calc(100% - 68px)";
  }
});
