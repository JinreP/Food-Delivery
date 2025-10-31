import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Add } from "./Add";
import { ArrayMap } from "./Map";

export function Pizzas() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-10">Pizzas (5)</h1>

      <ArrayMap length={6} title="Pizzas" price={120} />
    </div>
  );
}
