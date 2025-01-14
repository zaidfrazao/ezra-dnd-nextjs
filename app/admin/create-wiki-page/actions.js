"use server";

import { getFirestore } from "firebase/firestore";
import { redirect } from "next/navigation";

import { addWikiPage } from "@/app/_lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/app/_lib/firebase/serverApp.js";

export async function submitWikiDetails(formData) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();

  try {
    const wikiPageInfo = {
      category: formData.get("category"),
      title: formData.get("title"),
      slug: formData.get("slug"),
      contents: formData.get("contents"),
    };

    await addWikiPage(getFirestore(firebaseServerApp), wikiPageInfo);
    redirect(`/wiki${formData.get("slug")}`);
  } catch (error) {
    throw error;
  }
}
