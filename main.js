// 1 — Sticky Header ao rolar
window.addEventListener("scroll", () => {
    const header = document.getElementById("top-header");
    if (window.scrollY > 20) {
        header.classList.add("ativo");
    } else {
        header.classList.remove("ativo");
    }
});

// 2 — Menu Mobile
const btnMenu = document.getElementById("btn-menu");
const navLinks = document.querySelector(".nav-links");

btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// 3 — Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const destino = document.querySelector(this.getAttribute("href"));
        if (destino) {
            e.preventDefault();
            window.scrollTo({
                top: destino.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

// 4 — Efeito Reveal nos elementos
const elementos = document.querySelectorAll(".reveal");

function reveal() {
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            el.classList.add("ativo");
        }
    });
}
window.addEventListener("scroll", reveal);
reveal();

// 5 — Animação nos ícones dos planos
document.querySelectorAll(".planos i").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.3)";
        icon.style.transition = "0.2s";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});

// 6 — Botão voltar ao topo
const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
