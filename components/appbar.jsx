"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { SearchForm } from "@/components/search-form";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, onAuthStateChanged } from "@/app/_lib/firebase/auth";

export function AppBar() {
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger />
      </div>
      <div className="grow h-4" />
      <SearchForm />
      {user ? (
        <div className="flex pr-4">
          <Button variant="link" onClick={signOut} className="p-2">
            Sign out
          </Button>

          <Avatar>
            <AvatarImage src={user.photoURL ? user.photoURL : "https://github.com/shadcn.png"} />
            <AvatarFallback>Morty</AvatarFallback>
          </Avatar>
        </div>
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
