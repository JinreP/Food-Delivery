import { useOrder } from "@/context/food.provider";
import { Badge } from "./ui/badge";

export function OrderList({ ordered, location, orderedFood }: any) {
  const { cart } = useOrder();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.howMuch,
    0
  );
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const today = `${year}/${month}/${day}`;
  return (
    <div>
      {orderedFood && (
        <div className="flex flex-col gap-5">
          <div className="flex justify-between gap-50">
            <div className="flex gap-2 font-bold text-[20px]">
              <h1>${totalPrice}</h1>
              <h1>(#20156)</h1>
            </div>
            <Badge className="bg-transparent border text-black rounded-2xl border-orange-600">
              Pending
            </Badge>
          </div>

          {cart.map((item, i) => {
            return (
              <div key={i}>
                <div className="flex justify-between items-center ">
                  <div className="flex gap-2 mb-3 text-[16px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.66667 14H11.3333M13 8L14.6667 4M10.8333 2C11.0133 2.06667 11.3667 2.35333 11.3333 2.90667C11.2933 3.46 10.7133 3.70667 10.6667 4.25333C10.6333 4.77333 10.8933 5.08 11.1533 5.33333M7.5 2C7.68 2.06667 8.03333 2.35333 7.99333 2.90667C7.96 3.46 7.37333 3.70667 7.34 4.25333C7.3 4.77333 7.56 5.08 7.82 5.33333M4.16667 2C4.34667 2.06667 4.7 2.35333 4.66667 2.90667C4.62667 3.46 4.04667 3.70667 4 4.25333C3.96667 4.77333 4.22667 5.08 4.49333 5.33333M8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8H2C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14Z"
                        stroke="#09090B"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h1 className="text-gray-500">{item.name}</h1>
                  </div>
                  <p>x{item.howMuch}</p>
                </div>
                <div className="flex justify-between mb-3 items-center">
                  <div className="flex gap-2 text-[16px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.66797 1.3335H9.33464M8.0013 9.3335L10.0013 7.3335M13.3346 9.3335C13.3346 12.279 10.9468 14.6668 8.0013 14.6668C5.05578 14.6668 2.66797 12.279 2.66797 9.3335C2.66797 6.38798 5.05578 4.00016 8.0013 4.00016C10.9468 4.00016 13.3346 6.38798 13.3346 9.3335Z"
                        stroke="#09090B"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h1 className="text-gray-500"> {today}</h1>
                  </div>
                </div>

                {/* four */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.66797 1.3335H9.33464M8.0013 9.3335L10.0013 7.3335M13.3346 9.3335C13.3346 12.279 10.9468 14.6668 8.0013 14.6668C5.05578 14.6668 2.66797 12.279 2.66797 9.3335C2.66797 6.38798 5.05578 4.00016 8.0013 4.00016C10.9468 4.00016 13.3346 6.38798 13.3346 9.3335Z"
                        stroke="#09090B"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h1 className="text-gray-500 text-[16px]">
                      {today} {location}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
