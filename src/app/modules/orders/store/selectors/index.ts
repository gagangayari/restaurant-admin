import { createFeatureSelector } from "@ngrx/store";
import { Order } from "../../order.model";

export const getOrdersList = createFeatureSelector<Order>('orders')