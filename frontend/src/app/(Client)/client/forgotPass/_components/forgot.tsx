"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserTypes } from "@/lib/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ForgotPassword() {
  const [updateUser, setUpdateUser] = useState<UserTypes[]>([]);
  const [updadedUser, setUpdatedUser] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:4000/user");
        setUpdateUser(res.data);
      } catch (error) {
        console.error(error, "update user error");
      }
    })();
  }, []);

  async function updadeUser() {
    if (!updadedUser.trim()) return null;
    try {
      const res = await axios.patch("http://localhost:4000/user/", {
        password: updadedUser.trim(),
      });
      setUpdateUser((prev) => [...prev, res.data]);
      setUpdatedUser("");
    } catch (error) {
      console.error(error, "updaded user error");
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center  justify-center ">
        <div className="flex gap-16 ">
          <div className="flex flex-col relative">
            <Button className="rounded-[50%] bg-white absolute left-0 top-0">
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
                />
              </svg>
            </Button>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl mt-12">Reset your password </h1>
              <p className="text-gray-500">
                Enter your email to receive a password reset link.{" "}
              </p>
              <Input
                placeholder="example@gamil.com"
                onChange={(e) => setUpdatedUser(e.target.value)}
              />

              <p className="underline">Forgot password</p>
            </div>
            <div className="flex flex-col">
              <Button
                className="bg-black w-[450px] mt-5 mb-5 text-white"
                onClick={updadeUser}
              >
                Send link
              </Button>
              <div className="flex gap-2 pl-23">
                <p className="text-gray-500">Don’t have an account?</p>
                <Link href={"http://localhost:3000/client/signUp"}>
                  <span className="text-blue-500">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
