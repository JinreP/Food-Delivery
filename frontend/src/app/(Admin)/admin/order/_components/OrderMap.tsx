"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/user.provider";

import { useEffect, useState } from "react";
import axios from "axios";
import { OrderItem } from "@/lib/types";
import { useUser } from "@clerk/nextjs";
export function OrderMap() {
  const { user } = useUser();

  const [orders, setOrders] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (!user?.id) return;
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/order/user/${user?.id}`
        );

        setOrders(res.data);
        console.log("ORDERS >>>", res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user]);

  const totalFoods = orders.reduce((sum, order) => {
    return (
      sum +
      order.items.reduce((s: any, i: { howMuch: any }) => s + i.howMuch, 0)
    );
  }, 0);

  const totalPrice = orders.reduce((sum, order) => {
    return sum + order.totalPrice;
  }, 0);

  console.log("cart in OrderMap:", orders);
  return (
    <div className="w-full h-screen bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">№</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Food</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">Delivery Address</TableHead>
            <TableHead className="text-right">Delivery state</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center text-muted-foreground"
              >
                No orders yet
              </TableCell>
            </TableRow>
          )}
          {orders.map((c, i) => {
            return (
              <TableRow key={c._id}>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>{user?.primaryEmailAddress?.emailAddress}</TableCell>
                <TableCell>
                  {c.name} {totalFoods}
                </TableCell>
                <TableCell className="text-right">2024/12/20</TableCell>
                <TableCell className="text-right">{totalPrice}</TableCell>
                <TableCell className="text-right">location</TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Badge className="border border-orange-600 bg-white text-black px-5 py-2 font-bold">
                        Pending
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M4.66602 10.0003L7.99935 13.3337L11.3327 10.0003M4.66602 6.00033L7.99935 2.66699L11.3327 6.00033"
                            stroke="#09090B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Badge>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                      <DropdownMenuLabel>Canceled</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Delivered</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
