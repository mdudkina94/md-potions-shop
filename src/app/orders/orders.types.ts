export enum DeliveryMethod {
    Mail = 'Почта',
    Courier = 'Курьер',
    SelfPickup = 'Самовывоз'
}

export enum PaymentMethod {
    Cash = 'Наличные',
    Card = 'Карта',
    MagicCoin = 'Волшебные монеты'
}

export interface Order {
    orderId: string;
    customerName: string;
    orderDate: Date;
    readyByDate: Date;
    deliveryAddress: string;
    deliveryMethod: DeliveryMethod;
    paymentMethod: PaymentMethod;
    potionId: string;
}
