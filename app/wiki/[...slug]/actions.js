"use server";

import { getFirestore } from "firebase/firestore";

import {
  getWikiPageBySlug,
  deleteWikiPage,
} from "@/app/_lib/firebase/firestore.js";
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

export async function deleteWikiPageWithDB(id) {
  const {firebaseServerApp} = await getAuthenticatedAppForUser();

  try{
    await deleteWikiPage(getFirestore(firebaseServerApp), id);
    console.log(`Wiki page with slug "${id}" has been deleted.`);
  } catch (error) {
    console.error("Error deleting wiki page:", error);
  }
}
