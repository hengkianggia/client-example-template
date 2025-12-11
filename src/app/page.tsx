"use client";

import { generateCodeChallenge } from "@/feature/_global/helper/helpers";
import { NEXT_PUBLIC_CLIENT_ID } from "@/lib/environment";
import { useRandomStringStore } from "@/state/randomStringStore";
import { useAuthStore } from "@/state/useAuthStore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loginCondition, setLoginCondition] = useState<boolean>(false);
  const { isLogin } = useAuthStore();

  const randomString = useRandomStringStore((state) => state.randomValue);

  const client = NEXT_PUBLIC_CLIENT_ID;
  // Only generate code challenge on the client side
  const [codeChallenge, setCodeChallenge] = useState<string | null>(null);

  useEffect(() => {
    setCodeChallenge(generateCodeChallenge(randomString));
  }, [randomString]);

  useEffect(() => {
    setLoginCondition(isLogin);
  }, [isLogin]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center space-y-10">
      <p className="text-3xl uppercase">starting project</p>
      {loginCondition ? (
        "yeeeyyy login masukk"
      ) : (
        <Link
          className="text-blue-500"
          rel="noreferrer"
          href={
            codeChallenge
              ? `http://localhost:1000/callback?clientId=${client}&code_challenge=${codeChallenge}&code_challenge_method=S256&redirectUri=http://localhost:3000/callback&responseType=code`
              : "#"
          }
          onClick={(e) => {
            if (!codeChallenge) {
              e.preventDefault();
              console.warn("Code challenge not ready yet");
            }
          }}
        >
          <button>Masuk</button>
        </Link>
      )}
    </div>
  );
}
