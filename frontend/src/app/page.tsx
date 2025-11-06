import Image from "next/image";
import Dishes from "./Dishes/page";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-500">
      <Navbar />
      <Hero />
    </div>
  );
}
