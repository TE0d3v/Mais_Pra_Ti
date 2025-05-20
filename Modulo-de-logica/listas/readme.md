## 📚 Estruturas de Listas Encadeadas em JavaScript

### 🔗 Lista Simplesmente Encadeada
- Cada nó aponta apenas para o próximo.
- Estrutura leve e fácil de implementar.
- Boa para inserções e remoções no início.
- Percorre apenas em uma direção.
- **Usos comuns**: Pilhas, filas simples, listas dinâmicas.

### 🔁 Lista Duplamente Encadeada
- Cada nó aponta para o próximo e para o anterior.
- Permite navegação nos dois sentidos.
- Facilita inserções e remoções no meio da lista.
- Ocupa mais memória por armazenar dois ponteiros.
- **Usos comuns**: Navegadores (avançar/voltar), listas com rolagem, editores de texto.

### 🔄 Lista Circular Encadeada
- O último nó aponta para o primeiro, formando um ciclo.
- Pode ser simples ou duplamente encadeada.
- Ideal para percursos contínuos sem fim.
- Evita uso de `null` em ponteiros de fim.
- **Usos comuns**: Buffers circulares, jogos por turnos, escalonadores (round-robin).

---

✔️ Cada estrutura tem seus pontos fortes. A escolha ideal depende da necessidade do algoritmo ou aplicação.