import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/app/_lib/firebase/clientApp";

export async function addWikiPage(database = db, wikiPageInfo) {
  const docRef = await addDoc(collection(database, "wikiPages"), wikiPageInfo);

  return docRef.id;
}

export async function updateWikiPage(database = db, wikiPageInfo, id) {
  await setDoc(doc(database, "wikiPages", id), wikiPageInfo);
}

export async function getWikiPageData(database = db, id) {
  const docRef = doc(database, "wikiPages", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw Error;
  }
}

export async function getWikiPageBySlug(database = db, slug) {
  const wikiPagesRef = collection(database, "wikiPages");
  const q = query(wikiPagesRef, where("slug", "==", slug));

  const querySnapshot = await getDocs(q);

  let pageData = null;
  querySnapshot.forEach((doc) => {
    pageData = {
      ...doc.data(),
      id: doc.id,
    };
  });

  return pageData;
}

export async function addBugReport(database = db, reportDetails) {
  const docRef = await addDoc(
    collection(database, "bugReports"),
    reportDetails
  );

  return docRef.id;
}

export async function deleteWikiPage(database = db, id) {
  try {
    const deletePage = doc(database, "wikiPages", id);
    await deleteDoc(deletePage);
    console.log(`Wiki page with slug "${id}" has been deleted.`);
  } catch (error) {
    console.error("Error deleting wiki page:", error);
  }
}
