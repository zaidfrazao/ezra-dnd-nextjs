"use server";

import { getFirestore } from "firebase/firestore";
import { redirect } from "next/navigation";

import {
  updateWikiPage,
  getWikiPageData,
} from "@/app/_lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/app/_lib/firebase/serverApp.js";

export async function submitWikiDetails(formData, id) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();

  try {
    const wikiPageInfo = {
      category: formData.get("category"),
      title: formData.get("title"),
      searchableTitle: formData.get("searchableTitle"),
      slug: formData.get("slug"),
      contents: formData.get("contents"),
    };

    await updateWikiPage(getFirestore(firebaseServerApp), wikiPageInfo, id);
    redirect(`/wiki${formData.get("slug")}`);
  } catch (error) {
    throw error;
  }
}

export async function fetchWikiDetails(id) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();

  try {
    const startingData = getWikiPageData(getFirestore(firebaseServerApp), id);
    return startingData;
  } catch (error) {
    throw error;
  }
}
