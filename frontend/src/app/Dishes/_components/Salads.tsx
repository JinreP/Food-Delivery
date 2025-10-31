import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Add } from "./Add";
import { ArrayMap } from "./Map";

export function Salads() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-10">Salads (3)</h1>

      <ArrayMap length={3} title="salads" price={99} />
    </div>
  );
}
