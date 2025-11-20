// Данные меню
const menuItems = [
    {
        id: 1,
        name: "Эспрессо",
        category: "coffee",
        price: 180,
        description: "Классический крепкий кофе",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Американо",
        category: "coffee",
        price: 190,
        description: "Эспрессо с добавлением горячей воды",
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 3,
        name: "Капучино",
        category: "coffee",
        price: 220,
        description: "Эспрессо с молочной пенкой",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Латте",
        category: "coffee",
        price: 240,
        description: "Кофе с большим количеством молока",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Мокка",
        category: "coffee",
        price: 260,
        description: "Кофе с шоколадом и молоком",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 6,
        name: "Флэт Уайт",
        category: "coffee",
        price: 230,
        description: "Двойной ристретто с тонкой молочной пенкой",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 7,
        name: "RAF (Рафф)",
        category: "coffee",
        price: 280,
        description: "Кофе со сливками и ванильным сиропом",
        image: "https://images.unsplash.com/photo-1560769684-55015cee73d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 8,
        name: "Карамельный Латте",
        category: "coffee",
        price: 290,
        description: "Латте с карамельным сиропом",
        image: "https://images.unsplash.com/photo-1567306226416-28a79b3d7c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 9,
        name: "Чизкейк",
        category: "desserts",
        price: 320,
        description: "Нежный чизкейк Нью-Йорк",
        image: "https://images.unsplash.com/photo-1567306226416-28a79b3d7c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 10,
        name: "Тирамису",
        category: "desserts",
        price: 350,
        description: "Итальянский десерт с кофе и маскарпоне",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 11,
        name: "Макаруны",
        category: "desserts",
        price: 180,
        description: "Французское пирожное с различными начинками",
        image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 12,
        name: "Медовик",
        category: "desserts",
        price: 280,
        description: "Традиционный русский торт с медом",
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 13,
        name: "Шоколадный фондан",
        category: "desserts",
        price: 310,
        description: "Шоколадный кекс с жидкой сердвиной",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 14,
        name: "Айс Латте",
        category: "cold",
        price: 240,
        description: "Холодный латте со льдом",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 15,
        name: "Фраппе",
        category: "cold",
        price: 270,
        description: "Взбитый холодный кофе",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 16,
        name: "Холодный Раф",
        category: "cold",
        price: 300,
        description: "Охлажденный вариант классического Рафа",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// Переменные для состояния приложения
let cart = [];
let currentCategory = 'all';
let currentUser = null;
let orders = [];
let orderCounter = 1000;

// DOM элементы
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartIcon = document.getElementById('cartIcon');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-menu');
const tabs = document.querySelectorAll('.tab');
const authButton = document.getElementById('authButton');
const authModal = document.getElementById('authModal');
const closeAuthModal = document.getElementById('closeAuthModal');
const authTabs = document.querySelectorAll('.auth-tab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const paymentModal = document.getElementById('paymentModal');
const closePaymentModal = document.getElementById('closePaymentModal');
const paymentOrderItems = document.getElementById('paymentOrderItems');
const paymentTotal = document.getElementById('paymentTotal');
const paymentForm = document.getElementById('paymentForm');
const cardDetails = document.getElementById('cardDetails');
const payButton = document.getElementById('payButton');
const payAmount = document.getElementById('payAmount');
const orderCompleteModal = document.getElementById('orderCompleteModal');
const orderNumber = document.getElementById('orderNumber');
const trackOrderBtn = document.getElementById('trackOrderBtn');
const newOrderBtn = document.getElementById('newOrderBtn');
const userProfile = document.getElementById('userProfile');
const userName = document.getElementById('userName');
const logoutBtn = document.getElementById('logoutBtn');
const ordersList = document.getElementById('ordersList');
const orderNowBtn = document.getElementById('orderNowBtn');

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();
    setupEventListeners();
    loadFromStorage();
    updateCartUI();
    checkThemePreference();
    checkAuthStatus();
});

// Настройка обработчиков событий
function setupEventListeners() {
    // Переключение категорий меню
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            setActiveTab(tab);
            filterMenuItems(category);
        });
    });

    // Корзина
    cartIcon.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartOverlay);
    checkoutBtn.addEventListener('click', checkout);
    
    // Тёмная тема
    themeToggle.addEventListener('click', toggleTheme);
    
    // Бургер меню
    burger.addEventListener('click', toggleMobileMenu);
    
    // Закрытие корзины при клике вне её области
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            closeCartOverlay();
        }
    });

    // Авторизация
    authButton.addEventListener('click', openAuthModal);
    closeAuthModal.addEventListener('click', closeAuthModalFunc);
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) closeAuthModalFunc();
    });

    // Переключение между входом и регистрацией
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchAuthTab(tabName);
        });
    });

    // Формы авторизации
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

    // Оплата
    closePaymentModal.addEventListener('click', closePaymentModalFunc);
    paymentModal.addEventListener('click', (e) => {
        if (e.target === paymentModal) closePaymentModalFunc();
    });

    paymentForm.addEventListener('change', handlePaymentMethodChange);
    paymentForm.addEventListener('submit', handlePayment);

    // Завершение заказа
    trackOrderBtn.addEventListener('click', trackOrder);
    newOrderBtn.addEventListener('click', newOrder);

    // Выход из аккаунта
    logoutBtn.addEventListener('click', handleLogout);

    // Кнопка "Заказать сейчас"
    orderNowBtn.addEventListener('click', () => {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });
}

// Рендер меню
function renderMenuItems() {
    menuGrid.innerHTML = '';
    
    const filteredItems = currentCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);
    
    filteredItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.style.animationDelay = `${index * 0.1}s`;
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img">
            <div class="menu-item-content">
                <h3 class="menu-item-title">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price} ₽</span>
                    <button class="add-to-cart" data-id="${item.id}">Добавить в корзину</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
    
    // Добавляем обработчики для кнопок добавления в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
}

// Фильтрация меню по категориям
function filterMenuItems(category) {
    currentCategory = category;
    renderMenuItems();
}

// Установка активной вкладки
function setActiveTab(activeTab) {
    tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

// Работа с корзиной
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveToStorage();
    
    // Анимация добавления в корзину
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveToStorage();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
            saveToStorage();
        }
    }
}

function updateCartUI() {
    // Обновляем количество в иконке корзины
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Обновляем содержимое корзины
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Корзина пуста</p>';
        cartTotal.textContent = '0 ₽';
        return;
    }
    
    let totalPrice = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ₽ × ${item.quantity}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = `${totalPrice} ₽`;
    
    // Добавляем обработчики для кнопок изменения количества
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(itemId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            updateQuantity(itemId, 1);
        });
    });
}

function openCart() {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartOverlay() {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Авторизация
function openAuthModal() {
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModalFunc() {
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchAuthTab(tabName) {
    authTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    document.getElementById(`${tabName}Form`).classList.add('active');
}

function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Простая проверка (в реальном приложении нужно обращаться к серверу)
    const users = JSON.parse(localStorage.getItem('coffeeShopUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        saveToStorage();
        checkAuthStatus();
        closeAuthModalFunc();
        showNotification('Успешный вход!', 'success');
    } else {
        showNotification('Неверный email или пароль', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    if (password !== confirmPassword) {
        showNotification('Пароли не совпадают', 'error');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('coffeeShopUsers') || '[]');
    
    if (users.find(u => u.email === email)) {
        showNotification('Пользователь с таким email уже существует', 'error');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        registrationDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('coffeeShopUsers', JSON.stringify(users));
    
    currentUser = newUser;
    saveToStorage();
    checkAuthStatus();
    closeAuthModalFunc();
    showNotification('Регистрация успешна!', 'success');
}

function handleLogout() {
    currentUser = null;
    saveToStorage();
    checkAuthStatus();
    showNotification('Вы вышли из аккаунта', 'info');
}

function checkAuthStatus() {
    if (currentUser) {
        authButton.textContent = currentUser.name;
        userProfile.style.display = 'block';
        userName.textContent = currentUser.name;
        loadUserOrders();
    } else {
        authButton.textContent = 'Войти';
        userProfile.style.display = 'none';
    }
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста!', 'error');
        return;
    }
    
    if (!currentUser) {
        showNotification('Пожалуйста, войдите в аккаунт для оформления заказа', 'error');
        openAuthModal();
        return;
    }
    
    closeCartOverlay();
    openPaymentModal();
}

function openPaymentModal() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Заполняем информацию о заказе
    paymentOrderItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ₽ × ${item.quantity}</div>
            </div>
            <div class="cart-item-total">${item.price * item.quantity} ₽</div>
        `;
        paymentOrderItems.appendChild(itemElement);
    });
    
    paymentTotal.textContent = totalPrice;
    payAmount.textContent = totalPrice;
    
    paymentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaymentModalFunc() {
    paymentModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function handlePaymentMethodChange(e) {
    if (e.target.name === 'payment') {
        if (e.target.value === 'card') {
            cardDetails.classList.add('active');
        } else {
            cardDetails.classList.remove('active');
        }
    }
}

function handlePayment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const paymentMethod = formData.get('payment');
    
    // Имитация процесса оплаты
    payButton.disabled = true;
    payButton.innerHTML = '⏳ Обработка платежа...';
    
    setTimeout(() => {
        completeOrder(paymentMethod);
    }, 2000);
}

function completeOrder(paymentMethod) {
    const orderId = orderCounter++;
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const newOrder = {
        id: orderId,
        userId: currentUser.id,
        items: [...cart],
        total: totalPrice,
        paymentMethod: paymentMethod,
        status: paymentMethod === 'cash' ? 'pending' : 'completed',
        date: new Date().toISOString(),
        address: 'ул. Кофейная, 15, Москва'
    };
    
    orders.push(newOrder);
    saveToStorage();
    
    // Очищаем корзину
    cart = [];
    updateCartUI();
    saveToStorage();
    
    // Показываем подтверждение заказа
    closePaymentModalFunc();
    showOrderComplete(orderId);
    
    // Отправляем в Telegram
    sendOrderToTelegram(newOrder);
}

function showOrderComplete(orderId) {
    orderNumber.textContent = `#${orderId}`;
    orderCompleteModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Обновляем историю заказов
    loadUserOrders();
}

function trackOrder() {
    orderCompleteModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    showNotification('Функция отслеживания заказа в разработке', 'info');
}

function newOrder() {
    orderCompleteModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    cart = [];
    updateCartUI();
    saveToStorage();
}

// Управление заказами
function loadUserOrders() {
    if (!currentUser) return;
    
    const userOrders = orders.filter(order => order.userId === currentUser.id);
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-orders">
                <p>У вас еще нет заказов</p>
                <button class="btn-primary" onclick="document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })">
                    Сделать первый заказ
                </button>
            </div>
        `;
        return;
    }
    
    ordersList.innerHTML = userOrders
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(order => `
            <div class="order-item">
                <div class="order-header">
                    <span class="order-id">Заказ #${order.id}</span>
                    <span class="order-status status-${order.status}">
                        ${getStatusText(order.status)}
                    </span>
                </div>
                <div class="order-details">
                    <div>${new Date(order.date).toLocaleDateString('ru-RU')}</div>
                    <div>${order.items.length} товара на ${order.total} ₽</div>
                    <div>Оплата: ${order.paymentMethod === 'card' ? 'Картой' : 'Наличными'}</div>
                </div>
            </div>
        `).join('');
}

function getStatusText(status) {
    const statuses = {
        'pending': 'Ожидает оплаты',
        'completed': 'Выполнен',
        'cancelled': 'Отменен'
    };
    return statuses[status] || status;
}

// Отправка в Telegram - ИСПРАВЛЕННАЯ ВЕРСИЯ
function sendOrderToTelegram(order) {
    let orderText = `🆕 <b>НОВЫЙ ЗАКАЗ #${order.id}</b>\n\n`;
    orderText += `👤 <b>Клиент:</b> ${currentUser.name}\n`;
    orderText += `📞 <b>Телефон:</b> ${currentUser.phone}\n`;
    orderText += `📧 <b>Email:</b> ${currentUser.email}\n`;
    orderText += `💳 <b>Оплата:</b> ${order.paymentMethod === 'card' ? 'Картой' : 'Наличными'}\n`;
    orderText += `🕒 <b>Время:</b> ${new Date(order.date).toLocaleString('ru-RU')}\n\n`;
    
    orderText += `<b>Состав заказа:</b>\n`;
    order.items.forEach(item => {
        orderText += `▪️ ${item.name} - ${item.quantity} × ${item.price} ₽ = ${item.quantity * item.price} ₽\n`;
    });
    
    orderText += `\n💰 <b>ИТОГО: ${order.total} ₽</b>`;
    
    sendMessageToTelegram(orderText);
}

function sendMessageToTelegram(orderText) {
    // ⚠️ ЗАМЕНИТЕ НА ВАШИ РЕАЛЬНЫЕ ДАННЫЕ ⚠️
    const botToken = '';
    const chatId = ''; // УБРАЛ ПРОБЕЛ в начале!
    
    // Проверка на тестовые данные
    if (!botToken || botToken === '' || !chatId || chatId === '') {
        console.log('🔧 ТЕСТОВЫЙ РЕЖИМ - Telegram не настроен');
        console.log('📦 Заказ для Telegram:');
        console.log(orderText);
        console.log('----------------------------------------');
        console.log('⚙️ Для включения Telegram замените:');
        console.log('1. botToken на ваш токен');
        console.log('2. chatId на ваш chat_id');
        return;
    }
    
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    console.log('📤 Отправка заказа в Telegram...');
    console.log('Токен:', botToken.substring(0, 10) + '...');
    console.log('Chat ID:', chatId);
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: orderText,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('✅ Заказ отправлен в Telegram!');
            showNotification('Заказ отправлен на кухню!', 'success');
        } else {
            console.error('❌ Ошибка Telegram:', data);
            
            // Подробная диагностика ошибок
            if (data.error_code === 401) {
                console.error('🔧 Решение: Проверьте токен бота');
                showNotification('Ошибка настройки Telegram. Проверьте токен.', 'error');
            } else if (data.error_code === 400) {
                console.error('🔧 Решение: Проверьте chat_id');
                showNotification('Ошибка настройки Telegram. Проверьте chat_id.', 'error');
            } else {
                showNotification('Ошибка отправки заказа в Telegram', 'error');
            }
        }
    })
    .catch(error => {
        console.error('❌ Ошибка сети:', error);
        showNotification('Проблемы с интернет-соединением', 'warning');
    });
}

// Уведомления
function showNotification(message, type = 'info') {
    // Создаем стили для уведомлений если их нет
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                animation: slideInRight 0.3s ease;
                max-width: 300px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-success { background-color: #4CAF50; }
            .notification-error { background-color: #f44336; }
            .notification-info { background-color: #2196F3; }
            .notification-warning { background-color: #FF9800; }
        `;
        document.head.appendChild(styles);
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Работа с локальным хранилищем
function saveToStorage() {
    localStorage.setItem('coffeeShopCart', JSON.stringify(cart));
    localStorage.setItem('coffeeShopUser', JSON.stringify(currentUser));
    localStorage.setItem('coffeeShopOrders', JSON.stringify(orders));
    localStorage.setItem('coffeeShopOrderCounter', orderCounter.toString());
}

function loadFromStorage() {
    const savedCart = localStorage.getItem('coffeeShopCart');
    const savedUser = localStorage.getItem('coffeeShopUser');
    const savedOrders = localStorage.getItem('coffeeShopOrders');
    const savedCounter = localStorage.getItem('coffeeShopOrderCounter');
    
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedUser) currentUser = JSON.parse(savedUser);
    if (savedOrders) orders = JSON.parse(savedOrders);
    if (savedCounter) orderCounter = parseInt(savedCounter);
}

// Тёмная тема
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }
}

// Мобильное меню
function toggleMobileMenu() {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Закрытие мобильного меню при клике на ссылку
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Плавная прокрутка к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

});
