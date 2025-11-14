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
import { useOrder } from "@/context/food.provider";
import { Ewert } from "next/font/google";
export function OrderMap() {
  const { user } = useAuth();
  const { cart } = useOrder();

  const totalFoods = cart.reduce((sum, item) => sum + item.howMuch, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.howMuch,
    0
  );

  console.log("cart in OrderMap:", cart);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
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
          {cart.map((c, i) => {
            return (
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>{user?.email}</TableCell>
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
                {cart.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center text-muted-foreground"
                    >
                      No orders yet
                    </TableCell>
                  </TableRow>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
