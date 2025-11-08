"use client";
import Image from "next/image";
import { AccountLogin } from "./_components/Account";
import { PasswordLogin } from "./_components/Password";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginHome from "../(client)/client/login/page";
import { useRouter } from "next/navigation";
import axios from "axios";
import { UserTypes } from "@/lib/types";

export default function SignUpHome() {
  const [page, setPage] = useState(0);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const router = useRouter();
  const [user, setUser] = useState<UserTypes[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  function Back() {
    setPage(page - 1);
  }

  useEffect(() => {
    async () => {
      try {
        const res = await axios.get("http://localhost:4000/user/signUp");
        setUser(res.data);
      } catch (error) {
        console.error(error, "user error");
      }
    };
  }, []);

  async function createUser() {
    if (!newEmail || !passwordUser) return null;
    try {
      const res = await axios.post("http://localhost:4000/user/signUp", {
        email: newEmail.trim(),
        password: passwordUser,
      });
      router.push("/Login");

      setUser((prev) => [...prev, res.data]);
    } catch (error) {
      console.error(error, "new user error");
    }
  }
  return (
    <>
      <div className="flex flex-col items-center  justify-center ">
        <div className="flex gap-16 ">
          <div className="flex flex-col relative">
            <Button
              className="rounded-[50%] bg-white absolute left-0  top-0"
              onClick={() => Back()}
              disabled={page <= 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#18181B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </svg>{" "}
            </Button>{" "}
            {page === 0 && (
              <AccountLogin
                newEmail={newEmail}
                setNewEmail={setNewEmail}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                setEmailError={setEmailError}
                page={page}
                setPage={setPage}
              />
            )}{" "}
            {page === 1 && (
              <PasswordLogin
                createUser={createUser}
                passwordUser={passwordUser}
                setPasswordUser={setPasswordUser}
                page={page}
                setPage={setPage}
                email={email}
                setEmail={setEmail}
                emailError={emailError}
                setEmailError={setEmailError}
              />
            )}
            {page < 1 && (
              <div className="flex flex-col mt-4">
                <div className="flex gap-2 pl-23">
                  <p className="text-gray-500">Already have an account?</p>
                  <Link href={"http://localhost:3000/Login"}>
                    <span className="text-blue-500">Log in</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Image
            src={"login.jpg"}
            className="rounded-2xl"
            alt={"aaa"}
            width={856}
            height={904}
            unoptimized
          />
        </div>
      </div>
    </>
  );
}
