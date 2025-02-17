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
    .map((file) => `<li key=File Name: ${file.name})</li>`)
    .join("");

  return (
    <div
      {...getRootProps()}
      className="flex items-center justify-center border-dashed border-2 border-black"
    >
      <section className="container">
        <div className="flex items-center justify-center dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
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
