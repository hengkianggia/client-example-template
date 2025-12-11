"use client";

import { useRandomStringStore } from "@/state/randomStringStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { NEXT_PUBLIC_CLIENT_ID, NEXT_PUBLIC_MY_URL } from "@/lib/environment";
import useToken from "@/feature/_global/action/useToken";

const CallbackPage = () => {
  const [hasMounted, setHasMounted] = useState(false);

  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const router = useRouter();

  const randomString = useRandomStringStore((state) => state.randomValue);

  const motateToken = useToken();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const client = NEXT_PUBLIC_CLIENT_ID;

  // const hostSSO = NEXT_PUBLIC_SSO_URL;
  const myUrl = NEXT_PUBLIC_MY_URL;

  useEffect(() => {
    if (hasMounted && code !== null && randomString) {
      const bodyPayload = {
        grant_type: "authorization_code",
        code,
        redirect_uri: myUrl + "/callback",
        client_id: client,
        code_verifier: randomString,
      };

      motateToken
        .mutateAsync({
          body: bodyPayload,
        })
        .then(() => {
          router.push("/");
        });
    }
  }, [code, hasMounted, randomString]);

  return <div>callback</div>;
};

export default CallbackPage;
