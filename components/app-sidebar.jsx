"use client";

import * as React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@/app/_lib/firebase/auth";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const data = {
    navMain: [
      user
        ? {
            title: "Admin Tools",
            url: "/tools",
            items: [
              {
                title: "Add new page",
                url: "/admin/create-wiki-page",
              },
            ],
          }
        : null,
      {
        title: "Races",
        url: "/wiki/characters",
        items: [
          { title: "Dark Elves", url: "/wiki/races/dark-elves" },
          { title: "Dragons", url: "/wiki/races/dragons", isActive: true },
          { title: "Dwarves", url: "/wiki/races/dwarves" },
          { title: "Elves", url: "/wiki/races/elves" },
          { title: "Humans", url: "/wiki/races/humans" },
          { title: "Orcs", url: "/wiki/races/orcs" },
        ],
      },
      {
        title: "Continents",
        url: "/continents/",
        items: [
          { title: "Alfar Saltus", url: "/wiki/continents/alfar-saltus" },
          { title: "Oloklerious", url: "/wiki/continents/oloklerious" },
        ],
      },
    ].filter(Boolean),
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="p-0">
        <Link href="/">
          <div className="bg-[linear-gradient(to_bottom,rgba(24,24,24,0),rgba(24,24,24,1)),url('/Logo.jpg')] bg-cover aspect-video text-white pb-24"></div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="pt-4">
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
