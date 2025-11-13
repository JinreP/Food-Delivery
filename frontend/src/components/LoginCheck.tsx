import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";

export function CheckingUser() {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="w-[429px] h-[184px] flex flex-col justify-center items-center">
            <DialogHeader>
              <DialogTitle>You need to log in first </DialogTitle>
            </DialogHeader>

            <DialogFooter className="flex gap-5">
              <Link href={"http://localhost:3000/client/login"}>
                <Button variant="outline">Log in</Button>
              </Link>
              <Link href={"http://localhost:3000/client/signUp"}>
                <Button type="submit">Sign up</Button>
              </Link>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
