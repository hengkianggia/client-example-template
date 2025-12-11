import crypto from "crypto";

export const generateCodeChallenge = (verifier: string) => {
  const sha256 = crypto.createHash("sha256").update(verifier).digest();
  const challenge = sha256
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  return challenge;
};
