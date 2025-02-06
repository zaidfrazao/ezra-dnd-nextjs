"use client";

import Link from "next/link";

import { ChevronRightIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useHits } from "react-instantsearch";

export function Result({ hit }) {
  function limitContentsText(text) {
    let trimmedText = text;

    if (text.length > 400) {
      trimmedText = `${text.substring(0, 400)}...`;
    }

    return trimmedText;
  }

  return (
    <li className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm/6 font-semibold text-gray-900">
            <Link href={`/wiki${hit.slug}`}>
              <span className="absolute inset-x-0 -top-px bottom-0" />
              {hit.title}
            </Link>
          </p>
          <p className="mt-1 flex text-xs/5 text-gray-500 text-wrap">
            {limitContentsText(hit.contents)}
          </p>
        </div>
      </div>
      <ChevronRightIcon
        aria-hidden="true"
        className="size-5 flex-none text-gray-400"
      />
    </li>
  );
}

export function Results(props) {
  const { items } = useHits(props);

  if (items.length == 0) {
    return (
      <div className="text-center px-12 py-24">
        <XCircleIcon
          aria-hidden="true"
          className="mx-auto size-12 text-gray-400"
        />
        <h3 className="mt-2 text-sm font-semibold text-gray-700">
          No matching wiki pages found.
        </h3>
      </div>
    );
  }

  return (
    <ul role="list" className="p-8 divide-y divide-gray-100">
      {items.map((item) => (
        <Result key={item.objectID} hit={item} />
      ))}
    </ul>
  );
}
