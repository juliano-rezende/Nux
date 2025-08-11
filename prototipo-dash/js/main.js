// ===== DADOS MOCKADOS =====
const mockData = {
    categories: [
        { id: 1, name: 'Entradas', icon: '🥗' },
        { id: 2, name: 'Pratos Principais', icon: '🍽️' },
        { id: 3, name: 'Sobremesas', icon: '🍰' },
        { id: 4, name: 'Bebidas', icon: '🥤' },
        { id: 5, name: 'Cafés', icon: '☕' }
    ],
    
    products: [
        // Entradas
        {
            id: 1,
            name: 'Salada Caesar',
            description: 'Salada fresca com alface romana, croutons, parmesão e molho caesar',
            price: 18.90,
            category: 1,
            stock: 50,
            image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop'
        },
        {
            id: 2,
            name: 'Bruschetta',
            description: 'Pão italiano torrado com tomate, manjericão e azeite de oliva',
            price: 15.50,
            category: 1,
            stock: 35,
            image: 'https://images.unsplash.com/photo-1572442388796-11668a64e546?w=400&h=300&fit=crop'
        },
        {
            id: 3,
            name: 'Carpaccio',
            description: 'Finas fatias de carne crua com azeite, limão e parmesão',
            price: 28.90,
            category: 1,
            stock: 20,
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'
        },
        
        // Pratos Principais
        {
            id: 4,
            name: 'Pasta Carbonara',
            description: 'Massa italiana com bacon, ovos, queijo parmesão e pimenta preta',
            price: 32.50,
            category: 2,
            stock: 30,
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop'
        },
        {
            id: 5,
            name: 'Risoto de Funghi',
            description: 'Arroz arbóreo com cogumelos, parmesão e manteiga',
            price: 29.90,
            category: 2,
            stock: 25,
            image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop'
        },
        {
            id: 6,
            name: 'Bife à Parmegiana',
            description: 'Filé mignon empanado com molho de tomate e queijo derretido',
            price: 45.90,
            category: 2,
            stock: 18,
            image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop'
        },
        {
            id: 7,
            name: 'Hambúrguer Gourmet',
            description: 'Pão artesanal, carne angus, queijo cheddar e molho especial',
            price: 38.90,
            category: 2,
            stock: 22,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
        },
        
        // Sobremesas
        {
            id: 8,
            name: 'Tiramisu',
            description: 'Sobremesa italiana com mascarpone, café e cacau em pó',
            price: 15.90,
            category: 3,
            stock: 20,
            image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop'
        },
        {
            id: 9,
            name: 'Cheesecake',
            description: 'Torta de queijo cremosa com calda de frutas vermelhas',
            price: 18.50,
            category: 3,
            stock: 15,
            image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop'
        },
        {
            id: 10,
            name: 'Pudim de Leite',
            description: 'Pudim tradicional brasileiro com calda de caramelo',
            price: 12.90,
            category: 3,
            stock: 30,
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop'
        },
        
        // Bebidas
        {
            id: 11,
            name: 'Limonada Natural',
            description: 'Limonada fresca feita com limões orgânicos e hortelã',
            price: 8.90,
            category: 4,
            stock: 40,
            image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop'
        },
        {
            id: 12,
            name: 'Suco de Laranja',
            description: 'Suco natural de laranja prensada na hora',
            price: 7.50,
            category: 4,
            stock: 35,
            image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop'
        },
        {
            id: 13,
            name: 'Água de Coco',
            description: 'Água de coco fresca e natural',
            price: 6.90,
            category: 4,
            stock: 50,
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
        },
        
        // Cafés
        {
            id: 14,
            name: 'Cappuccino',
            description: 'Café expresso com leite vaporizado e espuma de leite',
            price: 9.90,
            category: 5,
            stock: 45,
            image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop'
        },
        {
            id: 15,
            name: 'Latte Macchiato',
            description: 'Leite vaporizado com café expresso e espuma suave',
            price: 10.50,
            category: 5,
            stock: 38,
            image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop'
        },
        {
            id: 16,
            name: 'Mocha',
            description: 'Café expresso com chocolate e leite vaporizado',
            price: 11.90,
            category: 5,
            stock: 25,
            image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop'
        }
    ],
    
    // Comandas do sistema
    orders: [
        {
            id: '001',
            table: 'Mesa 1',
            customerName: 'João Silva',
            items: [
                { id: 1, name: 'Pasta Carbonara', quantity: 2, price: 32.50 },
                { id: 3, name: 'Tiramisu', quantity: 1, price: 15.90 }
            ],
            total: 80.90,
            status: 'active',
            time: '19:30',
            notes: 'Sem glúten na pasta'
        },
        {
            id: '002',
            table: 'Mesa 3',
            customerName: 'Maria Santos',
            items: [
                { id: 2, name: 'Risotto de Funghi', quantity: 1, price: 28.00 },
                { id: 4, name: 'Gelato', quantity: 2, price: 12.00 }
            ],
            total: 52.00,
            status: 'pending',
            time: '19:45',
            notes: 'Risotto bem cremoso'
        },
        {
            id: '003',
            table: 'Mesa 5',
            customerName: 'Carlos Oliveira',
            items: [
                { id: 1, name: 'Pasta Carbonara', quantity: 1, price: 32.50 },
                { id: 5, name: 'Espresso', quantity: 2, price: 8.00 }
            ],
            total: 48.50,
            status: 'completed',
            time: '18:15',
            notes: 'Café forte'
        },
        {
            id: '004',
            table: 'Mesa 2',
            customerName: 'Ana Costa',
            items: [
                { id: 6, name: 'Salada Caprese', quantity: 1, price: 22.00 },
                { id: 7, name: 'Sopa de Tomate', quantity: 1, price: 18.00 }
            ],
            total: 40.00,
            status: 'active',
            time: '20:00',
            notes: 'Sem cebola na salada'
        }
    ],
    
    // Mesas do restaurante
    tables: [
        { id: 1, number: 'Mesa 1', status: 'occupied', capacity: 4, x: 100, y: 100 },
        { id: 2, number: 'Mesa 2', status: 'occupied', capacity: 2, x: 200, y: 100 },
        { id: 3, number: 'Mesa 3', status: 'occupied', capacity: 6, x: 300, y: 100 },
        { id: 4, number: 'Mesa 4', status: 'free', capacity: 4, x: 100, y: 200 },
        { id: 5, number: 'Mesa 5', status: 'free', capacity: 2, x: 200, y: 200 },
        { id: 6, number: 'Mesa 6', status: 'waiting', capacity: 8, x: 300, y: 200 }
    ],
    
    dashboardStats: {
        totalRevenue: 15420.50,
        todayRevenue: 1250.80,
        totalOrders: 156,
        todayOrders: 12,
        occupiedTables: 8,
        totalTables: 20
    }
};

// ===== ESTADO GLOBAL =====
let currentUser = null;
let currentView = 'dashboard';
let cart = [];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    showLoginScreen();
}

// ===== CONFIGURAÇÃO DE EVENTOS =====
function setupEventListeners() {
    
    // Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Seleção de tipo de usuário
    const typeBtns = document.querySelectorAll('.type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', handleUserTypeSelection);
    });
    
    // Navegação
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', handleNavigation);
    });
    
    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Modal
    const modalClose = document.getElementById('modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) closeModal();
        });
    }
    
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    } else {
        console.error('Sidebar toggle button não encontrado!');
    }
    
    // Redimensionamento da janela
    window.addEventListener('resize', handleResize);
    
    // Restaurar estado do sidebar
    restoreSidebarState();
}

// ===== FUNÇÕES DE LOGIN =====
function handleUserTypeSelection(e) {
    document.querySelectorAll('.type-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userType = document.querySelector('.type-btn.active').dataset.type;
    
    if (username && password) {
        // Simular autenticação
        currentUser = {
            name: username,
            type: userType,
            avatar: 'assets/img/avatar.jpg'
        };
        
        showMainSystem();
        showToast('Login realizado com sucesso!', 'success');
    } else {
        showToast('Por favor, preencha todos os campos.', 'error');
    }
}

function handleLogout() {
    currentUser = null;
    currentView = 'dashboard';
    cart = [];
    showLoginScreen();
    showToast('Logout realizado com sucesso!', 'info');
}

// ===== NAVEGAÇÃO =====
function handleNavigation(e) {
    e.preventDefault();
    
    const view = e.currentTarget.dataset.view;
    if (view) {
        setActiveNavigation(view);
        loadView(view);
    }
}

function setActiveNavigation(view) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.view === view) {
            item.classList.add('active');
        }
    });
}

function loadView(view) {
    currentView = view;
    document.getElementById('page-title').textContent = getViewTitle(view);
    
    const pageContent = document.getElementById('page-content');
    
    switch(view) {
        case 'dashboard':
            pageContent.innerHTML = generateDashboardHTML();
            break;
        case 'catalog':
            pageContent.innerHTML = generateCatalogHTML();
            // Aguardar um pouco para garantir que o DOM esteja renderizado
            setTimeout(() => {
                setupCatalogEvents();
            }, 50);
            break;
        case 'cashier':
            pageContent.innerHTML = generateCashierHTML();
            setupCashierEvents();
            break;
        case 'orders':
            pageContent.innerHTML = generateOrdersHTML();
            setupOrdersEvents();
            break;
        case 'tables':
            pageContent.innerHTML = generateTablesHTML();
            setupTablesEvents();
            break;
        case 'kitchen':
            pageContent.innerHTML = generateKitchenHTML();
            setupKitchenEvents();
            break;
        case 'inventory':
            pageContent.innerHTML = generateInventoryHTML();
            setupInventoryEvents();
            break;
        case 'delivery':
            pageContent.innerHTML = generateDeliveryHTML();
            setupDeliveryEvents();
            break;
        case 'settings':
            pageContent.innerHTML = generateSettingsHTML();
            setupSettingsEvents();
            break;
        case 'comandas':
            return `
                <div class="orders-container">
                    <!-- Header com Botão Criar Comanda -->
                    <div class="orders-header">
                        <div class="header-left">
                            <h2>📋 Controle de Comandas</h2>
                            <p class="subtitle">Gerencie comandas do tipo card com código de barras</p>
                        </div>
                        <div class="header-right">
                            <button class="btn btn-primary" onclick="createNewOrder()">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 5v14M5 12h14"/>
                                </svg>
                                Criar Comanda
                            </button>
                        </div>
                    </div>
                    
                    <!-- Filtros e Busca -->
                    <div class="orders-filters">
                        <div class="search-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                            <input type="text" class="search-input" placeholder="Buscar por código, mesa ou cliente..." onkeyup="filterOrders(this.value)">
                        </div>
                        <div class="filter-buttons">
                            <button class="filter-btn active" data-filter="all" onclick="filterOrdersByStatus('all')">Todas</button>
                            <button class="filter-btn" data-filter="active" onclick="filterOrdersByStatus('active')">Ativas</button>
                            <button class="filter-btn" data-filter="pending" onclick="filterOrdersByStatus('pending')">Pendentes</button>
                            <button class="filter-btn" data-filter="completed" onclick="filterOrdersByStatus('completed')">Concluídas</button>
                        </div>
                    </div>
                    
                    <!-- Grid de Comandas como Cards -->
                    <div class="orders-grid" id="ordersGrid">
                        <!-- Comanda 001 - Card com Borda Laranja (Ativa) -->
                        <div class="order-card" data-status="active">
                            <div class="order-header">
                                <h3>Comanda #001</h3>
                                <span class="order-time">19:30</span>
                            </div>
                            <div class="order-details">
                                <p><strong>Mesa:</strong> Mesa 1</p>
                                <p><strong>Cliente:</strong> João Silva</p>
                                <p><strong>Total:</strong> R$ 80,90</p>
                                <p><strong>Status:</strong> Ocupada</p>
                                <p><strong>Observações:</strong> Sem glúten na pasta</p>
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary" onclick="viewOrderDetails('001')">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        <!-- Comanda 002 - Card com Borda Laranja (Ativa) -->
                        <div class="order-card" data-status="active">
                            <div class="order-header">
                                <h3>Comanda #002</h3>
                                <span class="order-time">19:45</span>
                            </div>
                            <div class="order-details">
                                <p><strong>Mesa:</strong> Mesa 3</p>
                                <p><strong>Cliente:</strong> Maria Santos</p>
                                <p><strong>Total:</strong> R$ 52,00</p>
                                <p><strong>Status:</strong> Ocupada</p>
                                <p><strong>Observações:</strong> Risotto bem cremoso</p>
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary" onclick="viewOrderDetails('002')">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        <!-- Comanda 003 - Card com Borda Verde (Aguardando) -->
                        <div class="order-card" data-status="pending">
                            <div class="order-header">
                                <h3>Comanda #003</h3>
                                <span class="order-time">18:15</span>
                            </div>
                            <div class="order-details">
                                <p><strong>Mesa:</strong> Mesa 5</p>
                                <p><strong>Cliente:</strong> Carlos Oliveira</p>
                                <p><strong>Total:</strong> R$ 48,50</p>
                                <p><strong>Status:</strong> Aguardando</p>
                                <p><strong>Observações:</strong> Café forte</p>
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary" onclick="viewOrderDetails('003')">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        <!-- Comanda 004 - Card com Borda Laranja (Ativa) -->
                        <div class="order-card" data-status="active">
                            <div class="order-header">
                                <h3>Comanda #004</h3>
                                <span class="order-time">20:00</span>
                            </div>
                            <div class="order-details">
                                <p><strong>Mesa:</strong> Mesa 2</p>
                                <p><strong>Cliente:</strong> Ana Costa</p>
                                <p><strong>Total:</strong> R$ 40,00</p>
                                <p><strong>Status:</strong> Ocupada</p>
                                <p><strong>Observações:</strong> Sem cebola na salada</p>
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary" onclick="viewOrderDetails('004')">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        <!-- Comanda 005 - Card com Borda Azul (Preparando) -->
                        <div class="order-card" data-status="preparing">
                            <div class="order-header">
                                <h3>Comanda #005</h3>
                                <span class="order-time">20:15</span>
                            </div>
                            <div class="order-details">
                                <p><strong>Mesa:</strong> Mesa 4</p>
                                <p><strong>Cliente:</strong> Pedro Santos</p>
                                <p><strong>Total:</strong> R$ 65,00</p>
                                <p><strong>Status:</strong> Preparando</p>
                                <p><strong>Observações:</strong> Pasta al dente</p>
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary" onclick="viewOrderDetails('005')">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>

                        <!-- Comanda 006 - Card com Borda Cinza (Concluída) -->
                        <div class="order-card" data-status="completed">
                            <div class="order-header">
                                <h3>Comanda #006</h3>
                                <span class="order-time">17:30</span>
                            </div>
                            <div class="order-details">
                                <p><strong>Mesa:</strong> Mesa 6</p>
                                <p><strong>Cliente:</strong> Lucía Fernandez</p>
                                <p><strong>Total:</strong> R$ 38,50</p>
                                <p><strong>Status:</strong> Concluída</p>
                                <p><strong>Observações:</strong> Sem lactose</p>
                            </div>
                            <div class="order-actions">
                                <button class="btn btn-primary" onclick="viewOrderDetails('006')">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    }
}

function getViewTitle(view) {
    const titles = {
        dashboard: 'Dashboard',
        catalog: 'Catálogo Digital',
        cashier: 'Caixa',
        orders: 'Controle de Comandas',
        tables: 'Gestão de Mesas',
        kitchen: 'Tela da Cozinha',
        inventory: 'Estoque',
        delivery: 'Delivery',
        settings: 'Configurações'
    };
    return titles[view] || 'Dashboard';
}

// ===== GERAÇÃO DE HTML =====
function generateDashboardHTML() {
    const stats = mockData.dashboardStats;
    
    return `
        <div class="dashboard-grid">
            <div class="stats-row">
                <div class="stat-card">
                    <div class="stat-icon">💰</div>
                    <div class="stat-content">
                        <h3>Faturamento Hoje</h3>
                        <p class="stat-value">R$ ${stats.todayRevenue.toFixed(2)}</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-content">
                        <h3>Total Faturamento</h3>
                        <p class="stat-value">R$ ${stats.totalRevenue.toFixed(2)}</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">📋</div>
                    <div class="stat-content">
                        <h3>Pedidos Hoje</h3>
                        <p class="stat-value">${stats.todayOrders}</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-icon">🪑</div>
                    <div class="stat-content">
                        <h3>Mesas Ocupadas</h3>
                        <p class="stat-value">${stats.occupiedTables}/${stats.totalTables}</p>
                    </div>
                </div>
            </div>
            
            <div class="charts-row">
                <div class="chart-card">
                    <h3>Faturamento Semanal</h3>
                    <canvas id="revenueChart" width="400" height="200"></canvas>
                </div>
                
                <div class="chart-card">
                    <h3>Pedidos por Categoria</h3>
                    <canvas id="categoryChart" width="400" height="200"></canvas>
                </div>
            </div>
            
            <div class="quick-actions">
                <h3>Ações Rápidas</h3>
                <div class="action-buttons">
                    <button class="btn" onclick="openNewOrder()">Nova Comanda</button>
                    <button class="btn btn-secondary" onclick="openTableManagement()">Gerenciar Mesas</button>
                    <button class="btn btn-secondary" onclick="openInventory()">Ver Estoque</button>
                </div>
            </div>
        </div>
    `;
}

function generateCatalogHTML() {
    return `
        <div class="catalog-container">
            <div class="catalog-header">
                <h2>Catálogo Digital</h2>
                <div class="view-mode-selector">
                    <button class="view-btn active" data-mode="totem">🖥️ Totem</button>
                    <button class="view-btn" data-mode="waiter">👨‍💼 Garçom</button>
                    <button class="view-btn" data-mode="tablet">📱 Tablet</button>
                </div>
            </div>
            
            <div class="catalog-filters">
                <div class="search-box">
                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input type="text" id="product-search" placeholder="Buscar produtos...">
                </div>
                <div class="category-filters">
                    <button class="category-btn active" data-category="all">🍽️ Todas as Categorias</button>
                    ${mockData.categories.map(cat => 
                        `<button class="category-btn" data-category="${cat.id}">${cat.icon} ${cat.name}</button>`
                    ).join('')}
                </div>
            </div>
            
            <div class="products-grid" id="products-grid">
                ${generateProductsGrid()}
            </div>
        </div>
    `;
}

function generateProductsGrid() {
    return mockData.products.map(product => {
        const category = mockData.categories.find(c => c.id === product.category);
        const stockStatus = getStockStatus(product.stock);
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop'">
                    <div class="product-overlay">
                        <div class="stock-badge ${stockStatus.class}">${stockStatus.text}</div>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-category">${category?.icon || '🍽️'} ${category?.name || 'Sem categoria'}</p>
                    <p class="product-description">${product.description || 'Descrição não disponível'}</p>
                    <div class="product-details">
                        <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                        <span class="product-stock">Estoque: ${product.stock}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== FUNÇÕES DO CARRINHO =====
function addToCart(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showToast(`${product.name} adicionado ao carrinho!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!cartItems || !cartTotal || !cartCount) return;
    
    if (cart.length > 0) {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button class="decrease-btn" data-item-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-btn" data-item-id="${item.id}">+</button>
                    <button class="remove-btn" data-item-id="${item.id}">🗑️</button>
                </div>
            </div>
        `).join('');
        
        // Adicionar event listeners para os botões do carrinho
        setTimeout(() => {
            document.querySelectorAll('.decrease-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const itemId = parseInt(this.dataset.itemId);
                    const item = cart.find(item => item.id === itemId);
                    if (item) {
                        updateQuantity(itemId, item.quantity - 1);
                    }
                });
            });
            
            document.querySelectorAll('.increase-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const itemId = parseInt(this.dataset.itemId);
                    const item = cart.find(item => item.id === itemId);
                    if (item) {
                        updateQuantity(itemId, item.quantity + 1);
                    }
                });
            });
            
            document.querySelectorAll('.remove-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const itemId = parseInt(this.dataset.itemId);
                    removeFromCart(itemId);
                });
            });
        }, 10);
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
        clearCartBtn.style.display = 'block';
        checkoutBtn.style.display = 'block';
    } else {
        cartItems.innerHTML = '<div class="empty-cart"><p>Seu carrinho está vazio</p><p>Adicione produtos para começar</p></div>';
        cartCount.textContent = '0';
        clearCartBtn.style.display = 'none';
        checkoutBtn.style.display = 'none';
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            updateCartDisplay();
        }
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Carrinho vazio!', 'error');
        return;
    }
    
    // Simular criação de pedido
    const order = {
        id: Date.now(),
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'waiting',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
    
    mockData.orders.push(order);
    cart = [];
    updateCartDisplay();
    
    showToast('Pedido realizado com sucesso!', 'success');
    
    // Redirecionar para controle de comandas
    loadView('orders');
}

function clearCart() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        cart = [];
        updateCartDisplay();
        showToast('Carrinho limpo!', 'info');
    }
}

// ===== FUNÇÕES AUXILIARES =====
function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('main-system').classList.add('hidden');
}

function showMainSystem() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-system').classList.remove('hidden');
    
    // Atualizar informações do usuário
    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('user-avatar').src = currentUser.avatar;
    
    // Carregar dashboard inicial
    loadView('dashboard');
}

function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function openModal(title, content) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Em mobile, alterna entre aberto/fechado
        sidebar.classList.toggle('mobile-open');
        if (sidebar.classList.contains('mobile-open')) {
            // Adiciona overlay para fechar ao clicar fora
            addMobileOverlay();
        } else {
            removeMobileOverlay();
        }
    } else {
        // Em desktop, alterna entre collapsed/expanded
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('sidebar-collapsed');
        
        // Salva o estado no localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    }
}

function addMobileOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
        cursor: pointer;
    `;
    
    overlay.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('mobile-open');
        removeMobileOverlay();
    });
    
    document.body.appendChild(overlay);
}

function removeMobileOverlay() {
    const overlay = document.querySelector('.mobile-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Função para restaurar o estado do sidebar
function restoreSidebarState() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
        const wasCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (wasCollapsed) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('sidebar-collapsed');
        }
    }
}

// Função para lidar com redimensionamento da janela
function handleResize() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Em mobile, remove classes de collapsed
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('sidebar-collapsed');
        sidebar.classList.remove('mobile-open');
        removeMobileOverlay();
    } else {
        // Em desktop, restaura estado
        restoreSidebarState();
    }
}

// ===== FUNÇÕES DE CONFIGURAÇÃO DE EVENTOS =====
function setupCatalogEvents() {
    console.log('Configurando eventos do catálogo...'); // Debug
    
    // Busca de produtos
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            if (query.length > 0) {
                filterProducts(query);
            } else {
                resetFilters();
            }
        });
    }
    
    // Filtros de categoria
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProductsByCategory(category);
        });
    });
    
    // Modo de visualização
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.view-btn').forEach(vBtn => vBtn.classList.remove('active'));
            this.classList.add('active');
            
            const mode = this.dataset.mode;
            changeViewMode(mode);
        });
    });
    
    console.log('Eventos do catálogo configurados com sucesso!'); // Debug
}

function changeViewMode(mode) {
    const productsGrid = document.getElementById('products-grid');
    
    // Remover todas as classes de modo
    productsGrid.classList.remove('totem-mode', 'waiter-mode', 'tablet-mode');
    
    switch(mode) {
        case 'totem':
            // Modo totem: produtos grandes para clientes
            productsGrid.classList.add('totem-mode');
            showToast('Modo Totem ativado - Interface para clientes', 'info');
            break;
            
        case 'waiter':
            // Modo garçom: produtos compactos para funcionários
            productsGrid.classList.add('waiter-mode');
            showToast('Modo Garçom ativado - Interface para funcionários', 'info');
            break;
            
        case 'tablet':
            // Modo tablet: produtos médios para mesas
            productsGrid.classList.add('tablet-mode');
            showToast('Modo Tablet ativado - Interface para mesas', 'info');
            break;
    }
}

function setupCashierEvents() {
    // Implementar eventos específicos do caixa
}

function setupOrdersEvents() {
    // Implementar eventos específicos das comandas
}

function setupTablesEvents() {
    // Implementar eventos específicos das mesas
}

function setupKitchenEvents() {
    // Implementar eventos específicos da cozinha
}

function setupInventoryEvents() {
    // Implementar eventos específicos do estoque
}

function setupDeliveryEvents() {
    // Implementar eventos específicos do delivery
}

function setupSettingsEvents() {
    // Implementar eventos específicos das configurações
}

// ===== FUNÇÕES DE FILTRO =====
function filterProducts(query) {
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        const category = product.querySelector('.product-category').textContent.toLowerCase();
        
        if (name.includes(query) || category.includes(query)) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });
    
    // Mostrar mensagem se nenhum produto for encontrado
    showFilterResults(visibleCount, query);
}

function filterProductsByCategory(categoryId) {
    const products = document.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    // Atualizar botões ativos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${categoryId}"]`).classList.add('active');
    
    products.forEach(product => {
        const productId = parseInt(product.dataset.productId);
        const productData = mockData.products.find(p => p.id === productId);
        
        if (categoryId === 'all' || productData.category === parseInt(categoryId)) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });
    
    // Mostrar mensagem de resultados
    const categoryName = categoryId === 'all' ? 'todas as categorias' : 
                        mockData.categories.find(c => c.id === parseInt(categoryId))?.name || 'categoria';
    showFilterResults(visibleCount, null, categoryName);
}

function showFilterResults(count, query = null, category = null) {
    const productsGrid = document.getElementById('products-grid');
    
    // Remover mensagem anterior se existir
    const existingMessage = productsGrid.querySelector('.filter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (count === 0) {
        const message = document.createElement('div');
        message.className = 'filter-message';
        message.innerHTML = `
            <div class="no-results">
                <h3>Nenhum produto encontrado</h3>
                <p>${query ? `Nenhum produto encontrado para "${query}"` : 
                           `Nenhum produto encontrado em ${category}`}</p>
                <button class="btn btn-secondary" onclick="resetFilters()">Limpar Filtros</button>
            </div>
        `;
        productsGrid.appendChild(message);
    }
}

function resetFilters() {
    // Limpar busca
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Resetar categoria para "todas"
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('[data-category="all"]').classList.add('active');
    
    // Mostrar todos os produtos
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.style.display = 'block';
    });
    
    // Remover mensagem de filtro
    const productsGrid = document.getElementById('products-grid');
    const existingMessage = productsGrid.querySelector('.filter-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    showToast('Filtros limpos!', 'info');
}

// ===== FUNÇÕES DE APERTURA DE MÓDULOS =====
function openNewOrder() {
    loadView('orders');
}

function openTableManagement() {
    loadView('tables');
}

function openInventory() {
    loadView('inventory');
}

// ===== FUNÇÕES DE CONTROLE DO CAIXA =====
function openCashRegister() {
    const content = `
        <h3>Abrir Caixa</h3>
        <div class="form-group">
            <label for="initial-amount">Valor Inicial (R$)</label>
            <input type="number" id="initial-amount" placeholder="0.00" step="0.01" min="0">
        </div>
        <div class="form-group">
            <label for="cashier-name">Nome do Operador</label>
            <input type="text" id="cashier-name" placeholder="Seu nome">
        </div>
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
            <button class="btn btn-primary" onclick="confirmOpenCashRegister()">Abrir Caixa</button>
        </div>
    `;
    openModal('Abrir Caixa', content);
}

function closeCashRegister() {
    const content = `
        <h3>Fechar Caixa</h3>
        <div class="form-group">
            <label for="final-amount">Valor Final (R$)</label>
            <input type="number" id="final-amount" placeholder="0.00" step="0.01" min="0">
        </div>
        <div class="form-group">
            <label for="closing-notes">Observações</label>
            <textarea id="closing-notes" placeholder="Observações sobre o fechamento"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
            <button class="btn btn-primary" onclick="confirmCloseCashRegister()">Fechar Caixa</button>
        </div>
    `;
    openModal('Fechar Caixa', content);
}

function addCashMovement() {
    const content = `
        <h3>Adicionar Movimento</h3>
        <div class="form-group">
            <label for="movement-type">Tipo</label>
            <select id="movement-type">
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
            </select>
        </div>
        <div class="form-group">
            <label for="movement-value">Valor (R$)</label>
            <input type="number" id="movement-value" placeholder="0.00" step="0.01" min="0">
        </div>
        <div class="form-group">
            <label for="movement-description">Descrição</label>
            <textarea id="movement-description" placeholder="Descrição do movimento"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
            <button class="btn btn-primary" onclick="confirmAddMovement()">Adicionar</button>
        </div>
    `;
    openModal('Adicionar Movimento', content);
}

function viewCashReport() {
    const content = `
        <h3>Relatório do Caixa</h3>
        <div class="report-summary">
            <div class="report-item">
                <span class="label">Período:</span>
                <span class="value">Hoje (27/10/2023)</span>
            </div>
            <div class="report-item">
                <span class="label">Total de Entradas:</span>
                <span class="value positive">R$ 1.250,00</span>
            </div>
            <div class="report-item">
                <span class="label">Total de Saídas:</span>
                <span class="value negative">R$ 180,00</span>
            </div>
            <div class="report-item total">
                <span class="label">Saldo Final:</span>
                <span class="value">R$ 1.570,00</span>
            </div>
        </div>
        <div class="form-actions">
            <button class="btn btn-outline" onclick="exportReport()">Exportar PDF</button>
            <button class="btn btn-primary" onclick="closeModal()">Fechar</button>
        </div>
    `;
    openModal('Relatório do Caixa', content);
}

function confirmOpenCashRegister() {
    const initialAmount = document.getElementById('initial-amount').value;
    const cashierName = document.getElementById('cashier-name').value;
    
    if (!initialAmount || !cashierName) {
        showToast('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    showToast(`Caixa aberto com R$ ${parseFloat(initialAmount).toFixed(2)} por ${cashierName}`, 'success');
    closeModal();
    loadView('cashier'); // Recarregar a view
}

function confirmCloseCashRegister() {
    const finalAmount = document.getElementById('final-amount').value;
    const closingNotes = document.getElementById('closing-notes').value;
    
    if (!finalAmount) {
        showToast('Por favor, informe o valor final.', 'error');
        return;
    }
    
    showToast(`Caixa fechado com R$ ${parseFloat(finalAmount).toFixed(2)}`, 'success');
    closeModal();
    loadView('cashier'); // Recarregar a view
}

function confirmAddMovement() {
    const type = document.getElementById('movement-type').value;
    const value = document.getElementById('movement-value').value;
    const description = document.getElementById('movement-description').value;
    
    if (!value || !description) {
        showToast('Por favor, preencha todos os campos.', 'error');
        return;
    }
    
    const movementType = type === 'entrada' ? 'Entrada' : 'Saída';
    showToast(`${movementType} de R$ ${parseFloat(value).toFixed(2)} registrada`, 'success');
    closeModal();
    loadView('cashier'); // Recarregar a view
}

function exportReport() {
    showToast('Relatório exportado com sucesso!', 'success');
    // Aqui você implementaria a lógica de exportação
}

// ===== GERAÇÃO DE HTML PARA OUTROS MÓDULOS =====
function generateCashierHTML() {
    return `
        <div class="cashier-container">
            
            <!-- Mesas Abertas -->
            <div class="open-tables-section">
                <h3>📋 Mesas Abertas</h3>
                <div class="tables-grid">
                    ${generateOpenTablesHTML()}
                </div>
            </div>
            
            <!-- Controle de Caixa -->
            <div class="cashier-control-section">
                <h3>💰 Movimentação do Caixa</h3>
                
                <!-- Navbar de Ações -->
                <div class="cashier-navbar">
                    <div class="navbar-left">
                        <button class="btn btn-primary" onclick="openCashRegister()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                            </svg>
                            Abrir Caixa
                        </button>
                        <button class="btn btn-secondary" onclick="closeCashRegister()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                            </svg>
                            Fechar Caixa
                        </button>
                        <button class="btn btn-outline" onclick="addCashMovement()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 5v14M5 12h14"/>
                            </svg>
                            Adicionar Movimento
                        </button>
                        <button class="btn btn-outline" onclick="viewCashReport()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                            Relatório
                        </button>
                    </div>
                    <div class="navbar-right">
                        <button class="btn btn-primary qr-btn" onclick="startQRReader()">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 9h6v11H3z"/>
                                <path d="M15 9h6v11h-6z"/>
                                <path d="M9 3v6"/>
                                <path d="M15 3v6"/>
                            </svg>
                            Ler Comanda
                        </button>
                    </div>
                </div>
                
                <!-- Histórico de Movimentações -->
                <div class="cashier-history-section">
                    <h3>📊 Histórico de Movimentações</h3>
                    <div class="movements-table">
                        <div class="table-header">
                            <span>Data/Hora</span>
                            <span>Tipo</span>
                            <span>Descrição</span>
                            <span>Valor</span>
                            <span>Saldo</span>
                        </div>
                        <div class="table-body">
                            ${generateCashMovementsHTML()}
                        </div>
                    </div>
                </div>
                
                <!-- Consolidado do Caixa -->
                <div class="cashier-summary-section">
                    <h3>📈 Consolidado do Caixa</h3>
                    <div class="summary-grid">
                        <!-- Status do Caixa -->
                        <div class="summary-status-card">
                            <div class="status-header">
                                <h4>Status Atual</h4>
                                <span class="status-badge active">Caixa Aberto</span>
                            </div>
                            <div class="status-details">
                                <div class="status-item">
                                    <span class="label">Saldo Inicial:</span>
                                    <span class="value">R$ 500,00</span>
                                </div>
                                <div class="status-item">
                                    <span class="label">Entradas:</span>
                                    <span class="value positive">R$ 1.250,00</span>
                                </div>
                                <div class="status-item">
                                    <span class="label">Saídas:</span>
                                    <span class="value negative">R$ 180,00</span>
                                </div>
                                <div class="status-item total">
                                    <span class="label">Saldo Atual:</span>
                                    <span class="value">R$ 1.570,00</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Resumo Rápido -->
                        <div class="summary-stats-card">
                            <h4>Resumo do Dia</h4>
                            <div class="stats-grid">
                                <div class="stat-item">
                                    <span class="stat-label">Total de Movimentos</span>
                                    <span class="stat-value">24</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Maior Entrada</span>
                                    <span class="stat-value positive">R$ 200,00</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Maior Saída</span>
                                    <span class="stat-value negative">R$ 120,00</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-label">Média por Movimento</span>
                                    <span class="stat-value">R$ 65,42</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateOpenTablesHTML() {
    const openTables = mockData.tables.filter(table => table.status !== 'free');
    if (openTables.length === 0) {
        return '<p>Nenhuma mesa aberta no momento.</p>';
    }
    return openTables.map(table => `
        <div class="table-card ${table.status}">
            <h4>${table.number}</h4>
            <p>Status: ${getTableStatusText(table.status)}</p>
            <button class="btn" onclick="openTableDetails(${table.id})">Ver Detalhes</button>
        </div>
    `).join('');
}

function generateCashMovementsHTML() {
    const movements = [
        { id: 1, date: '2023-10-27 10:00', type: 'Entrada', description: 'Pagamento de cliente', value: 150.00, balance: 150.00 },
        { id: 2, date: '2023-10-27 10:15', type: 'Saída', description: 'Pagamento de cliente', value: 75.00, balance: 75.00 },
        { id: 3, date: '2023-10-27 10:30', type: 'Entrada', description: 'Pagamento de cliente', value: 200.00, balance: 275.00 },
        { id: 4, date: '2023-10-27 11:00', type: 'Saída', description: 'Pagamento de cliente', value: 120.00, balance: 155.00 },
        { id: 5, date: '2023-10-27 11:15', type: 'Entrada', description: 'Pagamento de cliente', value: 100.00, balance: 255.00 },
        { id: 6, date: '2023-10-27 11:30', type: 'Saída', description: 'Pagamento de cliente', value: 80.00, balance: 175.00 },
    ];
    return movements.map(movement => `
        <div class="movement-row">
            <span>${movement.date}</span>
            <span>${movement.type}</span>
            <span>${movement.description}</span>
            <span>${movement.value.toFixed(2)}</span>
            <span>${movement.balance.toFixed(2)}</span>
        </div>
    `).join('');
}

function generateOrdersHTML() {
    return `
        <div class="orders-container">
            <h2>Controle de Comandas</h2>
            <div class="orders-list">
                ${mockData.orders.map(order => `
                    <div class="order-card">
                        <div class="order-header">
                            <h3>Comanda #${order.id}</h3>
                            <span class="order-time">${order.time}</span>
                        </div>
                        <div class="order-details">
                            <p>Mesa: ${order.table}</p>
                            <p>Total: R$ ${order.total.toFixed(2)}</p>
                            <p>Status: ${getOrderStatusText(order.status)}</p>
                        </div>
                        <div class="order-actions">
                            <button class="btn btn-secondary" onclick="updateOrderStatus(${order.id}, 'preparing')">
                                Enviar para Cozinha
                            </button>
                            <button class="btn" onclick="updateOrderStatus(${order.id}, 'ready')">
                                Marcar como Pronto
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateTablesHTML() {
    return `
        <div class="tables-container">
            <h2>Gestão de Mesas</h2>
            <div class="tables-map" id="tables-map">
                ${mockData.tables.map(table => `
                    <div class="table-item ${table.status}" 
                         style="left: ${table.x}px; top: ${table.y}px;"
                         data-table-id="${table.id}">
                        <div class="table-number">${table.number}</div>
                        <div class="table-status">${getTableStatusText(table.status)}</div>
                        <div class="table-capacity">${table.capacity} pessoas</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateKitchenHTML() {
    return `
        <div class="kitchen-container">
            <h2>Tela da Cozinha</h2>
            <div class="kitchen-orders">
                ${mockData.orders.filter(order => order.status === 'preparing').map(order => `
                    <div class="kitchen-order-card">
                        <div class="order-header">
                            <h3>Pedido #${order.id}</h3>
                            <span class="order-time">${order.time}</span>
                        </div>
                        <div class="order-items">
                            ${order.items.map(item => {
                                const product = mockData.products.find(p => p.id === item.id);
                                return product ? `<span class="order-item">${product.name} x${item.quantity}</span>` : '';
                            }).join('')}
                        </div>
                        <button class="btn" onclick="completeOrder(${order.id})">Concluir</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateInventoryHTML() {
    return `
        <div class="inventory-container">
            <h2>Controle de Estoque</h2>
            <div class="inventory-actions">
                <button class="btn" onclick="createBudget()">Criar Orçamento</button>
                <button class="btn btn-secondary" onclick="registerMovement()">Registrar Movimento</button>
            </div>
            <div class="inventory-list">
                ${mockData.products.map(product => `
                    <div class="inventory-item">
                        <div class="item-info">
                            <h3>${product.name}</h3>
                            <p>Estoque: ${product.stock} unidades</p>
                        </div>
                        <div class="item-status ${getStockStatus(product.stock)}">
                            ${getStockStatusText(product.stock)}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateDeliveryHTML() {
    return `
        <div class="delivery-container">
            <h2>Módulo de Delivery</h2>
            <div class="delivery-orders">
                <h3>Pedidos de Delivery</h3>
                <div class="delivery-list">
                    <!-- Lista de pedidos de delivery será implementada aqui -->
                </div>
            </div>
            <div class="delivery-map">
                <h3>Mapa de Entregas</h3>
                <div class="map-placeholder">
                    Mapa de entregas será implementado aqui
                </div>
            </div>
        </div>
    `;
}

function generateSettingsHTML() {
    return `
        <div class="settings-container">
            <h2>Configurações</h2>
            <div class="settings-tabs">
                <button class="tab-btn active" data-tab="users">Usuários</button>
                <button class="tab-btn" data-tab="company">Dados da Empresa</button>
                <button class="tab-btn" data-tab="billing">Faturamento</button>
            </div>
            <div class="tab-content" id="tab-content">
                <div class="tab-pane active" id="users-tab">
                    <h3>Gerenciar Usuários</h3>
                    <button class="btn" onclick="addUser()">Adicionar Usuário</button>
                    <div class="users-list">
                        ${mockData.users.map(user => `
                            <div class="user-item">
                                <span>${user.name} (${user.type})</span>
                                <div class="user-actions">
                                    <button class="btn btn-secondary" onclick="editUser(${user.id})">Editar</button>
                                    <button class="btn btn-secondary" onclick="removeUser(${user.id})">Remover</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ===== FUNÇÕES AUXILIARES PARA STATUS =====
function getTableStatusText(status) {
    const statusMap = {
        'free': 'Livre',
        'occupied': 'Ocupada',
        'waiting': 'Aguardando'
    };
    return statusMap[status] || status;
}

function getOrderStatusText(status) {
    const statusMap = {
        'active': 'Ativa',
        'pending': 'Pendente',
        'preparing': 'Preparando',
        'ready': 'Pronta',
        'completed': 'Concluída'
    };
    return statusMap[status] || status;
}

function getStockStatus(stock) {
    if (stock > 30) return { class: 'sufficient', text: 'Suficiente' };
    if (stock > 10) return { class: 'low', text: 'Baixo' };
    return { class: 'out', text: 'Em Falta' };
}

function getStockStatusText(stock) {
    if (stock > 30) return 'Suficiente';
    if (stock > 10) return 'Baixo';
    return 'Em Falta';
}

// ===== FUNÇÕES DE ATUALIZAÇÃO =====
function updateOrderStatus(orderId, newStatus) {
    const order = mockData.orders.find(o => o.id === orderId);
    if (!order) return;
    
    order.status = newStatus;
    
    // Atualizar a interface
    loadView('comandas');
    
    // Mostrar toast de confirmação
    const statusText = getOrderStatusText(newStatus);
    showToast(`Status da comanda #${orderId} atualizado para: ${statusText}`, 'success');
}

function completeOrder(orderId) {
    const order = mockData.orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'ready';
        loadView('kitchen'); // Recarregar a view
        showToast(`Pedido #${orderId} concluído!`, 'success');
    }
}

// ===== FUNÇÕES DE ESTOQUE =====
function createBudget() {
    const content = `
        <h3>Criar Orçamento para Fornecedores</h3>
        <p>Funcionalidade será implementada aqui.</p>
        <button class="btn" onclick="closeModal()">Fechar</button>
    `;
    openModal('Criar Orçamento', content);
}

function registerMovement() {
    const content = `
        <h3>Registrar Movimento de Estoque</h3>
        <p>Funcionalidade será implementada aqui.</p>
        <button class="btn" onclick="closeModal()">Fechar</button>
    `;
    openModal('Registrar Movimento', content);
}

// ===== FUNÇÕES DE USUÁRIOS =====
function addUser() {
    const content = `
        <h3>Adicionar Novo Usuário</h3>
        <p>Funcionalidade será implementada aqui.</p>
        <button class="btn" onclick="closeModal()">Fechar</button>
    `;
    openModal('Adicionar Usuário', content);
}

function editUser(userId) {
    const user = mockData.users.find(u => u.id === userId);
    const content = `
        <h3>Editar Usuário: ${user.name}</h3>
        <p>Funcionalidade será implementada aqui.</p>
        <button class="btn" onclick="closeModal()">Fechar</button>
    `;
    openModal('Editar Usuário', content);
}

function removeUser(userId) {
    const user = mockData.users.find(u => u.id === userId);
    if (confirm(`Tem certeza que deseja remover o usuário ${user.name}?`)) {
        mockData.users = mockData.users.filter(u => u.id !== userId);
        loadView('settings');
        showToast(`Usuário ${user.name} removido!`, 'success');
    }
}

// ===== FUNÇÕES DE MESA =====
function openTableDetails(tableId) {
    const table = mockData.tables.find(t => t.id === tableId);
    const content = `
        <h3>Detalhes da ${table.number}</h3>
        <p>Status: ${getTableStatusText(table.status)}</p>
        <p>Capacidade: ${table.capacity} pessoas</p>
        <button class="btn" onclick="closeModal()">Fechar</button>
    `;
    openModal('Detalhes da Mesa', content);
}

function viewProductDetails(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (product) {
        const content = `
            <h3>${product.name}</h3>
            <div class="product-details-grid">
                <div class="detail-item">
                    <h4>Categoria:</h4>
                    <p>${mockData.categories.find(c => c.id === product.category)?.name || 'Desconhecida'}</p>
                </div>
                <div class="detail-item">
                    <h4>Preço:</h4>
                    <p>R$ ${product.price.toFixed(2)}</p>
                </div>
                <div class="detail-item">
                    <h4>Estoque:</h4>
                    <p>${product.stock} unidades</p>
                </div>
                <div class="detail-item">
                    <h4>Descrição:</h4>
                    <p>${product.description || 'Nenhuma descrição disponível.'}</p>
                </div>
            </div>
            <button class="btn" onclick="closeModal()">Fechar</button>
        `;
        openModal('Detalhes do Produto', content);
    }
}

function startQRReader() {
    const content = `
        <h3>📱 Leitor de QR Code</h3>
        <div class="qr-reader-modal">
            <div class="camera-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                </svg>
                <p>Simulando leitura de QR Code...</p>
                <div class="qr-scan-animation">
                    <div class="scan-line"></div>
                </div>
            </div>
            <div class="qr-instructions">
                <p><strong>Como usar:</strong></p>
                <ul>
                    <li>Posicione o QR Code da comanda na área da câmera</li>
                    <li>Aguarde a leitura automática</li>
                    <li>A comanda será carregada automaticamente</li>
                </ul>
            </div>
            <div class="form-actions">
                <button class="btn btn-secondary" onclick="closeModal()">Fechar</button>
                <button class="btn btn-primary" onclick="simulateQRRead()">Simular Leitura</button>
            </div>
        </div>
    `;
    openModal('Leitor de QR Code', content);
}

function simulateQRRead() {
    // Simular leitura de uma comanda
    const mockOrder = {
        id: 'QR-2023-001',
        table: 'Mesa 5',
        items: [
            { name: 'Pasta Carbonara', quantity: 2, price: 32.50 },
            { name: 'Tiramisu', quantity: 1, price: 15.90 }
        ],
        total: 80.90,
        status: 'pending'
    };
    
    const content = `
        <h3>✅ Comanda Lida com Sucesso!</h3>
        <div class="order-details">
            <div class="order-header">
                <h4>Comanda: ${mockOrder.id}</h4>
                <span class="order-table">${mockOrder.table}</span>
            </div>
            <div class="order-items">
                <h5>Itens:</h5>
                ${mockOrder.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>R$ ${item.price.toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <strong>Total: R$ ${mockOrder.total.toFixed(2)}</strong>
            </div>
        </div>
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Fechar</button>
            <button class="btn btn-primary" onclick="processQROrder('${mockOrder.id}')">Processar Comanda</button>
        </div>
    `;
    
    // Atualizar o modal
    const modalBody = document.querySelector('.modal-body');
    if (modalBody) {
        modalBody.innerHTML = content;
    }
}

function processQROrder(orderId) {
    showToast(`Comanda ${orderId} processada com sucesso!`, 'success');
    closeModal();
    // Aqui você implementaria a lógica para processar a comanda
}

function viewOrderDetails(orderId) {
    const order = mockData.orders.find(o => o.id === orderId);
    if (!order) return;
    
    const content = `
        <h3>Detalhes da Comanda #${order.id}</h3>
        <div class="order-details-modal">
            <div class="detail-section">
                <h4>Informações Gerais</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="label">Mesa:</span>
                        <span class="value">${order.table}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Cliente:</span>
                        <span class="value">${order.customerName}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Horário:</span>
                        <span class="value">${order.time}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Status:</span>
                        <span class="status-badge ${order.status}">${getOrderStatusText(order.status)}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Itens do Pedido</h4>
                <div class="items-table">
                    <div class="table-header">
                        <span>Item</span>
                        <span>Quantidade</span>
                        <span>Preço Unit.</span>
                        <span>Subtotal</span>
                    </div>
                    <div class="table-body">
                        ${order.items.map(item => `
                            <div class="table-row">
                                <span>${item.name}</span>
                                <span>${item.quantity}</span>
                                <span>R$ ${item.price.toFixed(2)}</span>
                                <span>R$ ${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            ${order.notes ? `
                <div class="detail-section">
                    <h4>Observações</h4>
                    <p class="notes-text">${order.notes}</p>
                </div>
            ` : ''}
            
            <div class="detail-section total-section">
                <h4>Total da Comanda</h4>
                <div class="total-amount">
                    <span class="label">Valor Total:</span>
                    <span class="value">R$ ${order.total.toFixed(2)}</span>
                </div>
            </div>
        </div>
        
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Fechar</button>
            ${order.status !== 'completed' ? `
                <button class="btn btn-primary" onclick="printOrder('${order.id}')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9V2a1 1 0 011-1h10a1 1 0 011 1v7m-6 0h6"/>
                        <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                        <path d="M6 14h12v8H6z"/>
                    </svg>
                    Imprimir Comanda
                </button>
            ` : ''}
        </div>
    `;
    
    openModal(`Comanda #${order.id}`, content);
}

function printOrder(orderId) {
    showToast(`Comanda #${orderId} enviada para impressão!`, 'success');
    // Aqui você implementaria a lógica de impressão real
}

// Funções para Comandas
function filterOrders(query) {
    const ordersGrid = document.querySelector('.orders-grid');
    if (!ordersGrid) return;

    const orders = Array.from(ordersGrid.children);
    const lowerCaseQuery = query.toLowerCase();

    orders.forEach(orderCard => {
        const orderId = orderCard.querySelector('h3').textContent.toLowerCase();
        const tableNumber = orderCard.querySelector('.order-details p:first-of-type').textContent.toLowerCase();
        const status = orderCard.querySelector('.order-details p:nth-of-type(3)').textContent.toLowerCase();

        const matchesQuery = orderId.includes(lowerCaseQuery) ||
                             tableNumber.includes(lowerCaseQuery) ||
                             status.includes(lowerCaseQuery);

        orderCard.style.display = matchesQuery ? 'block' : 'none';
    });
}

function filterOrdersByStatus(status) {
    const ordersGrid = document.querySelector('.orders-grid');
    if (!ordersGrid) return;

    const orders = Array.from(ordersGrid.children);
    orders.forEach(orderCard => {
        const currentStatus = orderCard.getAttribute('data-status');
        const matchesStatus = status === 'all' || currentStatus === status;
        orderCard.style.display = matchesStatus ? 'block' : 'none';
    });
}

function createNewOrder() {
    const content = `
        <h3>Criar Nova Comanda</h3>
        <div class="form-group">
            <label for="new-order-table">Mesa:</label>
            <select id="new-order-table">
                ${mockData.tables.filter(t => t.status === 'free').map(table => `
                    <option value="${table.id}">${table.number} (${getTableStatusText(table.status)})</option>
                `).join('')}
            </select>
        </div>
        <div class="form-group">
            <label for="new-order-customer">Cliente:</label>
            <input type="text" id="new-order-customer" placeholder="Nome do cliente">
        </div>
        <div class="form-group">
            <label for="new-order-items">Itens:</label>
            <div class="order-items-list">
                <div class="order-item-row">
                    <select class="item-select">
                        ${mockData.products.map(product => `
                            <option value="${product.id}">${product.name} - R$ ${product.price.toFixed(2)}</option>
                        `).join('')}
                    </select>
                    <input type="number" class="item-quantity" value="1" min="1">
                    <button class="remove-item-btn">🗑️</button>
                </div>
            </div>
            <button class="btn btn-secondary" onclick="addItemToNewOrder()">Adicionar Item</button>
        </div>
        <div class="form-group">
            <label for="new-order-notes">Observações:</label>
            <textarea id="new-order-notes" placeholder="Observações para o garçom"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Cancelar</button>
            <button class="btn btn-primary" onclick="confirmCreateNewOrder()">Criar Comanda</button>
        </div>
    `;
    openModal('Criar Nova Comanda', content);
}

function addItemToNewOrder() {
    const itemSelect = document.querySelector('#new-order-items .item-select');
    const quantityInput = document.querySelector('#new-order-items .item-quantity');
    const productId = itemSelect.value;
    const quantity = parseInt(quantityInput.value);

    if (!productId || quantity <= 0) return;

    const product = mockData.products.find(p => p.id === parseInt(productId));
    if (!product) return;

    const existingItem = document.querySelector(`#new-order-items .order-item-row .item-select[value="${productId}"]`);
    if (existingItem) {
        const currentQuantity = parseInt(existingItem.nextElementSibling.value);
        existingItem.nextElementSibling.value = currentQuantity + quantity;
    } else {
        const newRow = document.createElement('div');
        newRow.className = 'order-item-row';
        newRow.innerHTML = `
            <select class="item-select">
                <option value="${productId}">${product.name} - R$ ${product.price.toFixed(2)}</option>
            </select>
            <input type="number" class="item-quantity" value="${quantity}" min="1">
            <button class="remove-item-btn">🗑️</button>
        `;
        document.querySelector('#new-order-items .order-items-list').appendChild(newRow);
    }
}

function removeItemFromNewOrder(row) {
    row.remove();
}

function confirmCreateNewOrder() {
    const tableId = document.getElementById('new-order-table').value;
    const customerName = document.getElementById('new-order-customer').value;
    const items = [];
    document.querySelectorAll('#new-order-items .order-item-row').forEach(row => {
        const productId = parseInt(row.querySelector('.item-select').value);
        const quantity = parseInt(row.querySelector('.item-quantity').value);
        const product = mockData.products.find(p => p.id === productId);
        if (product) {
            items.push({ name: product.name, quantity: quantity, price: product.price });
        }
    });
    const notes = document.getElementById('new-order-notes').value;

    if (tableId === '' || items.length === 0) {
        showToast('Por favor, selecione uma mesa e adicione itens à comanda.', 'error');
        return;
    }

    const newOrder = {
        id: Date.now(), // Gerar um ID único
        table: tableId,
        items: items,
        total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'waiting',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        customerName: customerName,
        notes: notes
    };

    mockData.orders.push(newOrder);
    closeModal();
    loadView('comandas'); // Recarregar a view
    showToast(`Comanda #${newOrder.id} criada com sucesso!`, 'success');
}
