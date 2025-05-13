// Simples animação: título "balança" de leve quando a página carrega
window.addEventListener('DOMContentLoaded', () => {
    const titulo = document.getElementById('titulo');
    titulo.style.transform = 'rotate(5deg)';
    setTimeout(() => {
        titulo.style.transform = 'rotate(-5deg)';
    }, 250);
    setTimeout(() => {
        titulo.style.transform = 'rotate(0deg)';
    }, 500);
});
