const usuarios = [
    { nome: 'Ana', idade: 22, cpf: '123.456.789-00' },
    { nome: 'Carla', idade: 23, cpf: '223.456.789-00' },
    { nome: 'Trísia', idade: 24, cpf: '323.456.789-00' }
];

const listaUsuariosElement = document.createElement('ul');
document.body.appendChild(listaUsuariosElement);

for (let usuario of usuarios) {
    inserirUsuarioNaLista(usuario);
}

function inserirUsuario() {
    const inputNomeElement = document.querySelector('#nome');
    const inputIdadeElement = document.querySelector('#idade');
    const inputCpfElement = document.querySelector('#cpf');

    
    const novoUsuario = {
        nome: inputNomeElement.value,
        idade: parseInt(inputIdadeElement.value),
        cpf: inputCpfElement.value
    };

    
    inserirUsuarioNaLista(novoUsuario);

    
    inputNomeElement.value = '';
    inputIdadeElement.value = '';
    inputCpfElement.value = '';
}


function inserirUsuarioNaLista(usuario) {
    const liElement = document.createElement('li');

    
    const nomeElement = document.createElement('p');
    nomeElement.textContent = `Nome: ${usuario.nome}`;

    const idadeElement = document.createElement('p');
    idadeElement.textContent = `Idade: ${usuario.idade}`;

    const cpfElement = document.createElement('p');
    cpfElement.textContent = `CPF: ${usuario.cpf}`;

    
    const botaoRemoverElement = document.createElement('button');
    botaoRemoverElement.textContent = 'Remover';
    botaoRemoverElement.addEventListener('click', () => {
        liElement.remove();
    });

    
    liElement.appendChild(nomeElement);
    liElement.appendChild(idadeElement);
    liElement.appendChild(cpfElement);
    liElement.appendChild(botaoRemoverElement);
    
    listaUsuariosElement.appendChild(liElement);
}