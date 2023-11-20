 // Adicione um evento de clique ao botão
 document.getElementById('continuarComprandoBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Evita que o link execute sua ação padrão

    // Obtenha as informações do formulário
    var formData = {
        tipoCarne: document.getElementById('bb-branch').value,
        comCatupiry: document.getElementById('branch').value,
        observacoes: document.getElementById('message').value,
        nome: document.getElementById('name').value,
        bairro: document.getElementById('bairro').value,
        rua: document.getElementById('rua').value,
        quadra: document.getElementById('quadra').value,
        lote: document.getElementById('lote').value
    };

    // Simule o armazenamento no carrinho (pode ser mais complexo em uma aplicação real)
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(formData);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redirecione para o menu
    window.location.href = 'Menu.html';
});