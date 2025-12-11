export function generateRandomString(): string {
  const timestamp = new Date().getTime();

  const randomNumber = Math.random() * 1000;

  const randomString = (timestamp + randomNumber).toString(36).replace(".", "");

  return randomString;
}
