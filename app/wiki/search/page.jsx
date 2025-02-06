"use client";

import { useSearchParams } from "next/navigation";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";

import { Results } from "./results";
import { SearchBox } from "./search-box";

const searchClient = algoliasearch(
  "5MIUGKSBNL",
  "b6cf1d25843679bdef39d7b1da3ad788"
);

export default function SearchPage() {
  const searchParams = useSearchParams();

  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="wikiPages">
        <Configure hitsPerPage={5} />
        <SearchBox initialValue={searchParams.get("query")} />
        <Results />
      </InstantSearch>
    </div>
  );
}
