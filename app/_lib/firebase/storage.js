import { ref, uploadBytes } from "firebase/storage";

export const uploadImageToStorage = async (
  storage,
  file,
  wikiPageId,
  filename,
  extension = "jpeg"
) => {
  const newImageRef = ref(storage, `wikiImages/${wikiPageId}/${filename}`);

  const metadata = {
    contentType: `image/${extension}`,
  };

  const uploadTask = await uploadBytes(newImageRef, file, metadata).then(
    (snapshot) => {
      console.log("Uploaded a blob or file!", snapshot);
    }
  );

  return uploadTask;
};
