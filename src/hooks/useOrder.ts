import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {

    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) { // actualiza la cantidad de items pero no aumenta el numero de arreglos con el mismo item

        const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
            {...orderItem, quantity : orderItem.quantity + 1} : 
            orderItem) 

            setOrder(updatedOrder);

    } else {
      const newItem = { ...item, quantity: 1 }; // evita el error de los items sin quantity
      setOrder([...order, newItem]);
    }
  }


  const removeItem = (id : MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id)) // elimina el item completo del order
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}
