import Image from "next/image";

export function Hero() {
  return (
    <div className=" ">
      <Image
        src={"/hero.png"}
        alt={"hero"}
        width={1440}
        objectFit="cover"
        height={668}
        className=""
      />
    </div>
  );
}
