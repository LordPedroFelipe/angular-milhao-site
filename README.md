# PIX/EBOOK do Milhão — Starter (Angular 19 + Material, Standalone)

Projeto base inspirado no layout enviado, com **menu por rota**, **Angular Material**, **HTML5/CSS3** moderno e **arquitetura sênior** usando *standalone components* e *lazy routes*.

## 🧭 Passo a passo — criando do zero (se quiser replicar)
> (Você já pode pular para **Como rodar**; este guia explica os comandos para aprender/ensinar.)

```bash
# 1) CLI
npm i -g @angular/cli

# 2) Criar projeto
ng new angular-milhao-site --routing=false --style=scss --standalone

cd angular-milhao-site

# 3) Angular Material
ng add @angular/material

# 4) Criar rotas + páginas (exemplos)
ng g c pages/home --standalone --flat=false
ng g c pages/winners --standalone
ng g c pages/about --standalone
ng g c pages/contact --standalone
ng g c pages/editions --standalone
ng g c pages/my-ebooks --standalone
ng g c pages/my-titles --standalone
ng g c pages/buy --standalone

# 5) Criar arquivo de rotas app.routes.ts e configurar provideRouter em main.ts
# 6) Montar o layout no AppComponent com MatToolbar/MatSidenav/MatList
# 7) Global styles com CSS Variables e o tema da sua brand
```

## ▶️ Como rodar este projeto (o que veio no ZIP)
```bash
# Dentro da pasta do projeto
npm install
npm start  # abre em http://localhost:4200
```

## 🧱 Arquitetura
- **Angular 19** com *standalone components* (sem módulos).
- **Lazy loading por rota** (cada página é carregada sob demanda).
- **Angular Material** (Toolbar, Sidenav, Button, Icon, Card, List, Menu).
- **Layout responsivo** com *sidenav* no mobile e *toolbar* no desktop.
- **Design System** simples via **CSS Variables** (cores, card, sombra, etc.).
- **Páginas**:
  - `/` Início
  - `/ganhadores`
  - `/quem-somos`
  - `/fale-conosco`
  - `/edicoes-anteriores`
  - `/meus-ebooks`
  - `/meus-titulos`
  - `/comprar`

## 🧑‍💻 Próximos passos
- Conectar páginas à API real (HTTP services, interceptors, guards).
- Adicionar **Auth** (MSAL/OAuth/JWT) e área autenticada (Meus Ebooks/Títulos).
- Criar **Theme Material** customizado (paleta amarela/preta + acento verde).
- Implementar **SEO** (meta tags, *link rel=preload*, Open Graph).
- Automatizar **CI/CD** (GitHub Actions, Vercel/Netlify/Azure Static Web Apps).
- Medições de **Core Web Vitals** e otimizações de imagem (ngOptimizedImage).

---

> Qualquer ajuste de layout/branding/UX me diga que eu atualizo os componentes.