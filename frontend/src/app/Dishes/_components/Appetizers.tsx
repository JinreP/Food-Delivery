import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Add } from "./Add";
import { ArrayMap } from "./Map";

export function Appetizers() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-10">Appetizers (5)</h1>

      <ArrayMap length={10} title="Appetizers" price={150} />
    </div>
  );
}
