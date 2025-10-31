import { Button } from "@/components/ui/button";
import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { AddProps } from "@/lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";

export function Add(Props: AddProps) {
  const { text } = Props;
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
      <DialogContent className="w-[300px] h-[500px] bg-black text-white ">
        <DialogHeader>
          <DialogTitle className="text-3xl">Add new Dish to {text}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-2">
          <div className="grid gap-3">
            <Label>Food name</Label>
            <Input defaultValue="Type food name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Food price</Label>
            <Input defaultValue="Enter price" />
          </div>
        </div>
        <p>Ingredients</p>
        <Input
          placeholder="List Ingredients"
          className="w-full h-[50px]"
        ></Input>
        <p>Food image</p>
        <Input
          type="file"
          placeholder="choose a file or drag & drop it here"
        ></Input>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="destructive">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
