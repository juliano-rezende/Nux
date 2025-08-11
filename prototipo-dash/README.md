# NUX - Sistema Gastronômico

Um sistema SaaS completo para gerenciamento de restaurantes, cafeterias e lanchonetes, desenvolvido com HTML, CSS e JavaScript puro.

## 🎨 Design

- **Estilo**: Minimalista e intuitivo
- **Paleta de Cores**: Tons suaves e acolhedores com destaque para azul, verde e laranja
- **Tipografia**: Inter (fonte principal)
- **Responsivo**: Otimizado para desktop, tablet e mobile

## 🚀 Funcionalidades

### 1. **Sistema de Login**
- Autenticação por tipo de usuário (Administrador/Funcionário)
- Interface limpa e moderna
- Validação de campos obrigatórios

### 2. **Dashboard Principal**
- Visão geral com KPIs importantes
- Estatísticas de faturamento e pedidos
- Ações rápidas para módulos principais
- Cards informativos com hover effects

### 3. **Catálogo Digital**
- **Modo Totem**: Interface fullscreen para clientes
- **Modo Garçom**: Lista rápida para atendimento
- **Modo Tablet**: Interface amigável para mesas
- Sistema de carrinho funcional
- Filtros por categoria e busca

### 4. **Caixa**
- Visualização de mesas com comandas abertas
- Status das mesas (livre, ocupada, aguardando)
- Acesso rápido aos detalhes das mesas

### 5. **Controle de Comandas**
- Lista de todas as comandas ativas
- Atualização de status (Aguardando → Preparando → Pronto)
- Informações detalhadas de cada pedido

### 6. **Gestão de Mesas**
- Mapa visual do salão
- Estados das mesas com cores diferenciadas
- Informações de capacidade e status

### 7. **Tela da Cozinha**
- Lista de pedidos em preparação
- Tempo de espera dos pedidos
- Botão para marcar como concluído

### 8. **Controle de Estoque**
- Lista de produtos com níveis de estoque
- Status visual (Suficiente, Baixo, Em Falta)
- Funcionalidades para orçamentos e movimentações

### 9. **Módulo de Delivery**
- Gestão de pedidos de entrega
- Status de entrega
- Mapa para roteirização (placeholder)

### 10. **Configurações**
- Gerenciamento de usuários
- Dados da empresa
- Configurações de faturamento

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com CSS Grid e Flexbox
- **JavaScript**: Funcionalidades interativas e gerenciamento de estado
- **SVG**: Ícones vetoriais integrados
- **Responsive Design**: Media queries para diferentes dispositivos

## 📁 Estrutura do Projeto

```
sass/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos completos
├── js/
│   └── main.js        # Lógica da aplicação
├── assets/
│   ├── img/           # Imagens do sistema
│   └── icons/         # Ícones SVG
└── README.md          # Documentação
```

## 🎯 Características Técnicas

### **CSS**
- Variáveis CSS para fácil personalização
- Sistema de grid responsivo
- Animações suaves e transições
- Sombras e efeitos visuais
- Media queries para responsividade

### **JavaScript**
- Arquitetura modular
- Dados mockados para demonstração
- Sistema de navegação SPA
- Gerenciamento de estado local
- Event listeners configuráveis

### **Responsividade**
- Breakpoints: 1024px, 768px, 480px
- Layout adaptativo para diferentes telas
- Sidebar colapsável em dispositivos móveis
- Grid responsivo para produtos e estatísticas

## 🚀 Como Usar

1. **Clone o repositório**
2. **Abra o arquivo `index.html`** em um navegador moderno
3. **Faça login** com qualquer usuário e senha
4. **Navegue pelos módulos** usando o menu lateral

## 🔧 Personalização

### **Cores**
As cores podem ser facilmente alteradas editando as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-color: #6366F1;
    --secondary-color: #10B981;
    --accent-color: #F59E0B;
    /* ... outras cores */
}
```

### **Dados Mockados**
Os dados de exemplo estão no arquivo `main.js` e podem ser modificados para simular diferentes cenários.

## 📱 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resoluções**: 1920x1080, 1366x768, 768x1024, 375x667

## 🔮 Próximos Passos

- [ ] Integração com backend real
- [ ] Sistema de autenticação robusto
- [ ] Banco de dados persistente
- [ ] Relatórios e analytics
- [ ] Sistema de notificações em tempo real
- [ ] Integração com APIs de pagamento
- [ ] App mobile nativo

## 📄 Licença

Este projeto é desenvolvido para fins educacionais e comerciais.

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

---

**NUX - Transformando a gestão gastronômica com tecnologia moderna e design intuitivo.**
