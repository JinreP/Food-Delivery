import Link from "next/link";
import { Button } from "./ui/button";

export function SignUpLogin({ setLoggedIn, logged }: any) {
  return (
    <div className="flex gap-5">
      <Link href={"http://localhost:3000/client/signUp"}>
        <Button className="bg-gray-400">Sign up</Button>
      </Link>

      <Link href={"http://localhost:3000/client/login"}>
        <Button onClick={logged} className="bg-orange-600">
          Log in
        </Button>
      </Link>
    </div>
  );
}
