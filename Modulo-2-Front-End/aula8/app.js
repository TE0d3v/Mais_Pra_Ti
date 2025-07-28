const formAdicionar = document.getElementById('form-adicionar')
const btnLimpar = document.getElementById('btn-limpar')
const inputItem = document.getElementById('input-item')
const listaItens = document.getElementById('lista-itens')
const seletorOrdem = document.getElementById('ordenar')
const seletorFiltro = document.getElementById('filtrar')
const contadorElem = document.querySelector('#contador span')


let itens = []

window.addEventListener('DOMContentLoaded', () => {
    const dados = localStorage.getItem('listaCompras');
    if (dados) {
        itens = JSON.parse(dados)
        renderizarLista()
    }
})

function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function atualizarContador() {
    contadorElem.textContent = itens.length
}

function renderizarLista() {
    listaItens.innerHTML = ''
    const ordem = seletorOrdem.value
    const filtro = seletorFiltro.value

    let itensFiltrados = itens.filter(item => {
        if (filtro === 'pending') return !item.purchased;
        if (filtro === 'purchased') return item.purchased;
        return true;
    })

    if (ordem === 'alphabetical') {
        itensFiltrados.sort((a, b) => a.text.localeCompare(b.text));
    } else if (ordem === 'status') {
        itensFiltrados.sort((a, b) => a.purchased - b.purchased);
    }

    itensFiltrados.forEach((item, index) => {
        const li = document.createElement('li')
        li.className = item.purchased ? 'purchased' : '';

        const chk = document.createElement('input')
        chk.type = 'checkbox';
        chk.checked = item.purchased;
        chk.addEventListener('change', () => {
            item.purchased = chk.checked
            salvarDados()
            renderizarLista()
        })

        const span = document.createElement('span')
        span.textContent = item.text

        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.addEventListener('click', () => {
            const posOriginal = itens.indexOf(item)
            itens.splice(posOriginal, 1)
            salvarDados()
            renderizarLista()
        })


        li.appendChild(chk)
        li.appendChild(span)
        li.appendChild(btnRemover)
        listaItens.appendChild(li)
    })
    atualizarContador()
}

formAdicionar.addEventListener('submit', (event) => {
    event.preventDefault()
    const texto = inputItem.value.trim() 
    if (texto === '') return;

    itens.push({ text: texto, purchased: false })

    salvarDados()
    renderizarLista()

    inputItem.value = '' 
})

// Adicionado event listener para o botão limpar
btnLimpar.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja limpar a lista?')) {
        itens = []
        salvarDados()
        renderizarLista()
    }
})

seletorFiltro.addEventListener('change', renderizarLista)
seletorOrdem.addEventListener('change', renderizarLista)