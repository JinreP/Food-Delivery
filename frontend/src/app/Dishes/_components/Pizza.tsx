import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AddDishes } from "./AddDishes";
import { ArrayMap } from "./Map";

export function Pizzas() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-10">Pizzas (5)</h1>

      <ArrayMap text={"Pizzas"} />
    </div>
  );
}
