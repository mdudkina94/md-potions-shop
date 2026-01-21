import { DeliveryMethod, Order, OrderStatus, PaymentMethod } from '@/orders/orders.types';

export const DELIVERY_METHODS = [
  {
    label: 'Самовывоз',
    value: DeliveryMethod.SelfPickup
  },
  {
    label: 'Доставка',
    value: DeliveryMethod.Courier
  },
  {
    label: 'Почта',
    value: DeliveryMethod.Mail
  }
];

export const PAYMENT_METHODS = [
  {
    label: 'Наличные',
    value: PaymentMethod.Cash
  },
  {
    label: 'Карта',
    value: PaymentMethod.Card
  },
  {
    label: 'Волшебные монеты',
    value: PaymentMethod.MagicCoin
  }
];

export const ORDERS_DATA: Order[] = [
  {
    orderId: 101,
    customerName: 'Эльф Лира',
    orderDate: new Date('2026-01-20T09:00:00Z'),
    readyByDate: new Date('2026-01-21T14:00:00Z'),
    deliveryAddress: 'Древесный Дом, Лунный Лес',
    deliveryMethod: DeliveryMethod.Courier,
    paymentMethod: PaymentMethod.MagicCoin,
    status: OrderStatus.Completed,
    potions: [
      {
        id: 1001,
        name: 'Зелье Исцеления',
        ingredients: [
          { id: 1, name: 'Сок Солнечного Цветка', unitPrice: 50, quantity: 3, totalPrice: 150 },
          { id: 2, name: 'Пыльца Феи', unitPrice: 200, quantity: 1, totalPrice: 200 },
          { id: 3, name: 'Слеза Единорога', unitPrice: 1000, quantity: 0.5, totalPrice: 500 },
          { id: 4, name: 'Чистая Родниковая Вода', unitPrice: 10, quantity: 5, totalPrice: 50 }
        ],
        price: 900
      }
    ],
    totalOrderPrice: 900
  },
  {
    orderId: 102,
    customerName: 'Вор Каин',
    orderDate: new Date('2026-01-20T10:30:00Z'),
    readyByDate: new Date('2026-01-21T16:00:00Z'),
    deliveryAddress: 'Темный Переулок, Задний Двор',
    deliveryMethod: DeliveryMethod.SelfPickup,
    paymentMethod: PaymentMethod.Cash,
    status: OrderStatus.InDelivery,
    potions: [
      {
        id: 1002,
        name: 'Зелье Невидимости',
        ingredients: [
          { id: 5, name: 'Корень Тенецвета', unitPrice: 120, quantity: 2, totalPrice: 240 },
          { id: 6, name: 'Пыль Призрака', unitPrice: 350, quantity: 1, totalPrice: 350 },
          { id: 7, name: 'Чешуя Хамелеона', unitPrice: 80, quantity: 4, totalPrice: 320 }
        ],
        price: 910
      }
    ],
    totalOrderPrice: 910
  },
  {
    orderId: 103,
    customerName: 'Воин Гром',
    orderDate: new Date('2026-01-20T11:45:00Z'),
    readyByDate: new Date('2026-01-22T09:00:00Z'),
    deliveryAddress: 'Крепость Каменных Гор, Главные Ворота',
    deliveryMethod: DeliveryMethod.Mail,
    paymentMethod: PaymentMethod.Card,
    status: OrderStatus.Canceled,
    potions: [
      {
        id: 1003,
        name: 'Зелье Силы',
        ingredients: [
          { id: 8, name: 'Коготь Грифона', unitPrice: 400, quantity: 1, totalPrice: 400 },
          {
            id: 9,
            name: 'Сердце Гиганта (сушеное)',
            unitPrice: 1500,
            quantity: 0.2,
            totalPrice: 300
          },
          { id: 10, name: 'Руда Железного Кулака', unitPrice: 30, quantity: 10, totalPrice: 300 },
          { id: 11, name: 'Эссенция Берсерка', unitPrice: 250, quantity: 1, totalPrice: 250 }
        ],
        price: 1250
      }
    ],
    totalOrderPrice: 1250
  },
  {
    orderId: 104,
    customerName: 'Ведьма Морриган',
    orderDate: new Date('2026-01-20T13:00:00Z'),
    readyByDate: new Date('2026-01-21T18:00:00Z'),
    deliveryAddress: 'Высокая Башня, Топи Забвения',
    deliveryMethod: DeliveryMethod.Courier,
    paymentMethod: PaymentMethod.MagicCoin,
    status: OrderStatus.Ready,
    potions: [
      {
        id: 1004,
        name: 'Зелье Полета',
        ingredients: [
          { id: 12, name: 'Перо Грифона', unitPrice: 90, quantity: 3, totalPrice: 270 },
          { id: 13, name: 'Эссенция Облаков', unitPrice: 180, quantity: 2, totalPrice: 360 },
          { id: 14, name: 'Пыль Зефира', unitPrice: 100, quantity: 1.5, totalPrice: 150 }
        ],
        price: 780
      }
    ],
    totalOrderPrice: 780
  },
  {
    orderId: 105,
    customerName: 'Купец О’Малли',
    orderDate: new Date('2026-01-20T14:15:00Z'),
    readyByDate: new Date('2026-01-22T11:00:00Z'),
    deliveryAddress: 'Торговый Квартал, Склад №7',
    deliveryMethod: DeliveryMethod.Mail,
    paymentMethod: PaymentMethod.Card,
    status: OrderStatus.InProgress,
    potions: [
      {
        id: 1005,
        name: 'Зелье Удачи',
        ingredients: [
          { id: 15, name: 'Четырехлистный Клевер', unitPrice: 75, quantity: 5, totalPrice: 375 },
          {
            id: 16,
            name: 'Лапка Кролика (заколдованная)',
            unitPrice: 300,
            quantity: 1,
            totalPrice: 300
          },
          {
            id: 17,
            name: 'Золотая Пыль Лепрекона',
            unitPrice: 2000,
            quantity: 0.1,
            totalPrice: 200
          }
        ],
        price: 875
      }
    ],
    totalOrderPrice: 875
  },
  {
    orderId: 106,
    customerName: 'Королева Изабелла',
    orderDate: new Date('2026-01-20T15:30:00Z'),
    readyByDate: new Date('2026-01-21T13:00:00Z'),
    deliveryAddress: 'Королевский Дворец, Восточное Крыло',
    deliveryMethod: DeliveryMethod.Courier,
    paymentMethod: PaymentMethod.MagicCoin,
    status: OrderStatus.InProgress,
    potions: [
      {
        id: 1006,
        name: 'Зелье Правды',
        ingredients: [
          { id: 18, name: 'Лепесток Веритаса', unitPrice: 150, quantity: 2, totalPrice: 300 },
          { id: 19, name: 'Слеза Сирены', unitPrice: 700, quantity: 0.5, totalPrice: 350 },
          { id: 20, name: 'Кристалл Чистоты', unitPrice: 450, quantity: 1, totalPrice: 450 },
          { id: 21, name: 'Шепот Ветра (сушеный)', unitPrice: 60, quantity: 3, totalPrice: 180 }
        ],
        price: 1280
      }
    ],
    totalOrderPrice: 1280
  },
  {
    orderId: 107,
    customerName: 'Старый Мудрец',
    orderDate: new Date('2026-01-20T16:45:00Z'),
    readyByDate: new Date('2026-01-21T10:00:00Z'),
    deliveryAddress: 'Скрытая Пещера, Ущелье Покоя',
    deliveryMethod: DeliveryMethod.SelfPickup,
    paymentMethod: PaymentMethod.Cash,
    status: OrderStatus.InProgress,
    potions: [
      {
        id: 1007,
        name: 'Зелье Спокойного Сна',
        ingredients: [
          { id: 22, name: 'Ягода Ночницы', unitPrice: 40, quantity: 5, totalPrice: 200 },
          { id: 23, name: 'Нить Ловца Снов', unitPrice: 110, quantity: 2, totalPrice: 220 },
          { id: 24, name: 'Лунная Роса', unitPrice: 90, quantity: 3, totalPrice: 270 }
        ],
        price: 690
      }
    ],
    totalOrderPrice: 690
  },
  {
    orderId: 108,
    customerName: 'Рыцарь Пламени',
    orderDate: new Date('2026-01-20T18:00:00Z'),
    readyByDate: new Date('2026-01-22T14:00:00Z'),
    deliveryAddress: 'Кузница Дракона, Огненные Земли',
    deliveryMethod: DeliveryMethod.Mail,
    paymentMethod: PaymentMethod.Card,
    status: OrderStatus.InProgress,
    potions: [
      {
        id: 1008,
        name: 'Зелье Огненного Дыхания',
        ingredients: [
          { id: 25, name: 'Чешуя Саламандры', unitPrice: 130, quantity: 4, totalPrice: 520 },
          { id: 26, name: 'Вулканический Пепел', unitPrice: 25, quantity: 10, totalPrice: 250 },
          { id: 27, name: 'Пылающий Камень', unitPrice: 380, quantity: 1, totalPrice: 380 },
          { id: 28, name: 'Кровь Огненной Виверны', unitPrice: 900, quantity: 0.3, totalPrice: 270 }
        ],
        price: 1420
      }
    ],
    totalOrderPrice: 1420
  },
  {
    orderId: 109,
    customerName: 'Нимфа Ариэль',
    orderDate: new Date('2026-01-20T19:15:00Z'),
    readyByDate: new Date('2026-01-21T17:00:00Z'),
    deliveryAddress: 'Подводный Грот, Залив Русалок',
    deliveryMethod: DeliveryMethod.Courier,
    paymentMethod: PaymentMethod.MagicCoin,
    status: OrderStatus.New,
    potions: [
      {
        id: 1009,
        name: 'Зелье Водного Дыхания',
        ingredients: [
          { id: 29, name: 'Водоросли Гиллевида', unitPrice: 60, quantity: 6, totalPrice: 360 },
          { id: 30, name: 'Чешуя Тритона', unitPrice: 170, quantity: 2, totalPrice: 340 },
          { id: 31, name: 'Жемчужина Глубин', unitPrice: 500, quantity: 1, totalPrice: 500 }
        ],
        price: 1200
      }
    ],
    totalOrderPrice: 1200
  },
  {
    orderId: 110,
    customerName: 'Оборотень Фенрис',
    orderDate: new Date('2026-01-20T20:30:00Z'),
    readyByDate: new Date('2026-01-22T10:00:00Z'),
    deliveryAddress: 'Секретное Логово, Чаща Шепчущих Деревьев',
    deliveryMethod: DeliveryMethod.SelfPickup,
    paymentMethod: PaymentMethod.Cash,
    status: OrderStatus.New,
    potions: [
      {
        id: 1010,
        name: 'Зелье Трансформации (Кот)',
        ingredients: [
          { id: 32, name: 'Усы Теневого Кота', unitPrice: 100, quantity: 3, totalPrice: 300 },
          { id: 33, name: 'Молоко Луны', unitPrice: 220, quantity: 1, totalPrice: 220 },
          { id: 34, name: 'Мох Перевертыша', unitPrice: 140, quantity: 2, totalPrice: 280 },
          {
            id: 35,
            name: 'Отпечаток Лапы Крадущегося',
            unitPrice: 190,
            quantity: 1,
            totalPrice: 190
          }
        ],
        price: 990
      }
    ],
    totalOrderPrice: 990
  }
];
