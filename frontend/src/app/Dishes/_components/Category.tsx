"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CategoryTypes } from "@/lib/types";
import axios from "axios";

import { useEffect, useState } from "react";
export function Category() {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  const mockData = [
    "All dishes",
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favourites",
    "Main dishes",
    "fish & seafoods",
    "Brunch",
    "Side dish",
    "Desserts",
    "Beverages",
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:4000/category");
        setCategories(res.data);
        console.log(categories);
        
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className=" flex flex-col  w-[1171px] h-44 border-4 bg-white border-white rounded-2xl">
      <h1 className="font-bold mb-6 text-2xl pl-13">Dishes category</h1>

      <div>
        <div className="flex flex-wrap max-w-[1171px] max-h-44 gap-8 pl-13 ">
          {categories.map((c, i) => {
            return (
              <div key={i}>
                <Button variant={"secondary"}>
                  {c.category}
                  <Badge variant="outline" className="bg-black text-white">
                    20
                  </Badge>
                </Button>
              </div>
            );
          })}
          <Button
            variant={"secondary"}
            className="bg-orange-400 flex flex-col rounded-[50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.00065 3.33301V12.6663M3.33398 7.99967H12.6673"
                stroke="#FAFAFA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
