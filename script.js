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
