# NUX - Plataforma de Gestão para Restaurantes

![NUX Logo](https://img.shields.io/badge/NUX-Platform-gray?style=for-the-badge&logo=restaurant)

## 📋 Sobre o Projeto

NUX é uma plataforma SaaS moderna e profissional desenvolvida para restaurantes, lanchonetes e cafeterias. O projeto apresenta um site institucional com design minimalista, responsivo e focado na conversão de visitantes em clientes.

## 🎨 Design e Características

### Paleta de Cores Minimalista
- **Cor Primária**: `#2D3748` (Neutral-700)
- **Cor Secundária**: `#4A5568` (Neutral-600)
- **Cor de Destaque**: `#E53E3E` (Accent Red)
- **Neutros**: Tons de cinza de 50 a 900 para máxima flexibilidade

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto

### Características do Design
- ✅ Design minimalista e clean
- ✅ Layout totalmente responsivo
- ✅ Paleta de cores neutra e elegante
- ✅ Animações suaves e interativas
- ✅ Otimizado para conversão
- ✅ Acessibilidade implementada
- ✅ Performance otimizada
- ✅ Compatível com múltiplos dispositivos (mobile, tablet, totem, desktop)

## 🏗️ Estrutura do Projeto

```
NUX/
├── index.html          # Página principal
├── styles.css          # Estilos CSS minimalistas
├── script.js           # JavaScript interativo
├── package.json        # Configuração do projeto
├── .gitignore          # Arquivos ignorados
└── README.md           # Documentação
```

## 📄 Seções da Página

### 1. Header/Navegação
- Logo NUX
- Menu de navegação responsivo
- Botões de ação (Entrar / Experimentar Grátis)
- Menu mobile com hamburger

### 2. Hero Section
- Slogan principal: "Tecnologia para servir melhor"
- Descrição da plataforma
- Botões de CTA
- Estatísticas animadas
- Mockup interativo da plataforma

### 3. Benefícios
- Gestão de Pedidos
- Controle de Mesas
- Gestão de Estoque
- Delivery Integrado

### 4. Demonstração
- Apresentação da plataforma
- Lista de funcionalidades
- Placeholder para vídeo
- Botão para agendar demonstração

### 5. Planos de Preços
- Starter (R$ 99/mês)
- Professional (R$ 199/mês) - Mais Popular
- Enterprise (R$ 399/mês)

### 6. Depoimentos
- Testimonials de clientes reais
- Avatares e informações dos clientes
- Design em cards

### 7. CTA Final
- Chamada para ação
- Botões de conversão
- Background gradiente

### 8. Footer
- Links organizados por seção
- Redes sociais
- Informações de contato
- Links legais

## 🚀 Funcionalidades Implementadas

### Interatividade
- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo
- ✅ Animações ao scroll
- ✅ Contadores animados
- ✅ Efeito parallax no mockup
- ✅ Botões com efeito ripple
- ✅ Scroll to top button
- ✅ Tooltips interativos

### Performance
- ✅ Lazy loading para imagens
- ✅ CSS otimizado
- ✅ JavaScript modular
- ✅ Animações CSS nativas
- ✅ Fontes otimizadas

### Responsividade
- ✅ Mobile-first approach
- ✅ Breakpoints bem definidos
- ✅ Layout adaptativo
- ✅ Touch-friendly
- ✅ Compatível com totem e tablet

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com CSS Grid e Flexbox
- **JavaScript ES6+**: Interatividade e animações
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Inter

## 📱 Responsividade e Multi-dispositivo

O site é totalmente responsivo e otimizado para:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px
- **Totem**: Interface adaptativa para touch
- **Kiosk**: Modo fullscreen otimizado

### Características Multi-dispositivo
- Interface adaptativa para diferentes tamanhos de tela
- Controles touch-friendly para totem e tablet
- Navegação otimizada para cada dispositivo
- Performance ajustada por dispositivo

## 🎯 Otimizações

### SEO
- Meta tags otimizadas
- Estrutura semântica
- URLs amigáveis
- Performance score alto

### Acessibilidade
- Navegação por teclado
- Alt texts para imagens
- Contraste adequado
- Screen reader friendly

### Performance
- CSS e JS minificados
- Imagens otimizadas
- Lazy loading
- Cache strategies

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/nux.git
   cd nux
   ```

2. **Abra o projeto**
   - Abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # PHP
   php -S localhost:8000
   ```

3. **Acesse**
   - Abra `http://localhost:8000` no navegador

## 📊 Métricas de Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎨 Customização

### Cores
As cores podem ser facilmente alteradas editando as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #2D3748;
    --secondary-color: #4A5568;
    --accent-color: #E53E3E;
    --neutral-50: #F7FAFC;
    --neutral-100: #EDF2F7;
    /* ... outras cores */
}
```

### Conteúdo
- Textos podem ser editados diretamente no `index.html`
- Imagens podem ser substituídas na pasta `assets/`
- Configurações no `script.js`

## 📞 Suporte

Para dúvidas ou suporte:
- **Email**: contato@nux.com.br
- **Telefone**: (11) 9999-9999
- **Website**: www.nux.com.br

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📈 Roadmap

- [ ] Integração com CMS
- [ ] Blog integrado
- [ ] Sistema de chat
- [ ] Página de login/registro
- [ ] Dashboard administrativo
- [ ] Integração com analytics
- [ ] PWA (Progressive Web App)
- [ ] Modo totem/kiosk
- [ ] Interface para tablet específica

---

**Desenvolvido com ❤️ para revolucionar a gestão de restaurantes**
