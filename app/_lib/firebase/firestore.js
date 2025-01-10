import { addDoc, collection } from "firebase/firestore";

import { db } from "@/app/_lib/firebase/clientApp";

export async function addWikiPage(database = db, wikiPageInfo) {
  const docRef = await addDoc(collection(database, "wikiPages"), wikiPageInfo);

  return docRef.id;
}
