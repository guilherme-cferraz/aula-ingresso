# 🎫 e-ticket — Sistema de Compra de Ingressos

Projeto simples em **HTML, CSS e JavaScript** que simula a compra de ingressos para um evento, controlando o estoque disponível para cada tipo de ticket.

A interface permite ao usuário selecionar o tipo de ingresso, informar a quantidade desejada e efetuar a compra — tudo com atualização dinâmica do estoque em tela.

---

## 🖼️ Preview



---

## ✨ Funcionalidades

- Seleção do tipo de ingresso:
  - **Pista**
  - **Cadeira Superior**
  - **Cadeira Inferior**
- Campo para inserir a quantidade desejada.
- Botão **Comprar**:
  - Valida quantidade digitada.
  - Verifica se existe estoque suficiente.
  - Atualiza automaticamente o estoque disponível.
  - Exibe mensagem confirmando a compra.
- Botão **Resetar**:
  - Restaura o estoque para os valores iniciais:
    - Pista: 100  
    - Cadeira Superior: 200  
    - Cadeira Inferior: 400  
- Feedback imediato ao usuário via `alert()`.

---

## 🧠 Lógica do JavaScript

### 🛒 Função `comprar()`

1. Lê:
   - Quantidade digitada
   - Tipo de ingresso selecionado
   - Estoque atual do tipo selecionado

2. Valida:
   - Quantidade deve ser maior que zero
   - Quantidade não pode exceder o estoque

3. Atualiza:
   - Subtrai a quantidade comprada do estoque
   - Mostra uma mensagem confirmando a compra

## 📁 Estrutura de Arquivos
.
├── assets/
│   ├── preview-eticket.png
│   ├── ...
├── js/
│   └── app.js
├── style.css
└── index.html