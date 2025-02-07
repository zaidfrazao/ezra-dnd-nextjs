"use client";

import { Suspense } from "react";
import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";

import { Results } from "./results";
import { SearchBox } from "./search-box";

const searchClient = algoliasearch(
  "5MIUGKSBNL",
  "b6cf1d25843679bdef39d7b1da3ad788"
);

export default function SearchPage() {
  return (
    <div>
      <Suspense>
        <InstantSearch searchClient={searchClient} indexName="wikiPages">
          <Configure hitsPerPage={5} />
          <SearchBox />
          <Results />
        </InstantSearch>
      </Suspense>
    </div>
  );
}
