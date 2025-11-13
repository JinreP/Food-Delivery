"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { OrderItem } from "@/lib/types";
import { useOrder } from "@/context/food.provider";

export function CartList() {
  const { cart, cancel } = useOrder();

  const [orderCount, setOrderCount] = useState(1);
  const [foodData, setFoodData] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") return;
    try {
      const cart = localStorage.getItem("cart");

      const carts: OrderItem[] = cart ? JSON.parse(cart) : [];
      if (carts) {
        setFoodData(carts);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {cart.map((item, i) => {
        return (
          <div key={i} className="flex gap-5 relative">
            <Image
              width={124}
              height={120}
              src="/sunshine.png"
              alt=""
              className="rounded-2xl"
            />
            <div className="flex flex-col pt-3">
              <h1 className="text-orange-500 font-bold text-[16px]">
                {item.name}
              </h1>
              <p className="text-gray-500 text-[12px] mt-1 w-[250px]">
                {item.ingredients}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Button
                    className="rounded-[50%] w-9 h-9 bg-white border-0"
                    onClick={() => setOrderCount(orderCount - 1)}
                    disabled={orderCount <= 0}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33398 8H12.6673"
                        stroke="#18181B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                  <h1 className="font-bold text-[19px]">{orderCount}</h1>
                  <Button
                    className="rounded-[50%] w-9 h-9 bg-white border-0"
                    onClick={() => setOrderCount(orderCount + 1)}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.16667 0.5V9.83333M0.5 5.16667H9.83333"
                        stroke="#18181B"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                </div>
                <h1 className="font-bold text-black">${item.price}</h1>
              </div>
            </div>
            <Button
              className="border-orange-500 absolute top-0 right-0 w-9 h-9 border rounded-[50%] bg-white"
              onClick={() => cancel(item.foodId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="#EF4444"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
