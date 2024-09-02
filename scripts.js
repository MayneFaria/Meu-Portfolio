// Exemplo de JavaScript para interatividade básica

// Função que exibe uma mensagem de boas-vindas ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Bem-vindo ao meu portfólio!');
});

// Adiciona um ouvinte de evento ao formulário de contato para exibir um alerta ao enviar
document.querySelector('form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
});
