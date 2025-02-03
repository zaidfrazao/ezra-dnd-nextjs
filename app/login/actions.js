import { redirect } from "next/navigation";
import { signInWithEmail } from "@/app/_lib/firebase/auth.js";

export async function signIn(email, password) {
  try {
    await signInWithEmail(email, password);
    redirect("/");
  } catch (error) {
    throw error;
  }
}
