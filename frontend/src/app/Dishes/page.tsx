import { Button } from "@/components/ui/button";
import { Dishes } from "./_components/Dishes.Left.side";
import { Category } from "./_components/Category";
import { Appetizers } from "./_components/Appetizers";
import { Salads } from "./_components/Salads";
import { Pizza } from "lucide-react";
import { Pizzas } from "./_components/Pizza";

export default function DishesHome() {
  return (
    <div className="w-full h-[2000px] bg-gray-100">
      <div className="flex flex-col">
        <div className="flex gap-40">
          <Dishes />
          <div className="mt-25">
            <Category />
            <Appetizers />
            <Salads />
            <Pizzas />
          </div>
        </div>
      </div>
    </div>
  );
}
