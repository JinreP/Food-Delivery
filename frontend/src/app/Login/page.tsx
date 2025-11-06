"use client";

import { Img } from "./_components/image";
import { Login } from "./_components/login";

const categorys = ["Salad", "Main dishes", "Side Dishes"];

const foods = [
  {
    name: "Buuz",
    category: "Main dishes",
  },
];

export default function LoginHome() {
  return (
    <>
      <div className="flex items-center  justify-center gap-10">
        <Login />
        <Img />
      </div>
    </>
  );
}
