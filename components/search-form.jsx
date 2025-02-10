"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/_lib/firebase/clientApp";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ onSearch, ...props }) {
  const {isLoading} = props;
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cleanedSearch = search
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "");

    try {
      const wikiRef = collection(db, "wikiPages");
      const q = query(wikiRef, where("searchableTitle", "==", cleanedSearch));
      const querySnapshot = await getDocs(q);
      let searchResults = [];

      querySnapshot.forEach((doc) => {
        searchResults.push(doc.data());
      });

      if (searchResults.length > 0) {
        router.push(`/wiki${searchResults[0].slug}`);
      } else {
        router.push(`/wiki/search?query=${search}`);
      }
      setSearch("");
    } catch (error) {
      console.error("Error searching Firestore:", error);
    }
  };

  if (isLoading) {
    return (
      <form {...props} onSubmit={handleSubmit}>
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <Skeleton className="h-5 w-40 rounded-md bg-zinc-300 my-2" />
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
          </SidebarGroupContent>
        </SidebarGroup>
      </form>
    );
  }

  return (
    <form {...props} onSubmit={handleSubmit}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="What is it doth seek"
            className="pl-8"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
