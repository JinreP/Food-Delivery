import { Button } from "@/components/ui/button";
import { ArrayPropsTypes } from "@/lib/types";
import Image from "next/image";
import { AddDishes } from "./AddDishes";

export function ArrayMap(ArrayProps: ArrayPropsTypes) {
  const { length, title, price } = ArrayProps;
  return (
    <div>
      <div className="flex flex-wrap w-[1171px]py-5 px-5  h-fit gap-4 bg-white rounded-2xl items-center pl-5.5  ">
        <AddDishes text={title} />
        {Array.from({ length }).map((_, i) => (
          <div
            key={i}
            className="bg-white  w-[270px] border-2 rounded-2xl h-[241px] pt-3 flex flex-col items-center justify-center gap-2  relative"
          >
            <Image
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrEvXL1D2RHufIvq3njsHdh1Vv7PmCngivA&s"
              }
              alt={"aaa"}
              width={238}
              height={129}
              unoptimized
            />
            <Button
              variant={"secondary"}
              className="rounded-[50%] w-11 h-11 absolute  right-6 top-25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_26080_5480)">
                  <path
                    d="M11.334 1.99955C11.5091 1.82445 11.7169 1.68556 11.9457 1.5908C12.1745 1.49604 12.4197 1.44727 12.6673 1.44727C12.9149 1.44727 13.1601 1.49604 13.3889 1.5908C13.6177 1.68556 13.8256 1.82445 14.0007 1.99955C14.1757 2.17465 14.3146 2.38252 14.4094 2.61129C14.5042 2.84006 14.5529 3.08526 14.5529 3.33288C14.5529 3.58051 14.5042 3.8257 14.4094 4.05448C14.3146 4.28325 14.1757 4.49112 14.0007 4.66622L5.00065 13.6662L1.33398 14.6662L2.33398 10.9996L11.334 1.99955Z"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_26080_5480">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Button>
            <div className="flex gap-7">
              <p className="text-orange-400">{title}</p>
              <span>{price}</span>
            </div>
            <p className="px-4  text-[12px]">Grilled Chicken cobb salad</p>
          </div>
        ))}
      </div>
    </div>
  );
}
