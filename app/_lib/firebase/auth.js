import {
  signInWithEmailAndPassword,
  onAuthStateChanged as _onAuthStateChanged,
} from "firebase/auth";

import { auth } from "@/app/_lib/firebase/clientApp";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signInWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.code);
    console.error(error.message);
    throw error;
  }
}

export async function signOut() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
