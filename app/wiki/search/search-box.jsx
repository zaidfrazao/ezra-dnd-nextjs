"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchBox } from "react-instantsearch";

export function SearchBox(props) {
  const { query, refine } = useSearchBox(props);
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialValue = searchParams.get("query");
    if (initialValue) {
      refine(initialValue);
    }
  }, []);

  return (
    <div>
      <div className="mt-2 grid grid-cols-1">
        <input
          id="search"
          name="search"
          type="search"
          placeholder=""
          className="col-start-1 row-start-1 block w-full rounded-md bg-white py-4 max-w-xl pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:pl-9 sm:text-sm/6"
          value={query}
          onChange={(e) => refine(e.target.value)}
        />
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
        />
      </div>
    </div>
  );
}
