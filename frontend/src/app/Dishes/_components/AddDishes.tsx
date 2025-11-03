"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AddProps, FoodsTypes } from "@/lib/types";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useEffect, useState } from "react";

export function AddDishes(Props: AddProps) {
  const { text } = Props;
  const [dishes, setDishes] = useState<FoodsTypes[]>([]);
  const [newDishes, setNewDishes] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:4000/foods");
        setDishes(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  async function add() {
    if (!newDishes.trim()) return null;

    try {
      const res = await axios.post("http://localhost:4000/foods", {
        food: newDishes.trim(),
      });
      setDishes((prev) => [...prev, res.data]);
      setNewDishes("");
    } catch (error) {
      console.error(error, "food error");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white border-dashed border-2 border-orange-400  rounded-2 w-[270px] h-[241px] flex flex-col items-center justify-center gap-5 ">
          <div className="flex flex-col items-center justify-center">
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
            <p>Add new Dish to {text} </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[460px] h-[592px] border-2 rounded-2xl ">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add new Dish to {text}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-2">
          <div className="grid gap-1">
            <Label>Food name</Label>
            <Input placeholder="Type food name" className="w-[200px]" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="username-1">Food price</Label>
            <Input
              placeholder="Enter price..."
              onChange={(e) => setNewDishes(e.target.value)}
            />
          </div>
        </div>
        <Label>Ingredients</Label>
        <Input
          placeholder="List Ingredients..."
          className="w-full h-20 pb-10 pr-7 text-[14px] "
        ></Input>
        <p>Food image</p>
        <div className="relative bg-gray-100">
          <Input
            className="h-[150px]"
            type="file"
            onChange={(e) => setNewDishes(e.target.value)}
            placeholder="choose a file or drag & drop it here"
          ></Input>
          <div className="bg-white w-[50px] h-[50px] rounded-[50%] absolute left-50 right-50 top-15 flex items-center justify-center">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 10L11.9427 7.94267C11.6926 7.69271 11.3536 7.55229 11 7.55229C10.6464 7.55229 10.3074 7.69271 10.0573 7.94267L4 14M3.33333 2H12.6667C13.403 2 14 2.59695 14 3.33333V12.6667C14 13.403 13.403 14 12.6667 14H3.33333C2.59695 14 2 13.403 2 12.6667V3.33333C2 2.59695 2.59695 2 3.33333 2ZM7.33333 6C7.33333 6.73638 6.73638 7.33333 6 7.33333C5.26362 7.33333 4.66667 6.73638 4.66667 6C4.66667 5.26362 5.26362 4.66667 6 4.66667C6.73638 4.66667 7.33333 5.26362 7.33333 6Z"
                stroke="#09090B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => add()} disabled={!newDishes.trim()}>
            Add Dish
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
