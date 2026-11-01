# 🍰 Doralice Confeitaria & Café • Modelo de Portfólio

> **Website institucional de alta confeitaria afetiva brasileira**, inspirado no design e na arquitetura premiada do **[madie.es](https://madie.es/?ref=onepagelove)** (Showcase Winner no *One Page Love*).  
> Desenvolvido para servir como **peça de destaque em portfólio profissional** e modelo de venda para confeitarias, docerias artesanais, pâtisseries e cafeterias premium no Brasil.

---

## ✨ Destaques de Design Inspirados no `madie.es`

1. **Overlay Navigation Transition:** Menu em cortina fluida em tela cheia com tipografia editorial, numeração (`01`, `02`, `03`...), informações de localização e links sociais.
2. **Paleta Terrosa & Vinho Bordô Aveludado:** Tons de creme alabastro (`#FAF7F2`), linho quente (`#F3ECE2`), vinho bordô profundo (`#631626`) e caramelo tostado (`#C88544`).
3. **Selo Giratório & Tipografia Editorial:** Selo circular de boutique com animação suave contínua e combinação tipográfica entre **Fraunces** (serifa vintage-moderna com itálicos expressivos) e **Plus Jakarta Sans** (grotesco geométrico contemporâneo).
4. **Fita Contínua (Marquee Ticker):** Faixa infinita destacando as especialidades da casa.
5. **Manifesto / Biografia Afetiva:** Estrutura narrativa com citação em destaque, valorização do cacau da Bahia e ingredientes nacionais puros.

---

## 🚀 Funcionalidades Interativas Inclusas

- 🛒 **Sacola de Pedidos & Checkout Direto no WhatsApp:**
  - Adição e remoção de itens com atualização em tempo real do subtotal.
  - Seletor entre **Retirada no Atelier** (grátis) e **Delivery Express** (com taxa configurável).
  - Opção de **Cartão de Presente** com mensagem manuscrita personalizada.
  - Geração automática de mensagem profissional para WhatsApp com resumo do pedido, endereço e valores.
- 🔍 **Catálogo Filtrável com Busca em Tempo Real:**
  - Filtros por categoria: *Brigadeiros & Trufas*, *Bolos & Fatias*, *Clássicos Brasileiros*, *Cafeteria Especial* e *Caixas de Presente*.
  - Busca instantânea por nome ou ingrediente.
- 👁️ **Quick View Modal (Espiar Detalhes):**
  - Janela modal com fotografia em alta resolução, ficha de alérgenos e sugestão de harmonização do confeiteiro.
- 🧁 **Simulador Interativo para Mesas de Doces & Casamentos:**
  - Seletor de convidados e tipo de celebração que calcula automaticamente a quantidade de doces, variedade de sabores e estimativa de investimento, com botão para solicitar degustação no WhatsApp.
- ⏰ **Indicador Dinâmico de Atelier Aberto / Fechado:**
  - Verifica o horário local e exibe status em tempo real com indicador visual pulsante.
- 🎟️ **Clube VIP / Newsletter:**
  - Formulário interativo com liberação de código de desconto (`DORALICE10`) com cópia em 1 clique.
- 🔔 **Sistema de Micro-sons e Toasts:**
  - Feedback tátil com sons sutis gerados via Web Audio API (sem dependência de arquivos externos de áudio).

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico & Moderno**
- **Tailwind CSS** (via CDN com paleta personalizada)
- **CSS3 Bespoke** (`styles/main.css`) para animações e refinamento visual
- **JavaScript Moderno (ES Modules)**
- **GSAP 3** para transições e micro-animações
- **Lucide Icons** para ícones vetoriais modernos
- **Vite** para desenvolvimento ultrarrápido

---

## 📦 Como Rodar o Projeto

Você tem **três maneiras fáceis** de visualizar e testar o projeto:

### Opção 1: Abrir diretamente no navegador (Zero instalação)
Basta clicar duas vezes no arquivo `index.html` ou abri-lo através da extensão **Live Server** do VS Code.

### Opção 2: Rodar com Vite (Recomendado para desenvolvimento)
1. Certifique-se de ter o Node.js instalado.
2. Abra o terminal na pasta do projeto e execute:
```bash
npm run dev
```
3. O Vite abrirá automaticamente o site no endereço `http://localhost:3000`.

### Opção 3: Publicação em 1 Clique (Deploy)
Você pode subir esta pasta diretamente para a **Vercel**, **Netlify** ou **GitHub Pages** sem precisar de qualquer configuração adicional.

---

## 🎨 Como Personalizar para Apresentar no Seu Portfólio

### 1. Alterar o número de WhatsApp
No arquivo [`scripts/app.js`](scripts/app.js), altere a constante `whatsappNumber` na linha 11:
```javascript
const CONFIG = {
  whatsappNumber: '5511999998888', // Coloque o DDD + número do cliente ou seu número de teste
  // ...
};
```

### 2. Adicionar ou editar produtos
No arquivo [`scripts/products.js`](scripts/products.js), edite o array `PRODUCTS` para trocar fotos, nomes, ingredientes e valores em R$.

### 3. Colocar o seu nome nos créditos de desenvolvimento
No arquivo [`index.html`](index.html), localize o rodapé na linha ~420 e substitua:
```html
<strong class="text-[#E8B985]">Seu Nome / Agência</strong>
```
pelo seu nome profissional ou nome do seu estúdio!

---

## 📄 Licença & Uso

Este projeto foi construído para servir como **modelo de portfólio comercial** para apresentação a clientes e prospects do nicho de alimentação, confeitaria e gastronomia premium. Sinta-se livre para adaptar, personalizar a marca e comercializar seus projetos derivados.

