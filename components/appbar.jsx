"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AccountOptionsMenu } from "@/components/account-options-dropdown";
import { Button } from "@/components/ui/button";
import { BugReportDialog } from "@/components/bug-report-dialog";
import { SearchForm } from "@/components/search-form";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { signOut, onAuthStateChanged } from "@/app/_lib/firebase/auth";

export function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isLoading) {
    return (
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
        </div>
        <div className="grow h-4" />
        <div className="flex pr-4 gap-2 items-center">
          <Skeleton className="h-6 w-40 rounded-md my-2" />
          <Skeleton className="h-6 w-20 rounded-md my-2" />
          <Skeleton className="h-10 w-10 rounded-full my-2" />
        </div>
      </header>
    );
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-3">
        <SidebarTrigger />
      </div>
      <div className="grow h-4" />
      <SearchForm />
      {user ? (
        <div className="flex pr-4">
          <AccountOptionsMenu
            signOut={signOut}
            reportBug={() => setIsOpen(true)}
            email={user ? user.email : ""}
          />
        </div>
      ) : (
        <div className="flex pr-4">
          <Button asChild variant="link" className="p-2">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      )}
      <BugReportDialog
        isOpen={isOpen}
        closeDialog={() => setIsOpen(false)}
        user={user}
      />
    </header>
  );
}
