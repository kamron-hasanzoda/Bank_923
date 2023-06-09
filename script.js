let body = document.body

let users = [
    {
        id: 1,
        name: 'Visa',
        money: 'usd',
        category: 'car',
        buying: 50000,
        date: '23 September'
    },
    {
        id: 2,
        name: 'Kiwi',
        money: 'RUB',
        category: 'food',
        buying: 1000,
        date: '7 May'
    },
    {
        id: 3,
        name: 'Xumo',
        money: 'USZ',
        category: 'electricity',
        buying: 3278000,
        date: '17 June'
    }
]

function reload(arr, place) {
    let header = document.createElement('header')
    let left = document.createElement('div')
    let left_p1 = document.createElement('p')
    let left_p2 = document.createElement('p')
    let left_p3 = document.createElement('p')
    let right = document.createElement('div')
    let right_p1 = document.createElement('p')
    let right_img = document.createElement('img')
    let container = document.createElement('div')
    let h1 = document.createElement('h1')
    let a1 = document.createElement('a')
    let h2 = document.createElement('h2')
    let carts = document.createElement('div')
    let a2 = document.createElement('a')
    let h2_transaktion = document.createElement('h2')
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')
    let th5 = document.createElement('th')
    let tbody = document.createElement('tbody')
    let a3 = document.createElement('a')

    left.classList.add('left')
    right.classList.add('right')
    container.classList.add('container')
    carts.classList.add('carts')
    a2.classList.add('a')
    a3.classList.add('a')

    left_p1.innerHTML = 'Главная'
    left_p2.innerHTML = 'Мои кошельки'
    left_p3.innerHTML = 'Мои транзакции'
    right_p1.innerHTML = 'alexadams@google.com'
    h1.innerHTML = 'Добро пожаловать, Alex Adams!'
    a1.innerHTML = 'alexadams@google.com'
    h2.innerHTML = 'Мои кошельки'
    a2.innerHTML = 'Смотреть все кошельки'
    h2_transaktion.innerHTML = 'Последние транзакции'
    th1.innerHTML = 'ID'
    th2.innerHTML = 'Отправлено с кошелька'
    th3.innerHTML = 'Категория'
    th4.innerHTML = 'Сумма транзации'
    th5.innerHTML = 'Когда'
    a3.innerHTML = 'Смотреть все оплаты'

    right_img.src = './images/exit.svg'

    for (let item of arr) {
        let tbody_tr = document.createElement('tr')
        let tbody_th1 = document.createElement('th')
        let tbody_th2 = document.createElement('th')
        let tbody_th3 = document.createElement('th')
        let tbody_th4 = document.createElement('th')
        let tbody_th5 = document.createElement('th')
        let cart_h1 = document.createElement('h1')
        let cart_h2 = document.createElement('h2')
        let cart = document.createElement('div')

        cart.classList.add('cart')

        cart_h1.innerHTML = item.name
        cart_h2.innerHTML = item.money
        tbody_th1.innerHTML = item.id
        tbody_th2.innerHTML = item.name
        tbody_th3.innerHTML = item.category
        tbody_th4.innerHTML = item.buying
        tbody_th5.innerHTML = item.date

        tbody_tr.append(tbody_th1, tbody_th2, tbody_th3, tbody_th4, tbody_th5)
        tbody.append(tbody_tr)
        cart.append(cart_h1, cart_h2)
        carts.append(cart)
    }

    place.append(header, container)
    header.append(left, right)
    left.append(left_p1, left_p2, left_p3)
    right.append(right_p1, right_img)
    container.append(h1, a2, h2, carts, h2_transaktion, table, a3)
    table.append(thead, tbody)
    thead.append(tr)
    tr.append(th1, th2, th3, th4, th5)
}

reload(users, body)