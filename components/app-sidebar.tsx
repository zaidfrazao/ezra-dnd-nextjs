import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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

const data = {
  navMain: [
    {
      title: "Admin Tools",
      url: "/tools",
      items: [
        {
          title: "Add new page",
          url: "/admin/create-wiki-page",
        },
      ],
    },
    {
      title: "Races",
      url: "/wiki/characters",
      items: [
        {
          title: "Dark Elves",
          url: "/wiki/characters/dark-elves",
        },
        {
          title: "Dragons",
          url: "/wiki/characters/dragons",
        },
        {
          title: "Dwarves",
          url: "/wiki/characters/dwarves",
        },
        {
          title: "Elves",
          url: "/wiki/characters/elves",
        },
        {
          title: "Humans",
          url: "/wiki/characters/humans",
        },
        {
          title: "Orcs",
          url: "/wiki/characters/orcs",
        },
      ],
    },
    {
      title: "Continents",
      url: "/wiki/continents",
      items: [
        {
          title: "Oloklerious",
          url: "/wiki/continents/oloklerious",
        },
        {
          title: "Alfar Saltus",
          url: "/wiki/continents/alfar-saltus",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="p-0">
        <Link href="/">
          <div className="bg-[linear-gradient(to_bottom,rgba(24,24,24,0),rgba(24,24,24,1)),url('/Logo.jpg')] bg-cover aspect-video text-white pb-24"></div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
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
                    {item.items.map((item) => (
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
