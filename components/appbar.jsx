"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/app/_lib/firebase/clientApp";
import { signOut } from "@/app/_lib/firebase/auth";

export function AppBar() {
  console.log(auth.currentUser);
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger />
      </div>
      <div className="grow h-4" />
      <SearchForm />
      {auth.currentUser ? (
        <Button variant="link" onClick={() => signOut()} className="p-2">
          Sign out
        </Button>
      ) : (
        <div className="flex pr-4">
          <Button asChild variant="link" className="p-2">
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild variant="link" className="p-2">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
