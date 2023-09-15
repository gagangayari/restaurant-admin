

export interface Order{
    orderId?: string;
    item: string;
    price: number;
    ordered_by?: string;
    address?: string;
    
}

export interface OrderFirebase{
    name: string;
    fields: Order;
    createTime: Date;
    updateTime: Date;
}