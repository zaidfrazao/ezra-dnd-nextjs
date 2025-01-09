import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "@/app/_lib/firebase/clientApp";

export async function getBanks(database = db) {
  let q = query(collection(database, "banks"));

  const results = await getDocs(q, orderBy("name", "asc"));
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      creationDate: doc.data().creationDate.toDate(),
      logoUrl: doc.data().logoUrl,
      name: doc.data().name,
      nickname: doc.data().nickname,
    };
  });
}
