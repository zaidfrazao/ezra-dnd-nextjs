"use client";

import * as React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/app/_lib/firebase/clientApp";
import { onAuthStateChanged } from "@/app/_lib/firebase/auth";
import { Skeleton } from "@/components/ui/skeleton";
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
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPageData() {
      const categories = ["races", "classes", "continents"];

      try {
        const wikiRef = collection(db, "wikiPages");
        const q = query(
          wikiRef,
          where("category", "in", categories),
          orderBy("category", "desc"),
          orderBy("title", "asc")
        );
        const querySnapshot = await getDocs(q);

        const groupedData = {};
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log("data", data);
          if (!groupedData[data.category]) {
            groupedData[data.category] = {
              title:
                data.category.charAt(0).toUpperCase() + data.category.slice(1),
              url: `/wiki/${data.category}`,
              items: [],
            };
          }
          groupedData[data.category].items.push({
            title: data.title,
            url: `/wiki/${
              data.slug ||
              data.title.toLowerCase().replace(/[^a-zA-Z0-9-_]/g, "")
            }`,
          });
        });

        setResults(Object.values(groupedData));
        setIsLoading(false);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    }

    fetchPageData();
  }, []);

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
    ].filter(Boolean),
  };

  if (isLoading) {
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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Skeleton className="h-5 w-24 rounded-md bg-gray-700 my-2" />
                </SidebarMenuButton>
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Skeleton className="h-5 w-24 rounded-md bg-gray-700 my-2" />
                </SidebarMenuButton>
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Skeleton className="h-5 w-24 rounded-md bg-gray-700 my-2" />
                </SidebarMenuButton>
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
                <Skeleton className="h-5 w-40 rounded-md bg-gray-700 my-2 ml-4" />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    );
  }

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
            {results.map((category) => (
              <SidebarMenuItem key={category.title}>
                <SidebarMenuButton asChild>
                  <a href={category.url} className="font-medium">
                    {category.title}
                  </a>
                </SidebarMenuButton>
                {category.items?.length ? (
                  <SidebarMenuSub>
                    {category.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <a href={item.url}>{item.title}</a>
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
