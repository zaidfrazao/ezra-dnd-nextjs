import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

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
