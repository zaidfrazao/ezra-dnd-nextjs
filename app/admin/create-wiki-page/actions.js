"use server";

import { getFirestore } from "firebase/firestore";
import { redirect } from "next/navigation";

import { addWikiPage } from "@/app/_lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/app/_lib/firebase/serverApp.js";

export async function submitWikiDetails(formData) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();

  try {
    const wikiPageInfo = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      contents: formData.get("contents"),
    };

    const pageId = await addWikiPage(
      getFirestore(firebaseServerApp),
      wikiPageInfo
    );

    console.log("New page created with ID:", pageId);

    redirect("/");
  } catch (error) {
    throw error;
  }
}
