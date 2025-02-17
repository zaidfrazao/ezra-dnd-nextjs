"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

import { deleteWikiPageWithDB } from "./actions";

export default function Header({ title, id }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await deleteWikiPageWithDB(id);

      setIsLoading(false);
      redirect("/");
    } catch (error) {
      console.error("Deletion failed:", error);
    }
  };

  return (
    <div className="mb-4">
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
        </div>
        <div className="mt-4 flex shrink-0 md:ml-4 md:mt-0 gap-2">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => router.push(`/admin/edit-wiki-page/${id}`)}
          >
            Edit
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-400"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
