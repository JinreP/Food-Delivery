import { Button } from "@/components/ui/button";
import { Dishes } from "./_components/Dishes.Left.side";
import { Category } from "./_components/Category";
import { Appetizers } from "./_components/Appetizers";
import { User } from "@/components/user";

export default function DishesHome() {
  return (
    <div className="w-full h-fit bg-gray-100">
      <div className="flex flex-col">
        <div className="flex gap-40 relative ">
          <Dishes />

          <div className="mt-25 ">
            {/* <User /> */}

            <Category />
            <Appetizers />
          </div>
        </div>
      </div>
    </div>
  );
}
