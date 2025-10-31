"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CategoryTypes } from "@/lib/types";
import axios from "axios";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export function Category() {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:4000/category");
        setCategories(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function add() {
    if (!newCategory.trim()) return null;
    try {
      const res = await axios.post("http://localhost:4000/category", {
        category: newCategory.trim(),
      });
      setCategories((prev) => [...prev, res.data]);
      setNewCategory("");
    } catch (error) {
      console.error(error, "rrrrr");
    }
  }

  return (
    <div className=" flex flex-col  w-[1171px] h-fit border-4 bg-white border-white rounded-2xl">
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
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex flex-col items-center justify-center">
                <Button
                  variant={"secondary"}
                  onClick={() => add()}
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
            </DialogTrigger>
            <DialogContent className="w-[460px] h-[262px] rounded-2xl border-4  ">
              <DialogHeader>
                <DialogTitle className="text-3xl">Add new category</DialogTitle>
              </DialogHeader>
              <div className="flex gap-2">
                <div className="">
                  <Label className="mb-4">Category name</Label>
                  <Input
                    className="w-[300px]"
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Type category name"
                  />
                </div>{" "}
              </div>

              <DialogFooter>
                <Button
                  className="bg-black"
                  onClick={() => add()}
                  disabled={!newCategory.trim()}
                >
                  Add category
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
