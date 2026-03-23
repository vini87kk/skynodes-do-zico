# 🚀 skyNode Solutions - Server Monitor

Sistema de monitoramento em tempo real para servidores, desenvolvido como projeto de estudo de Desenvolvimento de Sistemas (2º ano).

## 🛠️ Tecnologias Utilizadas
- **Back-end:** Node.js & Express
- **Front-end:** HTML Semântico, CSS Grid/Flexbox e JavaScript (OOP)
- **Comunicação:** Fetch API (JSON)

## 📋 Árvore DOM do Projeto
A estrutura hierárquica da interface segue o padrão abaixo:

\`\`\`
Hierarquia da Árvore DOM - skyNode Solutions
--------------------------------------------
Document
 └── <html>
      ├── <head> (Metadados e Link CSS)
      └── <body>
           ├── <header>
           │    └── <h1> "skyNode Solutions"
           ├── <main>
           │    └── <section id="monitor-grid">
           │         ├── <article id="card-cpu">
           │         │    ├── <h3> "CPU"
           │         │    └── <span id="cpu" class="value">
           │         ├── <article id="card-ram">
           │         │    ├── <h3> "RAM"
           │         │    └── <span id="ram" class="value">
           │         └── <article id="card-temp">
           │              ├── <h3> "Temperatura"
           │              └── <span id="temp" class="value">
           ├── <footer>
           │    └── <p> "Monitoramento Real-Time"
           └── <script src="js/dashboard.js">
\`\`\`

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o sistema na sua máquina:

1. **Clonar o repositório:**
   \`\`\`
   git clone <link-do-seu-repositorio>
   \`\`\`

2. **Instalar as dependências:**
   (Isso vai ler o package.json e criar a pasta node_modules que ignoramos no git)
   \`\`\`
   npm install
   \`\`\`

3. **Iniciar o servidor:**
   \`\`\`
   node server.js
   \`\`\`

4. **Acessar o Dashboard:**
   Abra o seu navegador e vá para: \`http://localhost:3000\`

---
*Desenvolvido para fins educacionais - skyNode Solutions*