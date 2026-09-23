import { OrderStatus } from '@prisma/client';

export { OrderStatus };

export const OrderStatusList = [
    OrderStatus.PENDING,
    OrderStatus.PAID,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELLED,
];