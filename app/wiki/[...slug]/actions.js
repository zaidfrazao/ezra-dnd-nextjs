"use server";

import { getFirestore } from "firebase/firestore";

import { getWikiPageBySlug } from "@/app/_lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/app/_lib/firebase/serverApp.js";

export async function fetchWikiDetails(slug) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();

  try {
    const pageData = getWikiPageBySlug(getFirestore(firebaseServerApp), slug);
    return pageData;
  } catch (error) {
    throw error;
  }
}
