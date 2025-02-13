import React from "react";
import { useDropzone } from "react-dropzone";
import { uploadNewWikiImage } from "../app/admin/edit-wiki-page/[id]/actions";
import { Separator } from "@/components/ui/separator";

export default function ImageDropzone({ wikiPageId }) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: async (acceptedFiles) => {
      for (const file of acceptedFiles) {
        await uploadNewWikiImage(file, wikiPageId, file.name);
      }
    },
  });

  const files = acceptedFiles
    .map(
      (file) => `<li key=${file.path}>${file.path} - ${file.size} bytes</li>`
    )
    .join("");

  return (
    <div
      {...getRootProps()}
      className="flex items-center justify-center border-dashed border-2 border-black"
    >
      <section className="container">
        <div className="dropzone">
          <input {...getInputProps()} />
          <p className="flex items-center">
            Drag 'n' drop some files here, or click to select files
          </p>
        </div>
        <Separator />
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    </div>
  );
}
