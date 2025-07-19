const formAdd = document.getElementById('adicionar')
const formDelete = document.getElementById('deletar')
const input = document.getElementById('item-input')
const list = document.getElementById('lista-itens')

let itens = []

formAdd.addEventListener('submit', (event) => {
    const novoItem = input.value.trim()
    if (novoItem == '') retunr;

    itens.push(novoItem)

    salvarDados()
    renderizarLista()

    inputitem.value = ''
})