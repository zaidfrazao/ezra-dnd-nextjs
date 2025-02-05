import { Search } from "lucide-react";
import { useState } from "react";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(search);
    } else {
      console.log("Search value:", search);
    }
  };

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
