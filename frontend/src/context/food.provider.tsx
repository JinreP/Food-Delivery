"use client";

import { FoodsTypes, OrderedFood, OrderItem } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useAuth } from "./user.provider";

type OrderContextType = {
  orderedFood: OrderedFood | null;
  order: (
    user: string,
    totalPrice: number,
    items: OrderItem[],
    status: string
  ) => Promise<void>;
  cancel: (foodId: string) => void;
  cart: OrderItem[];
  addToCart: (dish: FoodsTypes, howMuch: number) => void;
  clearCart: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderFoodAuth({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const userId = user?._id;
  const router = useRouter();

  const [cart, setCart] = useState<OrderItem[]>([]);
  const [orderedFood, setOrderedFood] = useState<OrderedFood | null>(null);

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    (async () => {
      if (!userId) return;
      try {
        const res = await axios.get(
          `http://localhost:4000/order/user/${userId}`
        );
        setOrderedFood(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [userId]);

  async function order(
    user: string,
    totalPrice: number,
    items: OrderItem[],
    status: string
  ) {
    try {
      const res = await axios.post(
        `http://localhost:4000/order/user/${userId}`,
        {
          user,
          totalPrice,
          items,
          status,
        }
      );
      setOrderedFood(res.data.food);
      console.log("REQ BODY:", res.data);
      router.push("/");
    } catch (error: any) {
      console.error(error, "frotnend");
    }
  }
  const addToCart = (dish: FoodsTypes, howMuch: number) => {
    if (!dish._id) return;

    const item: OrderItem = {
      _id: dish._id,
      foodId: dish._id,
      name: dish.food,
      price: dish.price,
      howMuch: howMuch,
      ingredients: dish.ingredients,
    };
    console.log(cart);

    setCart((prev) => [...prev, item]);

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const cancel = (foodId: string) => {
    setCart((prev) => prev.filter((item) => item.foodId !== foodId));
  };
  function clearCart() {
    setCart([]);
  }
  const value: OrderContextType = {
    orderedFood,
    cancel,
    order,
    cart,
    addToCart,
    clearCart,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
